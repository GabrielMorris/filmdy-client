import React from 'react';
import { shallow } from 'enzyme';

import SearchContainer from '../../components/search/search-container';

describe('<SearchContainer />', () => {
  it('Renders without crashing', () => {
    shallow(<SearchContainer history={[]} />);
  });
});
