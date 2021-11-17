import React from 'react';
import './App.css';
import Teams from './components/Teams/Teams';
import PlayersContainer from './components/Players/PlayersContainer';

function App() {
  return (
    <div className="App">
      <h1>NBA profile 
        <a className="alina"> made by Alina Babenko</a>
      </h1>
      <Teams />
      <PlayersContainer />
    </div>
  );
}

export default App;
