import React from 'react';
import { shallow } from 'enzyme';

import SearchForm from '../../components/search/search';

describe('<SearchForm />', () => {
  it('Renders without crashing', () => {
    shallow(<SearchForm />);
  });
});
