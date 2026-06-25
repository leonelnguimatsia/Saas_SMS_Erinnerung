/* =============================================================
   CTABanner.jsx
   Call-To-Action-Banner unterhalb der Feature-Sektionen.
   Blauer Vollbild-Banner mit Überschrift, Untertitel
   und zwei Aktions-Buttons (Registrieren + Kostenlos starten).
   Stile kommen aus CTABanner.css.
   ============================================================= */

import React from 'react';
import { Link } from 'react-router-dom';
import './CTABanner.css';

const CTABanner = () => {
  return (
    /* Äußerer blauer Wrapper */
    <div className="cta-banner">
      {/* Überschrift und Untertitel */}
      <div className="cta-banner__header">
        <h2 className="cta-banner__title">
          Bereit, Ihre No-Shows zu reduzieren?
        </h2>
        <p className="cta-banner__subtitle">
          Kostenlos starten - keine Kreditkarte erforderlich
        </p>
      </div>

      {/* Buttons: Registrieren (primär) + Kostenlos starten (sekundär) */}
      <div className="cta-banner__buttons">
        <Link
          to="/registrieren"
          className="cta-banner__btn cta-banner__btn--register"
        >
          Jetzt Registrieren
        </Link>
        <Link to="/anmelden" className="cta-banner__btn cta-banner__btn--free">
          Kostenlos starten
        </Link>
      </div>
    </div>
  );
};

export default CTABanner;
