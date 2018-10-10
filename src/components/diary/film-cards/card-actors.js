// React
import React from 'react';
// Components
// Styles

export default function CardActors(props) {
  return <div>{stringifyActors(props.actors)}</div>;
}

function stringifyActors(actorsArray) {
  return actorsArray.join(', ');
}
