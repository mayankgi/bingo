export const games = (state = {}, action) => {
  switch (action.type) {
    case 'client/allGames':
      return {...action.payload};
    case 'client/newGame':
      return {...state, ...action.payload};
    case 'client/newNumberCreated':
      return updateNumbers(state, action);
    default:
      return state;
  }
}

export const activeGame = (state = {}, action) => {
  switch (action.type) {
    case 'client/activeGame':
      return {...action.payload};
    case 'client/newNumberCreated':
      return updateNumbers(state, action);
    default:
      return state;
  }
}

const updateNumbers = (state, action) => {
  const {gameId, numbers} = action.payload;
  let copy = {...state};
  if(copy[gameId]) copy[gameId].numbers = numbers;
  return copy;
}
