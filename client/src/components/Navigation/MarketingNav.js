import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Marketing from '../Tabs/Marketing';
import UserProfile from '../Tabs/UserProfile';

// MARKETING VIEW
function MarketingNav({ userId }) {
  return (
    <Tabs
      fill
      defaultActiveKey="marketing"
      id="marketing-tabs"
      unmountOnExit={true}
    >
      <Tab eventKey="marketing" title="Marketing">
        <Marketing />
      </Tab>
      <Tab eventKey="user-profile" title="Profile">
        <UserProfile userId={userId} />
      </Tab>
    </Tabs>
  );
}

export default MarketingNav;
