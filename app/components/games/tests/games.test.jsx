import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import ConnectedComponent, {Games} from '../Games';
import GameTile from 'components/game-tile/GameTile';
/*Setup*/
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/*Setup end*/

describe('<Games />', ()=>{

  let store, component, connectedComponent;
  const initialData = {
    games:{
      'HNQ': {
        title: 'Title1',
        createdBy: 'Name1'
      },
      'ZNZ': {
        title: 'Title2',
        createdBy: 'Name2'
      }
    }
  }

  beforeEach(()=>{
    store = configureMockStore([thunk])(initialData);
    connectedComponent = shallow(<ConnectedComponent store={store} />);
    component = connectedComponent.find(Games).dive();
  });

  it('should render', () => expect(component).to.have.length(1));

  it('shoud contain 2 <GameTile />', ()=>{
    expect(component.find(GameTile)).to.have.length(2);
  })

  it.skip('should call action to get all games', ()=>{})
})
