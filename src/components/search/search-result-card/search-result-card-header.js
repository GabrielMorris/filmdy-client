// React
import React from 'react';
// Components

// Styles
import './search-result-card-header.css';

export default function SearchResultCardPoster(props) {
  return (
    <div>
      <h2>{props.film.Title}</h2>
      <button
        className="watched-button"
        onClick={event => {
          console.log('watched button clicked');
        }}
      >
        Watched!
      </button>
    </div>
  );
}
