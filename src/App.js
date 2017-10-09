import React, { Component } from 'react';

import SearchBar from './containers/SearchBar';
import WeatherList from './containers/WeatherList';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to React-Redux Weather app.</h2>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
