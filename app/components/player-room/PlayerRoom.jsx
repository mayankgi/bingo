import './playerRoom.scss';

import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as roomActions from 'components/manager-room/actions/managerRoom.actions';
import * as actions from './actions/playerRoom.actions'
import Ticket from 'components/ticket/Ticket';
import NumbersList from 'components/numbers-list/NumbersList';
import Header from 'components/header/Header';

const NUMBER_OF_TICKETS_TO_GENERATE = 2;
export class PlayerRoom extends Component{

  constructor(props){
    super(props);
    this.selectNumber = this.selectNumber.bind(this);
    this.submitTicket = this.submitTicket.bind(this);
  }

  componentWillMount(){
    const {location, dispatch} = this.props;
    const gameId = location.query.id;
    dispatch(roomActions.getGameById(gameId));
    dispatch(actions.generateTickets(NUMBER_OF_TICKETS_TO_GENERATE));
  }

  componentWillReceiveProps(nextProps){
    const {winningTickets, tickets} = nextProps;
    const winningKeys = Object.keys(winningTickets);
    let winnerFound = false;
    winningKeys.forEach((key) => {
      if(tickets[key]) {
        winnerFound = true;
        alert('Congratulations! You are the winner!')
      }
    })
    if(!winnerFound && winningKeys.length > 0){
      alert('Sorry! Game Over. Try again next time.')
    }
    //TODO: Save Ticket keys in variable so we dont have to get keys from object
    //multiple times
  }

  getNumbers(){
    const {activeGame} = this.props;
    const gameKeys = Object.keys(activeGame);
    if(gameKeys.length === 0) return [];
    const numbers = activeGame[gameKeys[0]].numbers
    return [...activeGame[gameKeys[0]].numbers].reverse();
  }

  selectNumber(id, number){
    const {dispatch} = this.props;
    if(this.validateSelectedNumber(number)){
      dispatch(actions.selectNumber(id, number));
    }
  }

  validateSelectedNumber(selectedNumber){
    selectedNumber = parseInt(selectedNumber);
    return this.getNumbers().includes(selectedNumber);
  }

  submitTicket(){
    const {tickets, location, dispatch} = this.props;
    let filledTickets = {};
    //get filled ticket
    Object.keys(tickets).forEach(key => {
      if(this.validateTicket(tickets[key])) filledTickets[key] = {...tickets[key]}
    });
    dispatch(actions.submitTickets(filledTickets, location.query.id));
  }

  //check if all numbers are crossed  off
  validateTicket(ticket){
    let isValid = true;
    for(let x in ticket.numbers){
      if(!ticket.numbers[x].selected){
        isValid = false;
        break;
      }
    }
    return isValid;
  }

  renderTickets(){
    const {tickets} = this.props;
    let list = [];
    Object.keys(tickets).forEach((key, i) => {
      const ticket = tickets[key];
      list.push(
        <li key={key}>
          <Ticket numbers={ticket.numbers} id={key} ticketNumber={i+1} selectNumber={this.selectNumber} />
        </li>
      )
    })
    return list;
  }


  render(){
    return (
      <div class="player-room">
        <Header></Header>
        <ul class="tickets-list">
          {this.renderTickets()}
        </ul>
        <button class="button-primary" onClick={this.submitTicket}>Call Bingo</button>
        <div class="numbers-drawn">
          <NumbersList numbers={this.getNumbers()}></NumbersList>
        </div>
      </div>
    )
  }

}

export default connect(state => {
  return {
    activeGame: state.activeGame,
    tickets: state.tickets,
    winningTickets: state.winningTickets
  }
})(PlayerRoom);
