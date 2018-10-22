// React
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Styles
import './header.css';

export function Navbar(props) {
  return (
    <header role="banner">
      <Link to="/">
        <h1>Filmdy</h1>
      </Link>
    </header>
  );
}

const mapStateToProps = state => ({
  userSignedIn: state.auth.currentUser
});

export default connect(mapStateToProps)(Navbar);
