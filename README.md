# Anti-Chess Game

## Objective
Create a frontend application to allow two players to play Anti-Chess in the same UI. The game follows the standard rules of anti-chess with specific mandatory capturing and victory conditions.

## Hypothesis
Anti-chess is a variant of chess with the following rules:
- The board is the same as original chess, and all the pieces have the exact same moves.
- The goal is to sacrifice all your pieces before the opponent.
- Capturing is mandatory:


## Deployed App
Frontend: [React App](https://quest-labs-liart.vercel.app/)

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
