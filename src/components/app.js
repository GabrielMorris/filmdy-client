// React
import React from 'react';

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

// Styles

export default function App(props) {
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
