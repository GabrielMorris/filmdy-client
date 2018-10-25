import {
  SEARCH_FILM_REQUEST,
  SEARCH_FILM_SUCCESS,
  SEARCH_FILM_ERROR,
  searchFilmRequest,
  searchFilmSuccess,
  searchFilmError,
  CLEAR_SEARCH_RESULTS_REQUEST,
  CLEAR_SEARCH_RESULTS_SUCCESS,
  clearSearchResultsRequest,
  clearSearchResultsSuccess
} from '../../actions/search-actions';

describe('search request', () => {
  it('Should return the action', () => {
    const action = searchFilmRequest();

    expect(action).toEqual({
      type: SEARCH_FILM_REQUEST
    });
  });

  it('Should return the clear action', () => {
    const action = clearSearchResultsRequest();

    expect(action).toEqual({
      type: CLEAR_SEARCH_RESULTS_REQUEST
    });
  });
});

describe('search success', () => {
  it('Should return the action', () => {
    const searchResults = [];
    const searchTerm = '';
    const action = searchFilmSuccess(searchResults, searchTerm);

    expect(action).toEqual({
      type: SEARCH_FILM_SUCCESS,
      searchResults,
      searchTerm
    });
  });

  it('Should return the clear success action', () => {
    const action = clearSearchResultsSuccess();

    expect(action).toEqual({
      type: CLEAR_SEARCH_RESULTS_SUCCESS
    });
  });
});

describe('search error', () => {
  it('Should return the action', () => {
    const error = '';
    const action = searchFilmError(error);

    expect(action).toEqual({
      type: SEARCH_FILM_ERROR,
      error
    });
  });
});
