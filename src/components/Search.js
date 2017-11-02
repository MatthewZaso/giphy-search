import React from 'react';

export const Search = (props) => {
  return (
    <form className="search-form col-12" onSubmit={this.props.on_search}>
      <input className="search-form__input" type="text" name="search" />
      <button className="search-form__button">Search</button>
    </form>
  );
}
