
// import React, { useState } from 'react';
// import { Chessboard } from 'react-chessboard';

// const ChessboardComponent = () => {
//   const [position, setPosition] = useState('start');

//   const handleMove = (sourceSquare, targetSquare) => {
//     console.log(`Move from ${sourceSquare} to ${targetSquare}`);
//     // Add your custom logic here
//   };

//   return (
//     <Chessboard
//       boardWidth={600}
//       position={position}
//       onPieceDrop={(sourceSquare, targetSquare) =>
//         handleMove(sourceSquare, targetSquare)
//       }
//     />
//   );
// };

// export default ChessboardComponent;









// src/components/Chessboard.jsx
import React, { useState } from 'react';
import { Chessboard } from 'react-chessboard';

const ChessboardComponent = () => {
  const [position, setPosition] = useState({
    a1: 'wR', b1: 'wN', c1: 'wB', d1: 'wQ', e1: 'wK', f1: 'wB', g1: 'wN', h1: 'wR',
    a2: 'wP', b2: 'wP', c2: 'wP', d2: 'wP', e2: 'wP', f2: 'wP', g2: 'wP', h2: 'wP',
    a7: 'bP', b7: 'bP', c7: 'bP', d7: 'bP', e7: 'bP', f7: 'bP', g7: 'bP', h7: 'bP',
    a8: 'bR', b8: 'bN', c8: 'bB', d8: 'bQ', e8: 'bK', f8: 'bB', g8: 'bN', h8: 'bR',
  });

  const handleMove = (sourceSquare, targetSquare) => {
    setPosition((prevPosition) => {
      const newPosition = { ...prevPosition };
      newPosition[targetSquare] = newPosition[sourceSquare];
      delete newPosition[sourceSquare];
      return newPosition;
    });
    console.log(`Move from ${sourceSquare} to ${targetSquare}`);
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
