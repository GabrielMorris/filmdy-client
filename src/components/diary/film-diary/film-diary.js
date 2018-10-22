// React
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Actions
import { fetchDiaryFilms } from '../../../actions/diary-actions';
import { clearSearchResults } from '../../../actions/search-actions';

// Components
import Card from '../film-cards/card';
import Grid from 'react-css-grid';
import FilmDiarySearch from './film-diary-search';
import LazyHero from 'react-lazy-hero';

// Styles
import './film-diary.css';

export class FilmDiary extends React.Component {
  componentDidMount() {
    // When the component mounts we will want to fetch that user's diary films
    this.props.dispatch(fetchDiaryFilms(this.props.token));
    // We will also want to clear search results so navigating search -> diary -> search doesn't display their previous search results
    this.props.dispatch(clearSearchResults());
  }

  // Function for generating all the cards
  generateFilmCards() {
    // Map the filtered array and create a card component for each film object
    return this.props.filteredDiaryFilms.map(film => {
      return (
        <Card key={film.diaryID} film={film} history={this.props.history} />
      );
    });
  }

  // If the user doesn't have any films in their diary (ex: new user) we will gently nudge them towards the search page
  generateEmptyDiaryMessage() {
    if (this.props.diaryFilms.length === 0) {
      return (
        <div className="empty-diary-message">
          Get started by{' '}
          <Link to="/search">searching for some films to add!</Link>
        </div>
      );
    }
  }

  generateDiarySearch() {
    if (!this.props.diaryFilms.length === 0) {
      return <FilmDiarySearch token={this.props.token} />;
    }
  }

  render() {
    return (
      <div>
        <LazyHero
          color="#546e7a"
          className="diary-hero"
          minHeight="7vh"
          opacity={1}
          style={{
            color: '#ffffff'
          }}
        >
          <div className="hero-path">
            <h1>Diary</h1>
          </div>
        </LazyHero>

        {this.generateDiarySearch()}

        <ul>
          <Grid width={384} gap={16} className="diary-grid">
            {this.generateFilmCards()}
            {this.generateEmptyDiaryMessage()}
          </Grid>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.diary.error,
  diaryFilms: state.diary.diaryFilms,
  filteredDiaryFilms: state.diary.filteredDiaryFilms,
  token: state.auth.authToken
});

export default connect(mapStateToProps)(FilmDiary);
