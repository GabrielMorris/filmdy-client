// React
import React from 'react';
// Components
// Styles
import './card-poster.css';

export default function CardPoster(props) {
  return (
    <div>
      <img className="card-poster" src={props.poster} />
    </div>
  );
}
