// React
import React from 'react';

// Components
import Login from './login';
import Signup from './signup';

// Styles

export default function AuthContainer(props) {
  return (
    <div>
      <Login />
      <Signup />
    </div>
  );
}
