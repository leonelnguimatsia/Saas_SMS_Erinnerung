/* =============================================================
   NavLinks.jsx
   Mittlere Navigationslinks der Navbar.
   Anchor-Links scrollen zur jeweiligen Sektion auf der Startseite:
     #funktionen → Section Features
     #preise      → Section Pricing
     #ueber-uns   → Footer
   Stile kommen aus Navbar.css (.navbar__links).
   ============================================================= */

import React from 'react';

const NavLinks = () => {
  return (
    <div className="navbar__links">
      {/* Scrollt zur Feature-Sektion */}
      <a href="#funktionen">Funktionen</a>
      {/* Scrollt zur Pricing-Sektion */}
      <a href="#preise">Preise</a>
      {/* Scrollt zum Footer */}
      <a href="#ueber-uns">Über uns</a>
    </div>
  );
};

export default NavLinks;
