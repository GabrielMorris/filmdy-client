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
import FilmModal from '../../modals/film-modal';

// Styles
import './card-buttons.css';

export class CardButton extends React.Component {
  // Function for toggling a film's liked status
  toggleFilmLikedStatus() {
    const { token, imdbID } = this.extractArgsFromProps();

    this.props.dispatch(toggleFilmLiked(imdbID, token));
  }

  // Function for generating like/dislike buttons based on ratings prop
  generateLikeButtons(props) {
    // Like
    if (!props.rating) {
      return (
        <button
          className="like-button"
          onClick={() => this.toggleFilmLikedStatus()}
        >
          Like
        </button>
      );
    }

    // Dislike
    return (
      <button
        className="dislike-button"
        onClick={() => this.toggleFilmLikedStatus()}
      >
        Dislike
      </button>
    );
  }

  // Lets us destructure props dynamically
  extractArgsFromProps() {
    return {
      token: this.props.token,
      imdbID: this.props.film.imdbID
    };
  }

  render() {
    return (
      <div className="card-buttons-container">
        {/* Modal */}
        <FilmModal />

        <button
          onClick={event => {
            const { token, imdbID } = this.extractArgsFromProps();

            this.props.dispatch(removeFilmFromDiary(imdbID, token));
            this.props.dispatch(fetchDiaryFilms(token));
          }}
        >
          Unwatch
        </button>

        <button onClick={() => this.props.handleOpenModal()}>Details</button>

        {this.generateLikeButtons(this.props)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.authToken,
  showModal: state.modal.showModal,
  modalFilm: state.modal.film
});

export default connect(mapStateToProps)(CardButton);
