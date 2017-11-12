import {SELECT_NUMBER} from './../actions/playerRoom.actions';

export const TICKETS_CREATED_CLIENT = 'client/ticketsCreated';

export const tickets = (state = {}, action) => {
  switch (action.type) {
    case TICKETS_CREATED_CLIENT:
      return {...action.payload}
    case SELECT_NUMBER:
      const {id, number} = action.payload;
      return {
        ...state,
        [id]: {
          numbers:{
            ...state[id].numbers,
            [number]:{selected:true}
          }
        }
      }
    default:
      return state;
  }
}

export const winningTickets = (state = {}, action) => {
  switch (action.type) {
    case 'client/winningTickets':
      return {...action.payload};
    default:
      return state;
  }
}
