import React, { Component } from "react";
import UserProfileForm from "../../UserProfileForm";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <>
        <h3>My Profile</h3>
        <UserProfileForm userId={this.props.userId} />
      </>
    );
  }
}

export default UserProfile;
