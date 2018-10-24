// React
import React from 'react';
import { connect } from 'react-redux';
import requireAuth from './authentication/require-auth';

// Actions
import { refreshAuthToken, storeAuthInfo, clearAuth } from '../actions/auth';
import { loadAuthToken, clearAuthToken } from '../local-storage';
import { action as toggleMenu } from 'redux-burger-menu';

// React router
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Components
import Header from './header/header';
import FilmDiary from './diary/film-diary/film-diary';
import SearchContainer from './search/search-container';
import AuthContainer from './authentication/auth-container';
import Landing from './landing/landing';
import Modal from 'react-modal';
import NoMatch from './no-match';
import Menu from './header/menu/menu';

// Styles
import './app.css';

Modal.setAppElement('#root');

class App extends React.Component {
  /* === Periodly trigger JWT refreshes === */
  componentDidMount() {
    const authToken = loadAuthToken();

    if (authToken) {
      storeAuthInfo(authToken, this.props.dispatch);
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  /* === Functions for periodly refreshing the JWT auth token === */
  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  dispatchMenuToggle() {
    this.props.dispatch(toggleMenu());
  }

  // Function for generating hamburger menu code
  generateMenu() {
    // If we're signed in generate the menu for signed in users
    if (this.props.userSignedIn) {
      return (
        <Menu>
          <Link
            to="/"
            className="menu-item"
            onClick={() => this.dispatchMenuToggle()}
          >
            Diary
          </Link>

          <Link
            to="/search"
            className="menu-item"
            onClick={() => this.dispatchMenuToggle()}
          >
            Search
          </Link>

          <Link
            to="/"
            className="menu-item"
            onClick={event => {
              this.props.dispatch(clearAuth());
              clearAuthToken();
              this.dispatchMenuToggle();
            }}
          >
            Logout
          </Link>
        </Menu>
      );
    }
    // Otherwise render the signed out user menu
    return (
      <nav role="navigation">
        <Menu>
          <Link
            to="/"
            className="menu-item"
            onClick={() => this.dispatchMenuToggle()}
          >
            Home
          </Link>
          <Link
            to="/login"
            className="menu-item"
            onClick={() => this.dispatchMenuToggle()}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="menu-item"
            onClick={() => this.dispatchMenuToggle()}
          >
            Signup
          </Link>
        </Menu>
      </nav>
    );
  }

  // Logic for building the App.js render logic with routing
  appComponentBuilder(props) {
    return (
      <Router>
        <div>
          {/* Menu */}
          {this.generateMenu()}

          {/* Header */}
          <Header />

          {/* Main */}
          <main id="page-wrap" role="main">
            <Switch>
              {/* Diary route */}
              <Route
                path="/"
                exact
                component={
                  props.userSignedIn ? requireAuth(FilmDiary) : Landing
                }
              />

              {/* Search route */}
              <Route
                path="/search"
                exact
                component={
                  props.userSignedIn
                    ? requireAuth(SearchContainer)
                    : AuthContainer
                }
              />

              {/* Login route */}
              <Route path="/login" exact component={AuthContainer} />

              {/* Signup route */}
              <Route path="/signup" exact component={AuthContainer} />

              {/* 404 handling */}
              <Route component={NoMatch} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }

  render() {
    return this.appComponentBuilder(this.props);
  }
}

const mapStateToProps = state => ({
  userSignedIn: state.auth.currentUser
});

export default connect(mapStateToProps)(App);
