// React
import React from 'react';
import { connect } from 'react-redux';

// Components
// Styles

export class SearchResults extends React.Component {
  generateFilmResults() {
    return this.props.searchResults.map((film, index) => {
      return (
        <li key={index}>
          {film.Title} - {film.Year} - {film.imdbID}
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
