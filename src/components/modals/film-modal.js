// React
import React from 'react';
import { connect } from 'react-redux';

// Actions
import { toggleModal } from '../../actions/modal-actions';

// Components
import ReactModal from 'react-modal';
import CardCritics from '../diary/film-cards/card-critics';

// Styles
import './film-modal.css';

class FilmModal extends React.Component {
  constructor() {
    super();

    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  // Modal functions
  handleCloseModal() {
    this.props.dispatch(toggleModal(false));
  }

  render() {
    return (
      <ReactModal
        isOpen={this.props.showModal}
        contentLabel="Film information"
        onRequestClose={this.handleCloseModal}
        className="Modal"
        overlayClassName="Overlay"
        aria={{
          describedby: 'modal-describe'
        }}
      >
        <button
          onClick={this.handleCloseModal}
          style={{ display: 'block', marginLeft: 'auto' }}
        >
          Close
        </button>

        <div className="film-modal-information row">
          <div className="film-modal-poster modal-poster-column">
            <img src={this.props.modalFilm.Poster} alt="Film poster" />
          </div>

          <div className="film-modal-details modal-column">
            <ul className="modal-describe">
              {/* Title */}
              <li>
                <strong>Title: </strong>
                {this.props.modalFilm.Title}
              </li>

              {/* Year */}
              <li>
                <strong>Released: </strong>
                {this.props.modalFilm.Released}
              </li>

              {/* Genre */}
              <li>
                <strong>Genre(s): </strong>
                {this.props.modalFilm.Genre}
              </li>

              {/* Director */}
              <li>
                <strong>Director: </strong>
                {this.props.modalFilm.Director}
              </li>

              {/* Actors */}
              <li>
                <strong>Actors: </strong>
                {this.props.modalFilm.Actors}
              </li>

              {/* Runtime */}
              <li>
                <strong>Runetime: </strong>
                {this.props.modalFilm.Runtime}
              </li>

              {/* Plot */}
              <li>
                <strong>Plot: </strong>
                {this.props.modalFilm.Plot}
              </li>

              {/* Critics */}
              <li className="modal-critics">
                <strong>Ratings: </strong>
                <ul>
                  <CardCritics criticalRatings={this.props.modalFilm.Ratings} />
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </ReactModal>
    );
  }
}

const mapStateToProps = state => ({
  showModal: state.modal.showModal,
  modalFilm: state.modal.film
});

export default connect(mapStateToProps)(FilmModal);
