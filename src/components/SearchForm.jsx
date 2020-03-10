import React from 'react';
import InputTemplate from './InputTemplate';

const SearchForm = props => {
  return (
    <form className={props.class} id={props.id}>
      <h2 className="form-title">{props.title}</h2>

      <div className="wrap-form">
        {props.inputs.map((input, index) =>
          <InputTemplate {...input} key={index} />
        )}
      </div>
    </form>
  )
}

export default SearchForm;