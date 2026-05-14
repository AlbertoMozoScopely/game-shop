import { Link } from 'react-router-dom';

export default function Collections() {
  return (
    <div className="screen" style={{ paddingBottom: 80 }}>
      <h1>Colecciones</h1>
      <p>Placeholder de colecciones. Aquí irán los álbumes, sets y recompensas desbloqueables.</p>
      <div style={{ marginTop: 'auto' }}>
        <Link to="/map" className="btn secondary">Volver al mapa</Link>
      </div>
    </div>
  );
}
