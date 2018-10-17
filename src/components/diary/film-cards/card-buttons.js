// React
import React from 'react';
import { connect } from 'react-redux';

// Actions
import {
  removeFilmFromDiary,
  fetchDiaryFilms,
  toggleFilmLiked
} from '../../../actions/diary-actions';

// Components

// Styles
import './card-buttons.css';

class CardButton extends React.Component {
  toggleFilmLikedStatus() {
    console.log('like clicked');
    const { token, userID, imdbID } = this.extractArgsFromProps();

    this.props.dispatch(toggleFilmLiked(imdbID, userID, token));
  }

  generateLikeButtons(props) {
    // Like
    if (!props.rating) {
      return <button onClick={() => this.toggleFilmLikedStatus()}>Like</button>;
    }

    // Dislike
    return (
      <button onClick={() => this.toggleFilmLikedStatus()}>Dislike</button>
    );
  }

  extractArgsFromProps() {
    return {
      token: this.props.token,
      userID: this.props.userID,
      imdbID: this.props.film.imdbID
    };
  }

  render() {
    return (
      <div className="card-buttons-container">
        <button
          onClick={event => {
            console.log('unwatch button clicked');

            const { token, userID, imdbID } = this.extractArgsFromProps();

            this.props.dispatch(removeFilmFromDiary(imdbID, userID, token));
            this.props.dispatch(fetchDiaryFilms(token, userID));
          }}
        >
          Unwatch
        </button>

        {this.generateLikeButtons(this.props)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userID: state.auth.currentUser.id,
  token: state.auth.authToken,
  showModal: state.modal.showModal,
  modalFilm: state.modal.film
});

export default connect(mapStateToProps)(CardButton);
