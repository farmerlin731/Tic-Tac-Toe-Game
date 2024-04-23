export default function Log({ turnState }) {
  return (
    <ol id="log">
      {turnState.map((data) => (
        <li key={`${data.square.rowIndex},${data.square.colIndex}`}>
          {`${data.player} : ${data.square.rowIndex},${data.square.colIndex}`}
        </li>
      ))}
    </ol>
  );
}
