import React, { useState } from 'react'

import Board from '../board/board'

import { calculateWinner } from '../../helper/helper'

import 'tachyons'

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [xIsNext, setXIsNext] = useState(true)
  const [stepNumber, setStepNumber] = useState(0)
  const winner = calculateWinner(history[stepNumber])
  const x_o = xIsNext ? "X" : "O"

  const handleClick = i => {
    const historyPoint = history.slice(0, stepNumber + 1)
    const current = historyPoint[stepNumber]
    const squares = [...current]

    if(winner || squares[i]) return
    squares[i] = x_o

    setHistory([...historyPoint, squares])
    setStepNumber(historyPoint.length)
    setXIsNext(!xIsNext)
  }

  const jumpTo = step => {
    setStepNumber(step)
    setXIsNext(step % 2 === 0)
  }

  const renderMoves = () => 
    history.map((step, move) => {
      const destination = move ? `Go to move #${move}` : `Go to Beginning`
      return (
        <ul 
          key={move}
          className="list pl0 ml0 center mw6 ba b--light-silver br2"
        >
          <li 
            onClick={() => jumpTo(move)}
            className="ph3 pv2 bb b--light-silver"
          >
            {destination}
          </li>
        </ul>
      )
    })
  

  return (
    <div className="flex flex-column flex-row-ns">
      <div className="dt mw0 center pv0 pv2-m pv3-ns">
        <div className="dtc pr4">
          <h2 className="f3 f4-m f3-l fw2">
            {
              winner ? "The Winner is " + winner :
              "Next Player: " + x_o
            }
          </h2>
        </div>
        <Board squares={history[stepNumber]} onClick={handleClick}/>
        <div className="dtc pl4 pl3-ns overflow-y:hidden">
          <h3 className="f3 f4-m f3-l fw2">History</h3>
          <ul className="list pl0 ml0 center mw5 br3">
            {renderMoves()}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Game