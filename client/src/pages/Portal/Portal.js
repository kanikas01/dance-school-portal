import React, { Component } from "react";
import Navigation from "../../components/Navigation";

class Portal extends Component {
  render () {
    return (
      <>
        <hr />
        <Navigation role={this.props.role}/>
      </>
    );
  }
}

export default Portal;