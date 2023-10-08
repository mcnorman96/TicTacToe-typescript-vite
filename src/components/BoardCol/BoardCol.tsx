import React from 'react'

const BoardCol = ({ col, handleClick }) => {
  const boardColsClasses = 'border-solid border-2 border-white w-36 h-36 flex justify-center items-center text-4xl capitalize';

  return (
    <div data-col={col} onClick={(e) => handleClick(e, 0)} className={boardColsClasses}></div>
  )
}

export default BoardCol