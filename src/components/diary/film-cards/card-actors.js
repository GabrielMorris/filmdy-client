// React
import React from 'react';
// Components
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
