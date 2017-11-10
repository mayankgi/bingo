import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import GameTile from '../GameTile';

/*Setup*/
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/*Setup end*/

describe('<GameTile />', ()=>{

  let component;
  const id = 'HNQ', title = 'GameTitle', createdBy = 'Mayank Gupta';
  beforeEach(()=>
    component = shallow(<GameTile id={id} data={{title, createdBy}} />)
  );

  it('should render', ()=> expect(component).to.have.length(1));

  it('should contain <a> with player link href', ()=>{
    const expectedLink = `/#/player?id=${id}`;
    expect(component.find({href: expectedLink})).to.have.length(1);
  })

  it('should contain title text', ()=>
    expect(component.find('.game-title').text()).to.be.equal(title)
  )

  it('should contain createdBy text', ()=>
    expect(component.find('.created-by-text').text()).to.be.equal(createdBy)
  )
})
