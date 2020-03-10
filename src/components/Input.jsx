import React from 'react';

const Input = props => {
  return (
    <input 
      placeholder={props.placeholder}
      name={props.name}
      onChange={(e) => props.onChangeInput(e)}
    />
  );
}

export default Input;