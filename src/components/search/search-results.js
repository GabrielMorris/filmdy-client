// React
import React from 'react';
import { connect } from 'react-redux';

// Components
import SearchResultCard from './search-result-card/search-result-card';

// Styles
import './search-results.css';

export class SearchResults extends React.Component {
  generateFilmResults() {
    return this.props.searchResults.map((film, index) => {
      return (
        <li key={index}>
          <SearchResultCard film={film} />
        </li>
      );
    });
  }

  render() {
    return <ul>{this.generateFilmResults()}</ul>;
  }
}

const mapStateToProps = state => ({
  searchResults: state.search.searchResults
});

export default connect(mapStateToProps)(SearchResults);
