/* =============================================================
   Footer.jsx
   Seiten-Footer der Startseite.
   Enthält: Brand-Info, Produkt-Links (Funktionen, Preise),
   Rechtliches (Impressum, Datenschutz, AGB, Cookies),
   Support (Adresse, Kontakt) und Copyright-Zeile.
   Rechtliches und Support öffnen einen Modal mit Inhalt
   aus ModalInhalte.jsx.
   id="ueber-uns" ermöglicht Anchor-Navigation vom Navbar.
   Stile kommen aus Footer.css.
   ============================================================= */

import React, { useState } from 'react';
import './Footer.css';

/* SVG-Icons als React-Komponenten (vite-plugin-svgr, ?react-Syntax) */
import CopyrightIcon from '../../Icon_SVG/copyright.svg?react';
import HeartIcon from '../../Icon_SVG/heart.svg?react';
import Modal from '../Modal/Modal';
import { ModalInhalte } from '../../data/ModalInhalte';

const Footer = () => {
  const [modal, setModal] = useState({
    isOpen: false,
    title: '',
    content: null,
  });

  const openModal = (key) => {
    setModal({
      isOpen: true,
      title: ModalInhalte[key].title,
      content: ModalInhalte[key].content,
    });
  };

  const closeModal = () => {
    setModal({
      isOpen: false,
      title: '',
      content: null,
    });
  };

  return (
    /* id="ueber-uns" → Anchor-Ziel für den "Über uns" Navbar-Link */
    <footer id="ueber-uns">

      {/* Modal: wird geöffnet wenn Rechtliches/Support-Links geklickt werden */}
      <Modal
        isOpen={modal.isOpen}
        onClose={closeModal}
        title={modal.title}
        content={modal.content}
      />

      <div className="footer">
        {/* Oberer Bereich: 4 Spalten nebeneinander */}
        <div className="footer-top">

          {/* Spalte 1: Brand-Name + Kurzbeschreibung */}
          <div className="footer-brand">
            <span className="footer-brand__name">BindiMarket</span>
            <p className="footer-brand__description">
              Die smarte Terminverwaltung für Dienstleister in Deutschland.
              DSGVO-konform und sicher.
            </p>
          </div>

          {/* Spalte 2: Produkt-Links → Anchor-Scroll zur jeweiligen Sektion */}
          <div className="footer-col">
            <span className="footer-col__title">Produkt</span>
            <a href="#funktionen" className="footer-col__link">Funktionen</a>
            <a href="#preise" className="footer-col__link">Preise</a>
          </div>

          {/* Spalte 3: Rechtliches → öffnen jeweils einen Modal */}
          <div className="footer-col">
            <span className="footer-col__title">Rechtliches</span>
            <span className="footer-col__link" onClick={() => openModal('impressum')}>
              Impressum
            </span>
            <span className="footer-col__link" onClick={() => openModal('datenschutz')}>
              Datenschutz
            </span>
            <span className="footer-col__link" onClick={() => openModal('agb')}>
              AGB
            </span>
            <span className="footer-col__link" onClick={() => openModal('cookies')}>
              Cookie-Richtlinie
            </span>
          </div>

          {/* Spalte 4: Support → öffnen jeweils einen Modal */}
          <div className="footer-col">
            <span className="footer-col__title">Support</span>
            <span className="footer-col__link" onClick={() => openModal('adresse')}>
              Adresse
            </span>
            <span className="footer-col__link" onClick={() => openModal('kontakt')}>
              Kontakt
            </span>
          </div>

        </div>
      </div>

      {/* Horizontale Trennlinie */}
      <div className="footer-divider"></div>

      {/* Unterer Bereich: Copyright links + "Made with ♥" rechts */}
      <div className="footer-bottom">
        <span className="footer-copyright">
          <CopyrightIcon width="16" height="16" /> 2026 BindiMarket. Alle Rechte vorbehalten.
        </span>
        <span className="footer-made-in">
          Made with <HeartIcon width="16" height="16" /> in Deutschland
        </span>
      </div>

    </footer>
  );
};

export default Footer;
