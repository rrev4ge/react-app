import { loadUsers } from '../../../api';

export const fetchUsers = async (component, page=1) => {
  component.setState({
    isFetching: true,
  });
  try {
    const users = await loadUsers(10, page);
    component.setState({
      users: users.results,
      isFetching: false,
      error: null,
    });
  } catch (error) {
    component.setState({
      error,
      isFetching: false,
    });
  }
};
