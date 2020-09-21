import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';

import store from './store';

import './styles.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
