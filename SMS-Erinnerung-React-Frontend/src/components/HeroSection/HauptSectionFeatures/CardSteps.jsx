/* =============================================================
   CardSteps.jsx
   Einzelner Schritt in der "So funktioniert es"-Sektion.
   Props:
     content → JSX-Inhalt aus StepsData.jsx (Nummer, Titel, Text)
   Der Inhalt (Kreis, Titel, Beschreibung) wird direkt in den
   step-item Container gerendert.
   Stile kommen aus Herosection.css (.step-item).
   ============================================================= */

import React from 'react';

const CardSteps = ({ content }) => {
  return (
    /* Wrapper-Karte für einen Schritt */
    <div className="step-item">{content}</div>
  );
};

export default CardSteps;
