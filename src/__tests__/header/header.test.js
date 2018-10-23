import React from 'react';
import { shallow } from 'enzyme';

import { Navbar } from '../../components/header/header';

describe('<Header />', () => {
  it('Renders without crashing', () => {
    shallow(<Navbar />);
  });

  it('Renders a header element', () => {
    const wrapper = shallow(<Navbar />);

    expect(wrapper.find('header').length).toEqual(1);
  });

  it('Renders a link component', () => {
    const wrapper = shallow(<Navbar />);

    expect(wrapper.find('Link').length).toEqual(1);
  });

  it('Renders a header within the Link component', () => {
    const wrapper = shallow(<Navbar />);

    expect(wrapper.find('Link').find('h1').length).toEqual(1);
  });
});
