import {
  GENERATE_TICKET_SERVER,
  SUBMIT_TICKET_SERVER,
  SELECT_NUMBER
} from './../actions/playerRoom.actions';

import {TICKET_TYPE} from 'components/ticket/types/ticket.types';

export type GENERATE_TICKET_ACTION_TYPE = {
  type: GENERATE_TICKET_SERVER,
  payload: {
    numberOfTickets:number
  }
}

export type SELECT_NUMBER_ACTION_TYPE = {
  type: SELECT_NUMBER,
  payload: {
    id: string,
    number:number
  }
}

export type SUBMIT_TICKET_ACTION_TYPE = {
  type: SUBMIT_TICKET_SERVER,
  payload: {
    tickets: Object<TICKET_TYPE>,
    gameId: number
  }
}
