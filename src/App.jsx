import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [turnState, setTurnState] = useState([]);

  function handleSquareSelect(rowIndex, colIndex) {
    console.log(`push: ${rowIndex},${colIndex}`);
    setTurnState((preState) => {
      let currentPlayer = "X";
      if (turnState.length > 0) {
        currentPlayer = turnState[0].player === "X" ? "O" : "X";
      }

      const currentTurn = {
        square: { rowIndex, colIndex },
        player: currentPlayer,
      };

      return [currentTurn, ...preState];
    });

    setActivePlayer((cur) => (cur === "X" ? "O" : "X"));
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
          turnState={turnState}
          handleSquareSelect={handleSquareSelect}
        />
      </div>
      <Log turnState={turnState} />
    </main>
  );
}

export default App;
