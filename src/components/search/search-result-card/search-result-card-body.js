// React
import React from 'react';
import { connect } from 'react-redux';
import { API_KEY } from '../../../config';

// Components

// Styles
import './search-result-card-body.css';

function SearchResultCardPoster(props) {
  return (
    <div>
      <h2>{props.film.Title}</h2>
      <button
        className="watched-button"
        onClick={event => onClick(event, props)}
      >
        Watched!
      </button>
    </div>
  );
}

function onClick(event, props) {
  console.log('watched button clicked');
  const FILM_BY_ID_URI = 'http://www.omdbapi.com/?i=';

  const imdbID = props.film.imdbID;

  return fetch(`${FILM_BY_ID_URI}${imdbID}${API_KEY}`)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(response => {
      console.log(response);

      const newFilmObject = {
        userID: props.userID,
        film: {
          imdbID,
          title: response.Title,
          plot: response.Plot,
          actors: response.Actors,
          poster: response.Poster,
          ratings: response.Ratings,
          // TODO: make this dynamic somehow
          userRating: true
        }
      };

      return newFilmObject;
    })
    .then(film => {
      console.log(film);

      return fetch('http://localhost:8080/api/films', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: `Bearer ${props.token}`
        },
        body: JSON.stringify(film)
      })
        .then(response => response.json())
        .catch(err => console.error(err));
    })
    .catch(error => {
      console.log('hitting error in update watched status');
      console.error(error);
    });
}

const mapStateToProps = state => ({
  userID: state.auth.currentUser.id,
  token: state.auth.authToken
});

export default connect(mapStateToProps)(SearchResultCardPoster);
