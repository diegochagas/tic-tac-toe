import React from 'react';

import { squareStyle } from '../../styles';

function Square({ index, options, setOptions, nextPlayer, setNextPlayer, setWinner }) {
    const hasWinner = () => {
      const firstLine = options[0] !== '' && options[1] !== '' && options[2] !== '' && options[0] === options[1] && options[1] === options[2];
      const secondLine = options[3] !== '' && options[4] !== '' && options[5] !== '' && options[3] === options[4] && options[4] === options[5];
      const thirdLine = options[6] !== '' && options[7] !== '' && options[8] !== '' && options[6] === options[7] && options[7] === options[8];
      const firstDiagonal = options[0] !== '' && options[4] !== '' && options[8] !== '' && options[0] === options[4] && options[4] === options[8];
      const secondDiagonal = options[2] !== '' && options[4] !== '' && options[6] !== '' && options[2] === options[4] && options[4] === options[6]; 
      const firstColumn = options[0] !== '' && options[3] !== '' && options[6] !== '' && options[0] === options[3] && options[3] === options[6];
      const secondColumn = options[1] !== '' && options[4] !== '' && options[7] !== '' && options[1] === options[4] && options[4] === options[7];
      const thirdColumn = options[2] !== '' && options[5] !== '' && options[8] !== '' && options[2] === options[5] && options[5] === options[8];
  
      return firstLine || secondLine || thirdLine || firstDiagonal || secondDiagonal || firstColumn || secondColumn || thirdColumn; 
    }
  
    const handleClick = () => {
      if (options[index] === '' && !hasWinner()) {
        let auxOptions = options;
        
        auxOptions[index] = nextPlayer;
  
        const auxPlayer = nextPlayer === 'X' ? 'O' : 'X';
  
        setOptions(auxOptions);
  
        if (hasWinner()) {
          setWinner(nextPlayer);
        } else {
          setWinner('');
        }
  
        setNextPlayer(auxPlayer);
      }
    }
  
    return (
      <div
        className="square"
        style={squareStyle}
        onClick={handleClick}
      >
        {options[index]}
      </div>
    );
  }
  

export default Square;