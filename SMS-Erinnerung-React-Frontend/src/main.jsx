/* =============================================================
   main.jsx
   Startpunkt der App — rendert <App /> in den #root-Container.
   StrictMode aktiviert zusätzliche Warnungen in der Entwicklung.
   ============================================================= */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

/* App in den <div id="root"> in index.html einhängen */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
