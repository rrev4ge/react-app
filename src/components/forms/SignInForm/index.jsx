import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SignInForm.module.css';
import { classNames } from 'classnames';

class SignInForm extends Component {
  state = {
    values: {
      email: '',
      password: '',
      login: '',
      
    },
    errors: null,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  validateSubmit = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'This is required field';
    }
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    void this.setState({
      [name]: value,
    });
  };

  render() {
    const { login, email, password } = this.state;
    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <input
          value={login}
          onChange={this.handleChange}
          name='login'
          type='text'
        />
        <input
          value={email}
          onChange={this.handleChange}
          name='email'
          type='text'
        />
        <input
          value={password}
          onChange={this.handleChange}
          name='password'
          type='password'
        />
        <input type='submit' />
      </form>
    );
  }
}

SignInForm.propTypes = {};

export default SignInForm;
