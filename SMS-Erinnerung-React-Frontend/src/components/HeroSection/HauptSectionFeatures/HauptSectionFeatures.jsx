/* =============================================================
   HauptSectionFeatures.jsx
   Alle Haupt-Sektionen unterhalb des Hero-Bereichs:
     1. Features     → 6 Karten "Alles was Sie brauchen"
     2. Steps        → 4 Schritte "So funktioniert es"
     3. Testimonials → Kundenbewertungen (horizontal scrollbar)
     4. Pricing      → 3 Preispläne (Free, Basic, Pro)
   Daten kommen aus separaten Dateien im /data-Ordner.
   Stile kommen aus Herosection.css.
   ============================================================= */

import React from 'react';
import CardFeatures from './CardFeatures';
import CardSteps from './CardSteps';
import CardTestimonials from './CardTestimonials';
import CardPricing from './CardPricing';

import { features } from '../../../data/FeaturesData';
import { steps } from '../../../data/StepsData';
import { testimonials } from '../../../data/TestimonialsData';
import { pricingPlans } from '../../../data/PrincingData';

const HauptSectionFeatures = () => {
  return (
    /* Äußerer Wrapper: enthält alle 4 Sektionen */
    <section className="haupt-section-features">

      {/* ── SEKTION 1: FEATURES ────────────────────────────────
          id="funktionen" → Anchor-Ziel für Navbar-Link
          Zeigt 6 Feature-Karten im Grid (3 pro Zeile)         */}
      <div id="funktionen" className="section-features">
        {/* Header: Überschrift + Untertitel */}
        <div className="features-header">
          <h2 className="features-header__title">Alles was Sie brauchen</h2>
          <p className="features-header__subtitle">Einfach, schnell und zuverlässig</p>
        </div>
        {/* Grid: rendert jede Feature-Karte aus FeaturesData.jsx */}
        <div className="feature-grid">
          {features.map((feature) => (
            <CardFeatures key={feature.id} content={feature.content} />
          ))}
        </div>
      </div>

      {/* ── SEKTION 2: STEPS ───────────────────────────────────
          Zeigt 4 Schritte horizontal nebeneinander             */}
      <div className="section-steps">
        {/* Header: Überschrift + Untertitel */}
        <div className="step-header">
          <h2 className="step-header__title">So funktioniert es</h2>
          <p className="step-header__subtitle">in 4 einfachen Schritten loslegen</p>
        </div>
        {/* Schritt-Zeile: rendert jeden Schritt aus StepsData.jsx */}
        <div className="steps-row">
          {steps.map((step) => (
            <CardSteps key={step.id} content={step.content} />
          ))}
        </div>
      </div>

      {/* ── SEKTION 3: TESTIMONIALS ────────────────────────────
          Horizontal scrollbar wenn mehr Karten als Platz       */}
      <div className="section-testimonials">
        {/* Header: Überschrift + Untertitel */}
        <div className="testimonials-header">
          <h2 className="testimonials-header__title">Was unsere Kunden sagen</h2>
          <p className="testimonials-header__subtitle">Über 2.400 Dienstleister vertrauen BindiMarket</p>
        </div>
        {/* Karten-Zeile: rendert jede Bewertung aus TestimonialsData.js */}
        <div className="testimonials-row">
          {testimonials.map((testimonial) => (
            <CardTestimonials
              key={testimonial.id}
              quote={testimonial.quote}
              autorKuerzel={testimonial.autorKuerzel}
              autorName={testimonial.autorName}
              autorRolle={testimonial.autorRolle}
            />
          ))}
        </div>
      </div>

      {/* ── SEKTION 4: PRICING ─────────────────────────────────
          id="preise" → Anchor-Ziel für Navbar-Link
          Zeigt 3 Preispläne: Free, Basic, Pro                  */}
      <div id="preise" className="section-pricing">
        {/* Header: Überschrift + Untertitel */}
        <div className="pricing-header">
          <h2 className="pricing-header__title">Transparente Preise</h2>
          <p className="pricing-header__subtitle">Keine versteckten Kosten - jederzeit kündigbar</p>
        </div>
        {/* Karten-Zeile: rendert jeden Plan aus PrincingData.js */}
        <div className="pricing-row">
          {pricingPlans.map((plan) => (
            <CardPricing
              key={plan.id}
              label={plan.label}
              preis={plan.preis}
              periode={plan.periode}
              gruppeTitel={plan.gruppeTitel}
              features={plan.features}
              featured={plan.featured}
              badge={plan.badge}
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default HauptSectionFeatures;
