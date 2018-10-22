import {
  TOGGLE_MODAL_REQUEST,
  TOGGLE_MODAL_SUCCESS,
  TOGGLE_MODAL_ERROR
} from '../actions/modal-actions';

const initialState = {
  showModal: false,
  imdbID: '',
  film: { Ratings: [] }
};

export function modalReducer(state = initialState, action) {
  switch (action.type) {
    // Toggle modal visibility
    case TOGGLE_MODAL_REQUEST: {
      return Object.assign({}, state);
    }

    // Successfully toggle the modal
    case TOGGLE_MODAL_SUCCESS: {
      const invertedShowModal = action.bool;

      return Object.assign({}, state, {
        showModal: invertedShowModal,
        imdbID: action.imdbID,
        film: action.film
      });
    }

    // Error toggling the modal
    case TOGGLE_MODAL_ERROR: {
      return Object.assign({}, state, {
        error: action.error
      });
    }

    default:
      return state;
  }
}
