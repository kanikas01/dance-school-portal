import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from "./components/Navigation";
import Header from './components/Header';
import NoMatch from './pages/NoMatch'
import Portal from './pages/Portal'
import Welcome from './pages/Welcome'

class App extends Component {
  state = {
    role: "admin"
  };
  
  render() {
    return (
      <div>
      {/* <Header /> */}
        <Container>
          <Welcome />
          <Router>
            <Switch>
              <Route exact path="/" />
              <Route exact path="/portal" component={() => (<Portal role={this.state.role} />)} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Container>
      </div>
    );
  }
}

export default App;
