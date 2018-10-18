// React
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import Logout from './logout';

// Styles
import './navbar.css';

export function Navbar(props) {
  return (
    <nav>
      {/* Header */}
      <Link to="/">
        {' '}
        <h1>Filmdy</h1>
      </Link>
      {/* Navbar buttons */}
      {generateNavbarLinks(props)}
    </nav>
  );
}

function generateNavbarLinks(props) {
  if (props.userSignedIn) {
    return (
      <nav>
        <Link to="/">Diary</Link>
        <Link to="/search">Search</Link>
        <Logout />
      </nav>
    );
  }
  return (
    <nav>
      <Link to="/login">Login</Link>
    </nav>
  );
}

const mapStateToProps = state => ({
  userSignedIn: state.auth.currentUser
});

export default connect(mapStateToProps)(Navbar);
