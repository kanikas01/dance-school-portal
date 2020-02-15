import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
// import Accounting from '../Tabs/Accounting';
import Dances from '../Tabs/Dances';
import Grades from '../Tabs/Grades';
import Marketing from '../Tabs/Marketing';
// import Orders from '../Tabs/Orders';
// import Roles from '../Tabs/Roles';
import Students from '../Tabs/Students';
// import Products from '../Tabs/Products';
// import UserGrades from '../Tabs/UserGrades';
import UserProfile from '../Tabs/UserProfile';
import Users from '../Tabs/Users';

// ADMIN VIEW
function AdminNav({ userId }) {
  return (
    <Tabs fill defaultActiveKey="students" id="admin-tabs" unmountOnExit={true}>
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
        <UserProfile userId={userId} />
      </Tab>
    </Tabs>
  );
}

export default AdminNav;
