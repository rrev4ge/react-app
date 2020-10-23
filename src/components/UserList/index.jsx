import React, { Component } from 'react';
import _ from 'lodash';
import { renderUsersButton } from './UsersLocalStorage/index';
import styles from './UserList.module.css';
import SelectedUserList, { SavedUserList } from './SelectedUserList';
import { toggleItemInArray } from '../../utils';
import { pagination } from '../Pagination/index';
import { RenderUserList } from './RenderUserList/index';
import { fetchUsers } from './FetchUsers/index';
import classNames from 'classnames';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedUsers: [],
      isFetching: false,
      error: null,
    };
  }

  async componentDidMount() {
    fetchUsers(this);
    SavedUserList(this);
  }

  handleSelect = (newUser) => {
    const { selectedUsers } = this.state;
    const foundUser = _.find(selectedUsers, newUser);
    this.setState({
      selectedUsers: toggleItemInArray(selectedUsers, foundUser || newUser),
    });
  };

  render() {
    const listStyles = classNames(styles.userList);
    const { isFetching, error, selectedUsers, users } = this.state;
    return (
      <div>
        {pagination(10, this)}
        {renderUsersButton(this.state.selectedUsers, 'Save Selected users')}
        {renderUsersButton(this.state.users, 'Save users')}
        <div className={styles.listContainer}>
          <section className={listStyles}>
            <h1>User List</h1>
            <RenderUserList
              users={users}
              selectedUsers={selectedUsers}
              handleSelect={this.handleSelect}
              error={error}
              isFetching={isFetching}
            />
          </section>
          <section className={listStyles}>
            <h1>Selected Users List</h1>
            <SelectedUserList
              handleSelect={this.handleSelect}
              users={selectedUsers}
            />
          </section>
        </div>
      </div>
    );
  }
}
export default UserList;
