import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './containers/HomePage';
import NotFound from './containers/NotFound';
import ContactPage from './containers/Contact';
import Admin from './containers/Admin';
import Login from './containers/Login';
import {requireAuthentication} from './components/AuthenticatedComponent';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="contact" component={ContactPage}/>
    <Route path="admin-dashboard" component={requireAuthentication(Admin)}/>
    <Route path="login" component={Login}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
