import React, { Component } from "react";
import { Tab, Tabs } from 'react-bootstrap';
import Accounting from '../Tabs/Accounting';
import Dances from '../Tabs/Dances';
import Grades from '../Tabs/Grades';
import Marketing from '../Tabs/Marketing';
import Purchases from '../Tabs/Purchases';
import Roles from '../Tabs/Roles';
import Students from '../Tabs/Students';
import Subscriptions from '../Tabs/Subscriptions';
import Users from '../Tabs/Users';
import "./Navigation.css";

class Navigation extends Component {

  render () {
    let content = "Content";
    let navigation;
    // ADMIN VIEW
    if (this.props.role === "admin") {
      navigation = 
        <Tabs fill defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="students" title="Students">
            <Students />
          </Tab>
          <Tab eventKey="grades" title="Grades">
            <Grades />
          </Tab>
          <Tab eventKey="dances" title="Dances">
            <Dances />
          </Tab>
          <Tab eventKey="roles" title="Roles">
            <Roles />
          </Tab>
          <Tab eventKey="users" title="Users">
            <Users />
          </Tab>
          <Tab eventKey="marketing" title="Marketing">
            <Marketing />
          </Tab>
          <Tab eventKey="accounting" title="Accounting">
            <Accounting />
          </Tab>
          <Tab eventKey="purchases" title="Purchases">
            <Purchases />
          </Tab>
          <Tab eventKey="subscriptions" title="Subscriptions">
            <Subscriptions />
          </Tab>
        </Tabs>;
    // TEACHER VIEW
    } else if (this.props.role === "teacher") {
      navigation = 
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
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
    // MARKETING VIEW
    } else if (this.props.role === "marketing") {
      navigation = 
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
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
