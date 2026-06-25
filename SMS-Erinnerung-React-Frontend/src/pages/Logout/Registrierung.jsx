/* =============================================================
   Registrierung.jsx
   Seiten-Komponente für die Registrierungsseite (/registrieren).
   Zentriert die RegisterCard auf der Seite.
   Route: /registrieren — definiert in App.jsx.
   ============================================================= */

import React from 'react';
import './Registrierung.css';
import RegisterCard from '../../components/Registrierung/RegisterCard';

const Registrierung = () => {
  return (
    /* Vollbild-Wrapper — zentriert RegisterCard vertikal und horizontal */
    <div className="registrieren">
      <RegisterCard />
    </div>
  );
};

export default Registrierung;
