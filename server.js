require("dotenv").config();
const express = require("express");
const path = require("path");
const routes = require("./routes");
const db = require("./models");
const compression = require("compression");
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const usersController = require('./controllers/usersController');


passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  function(username, password, done) {
    usersController.getUser({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      // Write better validation
      if (!(user.password === password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      console.log(user);
      return done(null, user);
    });
  }
));


// Middleware
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
// app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.post('/login',
  passport.authenticate('local', { session: false,
                                   successRedirect: '/',
                                   failureRedirect: '/login?poop',
                                   failureFlash: false })
);

// Add routes, both API and view
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
