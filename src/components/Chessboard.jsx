
import React, { useState } from 'react';
import { Chessboard } from 'react-chessboard';

const ChessboardComponent = () => {
  const [position, setPosition] = useState('start');

  const handleMove = (sourceSquare, targetSquare) => {
    console.log(`Move from ${sourceSquare} to ${targetSquare}`);
    // Add your custom logic here
  };

  return (
    <Chessboard
      boardWidth={600}
      position={position}
      onPieceDrop={(sourceSquare, targetSquare) =>
        handleMove(sourceSquare, targetSquare)
      }
    />
  );
};

export default ChessboardComponent;





