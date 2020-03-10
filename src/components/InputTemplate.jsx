import React from 'react';
import Input from './Input';
import Select from './Select';

const InputTemplate = props => {
  console.log(props)
  return (
    <>
      {props.type === 'text' && <Input {...props} />}
      {(props.type === 'multi_select' || props.type === 'select') && <Select {...props} />}
    </>
  )
}

export default InputTemplate;