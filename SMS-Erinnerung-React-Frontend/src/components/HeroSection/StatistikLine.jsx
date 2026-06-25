/* =============================================================
   StatistikLine.jsx
   Kennzahlen-Leiste unterhalb der Hero-Buttons.
   Zeigt 4 Statistiken als sozialen Beweis: Dienstleister,
   Zufriedenheit, Erinnerungen pro Monat, No-Show-Reduktion.
   Stile kommen aus Herosection.css (.statistik-line).
   ============================================================= */

import React from 'react';

/* Kennzahlen-Daten — später aus Backend ersetzen */
const stats = [
  { value: '2.4000+', label: 'Dienstleister' },
  { value: '98%', label: 'Zufriedenheit' },
  { value: '50.000+', label: 'Erinnerungen /Monat' },
  { value: '-70%', label: 'Weniger No-Shows' },
];

const StatistikLine = () => {
  return (
    /* Horizontale Leiste mit allen Kennzahlen */
    <div className="statistik-line">
      {stats.map((stat) => (
        /* Jede Kennzahl: großer Wert + kleines Label darunter */
        <div key={stat.label} className="statistik-line__item">
          <span className="statistik-line__value">{stat.value}</span>
          <span className="statistik-line__label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default StatistikLine;
