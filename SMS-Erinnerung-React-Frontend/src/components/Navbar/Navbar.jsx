/* =============================================================
   Navbar.jsx
   Haupt-Komponente der oberen Navigationsleiste.
   Setzt den <header>-Wrapper zusammen und bindet die
   Unterkomponenten NavLinks und NavActions ein.
   Wird in App.jsx als einzige Komponente auf der Seite gerendert.
   ============================================================= */

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import NavLinks from './NavLinks';
import NavActions from './NavActions';

const Navbar = () => {
  return (
    <header className="navbar">
      {' '}
      {/* Äußerer Wrapper: flex-Leiste mit Logo, Links und Buttons */}
      {/* Markenname / Logo-Text links in der Navbar */}
      <Link to="/" className="navbar__brand">
        BindiMarket
      </Link>
      {/* Mittlere Navigation: Funktionen, Preise, Über uns */}
      <NavLinks />
      {/* Rechte Buttongruppe: Anmelden + Kostenlos Starten */}
      <NavActions />
    </header>
  );
};

export default Navbar;
