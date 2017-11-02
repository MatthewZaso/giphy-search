/**
 * @fileoverview App
 * @overview Our container for the entire application.
 * Responsible for instantiating each component as well as
 * performing the fetch requests to the giphy API.
 */
import React, { Component } from 'react';
import { Search } from '../components/Search';
import { GifGridItem } from '../components/GifGridItem';
import { ExpandedModal } from '../components/ExpandedModal';
import { connect } from 'react-redux';
import { selectGif, updateGifData } from '../actions/dataActions';

// Our giphy api key and URLS to use.
const API_KEY = '5u1dZor3NNYiALYROwvO7wSEpa05Q3Al';
const TRENDING_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&rating=G`;
const SEARCH_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=testing&limit=25&offset=0&rating=G&lang=en`;

class App extends Component {
  constructor(props) {
    super(props);

    // Binding our listeners here so they maintain
    // their context.
    this._onSelect = this._onSelect.bind(this);
    this._onSearch = this._onSearch.bind(this);
    this._onClose = this._onClose.bind(this);
  }

  /**
   * onSubmit handler for when a user performs a search using the
   * search bar.
   * @param {SytheticEvent} evt
   */
  _onSearch(evt) {
    evt.preventDefault();
    const query = evt.target.querySelector('.search-form__input').value;

    this._getGifData(SEARCH_URL + '&q=' + query);
  }

  /**
   * Click handler fired when the user clicks an item in the grid.
   * @param {SytheticEvent} evt
   */
  _onSelect(evt) {
    const baseTarget = evt.target.closest('.gif-grid-item');
    const id = baseTarget.getAttribute('data-giphy-id');

    this.props.selectGif(this._getGifObjectById(id));
  }

  /**
   * Called when the user closes the modal.
   * @param {SytheticEvent} evt
   */
  _onClose(evt) {
    this.props.selectGif(false);
  }

  /**
   * Returns the first matching gif object for the selected gif from
   * the data stored in the props object.
   * @param {string} id The giphy id as a string.
   * @return {Object} The singular giphy gif object.
   */
  _getGifObjectById(id) {
    return this.props.gifData.find(el => {
      return el.id === id;
    });
  }

  /**
   * Uses fetch to retrieve the json data from the giphy servers for
   * all calls, then updates our data in the store by using the appropriate
   * function. Fetch is polyfilled for Safari and older browsers.
   * @param {string} query The URL of the giphy service to fetch.
   */
  _getGifData(query) {
    const options = {
      headers: {
        Accept: 'application/json',
      },
    };

    // For a successful response, use our dispatch function to update
    // our data in the store.
    const handleOk = response => response.json().then((response) => {
      this.props.updateGifData(response.data);
    });

    return fetch(query, options)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          // Successful response
          return response;
        } else {
          // Throw an error
          const error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
      }).then(handleOk, err => console.log(status));
  }

  /** React */
  componentDidMount() {
    // On page load we can populate the gif data
    // with giphy's trending API to start.
    this._getGifData(TRENDING_URL);
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    // Check if we should render our modal.
    let isExpanded = this.props.selected !== false;

    return (
      <div className="app">
        <div className="app__header">
          <img className="app__logo" src="/images/giphy_mark.png" />
          <h1 className="app__title"><span className="app__title--bold-white">Giphy</span>Search</h1>
          <Search on_search={this._onSearch} />
        </div>
        <div className="app__body">
          <div className="container">
            <div className="gif-grid-row row">
              {this.props.gifData.map((item, index) => {
                return <GifGridItem preview_url={item.images.fixed_height_downsampled.url} on_select={this._onSelect} giphy_id={item.id} key={index} />
              })}
            </div>
          </div>
          {isExpanded ? (<ExpandedModal gif_data={this.props.selected} on_close={this._onClose} />) : ('')}
        </div>
      </div>
    );
  }
}

/** Redux */
const mapStateToProps = (state) => {
  return {
    gifData: state.gifData,
    selected: state.selected,
  };
};

/** Redux */
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
