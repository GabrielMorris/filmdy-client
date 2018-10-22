// React
import React from 'react';
import { connect } from 'react-redux';

// Components
import SearchResultCard from './search-result-card/search-result-card';
import Grid from 'react-css-grid';
import { BeatLoader } from 'react-spinners';

// Styles
import './search-results.css';
import { fetchDiaryFilms } from '../../actions/diary-actions';

export class SearchResults extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDiaryFilms(this.props.token));
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
    if (this.props.loading) {
      return (
        <div className="sweet-loading">
          <BeatLoader loading={this.props.loading} />
        </div>
      );
    }

    return (
      <ul>
        <Grid width={512} gap={8} className="search-results-grid">
          {this.generateFilmResults()}
        </Grid>
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  searchResults: state.search.searchResults,
  searchError: state.search.searchError,
  diaryFilms: state.diary.diaryFilms,
  userID: state.auth.currentUser.id,
  token: state.auth.authToken,
  loading: state.search.loading
});

export default connect(mapStateToProps)(SearchResults);
