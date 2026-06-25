/* =============================================================
   Anmeldung.jsx
   Seiten-Komponente für die Login-Seite (/anmelden).
   Zentriert die LoginCard auf der Seite.
   Route: /anmelden — definiert in App.jsx.
   ============================================================= */

import React from 'react';
import './Anmeldung.css';
import LoginCard from '../../components/Anmeldung/LoginCard';

const Anmeldung = () => {
  return (
    /* Vollbild-Wrapper — zentriert LoginCard vertikal und horizontal */
    <div className="anmeldung">
      <LoginCard />
    </div>
  );
};

export default Anmeldung;
