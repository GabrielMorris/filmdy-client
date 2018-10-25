import { modalReducer } from '../../reducers/modal-reducer';
import {
  TOGGLE_MODAL_REQUEST,
  TOGGLE_MODAL_SUCCESS,
  TOGGLE_MODAL_ERROR
} from '../../actions/modal-actions';

describe('Modal reducer tests', () => {
  it('Should return state on request', () => {
    const state = {};
    const action = {
      type: TOGGLE_MODAL_REQUEST
    };

    const newState = modalReducer(state, action);

    expect(newState).toEqual(state);
  });

  it('Should toggle modal success in state', () => {
    const bool = true;
    const imdbID = '14t63';
    const film = {};
    const state = {};
    const action = {
      type: TOGGLE_MODAL_SUCCESS,
      bool,
      imdbID,
      film
    };

    const newState = modalReducer(state, action);

    expect(newState).toEqual({
      showModal: bool,
      imdbID,
      film
    });
  });

  it('Should set the error', () => {
    const error = '';
    const state = {};
    const action = {
      type: TOGGLE_MODAL_ERROR,
      error
    };

    const newState = modalReducer(state, action);

    expect(newState).toEqual({ error });
  });
});
