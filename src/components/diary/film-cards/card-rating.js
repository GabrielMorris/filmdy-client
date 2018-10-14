// React
import React from 'react';
// Components
// Styles
import './card-rating.css';

export default function CardRating(props) {
  let stars = '';

  // TODO: get this to be a map or something less hideous
  for (let i = 0; i < props.rating; i++) {
    stars = stars + '★';
  }
  return <div className="card-rating">{stars}</div>;
}
