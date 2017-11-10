import React, {Component} from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router'

import * as actions from './actions/newGame.actions';
import NewGameForm from './screens/new-game-form/NewGameForm';

export class NewGame extends Component{

  constructor(props){

    super(props);

    this.state = {
      title: '',
      createdBy: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  componentWillReceiveProps(nextProps){
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
  onValueChange(event){
    const {name, value} = event.target;
    this.setState({[name]: value})
  }

  //handle form submit
  onSubmit(event){
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
