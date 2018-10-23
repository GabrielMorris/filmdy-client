import React from 'react';
import { shallow } from 'enzyme';

import CardDescription from '../../../components/diary/film-cards/card-description';

describe('<CardDescription />', () => {
  it('Renders without crashing', () => {
    shallow(<CardDescription />);
  });

  it('Renders a container div', () => {
    const wrapper = shallow(<CardDescription />);

    expect(wrapper.find('div').length).toEqual(1);
  });

  it('Renders a card-plot paragraph', () => {
    const wrapper = shallow(<CardDescription />);

    expect(wrapper.find('.card-plot').length).toEqual(1);
  });

  it('Renders the plot inside the paragraph element', () => {
    const wrapper = shallow(<CardDescription plot={'Lorem ipsum'} />);

    expect(wrapper.find('.card-plot').text()).toEqual('Lorem ipsum');
  });
});
