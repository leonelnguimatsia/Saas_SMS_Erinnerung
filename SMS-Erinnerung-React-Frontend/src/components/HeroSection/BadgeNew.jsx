/* =============================================================
   BadgeNew.jsx
   Kleines "Neu"-Badge ganz oben im Hero-Bereich der Landing Page.
   Besteht aus zwei Teilen:
     - badge-new__icon  → SVG-Icon (Glow-Symbol) als <img>
     - badge-new__text  → Ankündigungstext ("Neu: WhatsApp SMS...")
   Das SVG wird in Vite als Bild-URL importiert (nicht als Komponente).
   Stile kommen aus Herosection.css (.badge-new, .badge-new__icon usw.).
   ============================================================= */

import React from 'react';

/* GlowIcon wird als Bild-URL importiert — Vite-kompatibler SVG-Import */
import GlowIcon from '../../Icon_SVG/glow.svg';

const BadgeNew = () => {
  return (
    <div className="badge-new"> {/* Wrapper: Icon + Text nebeneinander */}

      {/* Icon-Bereich: SVG als <img>, Größe 24x24px */}
      <span className="badge-new__icon">
        <img src={GlowIcon} width="24" height="24" alt="" />
      </span>

      {/* Ankündigungstext neben dem Icon */}
      <span className="badge-new__text">
        Neu: WhatsApp SMS-Erinnerung jetzt verfügbar
      </span>

    </div>
  );
};

export default BadgeNew;
