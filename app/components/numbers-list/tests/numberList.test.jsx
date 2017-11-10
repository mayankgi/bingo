import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import NumbersList from '../NumbersList';

/*Setup*/
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/*Setup end*/

describe('<NumbersList />', ()=>{
  let component;
  const numbers = ['1', '2', '3', '4', '5'];
  beforeEach(()=> component = shallow(<NumbersList numbers={numbers}/>));

  it('should render', ()=> expect(component).to.have.length(1));

  it('should contain passed numbers', ()=> {
    const list = component.find('.numbers-list li');
    expect(list).to.have.length(numbers.length);
    list.forEach((ele, i) => expect(ele.text()).to.equal(numbers[i]))
  })
})
