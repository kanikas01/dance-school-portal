import React, { Component } from "react";
import Navigation from "../../components/Navigation";

class Portal extends Component {
  render () {
    return (
      <>
        <h5>{this.props.role}</h5>
        <Navigation role={this.props.role}/>
      </>
    );
  }
}

export default Portal;