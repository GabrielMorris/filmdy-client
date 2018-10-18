// React
import React from 'react';
import { connect } from 'react-redux';

// Components

// Styles
import './header.css';

export function Navbar(props) {
  return (
    <header>
      <h1>Filmdy</h1>
    </header>
  );
}

const mapStateToProps = state => ({
  userSignedIn: state.auth.currentUser
});

export default connect(mapStateToProps)(Navbar);
