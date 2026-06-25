/* =============================================================
   HeroSection.jsx
   Haupt-Sektion der Landing Page, direkt unterhalb der Navbar.
   Fasst alle Hero-Unterkomponenten zusammen und gibt ihnen
   die richtige Reihenfolge und Struktur:
     1. BadgeNew              → "Neu"-Badge ganz oben
     2. hero-section__heading → Haupt-Überschrift H1
     3. hero-section__subheadline → Beschreibungstext darunter
     4. HeroCTEGroupButton    → Aktions-Buttons (Anmelden / Registrieren)
     5. StatistikLine         → Kennzahlen-Leiste ganz unten
   Stile kommen aus Herosection.css.
   HauptSectionFeatures ist auskommentiert — noch in Entwicklung.
   ============================================================= */

import React from 'react';
import './Herosection.css';
import BadgeNew from './BadgeNew';
import HeroCTEGroupButton from './HeroCTEGroupButton';
import StatistikLine from './StatistikLine';
import HauptSectionFeatures from './HauptSectionFeatures/HauptSectionFeatures';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {' '}
      {/* Äußerer Wrapper der gesamten Hero-Sektion */}
      {/* 1. "Neu"-Badge: kleines Label oben links im Hero */}
      <BadgeNew />
      {/* 2. Haupt-Überschrift: größter Text auf der Seite (H1, 40px) */}
      <div className="hero-section__heading">
        <h1>Terminerinnerung für Dienstleister - Automatisch</h1>
      </div>
      {/* 3. Beschreibungstext: erklärt kurz den Nutzen des Produkts */}
      <div className="hero-section__subheadline">
        <p>
          BindiMarket erinnert Ihre Kunden automatisch per Whatsapp SMS. Weniger
          No-shows, mehr zufrieden Kunden
        </p>
      </div>
      {/* 4. Aktions-Buttons: primärer CTA für Anmelden und Registrieren */}
      <HeroCTEGroupButton />
      {/* 5. Statistik-Leiste: 4 Kennzahlen als sozialer Beweis */}
      <StatistikLine />
      {/* Noch nicht fertig — wird später eingebunden */}
      <HauptSectionFeatures />
    </section>
  );
};

export default HeroSection;
