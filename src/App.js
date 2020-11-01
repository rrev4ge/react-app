import React, { Component } from 'react';
import { loadPosts, loadUsers } from './api';
import './App.css';
import Timer from './components/Timer/index';
class App extends Component {
  render() {
    return (
      <>
        {/* <UserList /> */}
        <Timer />
      </>
    );
  }
}

export default App;
