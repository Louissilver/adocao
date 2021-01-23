import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Cao from './pages/cadastro/Cao';
import Raca from './pages/cadastro/Raca';
import ListaCao from './pages/listagem/Cao';
import ListaRaca from './pages/listagem/Raca';
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
      <Route path="/cadastro/cao" component={Cao} exact />
      <Route path="/cadastro/raca" component={Raca} exact />
      <Route path="/listagem/racas" component={ListaRaca} exact />
      <Route path="/listagem/caes" component={ListaCao} exact />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);