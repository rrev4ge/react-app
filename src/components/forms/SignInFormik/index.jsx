import { Formik, Form, Field, ErrorMessage, } from 'formik';
import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './SignInFormik.module.css';
import { mdiAccountCircle } from '@mdi/js';


const SignInForm = (props) => {
  const initialValues = {
    email: '',
    password: '',
    login: '',
    errors: null,
  };

  return (
    <Formik initialValues={initialValues}>
      <Form className={styles.container}>
        <mdiAccountCircle />
        <div>Username or email address</div>
        <Field name='login' type='text' />
        <ErrorMessage name='login' component='div' />
        <div>
          Password{' '}
          <a href='https://github.com/password_reset'>Forgot password?</a>
        </div>

        <Field name='password' type='password' />
        <ErrorMessage name='password' component='div' />
        <Field type='submit' value='Sign in' />
      </Form>
    </Formik>
  );
};

export default SignInForm;
