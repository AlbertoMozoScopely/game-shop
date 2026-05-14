import { Routes, Route, Navigate } from 'react-router-dom';
import SagaMap from './screens/SagaMap.jsx';
import PreLevel from './screens/PreLevel.jsx';
import Board from './screens/Board.jsx';
import Minigame from './screens/Minigame.jsx';
import Collections from './screens/Collections.jsx';
import Hud from './components/Hud.jsx';

export default function App() {
  return (
    <div className="phone-frame">
      <Routes>
        <Route path="/" element={<Navigate to="/map" replace />} />
        <Route path="/map" element={<SagaMap />} />
        <Route path="/pre-level/:levelId" element={<PreLevel />} />
        <Route path="/board/:levelId" element={<Board />} />
        <Route path="/minigame" element={<Minigame />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
      <Hud />
    </div>
  );
}
