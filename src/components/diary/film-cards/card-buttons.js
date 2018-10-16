// React
import React from 'react';
import { connect } from 'react-redux';

// Components
// Styles

function CardButton(props) {
  return (
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
  );
}

const mapStateToProps = state => ({
  userID: state.auth.currentUser.id,
  token: state.auth.authToken
});

export default connect(mapStateToProps)(CardButton);
