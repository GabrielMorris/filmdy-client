// React
import React from 'react';

// Styles
import './card-poster.css';

export default function CardPoster(props) {
  return (
    <div>
      <img
        className="card-poster"
        src={props.poster}
        alt={`${props.title} film poster`}
      />
    </div>
  );
}
