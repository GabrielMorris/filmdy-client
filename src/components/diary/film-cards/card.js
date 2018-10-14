// React
import React from 'react';

// Components
import CardHeader from './card-header';
import CardPoster from './card-poster';
import CardDescription from './card-description';
import CardActors from './card-actors';
import CardRating from './card-rating';
import CardCritics from './card-critics';

// Styles
import './card.css';

export default function Card(props) {
  console.log(props.film);

  return (
    // Film card
    <div className="film-card">
      {/* Header */}
      <CardHeader title={props.film.title} />
      <div className="row">
        <div className="image-column">
          {/* Poster */}
          <CardPoster poster={props.film.poster} />
        </div>

        <div className="column">
          {/* User rating */}
          <CardRating rating={props.film.userRating} />

          {/* Plot */}
          <CardDescription plot={props.film.plot} />

          {/* Actors */}
          <CardActors actors={props.film.actors} />

          {/* Critics */}
          <CardCritics criticalRatings={props.film.ratings} />
        </div>
      </div>
    </div>
  );
}
