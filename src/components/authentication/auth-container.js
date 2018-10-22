// React
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// Components
import Login from './login';
import Signup from './signup';

export function AuthContainer(props) {
  // If a user is signed in and tries to load an auth page we'll redirect them to the diary
  if (props.loggedIn) {
    return <Redirect to="/" />;
  }

  // If they are logged out and on /login we'll give them the login component
  if (props.match.path === '/login') {
    return (
      <div>
        <Login />
      </div>
    );
  }

  // Otherwise we'll give them the signup component
  return (
    <div>
      <Signup />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(AuthContainer);
