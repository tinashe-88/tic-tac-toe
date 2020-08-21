import React from 'react'
import 'tachyons'

const Header = () => (
  <nav className="pa3 pa0-ns mb3-ns">
    <h1 
      className="link dim black b f1 tc db mb3 mb2-ns" 
      href="/" 
      title="Naughts & Crosses"
    >
      Naughts & Crosses
    </h1>
    <span className="fw1 ">A.k.a Tic-Tac-Toe</span>
  </nav>
)

export default Header