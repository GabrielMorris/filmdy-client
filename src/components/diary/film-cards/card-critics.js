// React
import React from 'react';

// Components

// Styles

export default function CardCritics(props) {
  const mappedRatings = props.criticalRatings.map(rating => {
    return (
      <li>
        {rating.Source} - {rating.Value}
      </li>
    );
  });
  return <ul>{mappedRatings}</ul>;
}
