import React from 'react'
import './App.css'
import Game from './components/game/game'
import Header from './components/header/header'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Game />
      <Footer/>
    </div>
  );
}

export default App
