import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6"><p>Testing grid</p></div>
            <div className="col-sm-6"><p>Testing grid</p></div>
          </div>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
