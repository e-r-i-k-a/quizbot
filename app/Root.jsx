import React from 'react'
import { render } from 'react-dom'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

render(
  <div id='app'>
    <Header />
    <Main />
    <Footer />
  </div>,
  document.getElementById('root')
);
