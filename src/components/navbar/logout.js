// React
import React from 'react';
import { connect } from 'react-redux';

// Actions
import { clearAuth } from '../../actions/auth';

// Components
// Styles

function Logout(props) {
  return (
    <button
      onClick={event => {
        console.log('logout clicked');
        props.dispatch(clearAuth());
      }}
    >
      Logout
    </button>
  );
}

export default connect()(Logout);
