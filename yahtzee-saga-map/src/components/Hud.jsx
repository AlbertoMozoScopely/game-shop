import { NavLink, useLocation } from 'react-router-dom';

export default function Hud() {
  const { pathname } = useLocation();
  // Hide HUD inside the board to avoid covering gameplay
  if (pathname.startsWith('/board')) return null;

  return (
    <nav className="hud">
      <NavLink to="/collections" className={({ isActive }) => (isActive ? 'active' : '')}>
        <span className="icon">🗂️</span>
        Colecciones
      </NavLink>
      <NavLink to="/pre-level/1" className={({ isActive }) => (isActive ? 'active' : '')}>
        <span className="icon play">▶️</span>
        Play
      </NavLink>
      <NavLink to="/minigame" className={({ isActive }) => (isActive ? 'active' : '')}>
        <span className="icon">🎯</span>
        Minigame
      </NavLink>
    </nav>
  );
}
