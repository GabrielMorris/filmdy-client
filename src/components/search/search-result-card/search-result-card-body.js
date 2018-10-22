// React
import React from 'react';
import { connect } from 'react-redux';

// Actions
import {
  addFilmToDiary,
  removeFilmFromDiary,
  fetchDiaryFilms
} from '../../../actions/diary-actions';

// Components

// Styles
import './search-result-card-body.css';

class SearchResultCardBody extends React.Component {
  addFilmToDiary() {
    const { imdbID, token } = this.extractDiaryActionKeys();

    this.props.dispatch(addFilmToDiary(imdbID, token));
  }

  removeFilmFromDiary() {
    console.log('removing from diary');
    const { imdbID, token } = this.extractDiaryActionKeys();

    this.props.dispatch(removeFilmFromDiary(imdbID, token));
    this.props.dispatch(fetchDiaryFilms(token));
  }

  extractDiaryActionKeys() {
    return {
      imdbID: this.props.film.imdbID,
      token: this.props.token,
      userID: this.props.userID
    };
  }

  onClick(event) {
    console.log('watched button clicked');
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
          {this.props.watched ? 'Unwatch!' : 'Watched!'}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userID: state.auth.currentUser.id,
  token: state.auth.authToken
});

export default connect(mapStateToProps)(SearchResultCardBody);
