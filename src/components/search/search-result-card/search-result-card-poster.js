// React
import React from 'react';
// Components
// Styles
import './search-result-card-poster';

export default function SearchResultCardPoster(props) {
  if (props.poster === 'N/A') {
    return (
      <img
        src="https://via.placeholder.com/300x445"
        className="card-poster"
        alt="No poster found - placeholder film poster"
      />
    );
  }
  return (
    <img
      src={props.poster}
      className="card-poster"
      alt={`${props.title} film poster`}
    />
  );
}
