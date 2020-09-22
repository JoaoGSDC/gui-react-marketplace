import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';

import store from './store';

import Styles from './styles';
// import './styles.css';

const App = () => {
  Styles();
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
