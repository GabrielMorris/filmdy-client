// React
import React from 'react';

export default function CardCritics(props) {
  // Mapping object that gives us formatted names for rating sources
  const ratingSourceObject = {
    'Internet Movie Database': 'IMDb',
    'Rotten Tomatoes': 'Rotten Tomatoes',
    Metacritic: 'Metacritic'
  };

  if (!props.criticalRatings) {
    throw new Error('Missing critical ratings');
  }

  const mappedRatings = props.criticalRatings.map((rating, index) => {
    return (
      <li key={index}>
        {ratingSourceObject[rating.Source]} - {rating.Value}
      </li>
    );
  });

  return <ul>{mappedRatings}</ul>;
}
