import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Orders from '../Tabs/Orders';
import Students from '../Tabs/Students';
import Products from '../Tabs/Products';
import UserProfile from '../Tabs/UserProfile';

// CUSTOMER SUPPORT VIEW
function CustomerSupportNav({ userId }) {
  return (
    <Tabs fill defaultActiveKey="students" id="customer-support-tabs">
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
        <UserProfile userId={userId} />
      </Tab>
    </Tabs>
  );
}

export default CustomerSupportNav;
