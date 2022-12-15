import './App.css';
import { useState } from 'react';
import { ScoreProvider } from './components/ScoreContext';
import Header from "./components/Header";
import GameDisplay from './components/GameDisplay';
import RulesButton from './components/RulesButton';
import RulesModal from './components/RulesModal';


function App() {

  const [modalOpen, setModalOpen] = useState(false)

  return (
    <ScoreProvider>
      <Header />
      <GameDisplay />
      <RulesButton setModalOpen={setModalOpen} />
      {modalOpen && <RulesModal setModalOpen={setModalOpen} />}
    </ScoreProvider>

  );
}

export default App;
