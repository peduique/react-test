import React from 'react';
import Input from './Input';
import Select from './Select';

const InputTemplate = props => {
  console.log(props)
  return (
    <>
      {(props.type === 'text' || props.type === 'search_team') && 
        <Input {...props} onChangeInput={props.onChangeInput} />
      }
      {(props.type === 'multi_select' || props.type === 'select') && 
        <Select {...props} />
      }
    </>
  )
}

export default InputTemplate;