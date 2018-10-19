// React
import React from 'react';
// Components
// Styles
import './card-header.css';

export default function CardHeader(props) {
  let rating;

  if (props.rating === true) {
    rating = '👍';
  } else {
    rating = '👎';
  }
  return (
    <div className="card-header" onClick={props.onClick}>
      <h3 aria-label="Film title">
        {props.title} <span aria-label="Film rating">{rating}</span>
      </h3>
    </div>
  );
}
