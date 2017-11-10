import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';
import { browserHistory } from 'react-router'

import {NewGame} from '../NewGame';

/*Setup*/
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/*Setup end*/

describe('<NewGame />', ()=>{

  let component;

  beforeEach(()=>component = shallow(<NewGame />));

  it('should render', () => expect(component).to.have.length(1));

  it('should set state on valueChange()', ()=>{
    const value = {name: 'title', value: 'testValue'};
    const event = {target: value}
    component.instance().onValueChange(event);
    expect(component.state().title).to.be.eql(value.value);
  });

  it.skip('should call createNewGame action onSubmit()', ()=>{});
})
