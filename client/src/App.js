import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Welcome from "./pages/Welcome";
import Header from "./components/Header";

class App extends Component {
  state = {
    role: "admin"
  };

  render() {
    return (
      <>
        <Header />
        <Container className="p-0">
          <Router>
            <Switch>
              <Route exact path="/portal" component={Welcome} />
              {/* <Route exact path="/login" component={Login} /> */}
              {/* <Route exact path="/portal" component={() => (<Portal role={this.state.role} />)} /> */}
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Container>
      </>
    );
  }
}

export default App;
