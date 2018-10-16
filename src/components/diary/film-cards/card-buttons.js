// React
import React from 'react';
import { connect } from 'react-redux';

// Components
// Styles
import './card-buttons.css';

function CardButton(props) {
  return (
    <div className="card-buttons-container">
      <button
        onClick={event => {
          console.log('unwatch button clicked');

          const imdbID = props.film.imdbID;

          fetch(`http://localhost:8080/api/films`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
              Authorization: `Bearer ${props.token}`
            },
            body: JSON.stringify({
              userID: props.userID,
              imdbID
            })
          })
            // TODO: please for the love of god figure out how to do this better
            .then(() => {
              props.history.push('/search');
            })
            .then(() => {
              props.history.push('/');
            })
            .catch(error => console.error(error));
        }}
      >
        Unwatch
      </button>

      {generateLikeButtons(props)}
    </div>
  );
}

function generateLikeButtons(props) {
  // Like
  if (!props.rating) {
    return (
      <button onClick={event => toggleFilmLikedStatus(event, props)}>
        Like
      </button>
    );
  }

  // Dislike
  return (
    <button onClick={event => toggleFilmLikedStatus(event, props)}>
      Dislike
    </button>
  );
}

function toggleFilmLikedStatus(event, props) {
  console.log('like clicked');

  fetch(`http://localhost:8080/api/films`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${props.token}`
    },
    body: JSON.stringify({
      userID: props.userID,
      imdbID: props.film.imdbID
    })
  })
    // TODO: please address this good lord
    .then(() => {
      props.history.push('/search');
    })
    .then(() => {
      props.history.push('/');
    })
    .catch(error => console.error(error));
}

const mapStateToProps = state => ({
  userID: state.auth.currentUser.id,
  token: state.auth.authToken
});

export default connect(mapStateToProps)(CardButton);
