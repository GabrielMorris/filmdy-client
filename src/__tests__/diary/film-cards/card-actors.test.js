import React from 'react';
import { shallow } from 'enzyme';

import CardActors from '../../../components/diary/film-cards/card-actors';

const actors = 'One, two, three';

describe('<CardActors />', () => {
  it('Renders without crashing', () => {
    shallow(<CardActors />);
  });

  it('Contains a container div', () => {
    const wrapper = shallow(<CardActors />);

    expect(wrapper.find('div').length).toEqual(1);
  });

  it('Contains a card-actors paragraph', () => {
    const wrapper = shallow(<CardActors />);

    expect(wrapper.find('.card-actors').length).toEqual(1);
  });

  it('Renders "Cast" in strong tags', () => {
    const wrapper = shallow(<CardActors actors={actors} />);

    expect(wrapper.find('strong').text()).toEqual('Cast:');
  });

  it('Renders a string of actors', () => {
    const wrapper = shallow(<CardActors actors={actors} />);

    expect(wrapper.find('.card-actors').text()).toEqual(`Cast: ${actors}`);
  });
});
