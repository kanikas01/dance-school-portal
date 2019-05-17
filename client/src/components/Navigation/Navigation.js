import React, { Component } from "react";
import { Tab, Tabs } from 'react-bootstrap';
import Accounting from '../Tabs/Accounting';
import Dances from '../Tabs/Dances';
import Grades from '../Tabs/Grades';
import Marketing from '../Tabs/Marketing';
import Orders from '../Tabs/Orders';
import Roles from '../Tabs/Roles';
import Students from '../Tabs/Students';
import Subscriptions from '../Tabs/Subscriptions';
import Users from '../Tabs/Users';
import "./Navigation.css";

class Navigation extends Component {

  render () {
    let navigation;

    // ADMIN VIEW
    if (this.props.role === "admin") {
      navigation = 
        <Tabs 
          fill 
          defaultActiveKey="students" 
          id="admin-tabs">
          <Tab eventKey="students" title="Students">
            <Students />
          </Tab>
          <Tab eventKey="grades" title="Grades" unmountOnExit={true}>
            <Grades />
          </Tab>
          <Tab eventKey="dances" title="Dances">
            <Dances />
          </Tab>
          <Tab eventKey="users" title="Users" unmountOnExit={true}>
            <Users />
          </Tab>
          <Tab eventKey="roles" title="Roles">
            <Roles />
          </Tab>
          <Tab eventKey="marketing" title="Marketing" unmountOnExit={true}>
            <Marketing />
          </Tab>
          <Tab eventKey="accounting" title="Accounting">
            <Accounting />
          </Tab>
          <Tab eventKey="orders" title="Orders">
            <Orders />
          </Tab>
          <Tab eventKey="subscriptions" title="Subscriptions">
            <Subscriptions />
          </Tab>
        </Tabs>;
    } 
    
    // TEACHER VIEW
    else if (this.props.role === "teacher") {
      navigation = 
        <Tabs 
          fill 
          defaultActiveKey="students" 
          id="teacher-tabs"
          unmountOnExit={true}>
          <Tab eventKey="students" title="Students">
            <Students />
          </Tab>
          <Tab eventKey="grades" title="Grades">
            <Grades />
          </Tab>
          <Tab eventKey="dances" title="Dances">
            <Dances />
          </Tab>
        </Tabs>;
    } 

    // STUDENT VIEW
    else if (this.props.role === "student") {
      navigation = 
        <Tabs 
          fill 
          defaultActiveKey="profile" 
          id="student-tabs"
          unmountOnExit={true}>
          <Tab eventKey="profile" title="My Profile">
            <Students />
          </Tab>
          <Tab eventKey="grades" title="My Grades">
            <Grades />
          </Tab>
        </Tabs>;
    
    }

    // MARKETING VIEW
    else if (this.props.role === "marketing") {
      navigation = 
        <Tabs 
          fill 
          defaultActiveKey="marketing" 
          id="marketing-tabs"
          unmountOnExit={true}>
          <Tab eventKey="marketing" title="Marketing">
            <Marketing />
          </Tab>
        </Tabs>;
    }
    return (
      <div>
        {navigation}
      </div>
    );
  }
}

export default Navigation;
