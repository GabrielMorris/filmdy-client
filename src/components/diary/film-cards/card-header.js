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
    <div>
      <h3>
        {props.title} <span>{rating}</span>
      </h3>
    </div>
  );
}
