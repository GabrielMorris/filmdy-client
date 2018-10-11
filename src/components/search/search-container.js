// React
import React from 'react';

// Components
import Search from './search';
import SearchResults from './search-results';

// Styles

export default function SearchContainer(props) {
  return (
    <div>
      <Search />
      <SearchResults />
    </div>
  );
}
