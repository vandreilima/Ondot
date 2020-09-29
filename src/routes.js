import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import ConfigFuncionarios from './pages/Funcionarios'
import Cadastro from './pages/Cadastro'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Funcionarios" component={ConfigFuncionarios} />
        <Route path="/Cadastro" component={Cadastro} />
      </Switch>
    </BrowserRouter>
  );
}
