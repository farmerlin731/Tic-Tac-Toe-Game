import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import { useState } from "react";

function deriveActivepPlayer(turnState) {
  let currentPlayer = "X";
  if (turnState.length > 0) {
    currentPlayer = turnState[0].player === "X" ? "O" : "X";
  }
  return currentPlayer;
}

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [turnState, setTurnState] = useState([]);

  const activePlayer = deriveActivepPlayer(turnState);
  const gameData = Array.from({ length: 3 }, () => Array(3).fill(null));
  for (const data of turnState) {
    const { square, player } = data;
    const { rowIndex, colIndex } = square;
    gameData[rowIndex][colIndex] = player;
  }
  console.log(WINNING_COMBINATIONS);

  WINNING_COMBINATIONS.forEach((winning) => {
    let symbol0 = gameData[winning[0].row][winning[0].column];
    let symbol1 = gameData[winning[1].row][winning[1].column];
    let symbol2 = gameData[winning[2].row][winning[2].column];
    // if (symbol0 && symbol0 == symbol1 && symbol1 == symbol2) alert("u win!");
  });

  function handleSquareSelect(rowIndex, colIndex) {
    console.log(`push: ${rowIndex},${colIndex}`);
    setTurnState((preState) => {
      let currentPlayer = deriveActivepPlayer(preState);

      const currentTurn = {
        square: { rowIndex, colIndex },
        player: currentPlayer,
      };

      return [currentTurn, ...preState];
    });

    // setActivePlayer((cur) => (cur === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initName="Player-1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initName="Player-2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          gameData={gameData}
          handleSquareSelect={handleSquareSelect}
        />
      </div>
      <Log turnState={turnState} />
    </main>
  );
}

export default App;
