// React
import React from 'react';
// Components
// Styles
import './card-header.css';

export default function CardHeader(props) {
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  );
}
