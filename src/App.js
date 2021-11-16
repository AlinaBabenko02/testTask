import React from 'react';
import logo from './logo.svg';
import './App.css';
import TeamsContainer from './components/Teams/TeamsContainer';
import PlayersContainer from './components/Players/PlayersContainer';

function App() {
  return (
    <div className="App">
      <h1>NBA profile</h1>
      <TeamsContainer />
      <PlayersContainer />
    </div>
  );
}

export default App;
