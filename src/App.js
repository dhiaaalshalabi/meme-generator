import React from 'react';
import Header from './components/Header';
import Meme from './components/Meme';
import Box from './components/Box';
import './App.css'
import boxes from "./boxes"

function App() {

  const [squares, setSquares] = React.useState(boxes)

  function toggle(id) {
    setSquares(prevSquares => {
      return prevSquares.map(square => {
        return square.id === id ? { ...square, on: !square.on } : square
      })
    })
  }

  const squareElements = squares.map(square => (
    <Box key={square.id} id={square.id} on={square.on} handleClick={toggle} />
  ))

  return (
    <div>
      <Header />
      {/* <Meme /> */}
      {squareElements}
    </div>
  );
}

export default App
