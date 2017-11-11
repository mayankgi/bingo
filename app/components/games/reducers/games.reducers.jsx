//@flow

import {
  GAMES_REDUCER_TYPE,
  GAMES_REDUCER_ACTION
} from './../types/games.types';


export const ALL_GAMES_ACTION_CLIENT = 'client/allGames';
export const NEW_GAME_ACTION_CLIENT = 'client/newGame';
export const NEW_NUMBER_CREATED_CLIENT = 'client/newNumberCreated';
export const ACTIVE_GAME_CLIENT = 'client/activeGame';


export const games = (state:GAMES_REDUCER_TYPE = {}, action:GAMES_REDUCER_ACTION):GAMES_REDUCER_TYPE => {
  switch (action.type) {
    case ALL_GAMES_ACTION_CLIENT:
      return {...action.payload};
    case NEW_GAME_ACTION_CLIENT:
      return {...state, ...action.payload};
    case NEW_NUMBER_CREATED_CLIENT:
      return updateNumbers(state, action);
    default:
      return state;
  }
}

export const activeGame = (state:GAMES_REDUCER_TYPE = {}, action:GAMES_REDUCER_ACTION):GAMES_REDUCER_TYPE => {
  switch (action.type) {
    case ACTIVE_GAME_CLIENT:
      return {...action.payload};
    case NEW_NUMBER_CREATED_CLIENT:
      return updateNumbers(state, action);
    default:
      return state;
  }
}

const updateNumbers = (state:GAMES_REDUCER_TYPE, action:GAMES_REDUCER_ACTION):GAMES_REDUCER_TYPE => {
  const {gameId, numbers} = action.payload;
  let copy = {...state};
  if(copy[gameId]) copy[gameId].numbers = numbers;
  return copy;
}
