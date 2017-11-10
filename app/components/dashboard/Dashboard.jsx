import './dashboard.scss';
import React from 'react';

import NewGame from 'components/new-game/NewGame';
import Games from 'components/games/Games';
import Header from 'components/header/Header';

export default () => {
  return (
    <div class="dashboard">
      <Header></Header>
      <div class="content">
        <NewGame />
        <Games />
      </div>
    </div>
  )
}
