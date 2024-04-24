// const initGameData = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];

// Nested jsx element, u don't need to add the 'return' & '{}' .
export default function GameBoard({ gameData, handleSquareSelect }) {
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
