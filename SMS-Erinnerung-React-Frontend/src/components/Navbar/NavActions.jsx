/* =============================================================
   NavActions.jsx
   Rechte Buttongruppe der Navbar.
   Enthält zwei Aktions-Buttons:
     - "Anmelden"        → schmalerer Button (.navbar__btn--login)
     - "Kostenlos Starten" → breiterer Button (.navbar__btn--register)
   Stile kommen aus Navbar.css (.navbar__actions, .navbar__btn).
   ============================================================= */

import React from 'react';
import { Link } from 'react-router-dom';

const NavActions = () => {
  return (
    /* Container: Buttons nebeneinander mit kleinem Abstand */
    <div className="navbar__actions">
      {/* Anmelden-Button: schmal (118px), für bestehende Nutzer */}
      <Link to="/anmelden" className="navbar__btn navbar__btn--login">
        Anmelden
      </Link>

      {/* Registrieren-Button: breiter (177px), primärer CTA */}
      <Link to="/registrieren" className="navbar__btn navbar__btn--register">
        Kostenlos Starten
      </Link>
    </div>
  );
};

export default NavActions;
