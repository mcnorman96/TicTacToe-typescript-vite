import { useState, useEffect } from 'react'
import './Index.css'
import Board from './components/Board/Board';
import { isVictory } from './Utils/TicTacToeUtils';

function App() {
  const [Status, setStatus] = useState('x');
  const [GameState, setGameState] = useState('');
  const [GameOver, setGameOver] = useState(false)
  const [PlayerOneBoxes, setPlayerOneBoxes] = useState([])
  const [PlayerTwoBoxes, setPlayerTwoBoxes] = useState([])

  const handleBoxClick = (e: any, col: number) => {
    if (!GameState) {
      setGameState('Playing');
    }
    e.target.append(Status);
    e.target.classList.add("pointer-events-none");
    Status === 'x' ? setPlayerOneBoxes((prev) => [...prev, col]) : setPlayerTwoBoxes((prev) => [...prev, col])
  }

  useEffect(() => {
    if (!GameState) return;
    checkingWinner();
  }, [PlayerOneBoxes, PlayerTwoBoxes])

  const checkingWinner = () => {
    let isVictorious;

    if (Status === 'x') {
      isVictorious = isVictory(PlayerOneBoxes);
    } else {
      isVictorious = isVictory(PlayerTwoBoxes);
    }

    if (isVictorious) {
      setGameOver(true);
      setStatus(`Player ${Status} Won!!`)
    } else if ((PlayerOneBoxes.length + PlayerTwoBoxes.length) > 8) {
      setGameOver(true);
      setStatus('Tie!')
    } else {
      setStatus(Status === 'x' ? 'o' : 'x')
    }
  }

  return (
    <div className="flex justify-center items-center flex-col text-white w-screen h-screen">
      {
        GameOver ?
          <h1 className='mb-5 text-4xl'>{Status}</h1>
          :
          <h1 className='mb-5 text-4xl'>{`Player ${Status} turn`}</h1>
      }
      <Board cols={9} GameOver={GameOver} handleClick={handleBoxClick} />
    </div>
  )
}

export default App
