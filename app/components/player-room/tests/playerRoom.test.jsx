import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import ConnectedComponent, {PlayerRoom} from '../PlayerRoom';

/*Setup*/
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/*Setup end*/

describe('<PlayerRoom />', ()=>{
  let store, component, connectedComponent;

  const initialData = {
    activeGame: {
      'G123': {
        numbers:[1,2,3]
      }
    },
    tickets:{
      'T123': {
        numbers: {1: {selected: false}}
      }
    },
    winningTickets: {}
  };

  beforeEach(()=> {

  });

  

});
