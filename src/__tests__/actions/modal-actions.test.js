import {
  TOGGLE_MODAL_REQUEST,
  TOGGLE_MODAL_SUCCESS,
  TOGGLE_MODAL_ERROR,
  toggleModalRequest,
  toggleModalSuccess,
  toggleModalError
} from '../../actions/modal-actions';

describe('Modal action tests', () => {
  it('Should return request object', () => {
    const action = toggleModalRequest();

    expect(action).toEqual({
      type: TOGGLE_MODAL_REQUEST
    });
  });

  it('Should return success object', () => {
    const bool = true;
    const imdbID = '124';
    const film = {};

    const action = toggleModalSuccess(bool, imdbID, film);

    expect(action).toEqual({
      type: TOGGLE_MODAL_SUCCESS,
      bool,
      imdbID,
      film
    });
  });

  it('Should return error object', () => {
    const error = '';
    const action = toggleModalError(error);

    expect(action).toEqual({
      type: TOGGLE_MODAL_ERROR,
      error
    });
  });
});
