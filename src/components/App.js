import React, { Component } from 'react';
import SongList from './SongList';
import DATA from '../data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Earworms App</h1>
        <SongList data={ DATA } />
      </div>
    );
  }
}

export default App;
