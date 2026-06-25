/* =============================================================
   CardPricing.jsx
   Einzelne Preis-Karte in der Pricing-Sektion.
   Props:
     label       → Plan-Name (Free / Basic / Pro)
     preis       → Preis-Anzeige (z.B. "14,99€")
     periode     → Abrechnungsperiode (z.B. "/Monat")
     gruppeTitel → Zielgruppe (z.B. "Für Einsteiger")
     features    → Array von enthaltenen Leistungen
     featured    → true = hervorgehobene Karte mit blauem Rahmen
     badge       → optionaler Badge-Text (z.B. "Empfohlen")
   Stile kommen aus Herosection.css (.card-pricing).
   ============================================================= */

import React from 'react';
import { Link } from 'react-router-dom';

const CardPricing = ({
  label,
  featured,
  badge,
  preis,
  periode,
  gruppeTitel,
  features,
}) => {
  return (
    /* featured-Karte erhält zusätzlich .card-pricing--featured (blauer Rahmen) */
    <div className={`card-pricing ${featured ? 'card-pricing--featured' : ''}`}>

      {/* Plan-Name + optionaler "Empfohlen"-Badge */}
      <div className="card-pricing__label-row">
        <span className="card-pricing__label">{label}</span>
        {badge && <span className="card-pricing__badge">{badge}</span>}
      </div>

      {/* Preis: großer Betrag + "/Monat" klein daneben */}
      <div className="card-pricing__price">
        <span className="card-pricing__amount">{preis}</span>
        <span className="card-pricing__period">{periode}</span>
      </div>

      {/* Zielgruppen-Label unter dem Preis */}
      <span className="card-pricing__group-label">{gruppeTitel}</span>

      {/* Trennlinie zwischen Preis und Feature-Liste */}
      <div className="card-pricing__divider"></div>

      {/* Liste der enthaltenen Leistungen mit Häkchen */}
      <div className="card-pricing__features">
        {features.map((feature, index) => (
          <div key={index} className="card-pricing__feature-item">
            <span className="card-pricing__check"></span>
            {feature}
          </div>
        ))}
      </div>

      {/* CTA-Button: "Jetzt starten" für featured, sonst "Auswählen" */}
      <Link to="/anmelden" className="card-pricing__cta">
        {featured ? 'Jetzt starten' : 'Auswählen'}
      </Link>
    </div>
  );
};

export default CardPricing;
