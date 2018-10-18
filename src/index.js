// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';

// Store
import Store from './store/store';

// Components
import App from './components/app';

// Styles
import './index.css';

ReactDOM.render(
  <div>
    <Provider store={Store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
);
