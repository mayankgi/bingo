//@flow
import {
  NEW_GAME_DATA_TYPE,
  CREATE_NEW_GAME_ACTION_TYPE
} from './../types/newGame.types';

export const NEW_GAME_SERVER = 'server/newGame';

export const createNewGame = (data:NEW_GAME_DATA_TYPE):CREATE_NEW_GAME_ACTION_TYPE => {
  return {
    type: NEW_GAME_SERVER,
    data: data
  }
}
