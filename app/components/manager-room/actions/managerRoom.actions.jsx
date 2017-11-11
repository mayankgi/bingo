//@flow

import {
  GENERATE_NUMBER_ACTION_TYPE,
  GET_GAME_BY_ID_ACTION_TYPE
} from './../types/managerRoom.types';

export const GENERATE_NUMBER_SERVER = 'server/generateNewNumber';
export const GET_GAME_BY_ID_SERVER = 'server/getGameById';

export const generateNewNumber = (gameId:number):GENERATE_NUMBER_ACTION_TYPE => {
  return {
    type: GENERATE_NUMBER_SERVER,
    payload: {
      gameId: gameId
    }
  }
}

export const getGameById = (gameId:number):GET_GAME_BY_ID_ACTION_TYPE => {
  return {
    type: GET_GAME_BY_ID_SERVER,
    payload: {
      gameId: gameId
    }
  }
}
