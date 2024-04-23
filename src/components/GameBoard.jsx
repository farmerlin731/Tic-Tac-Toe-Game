const initGameData = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// Nested jsx element, u don't need to add the 'return' & '{}' .
export default function GameBoard({ turnState, handleSquareSelect }) {
  // const [gameData, setGameData] = useState(initGameData);
  // function handleSelect(rowIndex, colIndex) {
  //   setGameData((preData) => {
  //     const newData = [...preData];
  //     newData[rowIndex] = [...newData[rowIndex]]; //just change the ref of destination
  //     newData[rowIndex][colIndex] = activePlayer;
  //     return newData;
  //   });
  //   switchPlayer();
  // }

  const gameData = initGameData.map((arr) => arr.map((item) => item));
  for (const data of turnState) {
    const { square, player } = data;
    const { rowIndex, colIndex } = square;
    gameData[rowIndex][colIndex] = player;
  }

  return (
    <ol id="game-board">
      {gameData.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => handleSquareSelect(rowIndex, colIndex)}
                  disabled={symbol !== null}
                >
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
