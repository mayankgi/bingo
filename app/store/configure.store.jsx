//@flow

import * as redux from 'redux';
import thunk from 'redux-thunk';
import createSocketIoMiddleware from 'redux-socket.io';

const SERVER_URL = 'http://localhost:3000';
import io from 'socket.io-client';
const socket = io(SERVER_URL);
const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

//App reducers
import {games, activeGame} from 'components/games/reducers/games.reducers';
import {tickets, winningTickets} from 'components/player-room/reducers/playerRoom.reducers';

const reducers = redux.combineReducers({
  games,
  activeGame,
  tickets,
  winningTickets
});

export var configure = (initialState:Object= {}) => {
  var store = redux.createStore(reducers, initialState, redux.compose(
    redux.applyMiddleware(thunk, socketIoMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
