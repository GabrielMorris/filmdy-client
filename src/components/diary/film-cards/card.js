// React
import React from 'react';

// Components
import CardHeader from './card-header';
import CardPoster from './card-poster';
import CardDescription from './card-description';
import CardActors from './card-actors';
import CardCritics from './card-critics';
import CardButtons from './card-buttons';

// Styles
import './card.css';

export default function Card(props) {
  // console.log(props.film);

  return (
    // Film card
    <div className="film-card">
      {/* Header and user rating */}

      <CardHeader title={props.film.title} rating={props.film.userRating} />

      {/* Row */}
      <div className="row">
        {/* Column */}
        <div className="image-column">
          {/* Poster */}
          <CardPoster poster={props.film.poster} />
        </div>

        {/* Column */}
        <div className="column">
          {/* Plot */}
          <CardDescription plot={props.film.plot} />

          {/* Actors */}
          <CardActors actors={props.film.actors} />

          {/* Critics */}
          <CardCritics criticalRatings={props.film.ratings} />
        </div>
      </div>

      {/* Row */}
      <div className="row">
        {/* Unwatch */}
        <CardButtons
          film={props.film}
          history={props.history}
          rating={props.film.userRating}
        />
      </div>
    </div>
  );
}
