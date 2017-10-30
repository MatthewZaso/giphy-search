import React, { Component } from 'react';
import Search from '../components/Search';
import { GifGridItem } from '../components/GifGridItem';
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
  }

  _onSearch(evt) {
    evt.preventDefault();

    this.props.search(evt.target.querySelector('.search-form__input').value);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>App.js</h2>
        </div>
        <Search on_search={this._onSearch} />
        <div className="container">
          <div className="row">
            <GifGridItem preview_url={'//placehold.it/300x300'} giphy_id={1} />
            <GifGridItem preview_url={'//placehold.it/300x300'} giphy_id={2} />
            <GifGridItem preview_url={'//placehold.it/300x300'} giphy_id={3} />
            <GifGridItem preview_url={'//placehold.it/300x300'} giphy_id={4} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selected: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (query) => {
      dispatch(search(query));
    },
    selectGif: (id) => {
      dispatch(selectGif(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
