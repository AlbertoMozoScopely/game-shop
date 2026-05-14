# Yahtzee Saga Map

Juego web tipo saga map (estilo Candy Crush) donde cada nodo del mapa es un **nivel de Yahtzee** en vez de un nivel de match-3. Prototipo en **React + Vite** que se puede empaquetar como un único HTML autocontenido para probarlo sin servidor.

## Requisitos

- Node.js 18+ (recomendado 20 o 22)
- npm 9+

## Puesta en marcha

```bash
git clone <url-del-repo>
cd yahtzee-saga-map
npm install
```

## Scripts

| Script | Qué hace |
|---|---|
| `npm run dev` | Levanta el servidor de desarrollo de Vite en http://localhost:5173 con hot reload. |
| `npm run build` | Build estándar a `dist/` (varios archivos). |
| `npm run build:standalone` | Build a un único HTML autocontenido en `standalone/yahtzee-saga-map.html` (se abre con doble click, sin servidor). |
| `npm run preview` | Sirve `dist/` para verificar el build. |

### Abrir sin servidor

Tras `npm run build:standalone`, abre `standalone/yahtzee-saga-map.html` directamente en cualquier navegador (Chrome, Firefox, Safari). Usamos `HashRouter` y `vite-plugin-singlefile` para que funcione desde `file://`.

## Estructura

```
yahtzee-saga-map/
├── index.html                  # entry point de Vite (dev)
├── vite.config.js              # config Vite + singlefile + base relativa
├── package.json
├── standalone/
│   └── yahtzee-saga-map.html   # build autocontenido (1 archivo, sin server)
└── src/
    ├── main.jsx                # bootstrap React + HashRouter
    ├── App.jsx                 # rutas
    ├── styles.css
    ├── components/
    │   └── Hud.jsx             # HUD inferior global
    └── screens/
        ├── SagaMap.jsx         # mapa con nodos y decoración
        ├── PreLevel.jsx        # entrada al nivel (objetivos, CTA jugar)
        ├── Board.jsx           # gameplay (placeholder dados)
        ├── Minigame.jsx        # modo evento / reto
        └── Collections.jsx     # álbumes / sets desbloqueables
```

## Pantallas y rutas

| Ruta | Pantalla | Descripción |
|---|---|---|
| `/map` | **SagaMap** | Mapa con nodos numerados, decoración flotante (árboles, rocas, flores, setas). |
| `/pre-level/:id` | **PreLevel** | Pantalla previa al nivel: objetivos, recompensas, bonus, CTA "Jugar". |
| `/board/:id` | **Board** | Gameplay del nivel (placeholder de dados de Yahtzee). HUD oculto aquí. |
| `/minigame` | **Minigame** | Modo alternativo / reto diario / evento. |
| `/collections` | **Collections** | Álbumes y sets de items desbloqueables. |

El **HUD** (barra inferior) es global y aparece superpuesto sobre todas las pantallas excepto `/board` (para no tapar el gameplay). Contiene: Colecciones · Play · Minigame.

## Sistema de subagentes (Claude Code)

En `.claude/agents/` (en el repo raíz, un nivel por encima de este directorio) hay un especialista por pantalla. Cada uno conoce sus archivos, su scope y lo que NO debe tocar.

| Subagente | Pantalla / responsabilidad |
|---|---|
| `saga-map-expert` | Mapa, nodos, path, decoración, scroll/cámara. |
| `hud-expert` | HUD global, botones, badges, visibilidad por ruta. |
| `pre-level-expert` | Pantalla previa al nivel, boosters, CTAs. |
| `board-expert` | Gameplay Yahtzee (dados, scoring, objetivos por nivel). |
| `minigame-expert` | Modos alternativos, eventos, retos. |
| `collections-expert` | Álbumes, sets, rarezas, recompensas. |

Cuando trabajes con Claude Code dentro del repo, puedes invocarlos directamente (p. ej. "usa el `saga-map-expert` para añadir un nuevo nodo con path curvo") y el agente correcto se encargará.

## Stack

- React 18
- React Router 6 (HashRouter para portabilidad `file://`)
- Vite 5
- `vite-plugin-singlefile` para empaquetar todo en un HTML

## Próximos pasos sugeridos

- Estado global (zustand o context) para progreso de niveles y vidas.
- Datos de niveles en `src/data/levels.js`.
- Path curvo dibujado entre nodos (SVG).
- Lógica pura del Yahtzee en `src/game/` para poder testear sin React.
- Sistema de assets (sprites de árboles, dados animados).
