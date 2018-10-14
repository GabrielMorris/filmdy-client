// React
import React from 'react';
// Components
// Styles

export default function SearchResultCardPlot(props) {
  console.log(props);
  // console.log(props.film.plot);
  const testObj = {};

  for (const key in props) {
    if (props.hasOwnProperty(key)) {
      const element = props[key];
      testObj[key] = element;
    }
  }

  console.log(testObj);
  console.log(testObj.film);
  return <div>{testObj.film.Plot}</div>;
}
