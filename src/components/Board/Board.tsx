import React from 'react'
import BoardCol from '../BoardCol/BoardCol'

interface BoardProps {
  cols: number,
  GameOver: boolean,
  handleClick: any
}

const Board = ({ cols, GameOver, handleClick }: BoardProps) => {
  let boardList = [];

  for (let col = 0; col < cols; col++) {
    boardList.push(
      <BoardCol key={col} col={col} handleClick={handleClick} />
    )
  }

  return (
    <div className={`boardContainer grid grid-cols-3 h-max w-max ${GameOver && 'pointer-events-none'}`}>
      {boardList}
    </div >
  )
}

export default Board
