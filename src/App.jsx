import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function switchPlayer() {
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
        <GameBoard activePlayer={activePlayer} switchPlayer={switchPlayer} />
      </div>
      LOG
    </main>
  );
}

export default App;
