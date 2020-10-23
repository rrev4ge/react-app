import React from 'react';
import UserCard from '../UserCard';
import { userListError } from './../../Errors/index';
import { Loader } from './../../Loader/index';

export const RenderUserList = (props) => {
  const { users, selectedUsers, isFetching, error, handleSelect } = props;

  return isFetching ? (
    <Loader />
  ) : (
      <>
      {error && userListError(error)}
      {users.map((user) => (<UserCard
        key={user.login.uuid}
        isSelected={Boolean(
          selectedUsers.find(
            (currentUser) => currentUser.login.uuid === user.login.uuid
          )
        )}
        handleSelect={handleSelect}
        user={user}
      />))}
      </>)
};
