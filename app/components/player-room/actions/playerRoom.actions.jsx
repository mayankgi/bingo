//@flow

import {
  GENERATE_TICKET_ACTION_TYPE,
  SELECT_NUMBER_ACTION_TYPE,
  SUBMIT_TICKET_ACTION_TYPE
} from './../types/playerRoom.types';

import {TICKET_TYPE} from 'components/ticket/types/ticket.types';

export const SELECT_NUMBER = 'SELECT_NUMBER';
export const GENERATE_TICKET_SERVER = 'server/generateTickets';
export const SUBMIT_TICKET_SERVER = 'server/submitTickets';

export const generateTickets = (numberOfTickets:number = 1):GENERATE_TICKET_ACTION_TYPE => {
  return {
    type: GENERATE_TICKET_SERVER,
    payload: {numberOfTickets}
  }
}

export const selectNumber = (id:string, number:number):SELECT_NUMBER_ACTION_TYPE => {
  return {
    type: SELECT_NUMBER,
    payload: {id, number}
  }
}

export const submitTickets = (tickets: TICKET_TYPE, gameId:string):SUBMIT_TICKET_ACTION_TYPE => {
  return {
    type: SUBMIT_TICKET_SERVER,
    payload: {tickets, gameId}
  }
}
