//@flow

import './numbersList.scss';
import React from 'react';

import {NUMBER_LIST_PROPS_TYPE} from './types/numberList.types';

export default (props:NUMBER_LIST_PROPS_TYPE) => {

  const renderList = numbers => numbers.map(number=><li>{number}</li>);

  return (
    <div>
      <h1>Numbers Drawn</h1>
      <ul class="numbers-list">
        {renderList(props.numbers)}
      </ul>
    </div>
  )
}
