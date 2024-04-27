import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import { useState } from "react";

const INIT_PLAYER_NAME = {
  X: "Player-1",
  O: "Player-2",
};

function deriveActivepPlayer(turnState) {
  let currentPlayer = "X";
  if (turnState.length > 0) {
    currentPlayer = turnState[0].player === "X" ? "O" : "X";
  }
  return currentPlayer;
}
function deriveGameData(turnState) {
  const gameData = Array.from({ length: 3 }, () => Array(3).fill(null));
  //the right way to watch the content of an 'object' if the object will be adjust in this render.
  // gameData.forEach((arr) => arr.forEach((item) => console.log(item)));
  // console.log(gameData);
  for (const data of turnState) {
    const { square, player } = data;
    const { rowIndex, colIndex } = square;
    gameData[rowIndex][colIndex] = player;
  }
  return gameData;
}

function deriveWinner(gameData) {
  let winner;
  WINNING_COMBINATIONS.forEach((winning) => {
    let symbol0 = gameData[winning[0].row][winning[0].column];
    let symbol1 = gameData[winning[1].row][winning[1].column];
    let symbol2 = gameData[winning[2].row][winning[2].column];
    if (symbol0 && symbol0 == symbol1 && symbol1 == symbol2) winner = symbol0;
  });
  return winner;
}

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [turnState, setTurnState] = useState([]);
  const [playerName, setPlayerName] = useState(INIT_PLAYER_NAME);

  const activePlayer = deriveActivepPlayer(turnState);
  const gameData = deriveGameData(turnState);
  const winner = deriveWinner(gameData);
  const isDraw = turnState.length === 9 && !winner;

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
            initName={playerName.X}
            symbol="X"
            isActive={activePlayer === "X"}
            setPlayerName={setPlayerName}
          />
          <Player
            initName={playerName.O}
            symbol="O"
            isActive={activePlayer === "O"}
            setPlayerName={setPlayerName}
          />
        </ol>
        {(winner || isDraw) && (
          <GameOver
            winner={playerName[winner]}
            handleRematch={() => setTurnState([])}
          />
        )}
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
