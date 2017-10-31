import React, { Component } from 'react';
import Search from '../components/Search';
import { GifGridItem } from '../components/GifGridItem';
import { connect } from 'react-redux';
import { selectGif, updateGifData } from '../actions/dataActions';

const API_KEY = '5u1dZor3NNYiALYROwvO7wSEpa05Q3Al';
const TRENDING_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&rating=G`;
const SEARCH_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=testing&limit=25&offset=0&rating=G&lang=en`;

class App extends Component {
  constructor(props) {
    super(props);

    this._onSelect = this._onSelect.bind(this);
    this._onSearch = this._onSearch.bind(this);
  }

  _onSearch(evt) {
    evt.preventDefault();
    let searchData = this._getSearchData(evt.target.querySelector('.search-form__input').value);
  }

  _onSelect(evt) {
    this.props.selectGif(1);
  }

  _getSearchData(query) {
    const options = {
      headers: {
        Accept: 'application/json',
      },
    };

    const handleOk = response => response.json().then((response) => {
      console.log(response.data);
      this.props.updateGifData(response.data);
    });

    return fetch(SEARCH_URL + '&q=' + query, options)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response;
        } else {
          const error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
      }).then(handleOk, err => console.log(status));
  }

  render() {
    return (
      <div className="app">
        <div className="app__header">
          <h1 className="app__title">Giphy Search</h1>
          <Search on_search={this._onSearch} />
        </div>
        <div className="container">
          <div className="gif-grid-row row">
            {this.props.gifData.map((item, index) => {
              return <GifGridItem preview_url={item.images.fixed_height_downsampled.url} on_select={this._onSelect} giphy_id={item.id} />
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gifData: state.gifData,
    selected: state.selected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateGifData: (newData) => {
      dispatch(updateGifData(newData));
    },
    selectGif: (id) => {
      dispatch(selectGif(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
