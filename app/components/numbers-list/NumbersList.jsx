import './numbersList.scss';
import React from 'react';

export default props => {

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
