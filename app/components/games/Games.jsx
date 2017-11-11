//@flow

import './games.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router'

import * as actions from './actions/games.actions';
import {GAMES_PROPS_TYPE} from './types/games.types';

import GameTile from 'components/game-tile/GameTile';

export class Games extends Component{

  props: GAMES_PROPS_TYPE;

  componentWillMount(){
    const {dispatch} = this.props;
    dispatch(actions.getAllGames())
  }

  renderGameTiles(){
    const {games} = this.props;
    return Object.keys(games).map(key =>
      <li key={key}>
        <GameTile data={games[key]} id={key} />
      </li>
    )
  }

  render(){
    return (
      <div class="games">
        <h1>Active Games</h1>
        <ul class="games-list">
          {this.renderGameTiles()}
        </ul>
      </div>
    )
  }
}

export default connect((state)=>{
  return {
    games: state.games
  }
})(Games);
