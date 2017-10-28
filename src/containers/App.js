import React, { Component } from 'react';
import Search from '../components/Search';
import { GifGridItem } from '../components/GifGridItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>App.js</h2>
        </div>
        <Search />
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

export default App;
