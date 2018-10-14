// React
import React from 'react';
import { connect } from 'react-redux';
import requireAuth from './authentication/require-auth';

// React router
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

// Components
import FilmDiary from './diary/film-diary/film-diary';
import SearchContainer from './search/search-container';
import AuthContainer from './authentication/auth-container';
import Landing from './landing/landing';

// Styles

function App(props) {
  return appComponentBuilder(props);
}

function appComponentBuilder(props) {
  return (
    <Router>
      <main>
        {/* Diary route */}
        <Route
          exact
          path="/"
          component={props.userSignedIn ? requireAuth(FilmDiary) : Landing}
        />

        {/* Search route */}
        <Route exact path="/search" component={SearchContainer} />

        {/* Login/signup route */}
        <Route exact path="/login" component={AuthContainer} />
      </main>
    </Router>
  );
}

const mapStateToProps = state => ({
  userSignedIn: state.auth.currentUser
});

export default connect(mapStateToProps)(App);
