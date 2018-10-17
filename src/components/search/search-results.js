// React
import React from 'react';
import { connect } from 'react-redux';

// Components
import SearchResultCard from './search-result-card/search-result-card';
import Grid from 'react-css-grid';

// Styles
import './search-results.css';
import { fetchDiaryFilms } from '../../actions/diary-actions';

export class SearchResults extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDiaryFilms(this.props.token, this.props.userID));
  }

  generateFilmResults() {
    // If we have an error in the storage return that
    if (this.props.searchError) {
      return <div className="search-error">{this.props.searchError}</div>;
    }

    // Otherwise map over the results and create card components
    return this.props.searchResults.map((film, index) => {
      return (
        <SearchResultCard
          film={film}
          diaryFilms={this.props.diaryFilms}
          history={this.props.history}
          key={index}
        />
      );
    });
  }

  render() {
    return (
      <Grid width={320} gap={24}>
        {this.generateFilmResults()}
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  searchResults: state.search.searchResults,
  searchError: state.search.searchError,
  diaryFilms: state.diary.diaryFilms,
  userID: state.auth.currentUser.id,
  token: localStorage.getItem('authToken')
});

export default connect(mapStateToProps)(SearchResults);
