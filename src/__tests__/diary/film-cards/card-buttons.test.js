import Store from '../../../store/store';
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

  it('Dispatches the toggleFilmLiked action', () => {
    const dispatch = jest.fn();
    const imdbID = '123';
    const token = 'abc';
    const wrapper = shallow(
      <CardButton
        store={Store}
        dispatch={dispatch}
        rating={true}
        token={token}
        film={{ imdbID }}
      />
    );
    const button = wrapper.find('.dislike-button');

    button.simulate('click');
    expect(dispatch).toHaveBeenCalled();
  });
});
