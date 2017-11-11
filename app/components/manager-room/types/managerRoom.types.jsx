import {GAME_TYPE} from 'components/games/types/games.types';

import {
  GENERATE_NUMBER_SERVER,
  GET_GAME_BY_ID_SERVER
} from './../actions/managerRoom.actions';

export type GENERATE_NUMBER_ACTION_TYPE = {
  type: GENERATE_NUMBER_SERVER,
  payload: {
    gameId: number
  }
}

export type GET_GAME_BY_ID_ACTION_TYPE = {
  type: GET_GAME_BY_ID_SERVER,
  payload: {
    gameId: number
  }
}

export type MANAGER_ROOM_PROPS_TYPE = {
  dispatch: Function,
  activeGame: GAME_TYPE
}
