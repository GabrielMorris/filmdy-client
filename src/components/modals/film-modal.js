// React
import React from 'react';
import { connect } from 'react-redux';

// Actions
import { toggleModal } from '../../actions/modal-actions';

// Components
import ReactModal from 'react-modal';

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
        className="Modal"
        overlayClassName="Overlay"
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
    );
  }
}

const mapStateToProps = state => ({
  showModal: state.modal.showModal,
  modalFilm: state.modal.film
});

export default connect(mapStateToProps)(FilmModal);
