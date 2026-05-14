import { Link } from 'react-router-dom';

const LEVELS = [
  { id: 1, x: 60,  y: 80 },
  { id: 2, x: 220, y: 160 },
  { id: 3, x: 90,  y: 260 },
  { id: 4, x: 240, y: 360 },
  { id: 5, x: 120, y: 460 }
];

const DECOR = [
  { emoji: '🌳', x: 20,  y: 40 },
  { emoji: '🌲', x: 300, y: 110 },
  { emoji: '🪨', x: 180, y: 220 },
  { emoji: '🌳', x: 30,  y: 360 },
  { emoji: '🌸', x: 290, y: 420 },
  { emoji: '🍄', x: 200, y: 520 }
];

export default function SagaMap() {
  return (
    <div className="screen" style={{ paddingBottom: 80 }}>
      <h1>Saga Map</h1>
      <div className="saga-map">
        {DECOR.map((d, i) => (
          <span key={i} className="saga-decor" style={{ left: d.x, top: d.y }}>
            {d.emoji}
          </span>
        ))}
        {LEVELS.map(l => (
          <Link
            key={l.id}
            to={`/pre-level/${l.id}`}
            className="saga-node"
            style={{ left: l.x, top: l.y }}
          >
            {l.id}
          </Link>
        ))}
      </div>
    </div>
  );
}
