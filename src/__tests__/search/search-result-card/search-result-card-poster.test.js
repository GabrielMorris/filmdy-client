import React from 'react';
import { shallow } from 'enzyme';

import SearchResultCardPoster from '../../../components/search/search-result-card/search-result-card-poster';

describe('<SearchResultCardPoster />', () => {
  it('Renders without crashing', () => {
    shallow(<SearchResultCardPoster poster={''} title={''} />);
  });
});
