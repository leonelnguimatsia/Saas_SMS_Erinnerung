/* =============================================================
   CardFeatures.jsx
   Einzelne Feature-Card innerhalb des Feature-Grids.
   Wird von HauptSectionFeatures.jsx per .map() gerendert.
   Empfängt drei Props:
     icon        → SVG als React-Element (z.B. <ChatIcon />)
     titel       → Kurzbezeichnung der Funktion (wird als <h3> gerendert)
     description → Erklärungstext der Funktion (wird als <p> gerendert)
   Stile kommen aus Herosection.css (.card-feature, .card-feature__icon usw.).
   ============================================================= */

import React from 'react';

const CardFeatures = ({ content }) => {
  return (
    /* Wrapper-Karte: Icon + Titel + Beschreibung aus FeaturesData.jsx */
    <div className="card-feature">{content}</div>
  );
};

export default CardFeatures;
