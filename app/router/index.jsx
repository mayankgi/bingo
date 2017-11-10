import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Dashboard from 'components/dashboard/Dashboard';
import PlayerRoom from 'components/player-room/PlayerRoom';
import ManagerRoom from 'components/manager-room/ManagerRoom';

var requireLogin = (nextState, replace, next) => {
  next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
  next();
};

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="manager" component={ManagerRoom} onEnter={requireLogin}/>
      <Route path="player" component={PlayerRoom} onEnter={requireLogin}/>
      <IndexRoute component={Dashboard} onEnter={redirectIfLoggedIn}/>
    </Route>
  </Router>
);
