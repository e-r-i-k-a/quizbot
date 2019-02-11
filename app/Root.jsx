import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Main from './components/Main';
import Footer from './components/Footer';

render(
  <Provider store={store}>
    <div id='app'>
      <Main />
      <Footer />
    </div>
  </Provider>,
  document.getElementById('root')
);
