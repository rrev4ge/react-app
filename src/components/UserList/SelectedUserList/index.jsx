import React from 'react';
import UserCard from '../UserCard';
import CONSTANTS from '../../../CONSTANTS';

const SelectedUserList = props => {
  const { users, handleSelect } = props;
  console.log(users)
  return users.map(user => (
    <UserCard user={user} key={user.login.uuid} handleSelect={handleSelect} />
  ));
};

export const SavedUserList = component => {
  const parsedUsers = JSON.parse(
    localStorage.getItem(CONSTANTS.SELECTED_USERS_KEY)
  );
  component.setState({
    selectedUsers: parsedUsers || [],
  });
};

export default SelectedUserList;
