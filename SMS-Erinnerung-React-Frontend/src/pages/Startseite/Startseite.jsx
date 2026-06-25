/* =============================================================
   Startseite.jsx
   Haupt-Seite der Landing Page (Route: /).
   Setzt alle Sektionen in der richtigen Reihenfolge zusammen:
   Navbar → HeroSection → CTABanner → Footer.
   Stile kommen aus Startseite.css.
   ============================================================= */

import React from 'react';
import './Startseite.css';
import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';
import CTABanner from '../../components/CTABanner/CTABanner';
import Footer from '../../components/Footer/Footer';

const Startseite = () => {
  return (
    /* Seiten-Wrapper: stapelt alle Sektionen vertikal */
    <div className="startseite">
      {/* 1. Navigationsleiste — oben fixiert */}
      <Navbar />
      {/* 2. Hero-Bereich — Badge, H1, Buttons, Statistik, Features, Steps, Testimonials, Pricing */}
      <HeroSection />
      {/* 3. Call-To-Action-Banner — blauer Bereich mit Registrieren-Button */}
      <CTABanner />
      {/* 4. Footer — Links, Rechtliches, Copyright */}
      <Footer />
    </div>
  );
};

export default Startseite;
