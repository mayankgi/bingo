const socket_io = require('socket.io');
const games = require('./services/games');
const {generateTicket} = require('./services/ticket');

const ticketEmitter = (io, socket) => {
  return {
    newTickets: (tickets) => {
      socket.emit('action', {
        type:'client/ticketsCreated',
        payload: tickets
      })
    },

    winningTickets: (tickets) => {
      io.sockets.emit('action', {
        type:'client/winningTickets',
        payload: tickets
      })
    }
  }
}

const gameEmitter = (io, socket) => {
  return {
    allGames: (games) => {
      io.sockets.emit('action', {
        type:'client/allGames',
        payload: {...games}
      })
    },
    newGame: (game) => {
      io.sockets.emit('action', {
        type:'client/newGame',
        payload: {...game}
      })
    },
    activeGame: (game) => {
      socket.emit('action', {
        type:'client/activeGame',
        payload: {...game}
      })
    },
    newNumberCreated: (data) =>{
      io.sockets.emit('action', {
        type:'client/newNumberCreated',
        payload: data
      })
    }
  }
}


const createSocketConnection = server => {
  let io = socket_io();
  io.attach(server);
  io.on('connection', socket => {
    console.log("Socket connected: " + socket.id);
    const gameSocket = gameEmitter(io, socket);
    const ticketSocket = ticketEmitter(io, socket);
    socket.on('action', action => {
      switch (action.type) {
        case 'server/getAllGames':
          gameSocket.allGames(games.getAll());
          break;
        case 'server/newGame':
          const newGame = games.createNewGame(action.data)
          gameSocket.newGame(newGame);
          gameSocket.activeGame(newGame);
          break;
        case 'server/getGameById':
          gameSocket.activeGame(games.getGameById(action.payload.gameId));
          break;
        case 'server/generateNewNumber':
          const gameId = action.payload.gameId;
          games.createNewNumber(gameId);
          gameSocket.newNumberCreated({
            gameId,
            numbers: games.getGameById(gameId)[gameId].numbers
          })
          break;
        case 'server/generateTickets':
          const numberOfTickets = action.payload.numberOfTickets;
          let tickets = {};
          for(let i = 0; i < numberOfTickets; i++){
            Object.assign(tickets, generateTicket());
          }
          ticketSocket.newTickets(tickets);
          break;


        case 'server/submitTickets':
          const alltickets = action.payload.tickets;
          let validTicket = {};
          let gameCompleted = false;
          Object.keys(alltickets).forEach((ticketKey)=>{
            let numbers = Object.keys(alltickets[ticketKey].numbers);
            if(games.validateTicket(numbers, action.payload.gameId)){
              validTicket[ticketKey] = true;
              gameCompleted = true;
            }
          });
          if(gameCompleted) games.markGameCompleted(action.payload.gameId);
          ticketSocket.winningTickets(validTicket);
          break;


        default:

      }
    })
  })
}

module.exports = createSocketConnection;
