import React, { Component,  } from "react";
import UserProfileForm from '../UserProfileForm';

class UserGrades extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h3>User Grades</h3>
        <UserProfileForm userId={this.props.userId}/>
      </>
    );
  }
}



export default UserGrades;
