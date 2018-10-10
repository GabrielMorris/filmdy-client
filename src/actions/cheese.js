/* Fetching cheeses */
// Async
export const fetchCheeses = cheeses => dispatch => {
  dispatch(fetchCheeseRequest());

  return fetch('http://localhost:8080/api/cheeses')
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response.json();
    })
    .then(cheeses => {
      return cheeses.map(cheese => cheese);
    })
    .then(cheeses => {
      dispatch(fetchCheeseSuccess(cheeses));
    })
    .catch(error => {
      dispatch(fetchCheeseError(error));
    });
};

// Sync
export const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST';
export const fetchCheeseRequest = () => ({
  type: FETCH_CHEESE_REQUEST
});

export const FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS';
export const fetchCheeseSuccess = cheeses => ({
  type: FETCH_CHEESE_SUCCESS,
  cheeses
});

export const FETCH_CHEESE_ERROR = 'FETCH_CHEESE_ERROR';
export const fetchCheeseError = error => ({
  type: FETCH_CHEESE_ERROR,
  error
});
