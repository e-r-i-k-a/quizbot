import React from 'react'
import { render } from 'react-dom'
import Main from './components/Main'
import Footer from './components/Footer'

render(
  <div id='app'>
    <Main />
    <Footer />
  </div>,
  document.getElementById('root')
);
