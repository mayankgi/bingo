//@flow
import './managerRoom.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from './actions/managerRoom.actions';
import {MANAGER_ROOM_PROPS_TYPE} from './types/managerRoom.types';

import Header from 'components/header/Header';
import NumbersList from 'components/numbers-list/NumbersList';

export class ManagerRoom extends Component{

  props: MANAGER_ROOM_PROPS_TYPE;
  generateNewNumber: Function;

  constructor(props:MANAGER_ROOM_PROPS_TYPE){
    super(props);
    this.generateNewNumber = this.generateNewNumber.bind(this);
  }

  componentWillMount(){
    const {location, dispatch} = this.props;
    const id = location.query.id;
    dispatch(actions.getGameById(id));
  }

  generateNewNumber(){
    const {location, dispatch} = this.props;
    const id = location.query.id;
    dispatch(actions.generateNewNumber(id));
  }

  getNumbers(){
    const {activeGame} = this.props;
    const gameKeys = Object.keys(activeGame);
    if(gameKeys.length === 0) return [];
    return [...activeGame[gameKeys[0]].numbers].reverse();
  }

  render(){
    return (
      <div class="manager-room">
        <Header></Header>
        <button class="button-primary" onClick={this.generateNewNumber}>Draw Number</button>
        <div>
          <NumbersList numbers={this.getNumbers()}></NumbersList>
        </div>
      </div>

    )
  }
}

export default connect(state => {
  return {
    activeGame : state.activeGame
  }
})(ManagerRoom);
