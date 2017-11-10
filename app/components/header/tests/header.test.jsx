import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import Header from '../Header';

/*Setup*/
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/*Setup end*/

describe('<Header />', ()=>{
  let component;
  beforeEach(()=> component = shallow(<Header />));

  it('should render', ()=> expect(component).to.have.length(1));

  it('should contain logo', ()=> expect(component.find('.logo')).to.have.length(1));
})
