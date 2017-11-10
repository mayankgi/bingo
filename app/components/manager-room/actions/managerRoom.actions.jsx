export const generateNewNumber = gameId => {
  return {
    type: 'server/generateNewNumber',
    payload: {
      gameId: gameId
    }
  }
}

export const getGameById = gameId => {
  return {
    type: 'server/getGameById',
    payload: {
      gameId: gameId
    }
  }
}
