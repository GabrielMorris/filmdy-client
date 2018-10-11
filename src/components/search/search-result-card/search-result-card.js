// React
import React from 'react';

// Components
import SearchResultCardHeader from './search-result-card-header';
import SearchResultCardPoster from './search-result-card-poster';

// Styles
import './search-result-card.css';

export default function SearchResultCard(props) {
  return (
    <div className="film-card">
      {/* Row */}
      <div className="row">
        {/* Poster */}
        <div className="image-column">
          <SearchResultCardPoster poster={props.film.Poster} />
        </div>

        {/* Header */}
        <div className="column">
          <SearchResultCardHeader film={props.film} />
        </div>
      </div>
    </div>
  );
}
