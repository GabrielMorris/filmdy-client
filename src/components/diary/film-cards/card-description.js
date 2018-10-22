// React
import React from 'react';

// Styles
import './card-description.css';

export default function CardDescription(props) {
  return (
    <div>
      <p className="card-plot">{props.plot}</p>
    </div>
  );
}
