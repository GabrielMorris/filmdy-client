import React from 'react';
import { shallow } from 'enzyme';

import CardHeader from '../../../components/diary/film-cards/card-header';

describe('<CardHeader />', () => {
  it('Renders without crashing', () => {
    shallow(<CardHeader />);
  });

  it('Renders a card-header div', () => {
    const wrapper = shallow(<CardHeader />);

    expect(wrapper.find('.card-header').length).toEqual(1);
  });

  it('Renders a header', () => {
    const wrapper = shallow(<CardHeader />);

    expect(wrapper.find('h3').length).toEqual(1);
  });

  it('Renders a film title', () => {
    const wrapper = shallow(<CardHeader title={'hello title'} rating={true} />);

    expect(wrapper.find('h3').text()).toEqual('hello title 👍');
  });

  it('Renders a positive rating with a truthy rating', () => {
    const wrapper = shallow(<CardHeader title={'hello title'} rating={true} />);

    expect(wrapper.find('h3').text()).toEqual('hello title 👍');
  });

  it('Renders a negative rating with a falsy rating', () => {
    const wrapper = shallow(
      <CardHeader title={'hello title'} rating={false} />
    );
    const undefinedWrapper = shallow(
      <CardHeader title={'hello title'} rating={undefined} />
    );

    expect(wrapper.find('h3').text()).toEqual('hello title 👎');
    expect(undefinedWrapper.find('h3').text()).toEqual('hello title 👎');
  });
});
