# Anti-Chess Game

## Objective
Create a frontend application to allow two players to play Anti-Chess in the same UI. The game follows the standard rules of anti-chess with specific mandatory capturing and victory conditions.

## Hypothesis
Anti-chess is a variant of chess with the following rules:
- The board is the same as original chess, and all the pieces have the exact same moves.
- The goal is to sacrifice all your pieces before the opponent.
- Capturing is mandatory:


## Technology Stack
List and provide a brief overview of the technologies used in the project.

- React
- HTML5
- CSS3
- JavaScript


## Installation & Getting started
Detailed instructions on how to install, configure, and get the project running.

Clone the repository: git clone https://github.com/yourusername/your-repo.git
Navigate to the project directory: cd your-repo
Install dependencies: npm install
Start the frontend: npm start
bash
npm install my-project
cd my-project
npm start

# Screenstots

###  ( ChessBoard )
<img src="screenshots\chess.png"/>





## Deployed App
Frontend: [React App](https://pice-anti-chess.vercel.app/)

## Directory Structure
```plaintext
src/
├─ components
  ├─ Chessboard
├─ pieces
  ├─ Bishop
  ├─ King
  ├─ Knight
  ├─ Pawn
  ├─ Queen
  ├─ Rook
├─ utils
  ├─ getCapturingMoves
  ├─ movePiece
  ├─ validateMove
