import React from 'react'
import 'tachyons'

const Header = () => (
  <nav className="pa4 pa3-ns mb3 bb b--light-silver">
    <h1 
      className="dim black b f1 tc db mb3 mb2-ns" 
      title="Naughts & Crosses"
    >
      Naughts & Crosses
    </h1>
    <span className="fw1">A.k.a Tic-Tac-Toe</span>
  </nav>
)

export default Header