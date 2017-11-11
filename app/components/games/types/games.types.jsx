import {ALL_GAMES_ACTION_SERVER} from './../actions/games.actions';

import {
  ALL_GAMES_ACTION_CLIENT,
  NEW_GAME_ACTION_CLIENT,
  NEW_NUMBER_CREATED_CLIENT,
  ACTIVE_GAME_CLIENT
} from './../reducers/games.reducers';

export type GAME_TYPE = {
  [id: string]: {
    title: string,
    createdBy: string,
    numbers: Array<number>
  }
}

export type GAMES_TYPE = Object<GAME>;

export type GAMES_PROPS_TYPE = {
  dispatch: Function,
  games: GAMES
}

export type ALL_GAMES_ACTION_TYPE = {
  type: ALL_GAMES_ACTION_SERVER
}

export type GAMES_REDUCER_TYPE = GAMES_TYPE;

export type GAMES_REDUCER_ACTION = {
  type: ALL_GAMES_ACTION_CLIENT | NEW_GAME_ACTION_CLIENT | NEW_NUMBER_CREATED_CLIENT | ACTIVE_GAME_CLIENT,
  payload: GAMES_TYPE | GAME_TYPE
}
