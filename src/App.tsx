import './App.scss';
import SchwordleGrid from './components/SchwordleGrid';
import Keyboard from './components/Keyboard';
import GameStateIndicator from './components/GameStateIndicator';
import { SchwordleContextProvider } from './state/SchwordleContext';

function App() {
  return (
    <SchwordleContextProvider>
      <div className="App">
        <div className="App__header">Schwordle</div>
        <div className="App__game">
          <GameStateIndicator />
          <SchwordleGrid />
          <Keyboard />
        </div>
      </div>
    </SchwordleContextProvider>
  );
}

export default App;
