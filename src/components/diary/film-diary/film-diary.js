// React
import React from 'react';
import { connect } from 'react-redux';

// Components
import Card from '../film-cards/card';
import Grid from 'react-css-grid';
import FilmDiarySearch from './film-diary-search';
import LazyHero from 'react-lazy-hero';

// Actions
import { fetchDiaryFilms } from '../../../actions/diary-actions';
import { clearSearchResults } from '../../../actions/search-actions';

// Styles
import './film-diary.css';

export class FilmDiary extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDiaryFilms(this.props.token, this.props.userID));
    this.props.dispatch(clearSearchResults());
  }

  // Function for generating all the cards
  generateFilmCards() {
    console.log(this.props.filteredDiaryFilms);

    return this.props.filteredDiaryFilms.map(film => {
      return (
        <Card key={film.diaryID} film={film} history={this.props.history} />
      );
    });
  }

  render() {
    return (
      <div>
        <LazyHero
          color="#546e7a"
          className="diary-hero"
          minHeight="7vh"
          opacity="1"
          style={{
            color: '#ffffff'
          }}
        >
          <div className="hero-path">
            <h1>Diary</h1>
          </div>
        </LazyHero>

        <FilmDiarySearch userID={this.props.userID} token={this.props.token} />

        <ul>
          <Grid width={384} gap={16} className="diary-grid">
            {this.generateFilmCards()}
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
  // searchFilms: state.diary.searchFilms,
  userID: state.auth.currentUser.id,
  token: state.auth.authToken
});

export default connect(mapStateToProps)(FilmDiary);
