// React
import React from 'react';
import { connect } from 'react-redux';
import requireAuth from './authentication/require-auth';

import { refreshAuthToken } from '../actions/auth';

// React router
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

// Components
import Navbar from '../components/navbar/navbar';
import FilmDiary from './diary/film-diary/film-diary';
import SearchContainer from './search/search-container';
import AuthContainer from './authentication/auth-container';
import Landing from './landing/landing';

// Styles

class App extends React.Component {
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

  appComponentBuilder(props) {
    return (
      <Router>
        <div>
          <Navbar />
          <main>
            {/* Diary route */}
            <Route
              exact
              path="/"
              component={props.userSignedIn ? requireAuth(FilmDiary) : Landing}
            />
            {/* <PrivateRoute path="/diary" component={FilmDiary} /> */}

            {/* Search route */}
            <Route
              exact
              path="/search"
              component={
                props.userSignedIn
                  ? requireAuth(SearchContainer)
                  : AuthContainer
              }
            />

            {/* Login/signup route */}
            <Route exact path="/login" component={AuthContainer} />
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
