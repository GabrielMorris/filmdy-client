// React
import React from 'react';
// Components
// Styles
import './card-description.css';

export default function CardDescription(props) {
  return (
    <div>
      <p className="card-plot">{props.plot}</p>
    </div>
  );
}
