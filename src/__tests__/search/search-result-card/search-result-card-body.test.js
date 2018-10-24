import React from 'react';
import { shallow } from 'enzyme';

import { SearchResultCardBody } from '../../../components/search/search-result-card/search-result-card-body';

describe('<SearchResultCardBody />', () => {
  it('Renders without crashing', () => {
    shallow(<SearchResultCardBody film={{ Title: 'hello' }} />);
  });
});
