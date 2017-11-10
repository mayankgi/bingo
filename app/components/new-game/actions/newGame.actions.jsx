export const createNewGame = data => {
  return {
    type: 'server/newGame',
    data: data
  }
}
