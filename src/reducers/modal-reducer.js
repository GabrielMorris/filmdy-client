import {
  TOGGLE_MODAL_REQUEST,
  TOGGLE_MODAL_SUCCESS,
  TOGGLE_MODAL_ERROR
} from '../actions/modal-actions';

const initialState = {
  showModal: false,
  imdbID: '',
  film: {}
};

export function modalReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL_REQUEST: {
      console.log('hhh');
      return Object.assign({}, state);
    }

    case TOGGLE_MODAL_SUCCESS: {
      const invertedShowModal = action.bool;

      return Object.assign({}, state, {
        showModal: invertedShowModal,
        imdbID: action.imdbID,
        film: action.film
      });
    }

    case TOGGLE_MODAL_ERROR: {
      console.log('err');

      return Object.assign({}, state, {
        error: action.error
      });
    }

    default:
      return state;
  }
}
