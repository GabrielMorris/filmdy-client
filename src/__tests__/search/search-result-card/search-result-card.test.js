import React from 'react';
import { shallow } from 'enzyme';

import { SearchResultCard } from '../../../components/search/search-result-card/search-result-card';

describe('<SearchResultCard />', () => {
  it('Renders without crashing', () => {
    shallow(
      <SearchResultCard
        film={{ imdbID: 'hello', Poster: '', Title: '' }}
        diaryFilms={[]}
        watched={true}
        history={[]}
      />
    );
  });
});
