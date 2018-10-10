// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';

// Store
import Store from './store/store';

// Components
import Navbar from './components/navbar/navbar';
import FilmDiary from './components/diary/film-diary/film-diary';

import CheeseList from './components/cheese-list';
import CheeseStore from './store/cheeseStore';

// Styles
import './index.css';
import cheeseStore from './store/cheeseStore';

ReactDOM.render(
  <div>
    <Navbar />
    <Provider store={Store}>
      <FilmDiary />
    </Provider>
  </div>,
  // <Provider store={cheeseStore}>
  //   <CheeseList />
  // </Provider>,
  document.getElementById('root')
);

// /*
//   *** STORE
// store: {
//   error: null,
//   diaryFilms: [
//     {
//       imdbID: 'tt3896198',
//       title: 'Guardians of the Galaxy Vol. 2',
//       plot: 'lorem ipsum',
//       actors: [actor, actor],
//       etc...
//     }
//   ],
//   searchFilms: [
//     {
//       imdbID: 'tt3896198',
//       title: 'Guardians of the Galaxy Vol. 2',
//       etc...
//     }
//   ]
// }

// *** HIERARCHY

// index

// -navbar (always visible)
// --hamburger (always visible)

// -switch:[
//   -landing

//   --hero
//   --info

//   -login/signup

//   --login
//   --signup

//   -diary

//   --film diary

//   ---film card
//   ----title
//   ----rating
//   ----poster
//   ----description
//   ----critic ratings

//   --add a film
//   ---rating

//   --search films
//   ---search results
//   ----search result card
//   ----add button

// ]
// */
