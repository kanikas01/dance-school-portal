import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Students from '../Tabs/Students';
import UserProfile from '../Tabs/UserProfile';

// TEACHER VIEW
function TeacherNav({ userId }) {
  return (
    <Tabs
      fill
      defaultActiveKey="students"
      id="teacher-tabs"
      unmountOnExit={true}
    >
      <Tab eventKey="students" title="Students">
        <Students />
      </Tab>
      <Tab eventKey="user-profile" title="My Profile">
        <UserProfile userId={userId} />
      </Tab>
    </Tabs>
  );
}

export default TeacherNav;
