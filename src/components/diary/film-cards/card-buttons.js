// React
import React from 'react';
import { connect } from 'react-redux';

// Actions
import {
  removeFilmFromDiary,
  fetchDiaryFilms,
  toggleFilmLiked
} from '../../../actions/diary-actions';

import { toggleModal } from '../../../actions/modal-actions';

// Components
import ReactModal from 'react-modal';

// Styles
import './card-buttons.css';

class CardButton extends React.Component {
  constructor() {
    super();

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  // Modal functions
  handleOpenModal() {
    const { imdbID } = this.extractArgsFromProps();

    this.props.dispatch(toggleModal(true, imdbID));
  }

  handleCloseModal() {
    this.props.dispatch(toggleModal(false));
  }
  ////////

  toggleFilmLikedStatus() {
    console.log('like clicked');

    const { token, userID, imdbID } = this.extractArgsFromProps();

    this.props.dispatch(toggleFilmLiked(imdbID, userID, token));
  }

  generateLikeButtons(props) {
    // Like
    if (!props.rating) {
      return (
        <button onClick={event => this.toggleFilmLikedStatus()}>Like</button>
      );
    }

    // Dislike
    return (
      <button onClick={event => this.toggleFilmLikedStatus()}>Dislike</button>
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

        {/* Modal TODO: move this into its own component or some such */}
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
        <ReactModal
          isOpen={this.props.showModal}
          contentLabel="Film information"
        >
          <button onClick={this.handleCloseModal}>Close Modal</button>

          <div className="film-modal-information">
            <div className="film-modal-poster">
              <img src={this.props.modalFilm.Poster} alt="Film poster" />
            </div>

            <div className="film-modal-details">
              <ul>
                {/* Title */}
                <li>
                  <strong>Title: </strong>
                  {this.props.modalFilm.Title}
                </li>
                <li>
                  {/* Year */}
                  <strong>Released: </strong>
                  {this.props.modalFilm.Released}
                </li>
                <li>
                  {/* Genre */}
                  <strong>Genre(s): </strong>
                  {this.props.modalFilm.Genre}
                </li>
                <li>
                  {/* Director */}
                  <strong>Director: </strong>
                  {this.props.modalFilm.Director}
                </li>
                <li>
                  {/* Actors */}
                  <strong>Actors: </strong>
                  {this.props.modalFilm.Actors}
                </li>
                <li>
                  {/* Runtime */}
                  <strong>Runetime: </strong>
                  {this.props.modalFilm.Runtime}
                </li>
                <li>
                  {/* Plot */}
                  <strong>Plot: </strong>
                  {this.props.modalFilm.Plot}
                </li>
              </ul>
            </div>
          </div>
        </ReactModal>

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
