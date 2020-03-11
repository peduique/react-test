import React from 'react';
import InputTemplate from './InputTemplate';

const SearchForm = props => {
  return (
    <form className={`search-form ${props.class}`} id={props.id}>
      <h2 className="search-form__title">{props.title}</h2>

      <div className="search-form__wrap">
        {props.inputs.map((input, index) =>
          <InputTemplate 
            {...input}
            key={index}
            onChangeInput={props.onChangeInput}
          />
        )}
      </div>
      
      <div className="search-form__control">
        {props.buttons.map((button, index) => 
          <button 
            key={index}
            className={button.class}
            id={button.id}
            onClick={props.onSubmitForm}
          >
              {button.text}
          </button>
        )}
      </div>
    </form>
  )
}

export default SearchForm;