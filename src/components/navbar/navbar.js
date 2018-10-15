// React
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
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
      <div>
        <Link to="/">Diary</Link>
        <Link to="/search">Search</Link>
      </div>
    );
  }
  return <Link to="/login">Login</Link>;
}

const mapStateToProps = state => ({
  userSignedIn: state.auth.currentUser
});

export default connect(mapStateToProps)(Navbar);
