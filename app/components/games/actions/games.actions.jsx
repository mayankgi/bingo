//@flow

import {ALL_GAMES_ACTION_TYPE} from './../types/games.types';

export const ALL_GAMES_ACTION_SERVER = 'server/getAllGames';

export const getAllGames = ():ALL_GAMES_ACTION_TYPE => {
  return {
    type: ALL_GAMES_ACTION_SERVER
  }
}
