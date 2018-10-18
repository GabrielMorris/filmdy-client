// React
import React from 'react';
import { connect } from 'react-redux';
import requireAuth from './authentication/require-auth';

import { refreshAuthToken, storeAuthInfo } from '../actions/auth';
import { loadAuthToken } from '../local-storage';

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
import Modal from 'react-modal';
import NoMatch from './no-match';

// Styles
import './app.css';

Modal.setAppElement('#root');

class App extends React.Component {
  componentDidMount() {
    const authToken = loadAuthToken();

    if (authToken) {
      console.log('authtoken in local storage');
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
          <header>
            <Navbar />
          </header>

          <main>
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

              {/* Login/signup route */}
              <Route path="/login" exact component={AuthContainer} />

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
