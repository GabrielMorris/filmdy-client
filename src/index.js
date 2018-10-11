// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';

// Store
import Store from './store/store';

// Components
import App from './components/app';
import Navbar from './components/navbar/navbar';

// Styles
import './index.css';

ReactDOM.render(
  <div>
    <Navbar />
    <Provider store={Store}>
      <App />
    </Provider>
  </div>,
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
