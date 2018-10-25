import { searchReducer, initialState } from '../../reducers/search-reducer';
import {
  SEARCH_FILM_REQUEST,
  SEARCH_FILM_SUCCESS,
  SEARCH_FILM_ERROR,
  CLEAR_SEARCH_RESULTS_REQUEST,
  CLEAR_SEARCH_RESULTS_SUCCESS
} from '../../actions/search-actions';

describe('Search reducer tests', () => {
  it('Should set state for request', () => {
    const state = {};
    const action = {
      type: SEARCH_FILM_REQUEST
    };

    const newState = searchReducer(state, action);

    expect(newState).toEqual({
      loading: true,
      searchError: null
    });
  });

  it('Should set state for success', () => {
    const searchResults = [];
    const searchTerm = '';
    const state = {};
    const action = {
      type: SEARCH_FILM_SUCCESS,
      searchResults,
      searchTerm
    };

    const newState = searchReducer(state, action);

    expect(newState).toEqual({
      searchResults,
      searchTerm,
      searchError: null,
      loading: false
    });
  });

  it('Should set state for error', () => {
    const error = '';
    const state = {};
    const action = {
      type: SEARCH_FILM_ERROR,
      error
    };

    const newState = searchReducer(state, action);

    expect(newState).toEqual({ searchError: error, loading: null });
  });

  it('Should set state for request', () => {
    const state = {};
    const action = {
      type: CLEAR_SEARCH_RESULTS_REQUEST
    };

    const newState = searchReducer(state, action);

    expect(newState).toEqual(state);
  });

  it('Should set state for success', () => {
    const state = {};
    const action = {
      type: CLEAR_SEARCH_RESULTS_SUCCESS
    };

    const newState = searchReducer(state, action);

    expect(newState).toEqual(initialState);
  });

  it('Should set default state', () => {});
});
