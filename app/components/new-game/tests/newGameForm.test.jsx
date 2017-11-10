import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import NewGameForm from '../screens/new-game-form/NewGameForm';

/*Setup*/
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/*Setup end*/

describe('<NewGameForm />', () => {

  let component;
  
  beforeEach(()=> component = shallow(<NewGameForm />));

  it('should render', ()=> expect(component).to.have.length(1));

  it('should contain title input', () =>
    expect(component.find('input[name="title"]')).to.have.length(1)
  )

  it('should contain created by input', () =>
    expect(component.find('input[name="createdBy"]')).to.have.length(1)
  )

  it('should call onSubmit prop method on form submit', ()=>{
     var spy = sinon.spy();
     component.setProps({onSubmit: spy});
     component.find('form').simulate('submit');
     expect(spy.calledOnce).to.be.true;
  })

  it('should call onValueChange prop method on input value change', ()=>{
    var spy = sinon.spy();
    component.setProps({onValueChange: spy});
    component.find('input[name="title"]').simulate('change');
    expect(spy.calledOnce).to.be.true;
    component.find('input[name="createdBy"]').simulate('change');
    expect(spy.calledTwice).to.be.true;
  })

})
