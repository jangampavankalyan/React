import Player from "./Components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player1" symbol="X" />
          <Player name="Player2" symbol="0" />
        </ol>
        GAME-BOARD
      </div>
      LOGS
    </main>
  );
}

export default App;
