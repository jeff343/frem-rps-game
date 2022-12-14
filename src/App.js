import './App.css';
import { ScoreProvider } from './components/ScoreContext';
import Header from "./components/Header";
import GameDisplay from './components/GameDisplay';


function App() {


  return (
    <ScoreProvider>
      <Header />
      <GameDisplay />
    </ScoreProvider>

  );
}

export default App;
