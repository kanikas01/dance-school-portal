import React, { Component } from "react";
import { Tab, Tabs } from 'react-bootstrap';
import Accounting from '../Tabs/Accounting';
import Dances from '../Tabs/Dances';
import Grades from '../Tabs/Grades';
import Marketing from '../Tabs/Marketing';
import Orders from '../Tabs/Orders';
import Roles from '../Tabs/Roles';
import Students from '../Tabs/Students';
import Products from '../Tabs/Products';
import UserGrades from '../Tabs/UserGrades';
import UserProfile from '../Tabs/UserProfile';
import Users from '../Tabs/Users';
import "./Navigation.css";

class Navigation extends Component {

  render () {
    let role = this.props.role;
    let navigation;

    // ADMIN VIEW
    if (role === "admin") {
      navigation = 
        <Tabs 
          fill
          defaultActiveKey="students" 
          id="admin-tabs"
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
          <Tab eventKey="users" title="Users">
            <Users />
          </Tab>
          {/* <Tab eventKey="roles" title="Roles">
            <Roles />
          </Tab> */}
          <Tab eventKey="marketing" title="Marketing">
            <Marketing />
          </Tab>
          {/* <Tab eventKey="accounting" title="Accounting">
            <Accounting />
          </Tab>
          <Tab eventKey="orders" title="Orders">
            <Orders />
          </Tab>
          <Tab eventKey="products" title="Products">
            <Products />
          </Tab> */}
          <Tab eventKey="user-profile" title="My Profile">
            <UserProfile userId={this.props.userId} />
          </Tab>
        </Tabs>;
    } 
    
    // TEACHER VIEW
    else if (role === "teacher") {
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
          <Tab eventKey="user-profile" title="My Profile">
            <UserProfile userId={this.props.userId} />
          </Tab>
        </Tabs>;
    } 

    // STUDENT VIEW
    else if (role === "student") {
      navigation = (
        <UserProfile userId={this.props.userId} />
      ); 
    }

    // MARKETING VIEW
    else if (role === "marketing") {
      navigation = 
        <Tabs 
          fill
          defaultActiveKey="marketing" 
          id="marketing-tabs"
          unmountOnExit={true}>
          <Tab eventKey="marketing" title="Marketing">
            <Marketing />
          </Tab>
          <Tab eventKey="user-profile" title="My Profile">
            <UserProfile userId={this.props.userId} />
          </Tab>
        </Tabs>;
    }

    // CUSTOMER SUPPORT VIEW
    else if (role === "customer support") {
      navigation = 
        <Tabs 
          fill
          defaultActiveKey="students" 
          id="customer-support-tabs"
          unmountOnExit={true}>
          <Tab eventKey="students" title="Students">
            <Students />
          </Tab>
          <Tab eventKey="orders" title="Orders">
            <Orders />
          </Tab>
          <Tab eventKey="products" title="Products">
            <Products />
          </Tab>
          <Tab eventKey="user-profile" title="My Profile">
            <UserProfile userId={this.props.userId} />
          </Tab>
        </Tabs>;
    }
    return (
      <div className="portal-nav">
        {navigation}
      </div>
    );
  }
}

export default Navigation;
