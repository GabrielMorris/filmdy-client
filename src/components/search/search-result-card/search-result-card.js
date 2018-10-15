// React
import React from 'react';
import { connect } from 'react-redux';

// Components
import SearchResultCardBody from './search-result-card-body';
import SearchResultCardPoster from './search-result-card-poster';

// Styles
import './search-result-card.css';

function SearchResultCard(props) {
  console.log(props);

  const imdbID = props.film.imdbID;
  let watched;

  // Checks to see if a film is found in the user's diary and then sets watched status accordingly
  if (props.diaryFilms.find(film => film.imdbID === imdbID)) {
    watched = true;
  } else {
    watched = false;
  }

  return (
    <div className="film-card">
      {/* Row */}
      <div className="row">
        {/* Poster */}
        <div className="image-column">
          <SearchResultCardPoster poster={props.film.Poster} />
        </div>

        {/* Header */}
        <div className="column">
          <SearchResultCardBody film={props.film} watched={watched} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  userID: state.auth.currentUser.id,
  token: state.auth.authToken
});

export default connect(mapStateToProps)(SearchResultCard);
