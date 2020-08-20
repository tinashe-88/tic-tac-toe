import React, { useState } from 'react'

import Board from '../board/board'
import CustomButton from '../custom-button/custom-button'

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
        <li key={move}>
          <CustomButton onClick={() => jumpTo(move)}>
            {destination}
          </CustomButton>
        </li>
      )
    })
  

  return (
    <div className="flex flex-column flex-row-ns">
      <div className="dt mw6 center pv0 pv2-m pv3-ns">
        <div className="dtc pr2">
          <h2>
            {
              winner ? "The Winner is " + winner :
              "Next Player: " + x_o
            }
          </h2>
        </div>
        <Board squares={history[stepNumber]} onClick={handleClick}/>
        <div className="dtc pl4">
          <h3>History</h3>
          {renderMoves()}
        </div>
      </div>
    </div>
  )
}

export default Game