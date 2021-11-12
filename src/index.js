import React from 'react';
import ReactDOM from 'react-dom';
// import Sidebar from './components/sidebar';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Client from './layouts/client';
import './assets/css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" render={(props) => <Client {...props} />} />
        {/* <Redirect from="*" to="/" /> */}
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

