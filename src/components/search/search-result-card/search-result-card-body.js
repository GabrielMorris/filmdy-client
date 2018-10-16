// React
import React from 'react';
import { connect } from 'react-redux';
import { API_KEY } from '../../../config';

// Components

// Styles
import './search-result-card-body.css';

class SearchResultCardBody extends React.Component {
  addFilmToDiary() {
    console.log('addiong to diary');
    const FILM_BY_ID_URI = 'http://www.omdbapi.com/?i=';

    const imdbID = this.props.film.imdbID;

    fetch(`${FILM_BY_ID_URI}${imdbID}${API_KEY}`)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(response => {
        console.log(response);
        // Make actors into an array without quotes
        const actors = response.Actors.replace(/"/g, '', -1).split(' ');

        const newFilmObject = {
          userID: this.props.userID,
          film: {
            imdbID,
            title: response.Title,
            plot: response.Plot,
            actors: actors,
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
            Authorization: `Bearer ${this.props.token}`
          },
          body: JSON.stringify(film)
        })
          .then(response => {
            return response.json();
          })
          .catch(err => console.error(err));
      })
      .then(() => {
        // We push / to the end of the history array so that the component will refresh
        this.props.history.push('/');
      })
      .catch(error => {
        console.log('hitting error in update watched status');
        console.error(error);
      });
  }

  removeFilmFromDiary() {
    console.log('removing from diary');
    fetch(`http://localhost:8080/api/films`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${this.props.token}`
      },
      body: JSON.stringify({
        userID: this.props.userID,
        imdbD: this.props.film.imdbID
      })
    });
  }

  onClick(event) {
    console.log('watched button clicked');
    !this.props.watched ? this.addFilmToDiary() : this.removeFilmFromDiary();
  }

  render() {
    return (
      <div>
        <h2>{this.props.film.Title}</h2>
        <button
          className="watched-button"
          onClick={event => this.onClick(event)}
        >
          {this.props.watched ? 'Unwatch!' : 'Watched!'}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userID: state.auth.currentUser.id,
  token: state.auth.authToken
});

export default connect(mapStateToProps)(SearchResultCardBody);
