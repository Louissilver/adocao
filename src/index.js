import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Parceiro from './pages/cadastro/Parceiro';
import ListaCao from './pages/listagem/Cao';
import erro404 from './assets/erro404.png'
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagina404 = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '120vh',
    marginTop: '-20vh',
    padding: '0'
  }}>
    <h1 style={{
      textAlign: 'center',
      color: 'white'
    }}>
      <a href="/">
        <img src={erro404} alt="Erro 404" border="0"/></a>
        <br />
      <a href="/">Voltar para página principal</a>
    </h1>
  </div>
)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/parceiro" component={Parceiro} exact />
      <Route path="/listagem/caes" component={ListaCao} exact />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);