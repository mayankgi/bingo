//@flow
import './gameTile.scss';
import React from 'react';
import {GAME_TILE_TYPE_PROPS} from './types/gameTile.types';

export default (props:GAME_TILE_TYPE_PROPS) => {
  return (
    <div class="game-tile">
      <a href={`/#/player?id=${props.id}`}>
        <h3 class="game-title">
          {props.data.title}
        </h3>
        <div class="game-created-by">
          <span>Created by: </span>
          <span class="created-by-text">{props.data.createdBy}</span>
        </div>
      </a>
    </div>
  )
}
