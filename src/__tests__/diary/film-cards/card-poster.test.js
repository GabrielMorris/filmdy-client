import React from 'react';
import { shallow } from 'enzyme';

import CardPoster from '../../../components/diary/film-cards/card-poster';

describe('<CardPoster />', () => {
  it('Renders without crashing', () => {
    shallow(<CardPoster />);
  });

  it('Renders an image', () => {
    const wrapper = shallow(<CardPoster />);

    expect(wrapper.find('img').length).toEqual(1);
  });

  it('Passes the prop image to the img tag', () => {
    const poster = 'https://via.placeholder.com/300x445';
    const wrapper = shallow(
      <CardPoster poster={poster} title={'Placeholder'} />
    );

    expect(wrapper.find('img').prop('src')).toEqual(poster);
  });

  it('Passes the title string to the img element', () => {
    const title = 'TestTitle';
    const wrapper = shallow(<CardPoster title={title} />);

    expect(wrapper.find('img').prop('alt')).toEqual(`${title} film poster`);
  });
});
