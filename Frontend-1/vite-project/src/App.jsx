import React from 'react';
import Header from './Header';
import Sidebar from './sidebar.jsx';
import Home from './Home';
import Player from './player.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Home />
      </div>
      <Player />
    </div>
  );
}

export default App;
