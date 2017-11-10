import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import Ticket from '../Ticket';

/*Setup*/
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/*Setup end*/

describe('<Ticket />', ()=>{

  let component;
  const numbers = {'1':{}, '2':{}, '3':{}, '4':{}, '5':{}}
  const numbersAsArr = Object.keys(numbers);
  const ticketNumber = '1';
  beforeEach(()=>
    component = shallow(<Ticket numbers={numbers} ticketNumber = {ticketNumber} />)
  );

  it('should render', ()=> expect(component).to.have.length(1));

  it('should contain ticket number', ()=>
    expect(component.find('.ticket-number').text()).to.be.equal(ticketNumber)
  )

  it('should contain passed numbers', ()=> {
    const list = component.find('.ticket ul li');
    expect(list).to.have.length(numbersAsArr.length);
    list.forEach((ele, i) => expect(ele.text()).to.equal(numbersAsArr[i]))
  });

  it.skip('should have class cross for selected number', ()=>{});

  it.skip('should call selectNumber() from props', ()=>{})
})
