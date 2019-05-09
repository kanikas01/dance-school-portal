import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from "./components/Navigation";
import Header from './components/Header'


class App extends Component {
  render() {
    return (
      <div>
      <Header />
        <Container>
          <Navigation />
          <Router>
            <div>
              <Switch>
                {/* <Route exact path="/" component={Search} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/saved" component={SavedBooks} />
                <Route component={NoMatch} /> */}
              </Switch>
            </div>
          </Router>
        </Container>
      </div>
    );
  }
}

export default App;
