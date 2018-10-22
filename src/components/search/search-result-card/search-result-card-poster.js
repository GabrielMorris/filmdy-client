// React
import React from 'react';

// Styles
import './search-result-card-poster';

export default function SearchResultCardPoster(props) {
  // If the API doesn't have a poster return a placeholder image so we don't get the ugly broken image thumb
  if (props.poster === 'N/A') {
    return (
      <img
        src="https://via.placeholder.com/300x445"
        className="card-poster"
        alt="No poster found - placeholder film poster"
      />
    );
  }
  // Otherwise we can return the film poster
  return (
    <img
      src={props.poster}
      className="card-poster"
      alt={`${props.title} film poster`}
    />
  );
}
