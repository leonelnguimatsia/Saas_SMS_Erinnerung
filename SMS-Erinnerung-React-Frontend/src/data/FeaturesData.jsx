/* =============================================================
   FeaturesData.jsx
   Daten für die Feature-Sektion ("Alles was Sie brauchen").
   Jede Funktion ist eine React-Komponente mit Icon, Titel und Text.
   Das features-Array wird in HauptSectionFeatures per .map()
   als CardFeatures-Karte gerendert.
   ============================================================= */

import React from 'react';

/* SVG-Icons als React-Komponenten (vite-plugin-svgr, ?react-Syntax) */
import ChatIcon from '../Icon_SVG/Chat-Reminder.svg?react';
import CalendarIcon from '../Icon_SVG/calendar-line.svg?react';
import ShieldIcon from '../Icon_SVG/shield-checkmark.svg?react';
import WhatsappIcon from '../Icon_SVG/whatsapp.svg?react';
import ChartIcon from '../Icon_SVG/column-chart.svg?react';
import QueueIcon from '../Icon_SVG/person-queue.svg?react';

/* Feature 1: Chat-Erinnerung */
const ChatErinnerung = () => {
  return (
    <>
      {/* Icon-Bereich */}
      <div className="card-feature__icon">
        <ChatIcon width="24" height="24" />
      </div>
      {/* Titel */}
      <h3 className="card-feature__title">Chat-Erinnerung</h3>
      {/* Beschreibungstext */}
      <p className="card-feature__description">
        Automatische Terminerinnerungen direkt im Chat-Feed. Kunden bestätigen mit einem Klick.
      </p>
    </>
  );
};

/* Feature 2: Termin-Erinnerung */
const TerminErinnerung = () => {
  return (
    <>
      {/* Icon-Bereich */}
      <div className="card-feature__icon">
        <CalendarIcon width="24" height="24" />
      </div>
      {/* Titel */}
      <h3 className="card-feature__title">Termin-Erinnerung</h3>
      {/* Beschreibungstext */}
      <p className="card-feature__description">
        Alle Termine übersichtlich verwalten. Erstellen, bearbeiten und absagen in Sekunden.
      </p>
    </>
  );
};

/* Feature 3: Sicher & DSGVO */
const SicherDSGVO = () => {
  return (
    <>
      {/* Icon-Bereich */}
      <div className="card-feature__icon">
        <ShieldIcon width="24" height="24" />
      </div>
      {/* Titel */}
      <h3 className="card-feature__title">Sicher & DSGVO</h3>
      {/* Beschreibungstext */}
      <p className="card-feature__description">
        Verschlüsselt, DSGVO-konform, 2FA-Schutz inklusive. Ihre Daten bleiben in Deutschland.
      </p>
    </>
  );
};

/* Feature 4: WhatsApp oder SMS */
const WhatsApp_SMS = () => {
  return (
    <>
      {/* Icon-Bereich */}
      <div className="card-feature__icon">
        <WhatsappIcon width="24" height="24" />
      </div>
      {/* Titel */}
      <h3 className="card-feature__title">WhatsApp oder SMS</h3>
      {/* Beschreibungstext */}
      <p className="card-feature__description">
        Erinnerungen per WhatsApp oder SMS. Kunden werden rechtzeitig informiert, egal wo sie sind.
      </p>
    </>
  );
};

/* Feature 5: Analytics */
const Analytics = () => {
  return (
    <>
      {/* Icon-Bereich */}
      <div className="card-feature__icon">
        <ChartIcon width="24" height="24" />
      </div>
      {/* Titel */}
      <h3 className="card-feature__title">Analytics</h3>
      {/* Beschreibungstext */}
      <p className="card-feature__description">
        Sehen Sie wie viele Kunden bestätigt haben und wie sich No-Show-Raten entwickeln.
      </p>
    </>
  );
};

/* Feature 6: Dienstleistungen */
const Dienstleistungen = () => {
  return (
    <>
      {/* Icon-Bereich */}
      <div className="card-feature__icon">
        <QueueIcon width="24" height="24" />
      </div>
      {/* Titel */}
      <h3 className="card-feature__title">Dienstleistungen</h3>
      {/* Beschreibungstext */}
      <p className="card-feature__description">
        Verwalten Sie mehrere Dienste und Mitarbeiter in einem einzigen Account.
      </p>
    </>
  );
};

/* Array mit allen 6 Feature-Karten — wird in HauptSectionFeatures per .map() gerendert */
export const features = [
  { id: 'chat-erinnerung', content: <ChatErinnerung /> },
  { id: 'termin-erinnerung', content: <TerminErinnerung /> },
  { id: 'sicher', content: <SicherDSGVO /> },
  { id: 'whatsapp_sms', content: <WhatsApp_SMS /> },
  { id: 'analytics', content: <Analytics /> },
  { id: 'dienstleistung', content: <Dienstleistungen /> },
];
