import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from "./components/Navigation";
import Header from './components/Header';
import NoMatch from './pages/NoMatch'


class App extends Component {
  render() {
    return (
      <div>
      <Header />
        <Container>
          <Navigation />
          <Router>
            <Switch>
              {/* <Route exact path="/" component={Search} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/saved" component={SavedBooks} /> 
              <Route component={NoMatch} /> */}
            </Switch>
          </Router>
        </Container>
      </div>
    );
  }
}

export default App;
