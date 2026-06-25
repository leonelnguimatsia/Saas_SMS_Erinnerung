/* =============================================================
   CardTestimonials.jsx
   Einzelne Kundenbewertungs-Karte in der Testimonials-Sektion.
   Props:
     quote        → Zitat-Text des Kunden
     autorKuerzel → 2-Buchstaben-Kürzel für den Avatar (z.B. "SM")
     autorName    → Vollständiger Name des Autors
     autorRolle   → Beruf und Standort (z.B. "Friseursalon, Berlin")
   Stile kommen aus Herosection.css (.card-testimonial).
   ============================================================= */

import React from 'react';
import StartIcon from '../../../Icon_SVG/star-rating-black.svg?react';

const CardTestimonials = ({ quote, autorKuerzel, autorName, autorRolle }) => {
  return (
    <div className="card-testimonial">
      {/* Sterne-Bewertung oben */}
      <div className="card-testimonial__stars">
        <StartIcon />
      </div>

      {/* Zitat-Text des Kunden */}
      <div className="card-testimonial__quote">{quote}</div>

      {/* Autor-Zeile: Avatar-Kürzel + Name + Rolle */}
      <div className="card-testimonial__author">
        <div className="card-testimonial__avatar">{autorKuerzel}</div>
        <div className="card-testimonial__info">
          <span className="card-testimonial__name">{autorName}</span>
          <span className="card-testimonial__role">{autorRolle}</span>
        </div>
      </div>
    </div>
  );
};

export default CardTestimonials;
