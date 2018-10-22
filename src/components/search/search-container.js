// React
import React from 'react';

// Components
import Search from './search';
import SearchResults from './search-results';

export default function SearchContainer(props) {
  return (
    <div>
      <Search />
      <SearchResults history={props.history} />
    </div>
  );
}
