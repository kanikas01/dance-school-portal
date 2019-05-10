import React, { Component } from "react";
import { Tab, Tabs } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
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
    let content = "Content"
    let navigation = 
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="dances" title="Dances">
          <Dances />
        </Tab>
        <Tab eventKey="students" title="Students">
          <Students />
        </Tab>
        <Tab eventKey="grades" title="Grades">
          <Grades />
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
      </Tabs>
    return (
      <div>
        {navigation}
      </div>
    );
  }
}

export default Navigation;