const {getNewId, generateNumberArray}  =  require('./../utils/utils');

const game = state => {
  return {
    createNewNumber: gameId => {
      const game = state[gameId];
      let numbersToReveal = game.numbersToReveal;
      if(numbersToReveal.length === 0) return;
      const n = numbersToReveal.splice(Math.floor(Math.random() * numbersToReveal.length), 1)[0];
      game.numbers.push(n);
    },
    markGameCompleted: (gameId) => {
      state[gameId]['completed'] = true;
    },
    validateTicket: (ticketNumbers, gameId) => {
      let game = state[gameId];
      return ticketNumbers.filter(x => game.numbers.indexOf(parseInt(x)) === -1).length === 0;
    }
  }
}

const games = state => {
  return {
    getAll: () => ({...state}),
    getGameById: id => ({[id]: {...state[id]}}),
    createNewGame: data => {
      const id = getNewId()
      state[id] = {
        ...data,
        numbers: [],
        numbersToReveal: generateNumberArray(100),
        completed: false
      }
      return {[id]: state[id]}
    }
  }
}


const creator = () => {
  //{createdBy:string, title:string, numbers: {'1':true}}
  let state = {}

  return Object.assign(
    {},
    games(state),
    game(state)
  )
}

module.exports = creator();
