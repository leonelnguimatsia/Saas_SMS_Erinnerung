/* =============================================================
   ModalInhalte.jsx
   Texte und Struktur für alle Modal-Fenster im Footer.
   Jeder Eintrag ist eine React-Komponente mit HTML-Tags.
   Das ModalInhalte-Objekt wird in Footer.jsx und
   RegisterCard.jsx verwendet: ModalInhalte['key'].
   Schlüssel: impressum, datenschutz, agb, cookies,
              adresse, kontakt.
   ============================================================= */

import React from 'react';

/* Modal-Inhalt 1: Impressum */
const Impressum = () => {
  return (
    <div>
      {/* Firmenname */}
      <p><strong>BindiMarket</strong></p>
      {/* Verantwortliche Person */}
      <p>Max Mustermann</p>
      {/* Adresse */}
      <p>12345 Berlin, Deutschland</p>
      <br />
      {/* Kontaktdaten */}
      <p>E-mail: kontakt@bindimarket.de</p>
      <p>Telefon: +49 30 123456789</p>
      <br />
      {/* Steuerliche Angaben */}
      <p>Umsatzsteuer-ID: DE123456789</p>
    </div>
  );
};

/* Modal-Inhalt 2: Datenschutz */
const Datenschutz = () => {
  return (
    <div>
      {/* Zweck der Datenerhebung */}
      <p>Wir erheben Ihre Daten (Name, E-Mail) zur Bereitstellung unserer Dienste.</p>
      <br />
      {/* Rechtsgrundlage und Speicherort */}
      <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.</p>
      <p>Speicherung ausschließlich auf Servern in Deutschland.</p>
      <br />
      {/* Auskunfts-Kontakt */}
      <p>Auskunft: <strong>datenschutz@bindimarket.de</strong></p>
    </div>
  );
};

/* Modal-Inhalt 3: AGB */
const AGB = () => {
  return (
    <div>
      {/* Nummerierte Liste der AGB-Punkte */}
      <ol type="1. ">
        {/* Punkt 1 */}
        <li><strong>Vertragsgegenstand</strong></li>
        <p>BindiMarket bietet Terminerinnerungen per SMS und WhatsApp.</p>
        <br />
        {/* Punkt 2 */}
        <li><strong>Zahlung</strong></li>
        <p>Abrechnung monatlich im Voraus.</p>
        <br />
        {/* Punkt 3 */}
        <li><strong>Kündigung</strong></li>
        <p>Jederzeit zum Ende des Abrechnungszeitraums.</p>
      </ol>
      <br />
      {/* Stand-Datum */}
      <p>Stand: Juni 2026</p>
    </div>
  );
};

/* Modal-Inhalt 4: Cookie-Richtlinie */
const Cookies = () => {
  return (
    <div>
      {/* Einleitung */}
      <p>Wir verwenden folgende Cookies:</p>
      <br />
      {/* Notwendige Cookies */}
      <p><strong>Notwendige Cookies:</strong></p>
      <p>Für Authentifizierung und Session.</p>
      <br />
      {/* Analyse-Cookies */}
      <p><strong>Analyse-Cookies:</strong></p>
      <p>Nur mit Ihrer Zustimmung.</p>
      <br />
      {/* Hinweis zum Deaktivieren */}
      <p>Cookies können in den Browser-Einstellungen deaktiviert werden.</p>
    </div>
  );
};

/* Modal-Inhalt 5: Adresse */
const Adresse = () => {
  return (
    <div>
      {/* Firmenname */}
      <p><strong>BindiMarket</strong></p>
      {/* Anschrift */}
      <p>Musterstraße 1</p>
      <p>12345 Berlin</p>
      <p>Deutschland</p>
    </div>
  );
};

/* Modal-Inhalt 6: Kontakt */
const Kontakt = () => {
  return (
    <div>
      {/* E-Mail und Telefon */}
      <p>E-Mail: <strong>kontakt@bindimarket.de</strong></p>
      <p>Telefon: <strong>+49 30 123456789</strong></p>
      <br />
      {/* Erreichbarkeit */}
      <p>Montag – Freitag: 9:00 – 17:00 Uhr</p>
      <p>Antwort innerhalb von 24 Stunden.</p>
    </div>
  );
};

/* Exportiertes Objekt — Schlüssel entsprechen den openModal('key')-Aufrufen */
export const ModalInhalte = {
  impressum:   { title: 'Impressum',        content: <Impressum /> },
  datenschutz: { title: 'Datenschutz',      content: <Datenschutz /> },
  agb:         { title: 'AGB',              content: <AGB /> },
  cookies:     { title: 'Cookie-Richtlinie',content: <Cookies /> },
  adresse:     { title: 'Adresse',          content: <Adresse /> },
  kontakt:     { title: 'Kontakt',          content: <Kontakt /> },
};
