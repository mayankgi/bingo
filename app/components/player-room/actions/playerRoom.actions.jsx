export const SELECT_NUMBER = 'SELECT_NUMBER';

export const generateTickets = (numberOfTickets = 1) => {
  return {
    type: 'server/generateTickets',
    payload: {numberOfTickets}
  }
}

export const selectNumber = (id, number) => {
  return {
    type: SELECT_NUMBER,
    payload: {id, number}
  }
}

export const submitTickets = (tickets, gameId) => {
  return {
    type: 'server/submitTickets',
    payload: {tickets, gameId}
  }
}
