import React, { useState, useEffect } from 'react';

import { containerStyle, instructionsStyle, buttonStyle, boardStyle, rowStyle } from '../../styles';
import Square from '../Square';

function Board() {
    const [nextPlayer, setNextPlayer] = useState('X');
    const initialOptions = ['', '', '', '', '', '', '', '', ''];
    const [options, setOptions] = useState(initialOptions);
    const [winner, setWinner] = useState('');
  
    useEffect(() => {
      setNextPlayer(Math.round(Math.random()) === 0 ? 'X' : 'O');
    }, []);
  
    const resetOptions = () => {
      setNextPlayer(Math.round(Math.random()) === 0 ? 'X' : 'O');
  
      setOptions(initialOptions);
  
      setWinner('');
    }
  
    return (
      <div style={containerStyle} className="gameBoard">
        <div className="status" style={instructionsStyle}>Next player: {nextPlayer}</div>
        <div className="winner" style={instructionsStyle}>Winner: {winner}</div>
        <button style={buttonStyle} onClick={resetOptions}>Reset</button>
        <div style={boardStyle}>
          <div className="board-row" style={rowStyle}>
            <Square
              index={0}
              nextPlayer={nextPlayer}
              setNextPlayer={setNextPlayer}
              options={options}
              setOptions={setOptions}
              setWinner={setWinner}
            />
            <Square
              index={1}
              nextPlayer={nextPlayer}
              setNextPlayer={setNextPlayer}
              options={options}
              setOptions={setOptions}
              setWinner={setWinner}
            />
            <Square
              index={2}
              nextPlayer={nextPlayer}
              setNextPlayer={setNextPlayer}
              options={options}
              setOptions={setOptions}
              setWinner={setWinner}
            />
          </div>
          <div className="board-row" style={rowStyle}>
            <Square
              index={3}
              nextPlayer={nextPlayer}
              setNextPlayer={setNextPlayer}
              options={options}
              setOptions={setOptions}
              setWinner={setWinner}
            />
            <Square
              index={4}
              nextPlayer={nextPlayer}
              setNextPlayer={setNextPlayer}
              options={options}
              setOptions={setOptions}
              setWinner={setWinner}
            />
            <Square
              index={5}
              nextPlayer={nextPlayer}
              setNextPlayer={setNextPlayer}
              options={options}
              setOptions={setOptions}
              setWinner={setWinner}
            />
          </div>
          <div className="board-row" style={rowStyle}>
            <Square
              index={6}
              nextPlayer={nextPlayer}
              setNextPlayer={setNextPlayer}
              options={options}
              setOptions={setOptions}
              setWinner={setWinner}
            />
            <Square
              index={7}
              nextPlayer={nextPlayer}
              setNextPlayer={setNextPlayer}
              options={options}
              setOptions={setOptions}
              setWinner={setWinner}
            />
            <Square
              index={8}
              nextPlayer={nextPlayer}
              setNextPlayer={setNextPlayer}
              options={options}
              setOptions={setOptions}
              setWinner={setWinner}
            />
          </div>
        </div>
      </div>
    );
  }


export default Board;