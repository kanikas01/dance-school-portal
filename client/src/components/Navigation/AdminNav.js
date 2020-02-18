import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Marketing from '../Tabs/Marketing';
import Students from '../Tabs/Students';
import UserProfile from '../Tabs/UserProfile';
import Users from '../Tabs/Users';

// ADMIN VIEW
function AdminNav({ userId }) {
  return (
    <Tabs fill defaultActiveKey="students" id="admin-tabs">
      <Tab eventKey="students" title="Students">
        <Students />
      </Tab>
      <Tab eventKey="users" title="Users">
        <Users />
      </Tab>
      <Tab eventKey="marketing" title="Marketing">
        <Marketing />
      </Tab>
      <Tab eventKey="user-profile" title="My Profile">
        <UserProfile userId={userId} />
      </Tab>
    </Tabs>
  );
}

export default AdminNav;
