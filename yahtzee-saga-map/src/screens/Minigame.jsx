import { Link } from 'react-router-dom';

export default function Minigame() {
  return (
    <div className="screen" style={{ paddingBottom: 80 }}>
      <h1>Minigame</h1>
      <p>Placeholder del minijuego. Aquí irán eventos, retos diarios o modos especiales.</p>
      <div style={{ marginTop: 'auto' }}>
        <Link to="/map" className="btn secondary">Volver al mapa</Link>
      </div>
    </div>
  );
}
