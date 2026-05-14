import { Link, useParams } from 'react-router-dom';

export default function PreLevel() {
  const { levelId } = useParams();
  return (
    <div className="screen" style={{ paddingBottom: 80 }}>
      <h1>Nivel {levelId}</h1>
      <p>Pantalla previa al nivel. Aquí mostraremos objetivos, recompensas, costes de vida y bonus seleccionables.</p>
      <div style={{ display: 'flex', gap: 8, marginTop: 'auto' }}>
        <Link to="/map" className="btn secondary">Volver</Link>
        <Link to={`/board/${levelId}`} className="btn">Jugar</Link>
      </div>
    </div>
  );
}
