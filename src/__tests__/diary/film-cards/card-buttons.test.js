import React from 'react';
import { shallow } from 'enzyme';

import { CardButton } from '../../../components/diary/film-cards/card-buttons';

describe('<CardButtons />', () => {
  it('Renders without crashing', () => {
    shallow(<CardButton />);
  });

  it('Renders a like button if the rating is falsy', () => {
    const wrapper = shallow(<CardButton rating={false} />);

    expect(wrapper.find('.like-button').length).toEqual(1);
  });

  it('Renders a dislike button if the rating is truthy', () => {
    const wrapper = shallow(<CardButton rating={true} />);

    expect(wrapper.find('.dislike-button').length).toEqual(1);
  });
});
