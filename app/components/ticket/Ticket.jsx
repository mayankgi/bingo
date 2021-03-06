//@flow

import './ticket.scss';
import React from 'react';

import {TICKET_PROPS_TYPE, TICKET_NUMBER_TYPE} from './types/ticket.types';


export default (props:TICKET_PROPS_TYPE) => {

  const renderNumbers = (numbers:TICKET_NUMBER_TYPE) =>{
    return Object.keys(numbers).map(number=>{
      return (
        <li
          class={numbers[number].selected ? 'cross' : ''}
          onClick = {()=>props.selectNumber(props.id, number)}
        >
          {number}
        </li>
      )
    })
  }

  return (
    <div class="ticket">
      <h3>
        <span>Player Ticket</span>
        <span class="ticket-number">{props.ticketNumber}</span>
      </h3>
      <ul>
        {renderNumbers(props.numbers)}
      </ul>
    </div>
  )
}
