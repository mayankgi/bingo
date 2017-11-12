export type TICKET_NUMBER_TYPE = {
  [id:string]: {
    selected: boolean
  }
}

export type TICKET_TYPE = {
  [id:string] : {
    numbers: Object<TICKET_NUMBER_TYPE>
  }
}

export type TICKET_PROPS_TYPE = {
  ticketNumber: string,
  numbers: Object<TICKET_NUMBER_TYPE>,
  selectNumber: Function
}
