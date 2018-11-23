import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <input
          placeholder="Where are you right now?"
          id="my-current-location"
        />
      </div>
    );
  }
}

export default App;
