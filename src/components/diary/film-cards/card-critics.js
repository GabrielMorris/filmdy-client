// React
import React from 'react';

// Components

// Styles

export default function CardCritics(props) {
  const ratingSourceObject = {
    'Internet Movie Database': 'IMDb',
    'Rotten Tomatoes': 'Rotten Tomatoes',
    Metacritic: 'Metacritic'
  };

  const mappedRatings = props.criticalRatings.map((rating, index) => {
    return (
      <li key={index}>
        {ratingSourceObject[rating.Source]} - {rating.Value}
      </li>
    );
  });

  return <ul>{mappedRatings}</ul>;
}
