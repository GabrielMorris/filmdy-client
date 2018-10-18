// React
import React from 'react';

// Components
import Search from './search';
import SearchResults from './search-results';

// Styles

export default function SearchContainer(props) {
  return (
    <div>
      <h1>Find films</h1>

      <Search />
      <SearchResults history={props.history} />
    </div>
  );
}
