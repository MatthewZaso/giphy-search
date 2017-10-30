import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.props.on_search}>
        <input className="search-form__input" type="text" name="search" />
        <button>Search</button>
      </form>
    );
  }
}

export default Search;
