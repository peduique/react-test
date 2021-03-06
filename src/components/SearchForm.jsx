import React from 'react';
import InputTemplate from './InputTemplate';

const SearchForm = props => {
  const ref = React.createRef();
  const handleClickSearchForm = () => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
    <form className={`search-form ${props.class}`} id={props.id} ref={ref}>
      <button className="search-form__btn-mobile" type="button" onClick={handleClickSearchForm}>Search</button>

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