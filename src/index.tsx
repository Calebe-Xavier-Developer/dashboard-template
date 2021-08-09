import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { LateralDrawer } from './components/LateralDrawer';
import { Divider, FooterDryve, GrayBoardPages } from './styles';
import { HomePage } from './pages/HomePage';
import { UserPage } from './pages/UserPage';
import { ToAddClient } from './pages/ToAddClient';


ReactDOM.render(
  <>
    <BrowserRouter>
      <NavBar />
      <LateralDrawer/>
      <GrayBoardPages>
        <Switch>
          <Route path="/dashboard-template/" component={HomePage} exact />
          <Route path="/dashboard-template/UserPage" component={UserPage} exact />
          <Route path="/dashboard-template/ToAddClient" component={ToAddClient} />
        </Switch>
        <Divider />
        <FooterDryve>
          2020 © Dryve Tecnologia Ltda.
          <p>Versão 1.0.1</p>
        </FooterDryve>
      </GrayBoardPages>
    </BrowserRouter>
  </>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
