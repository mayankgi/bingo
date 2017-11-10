import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import Dashboard from '../Dashboard';
import NewGame from 'components/new-game/NewGame';
import Games from 'components/games/Games';
import Header from 'components/header/Header';

/*Setup*/
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/*Setup end*/

describe('<Dashboard />', _ => {

  let component;

  beforeEach(() => {
    component = shallow(<Dashboard />);
  })

  it('should render', () => expect(component).to.have.length(1));

  it('should contain <Header />', ()=>
    expect(component.find(Header)).to.have.length(1)
  )

  it('should contain <NewGame />', ()=>
    expect(component.find(NewGame)).to.have.length(1)
  )

  it('should contain <Games />', ()=>
    expect(component.find(Games)).to.have.length(1)
  )
})
