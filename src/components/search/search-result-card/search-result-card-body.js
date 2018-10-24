// React
import React from 'react';
import { connect } from 'react-redux';

// Actions
import {
  addFilmToDiary,
  removeFilmFromDiary,
  fetchDiaryFilms
} from '../../../actions/diary-actions';

// Styles
import './search-result-card-body.css';

export class SearchResultCardBody extends React.Component {
  // Handle adding films to a user's diary
  addFilmToDiary() {
    const { imdbID, token } = this.extractDiaryActionKeys();
    this.props.dispatch(addFilmToDiary(imdbID, token));
  }

  // Handle removing a film from a user's diary
  removeFilmFromDiary() {
    const { imdbID, token } = this.extractDiaryActionKeys();
    this.props.dispatch(removeFilmFromDiary(imdbID, token));
    this.props.dispatch(fetchDiaryFilms(token));
  }

  // Function extracting keys from props
  extractDiaryActionKeys() {
    return {
      imdbID: this.props.film.imdbID,
      token: this.props.token
    };
  }

  // Handle watch button clicked
  onClick(event) {
    !this.props.watched ? this.addFilmToDiary() : this.removeFilmFromDiary();
  }

  render() {
    return (
      <div>
        <h2 className="search-card-header" onClick={this.props.onClick}>
          {this.props.film.Title}
        </h2>
        <button
          className="watched-button"
          aria-label={`Search result film watched button status: ${
            this.props.watched
              ? 'film seen, click to unwatch'
              : 'film not seen, click to watch'
          }`}
          onClick={event => this.onClick(event)}
        >
          {this.props.watched ? 'Unwatch!' : 'Add to diary'}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.authToken
});

export default connect(mapStateToProps)(SearchResultCardBody);
