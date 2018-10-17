// React
import React from 'react';
import { connect } from 'react-redux';
import { API_KEY } from '../../../config';

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
    const { imdbID, token, userID } = this.extractDiaryActionKeys();

    this.props.dispatch(addFilmToDiary(imdbID, userID, token));
  }

  removeFilmFromDiary() {
    console.log('removing from diary');
    const { imdbID, token, userID } = this.extractDiaryActionKeys();

    this.props.dispatch(removeFilmFromDiary(imdbID, userID, token));
    this.props.dispatch(fetchDiaryFilms(token, userID));
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
