/* =============================================================
   App.jsx
   Einstiegspunkt der React-App.
   Definiert alle Seiten-Routen mit React Router.
   ============================================================= */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Startseite from './pages/Startseite/Startseite';
import Anmeldung from './pages/Login/Anmeldung';
import Registrierung from './pages/Logout/Registrierung';
import NotFound from './pages/NotFound/NotFound';
import './App.css';

function App() {
  return (
    /* BrowserRouter aktiviert clientseitiges Routing */
    <BrowserRouter>
      <Routes>
        {/* Startseite: Landing Page mit Navbar, Hero, CTA, Footer */}
        <Route path="/" element={<Startseite />} />
        {/* Anmeldung: Login-Seite für bestehende Nutzer */}
        <Route path="/anmelden" element={<Anmeldung />} />
        {/* Registrierung: Konto-Erstellung für neue Nutzer */}
        <Route path="/registrieren" element={<Registrierung />} />
        {/* 404: Alle unbekannten Routen → NotFound-Seite */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
