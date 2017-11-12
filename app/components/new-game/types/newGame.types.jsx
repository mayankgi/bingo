import {GAME_TYPE} from 'components/games/types/games.types';
import {NEW_GAME_SERVER} from './../actions/newGame.actions';

export type NEW_GAME_DATA_TYPE = {
  title: string,
  createdBy: string
}

export type CREATE_NEW_GAME_ACTION_TYPE = {
  type: NEW_GAME_SERVER,
  data: NEW_GAME_DATA_TYPE
}

export type NEW_GAME_STATE_TYPE = NEW_GAME_DATA_TYPE;

export type NEW_GAME_PROPS_TYPE = {
  dispatch: Function,
  activeGame: GAME_TYPE
}

export type NEW_GAME_FORM_PROPS_TYPE = {
  onSubmit: Function,
  onValueChange: Function,
}
