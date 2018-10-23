import React from 'react';
import { shallow } from 'enzyme';

import CardCritics from '../../../components/diary/film-cards/card-critics';

const criticalRatings = [
  { Source: 'Internet Movie Database', Value: '88%' },
  { Source: 'Rotten Tomates', Value: '88%' },
  { Source: 'Metacritic', Value: '88%' }
];

describe('<CardCritics />', () => {
  it('Renders without crashing', () => {
    shallow(<CardCritics criticalRatings={criticalRatings} />);
  });

  it('Should render a list of ratings', () => {
    const wrapper = shallow(<CardCritics criticalRatings={criticalRatings} />);

    expect(wrapper.find('li').length).toEqual(3);
  });
});
