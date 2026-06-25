/* =============================================================
   HeroCTEGroupButton.jsx
   Aktions-Button-Gruppe im Hero-Bereich (CTE = Call To Action).
   Enthält zwei Buttons nebeneinander:
     - hero-cte-group__btn--login    → "Anmelden" für bestehende Nutzer
     - hero-cte-group__btn--register → "Jetzt Registrieren" als primärer CTA
   Die Buttons haben aktuell keine Klick-Handler — diese werden
   später ergänzt, wenn das Routing eingebunden wird.
   Stile kommen aus Herosection.css (.hero-cte-group, .hero-cte-group__btn).
   ============================================================= */

import React from 'react';
import { Link } from 'react-router-dom';

const HeroCTEGroupButton = () => {
  return (
    <div className="hero-cte-group">
      {' '}
      {/* Wrapper: beide Buttons nebeneinander */}
      {/* Sekundärer Button: für Nutzer die bereits ein Konto haben */}
      <Link
        to="/anmelden"
        className="hero-cte-group__btn hero-cte-group__btn--login"
      >
        Anmelden
      </Link>
      {/* Primärer CTA-Button: wichtigster Button auf der gesamten Seite */}
      <Link
        to="/registrieren"
        className="hero-cte-group__btn hero-cte-group__btn--register"
      >
        Jetzt Registrieren
      </Link>
    </div>
  );
};

export default HeroCTEGroupButton;
