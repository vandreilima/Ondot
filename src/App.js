import React from 'react';
import Routes from './routes';
import GlobalStyle from './style/global'
import { Router } from 'react-router-dom'
import history from '../src/services/history'

function App() {

  return (

    <Router history={history}>
      <GlobalStyle />
      <Routes />
    </Router>


  )
}

export default App;
