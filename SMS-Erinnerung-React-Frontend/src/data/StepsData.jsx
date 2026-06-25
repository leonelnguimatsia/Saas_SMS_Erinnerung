/* =============================================================
   StepsData.jsx
   Daten für die "So funktioniert es"-Sektion (4 Schritte).
   Jeder Schritt ist eine React-Komponente mit Nummer, Titel und Text.
   Das steps-Array wird in HauptSectionFeatures per .map()
   als CardSteps-Karte gerendert.
   ============================================================= */

import React from 'react';

/* Schritt 1: Konto erstellen */
const Step1 = () => {
  return (
    <>
      {/* Nummerierter Kreis */}
      <div className="step-item__circle">1</div>
      {/* Schritt-Titel */}
      <h3 className="step-item__title">Konto erstellen</h3>
      {/* Beschreibungstext */}
      <p className="step-item__description">
        Kostenlos registrieren mit Google, Yahoo oder E-Mail
      </p>
    </>
  );
};

/* Schritt 2: Termin anlegen */
const Step2 = () => {
  return (
    <>
      {/* Nummerierter Kreis */}
      <div className="step-item__circle">2</div>
      {/* Schritt-Titel */}
      <h3 className="step-item__title">Termin anlegen</h3>
      {/* Beschreibungstext */}
      <p className="step-item__description">
        Datum, Uhrzeit, Kunde und Dienst eintragen
      </p>
    </>
  );
};

/* Schritt 3: Erinnerung auswählen */
const Step3 = () => {
  return (
    <>
      {/* Nummerierter Kreis */}
      <div className="step-item__circle">3</div>
      {/* Schritt-Titel */}
      <h3 className="step-item__title">Erinnerung Auswählen</h3>
      {/* Beschreibungstext */}
      <p className="step-item__description">
        WhatsApp oder SMS — Sie entscheiden wann
      </p>
    </>
  );
};

/* Schritt 4: Fertig */
const Step4 = () => {
  return (
    <>
      {/* Nummerierter Kreis */}
      <div className="step-item__circle">4</div>
      {/* Schritt-Titel */}
      <h3 className="step-item__title">Fertig!</h3>
      {/* Beschreibungstext */}
      <p className="step-item__description">
        BindiMarket erinnert automatisch. Sie lehnen sich zurück.
      </p>
    </>
  );
};

/* Array mit allen 4 Schritten — wird in HauptSectionFeatures per .map() gerendert */
export const steps = [
  { id: 1, content: <Step1 /> },
  { id: 2, content: <Step2 /> },
  { id: 3, content: <Step3 /> },
  { id: 4, content: <Step4 /> },
];
