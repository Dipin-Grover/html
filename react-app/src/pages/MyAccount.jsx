import React from 'react';
import AccountLayout from '../components/myAccount/AccountLayout';
import OrderList from '../components/myAccount/OrderList';

const MyAccount = () => {
  return (
    <AccountLayout>
      <OrderList />
    </AccountLayout>
  );
};

export default MyAccount;
