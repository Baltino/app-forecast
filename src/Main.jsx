import React from 'react';
import HomeContainer from './containers/HomeContainer';

import logo from './logo.svg';
import './App.css';

function Main() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Forecast App</h1>
      </div>
      <HomeContainer />
    </div>
  );
}

export default Main;
