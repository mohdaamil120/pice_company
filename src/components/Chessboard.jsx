import React, { useState } from "react";
import { Chessboard as ReactChessboard } from "react-chessboard";
import Game from "../gameLogic";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Chessboard = () => {
  const [game, setGame] = useState(new Game());
  const [position, setPosition] = useState(game.position);
  const [turn, setTurn] = useState(game.turn);

  const handlePieceDrop = (from, to) => {
    const result = game.move(from, to);
    setPosition({ ...game.position });

    if (result.includes("Winner")) {
      alert(result);
      handleReset();
      return;
    }

    if (result !== "Move successful") {
      toast.error(result, { autoClose: 2000 });
    } else {
      setTurn(game.turn);
    }
  };

  const handleQuit = () => {
    const winner = game.turn === "w" ? "Black" : "White";
    alert(`Winner is ${winner}`);
    handleReset();
  };

  const handleReset = () => {
    const newGame = new Game();
    setGame(newGame);
    setPosition(newGame.position);
    setTurn(newGame.turn);
  };

  return (
    <div>
      
      <button onClick={handleQuit}>Quit</button>
      <button onClick={handleReset}>Reset</button>
      <ReactChessboard
        position={position}
        onPieceDrop={handlePieceDrop}
        boardWidth={400}
        customBoardStyle={{
          borderRadius: "4px",
          boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`,
          border: "2px solid #333",
          backgroundColor: "#f0d9b5",
        }}
      />
      <h2>Current Turn: {turn === "w" ? "White" : "Black"}</h2>
      <ToastContainer />
    </div>
  );
};

export default Chessboard;
