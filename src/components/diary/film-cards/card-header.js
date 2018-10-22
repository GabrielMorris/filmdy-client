// React
import React from 'react';

// Styles
import './card-header.css';

export default function CardHeader(props) {
  /* Handle rating generation based on the rating that is being passed down into this component */
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
