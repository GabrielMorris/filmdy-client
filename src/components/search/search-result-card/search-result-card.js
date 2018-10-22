// React
import React from 'react';
import { connect } from 'react-redux';

// Components
import FilmModal from '../../modals/film-modal';
import SearchResultCardBody from './search-result-card-body';
import SearchResultCardPoster from './search-result-card-poster';

// Actions
import { toggleModal } from '../../../actions/modal-actions';

// Styles
import './search-result-card.css';

class SearchResultCard extends React.Component {
  constructor() {
    super();

    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  // Modal functions
  handleOpenModal() {
    const imdbID = this.props.film.imdbID;

    this.props.dispatch(toggleModal(true, imdbID));
  }

  render() {
    const imdbID = this.props.film.imdbID;
    let watched;

    // Checks to see if a film is found in the user's diary and then sets watched status accordingly
    if (this.props.diaryFilms.find(film => film.imdbID === imdbID)) {
      watched = true;
    } else {
      watched = false;
    }

    return (
      <li className="search-film-card">
        {/* Modal */}
        <FilmModal />

        {/* Row */}
        <div className="row">
          {/* Header */}
          <div className="search-column">
            <SearchResultCardBody
              film={this.props.film}
              watched={watched}
              history={this.props.history}
              onClick={this.handleOpenModal}
            />
          </div>

          {/* Poster */}
          <div className="search-image-column">
            <SearchResultCardPoster
              poster={this.props.film.Poster}
              title={this.props.film.Title}
            />
          </div>
        </div>
      </li>
    );
  }
}
const mapStateToProps = state => ({
  userID: state.auth.currentUser.id,
  token: state.auth.authToken
});

export default connect(mapStateToProps)(SearchResultCard);
