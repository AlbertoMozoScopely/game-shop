import { Link, useParams } from 'react-router-dom';

export default function Board() {
  const { levelId } = useParams();
  return (
    <div className="screen" style={{ paddingBottom: 80 }}>
      <h1>Board · Nivel {levelId}</h1>
      <p>Placeholder del gameplay. Aquí irá el tablero de Yahtzee (dados, combinaciones, puzzles, objetivos).</p>
      <div
        style={{
          flex: 1,
          background: 'rgba(255,255,255,0.08)',
          borderRadius: 12,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        🎲 🎲 🎲 🎲 🎲
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <Link to="/map" className="btn secondary">Salir</Link>
      </div>
    </div>
  );
}
