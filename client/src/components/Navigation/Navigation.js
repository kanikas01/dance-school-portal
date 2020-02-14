import React from 'react';
import UserProfile from '../Tabs/UserProfile';
import './Navigation.css';
import AdminNav from './AdminNav';
import TeacherNav from './TeacherNav';
import MarketingNav from './MarketingNav';
import CustomerSupportNav from './CustomerSupportNav';

function Navigation(props) {
  let role = props.role;
  let userId = props.userId;
  let navigation;

  switch (role) {
    case 'admin':
      navigation = <AdminNav userId={userId} />;
      break;
    case 'teacher':
      navigation = <TeacherNav userId={userId} />;
      break;
    case 'student':
      navigation = <UserProfile userId={userId} />;
      break;
    case 'marketing':
      navigation = <MarketingNav userId={userId} />;
      break;
    case 'customer support':
      navigation = <CustomerSupportNav userId={userId} />;
      break;
    default:
      break;
  }

  return <div className="portal-nav">{navigation}</div>;
}

export default Navigation;
