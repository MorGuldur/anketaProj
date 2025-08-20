import React from 'react';
import { Provider } from 'react-redux';

import { Anketa } from '../features/Anketa/Anketa';
import store from './store';

export const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Anketa />
      </div>
    </Provider>
  );
};
