# CHANGELOG — BindiMarket

Alle wesentlichen Änderungen werden hier dokumentiert.
Format: MAJOR.MINOR.PATCH — nach jeder abgeschlossenen Aufgabe eintragen.

---

## [Unreleased]

### Hinzugefügt

- (noch offen — wird nach jedem Commit ergänzt)

---

## [0.4.0] — 23.06.2026

### Hinzugefügt

- @media Abschnitts-Kommentare in Navbar.css, CTABanner.css, Footer.css, Herosection.css
- Modal.css vollständig neu formatiert (saubere Inline-Kommentare)

---

## [0.3.0] — 21.06.2026

### Hinzugefügt

- Header-Kommentare in allen JSX-Dateien
- HTML-Block-Kommentare in allen JSX-Dateien
- @media Kommentare in LoginCard.css und RegisterCard.css

---

## [0.2.0] — 19.06.2026

### Hinzugefügt

- Responsive Design für alle Komponenten
- @media (max-width: 768px) — Tablet
- @media (max-width: 480px) — Mobil
- Viewport Meta-Tag in index.html

---

## [0.1.5] — 18.06.2026

### Hinzugefügt

- AGB + Datenschutz Modal in RegisterCard.jsx
- Pflicht-Checkbox: Registrieren-Button nur aktiv wenn AGB akzeptiert
- ModalInhalte.jsx mit 6 Inhalten: impressum, datenschutz, agb, cookies, adresse, kontakt

### Behoben

- export const Fehler in RegisterCard.jsx (Handler außerhalb der Komponente verschoben)
- Modal wurde nicht angezeigt (fehlendes Modal-Tag im return)

---

## [0.1.4] — 17.06.2026

### Hinzugefügt

- BindiMarket-Brand als Link zur Startseite in LoginCard.jsx
- Link zu /registrieren in LoginCard.jsx
- Link zu /anmeldung in RegisterCard.jsx

---

## [0.1.3] — 16.06.2026

### Behoben

- CardTestimonials.jsx App-Crash behoben (fehlende Props-Destructuring)
- Pricing-Card Checkbox-Ausrichtung korrigiert (align-items: flex-start)

---

## [0.1.2] — 15.06.2026

### Hinzugefügt

- Login-Seite /anmeldung: LoginCard.jsx + LoginCard.css
- Registrierungsseite /registrieren: RegisterCard.jsx + RegisterCard.css
- Passwort anzeigen/verstecken Toggle in beiden Formularen
- React Router DOM — Routen: /, /anmeldung, /registrieren

---

## [0.1.1] — 14.06.2026

### Hinzugefügt

- Footer mit 4 Spalten (Brand, Produkt, Rechtliches, Support)
- 6 Footer-Modals: Impressum, Datenschutz, AGB, Cookies, Adresse, Kontakt
- CTABanner (blauer Banner mit 2 Buttons)
- Modal.jsx wiederverwendbare Komponente

---

## [0.1.0] — 12.06.2026 — Projektstart

### Hinzugefügt

- React + Vite Projekt initialisiert
- vite-plugin-svgr installiert
- CSS Design-System in global.css (Farben, Fonts, Abstände, Rahmen)
- Navbar (Logo, Nav-Links, Buttons)
- HeroSection (Headline, Subheadline, CTA-Buttons, Statistik-Leiste)
- Features-Grid (6 Karten)
- Steps-Reihe (4 Schritte)
- Testimonials (Kundenbewertungen)
- Pricing (3 Pläne: Free, Basic 19,99€, Pro 29,99€)
- Startseite.jsx zusammengefügt
- Git-Repository + Branch-Strategie eingerichtet
