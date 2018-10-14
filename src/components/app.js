// React
import React from 'react';
import { connect } from 'react-redux';

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
  if (!props.userSignedIn) {
    // Return landing
    return (
      <Router>
        <main>
          {/* Landing route */}
          <Route exact path="/" component={Landing} />

          {/* Search route */}
          <Route exact path="/search" component={SearchContainer} />

          {/* Login/signup route */}
          <Route exact path="/login" component={AuthContainer} />
        </main>
      </Router>
    );
  }
  // Else return everything
  return (
    <Router>
      <main>
        {/* Diary route */}
        <Route exact path="/" component={FilmDiary} />

        {/* Search route */}
        <Route exact path="/search" component={SearchContainer} />

        {/* Login/signup route */}
        <Route exact path="/login" component={AuthContainer} />
      </main>
    </Router>
  );
}

const mapStateToProps = state => ({
  userSignedIn: state.diary.userSignedIn,
  userID: state.diary.userID
});

export default connect(mapStateToProps)(App);
