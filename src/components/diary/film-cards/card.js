// React
import React from 'react';
import { connect } from 'react-redux';

// Components
import FilmModal from '../../modals/film-modal';
import CardHeader from './card-header';
import CardPoster from './card-poster';
import CardDescription from './card-description';
import CardActors from './card-actors';
import CardButtons from './card-buttons';

// Actions
import { toggleModal } from '../../../actions/modal-actions';

// Styles
import './card.css';

class Card extends React.Component {
  constructor() {
    super();

    // Bind opening the modal to the card
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  // Modal functions
  handleOpenModal() {
    const imdbID = this.props.film.imdbID;
    this.props.dispatch(toggleModal(true, imdbID));
  }

  render() {
    return (
      // Film card
      <li className="film-card">
        {/* Modal */}
        <FilmModal />

        {/* Header and user rating */}
        <CardHeader
          title={this.props.film.title}
          rating={this.props.film.userRating}
          onClick={this.handleOpenModal}
        />

        {/* Row */}
        <div className="row">
          {/* Column */}
          <div className="image-column">
            {/* Poster */}
            <CardPoster
              poster={this.props.film.poster}
              title={this.props.film.title}
            />
          </div>

          {/* Column */}
          <div className="column">
            {/* Plot */}
            <CardDescription plot={this.props.film.plot} />

            {/* Actors */}
            <CardActors actors={this.props.film.actors} />
          </div>
        </div>

        {/* Row */}
        <div className="row">
          {/* Unwatch */}
          <CardButtons
            film={this.props.film}
            history={this.props.history}
            rating={this.props.film.userRating}
          />
        </div>
      </li>
    );
  }
}

export default connect()(Card);
