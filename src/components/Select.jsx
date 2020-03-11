import React from 'react';

const Select = props => {
  return (
    <select>
      {props.options.map(option => <option value={option.value} key={option.value}>{option.name}</option>)}
    </select>
  );
}

export default Select;