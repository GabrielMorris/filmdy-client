// React
import React from 'react';

// Styles
import './card-actors.css';

export default function CardActors(props) {
  return (
    <div>
      <p className="card-actors">
        <strong>Cast:</strong> {props.actors}
      </p>
    </div>
  );
}
