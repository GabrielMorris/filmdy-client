import React from 'react';
import { shallow } from 'enzyme';

import Landing from '../../components/landing/landing';

describe('<Landing />', () => {
  it('Renders without crashing', () => {
    shallow(<Landing />);
  });

  it('Renders a landing div', () => {
    const wrapper = shallow(<Landing />);

    expect(wrapper.find('.landing').length).toEqual(1);
  });

  it('Renders the landing hero', () => {
    const wrapper = shallow(<Landing />);

    expect(wrapper.find('LazyHero').length).toEqual(1);
  });

  it('Renders a CSS grid', () => {
    const wrapper = shallow(<Landing />);

    expect(wrapper.find('.landing-card-grid').length).toEqual(1);
  });

  it('Renders three landing text cards', () => {
    const wrapper = shallow(<Landing />);

    expect(wrapper.find('.landing-card').length).toEqual(3);
    expect(wrapper.find('.landing-card-header').length).toEqual(3);
    expect(wrapper.find('.landing-card-text').length).toEqual(3);
  });
});
