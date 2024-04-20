const gameData = [
  [null, null, null],
  [null, "X", null],
  [null, null, null],
];

// Nested jsx element, u don't need to add the 'return' & '{}' .
export default function GameBoard() {
  function handleSelect(e) {
    console.log(e.target.value);
  }
  return (
    <ol id="game-board">
      {gameData.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={handleSelect}>{symbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
