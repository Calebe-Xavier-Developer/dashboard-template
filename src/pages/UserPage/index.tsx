import React from 'react';
import { UserHeader } from '../../components/UserHeader';
import { UserMain } from '../../components/UserMain';

export const UserPage = () => {
  return (
    <div style={{ marginBottom: "30px" }}>
      <UserHeader />
      <UserMain />
    </div>
  )
}
