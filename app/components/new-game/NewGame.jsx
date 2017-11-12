//@flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router'

import * as actions from './actions/newGame.actions';
import {NEW_GAME_STATE_TYPE, NEW_GAME_PROPS_TYPE} from './types/newGame.types';
import NewGameForm from './screens/new-game-form/NewGameForm';

export class NewGame extends Component{

  state: NEW_GAME_STATE_TYPE;
  props: NEW_GAME_PROPS_TYPE;
  onSubmit: Function;
  onValueChange: Function;

  constructor(props:NEW_GAME_PROPS_TYPE){
    super(props);

    this.state = {
      title: '',
      createdBy: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  componentWillReceiveProps(nextProps:NEW_GAME_PROPS_TYPE){
    //Redirect to manager page with active game
    const activeGameKeys = Object.keys(nextProps.activeGame);
    if(activeGameKeys.length > 0){
      browserHistory.push(`/#/manager?id=${activeGameKeys[0]}`);
      window.location.reload();
    }
  }

  shouldComponentUpdate(){
    return false;
  }

  //Update state with input value change
  onValueChange(event:SyntheticInputEvent){
    const {name, value} = event.target;
    this.setState({[name]: value})
  }

  //handle form submit
  onSubmit(event:SyntheticEvent){
    const {dispatch} = this.props;
    dispatch(actions.createNewGame({...this.state}));
    event.preventDefault();
    return false;
  }

  render(){
    return (
      <div>
        <NewGameForm onSubmit={this.onSubmit} onValueChange={this.onValueChange} />
      </div>
    )
  }
}

export default connect(state => {
  return {
    activeGame : state.activeGame
  }
})(NewGame);
