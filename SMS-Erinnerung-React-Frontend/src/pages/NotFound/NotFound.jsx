/* =============================================================
     NotFound.jsx
     404-Fehlerseite (Route: *).
     Aufbau: Navbar → Content (Bild, Headline, Beschreibung, Button)
             → Footer (Copyright links, Links rechts).
     Maße und Farben direkt aus Figma-Export, Tokens aus global.css.
============================================================= */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import Modal from '../../components/Modal/Modal';
import { ModalInhalte } from '../../data/ModalInhalte';
import CopyrightIcon from '../../Icon_SVG/copyright.svg?react';
import RobotImg from '../../Icon_SVG/Robot-Image.png';

const NotFound = () => {
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
    <div className="notfound">
      {/* Modal: wird geöffnet wenn Rechtliches/Support-Links geklickt werden */}
      <Modal
        isOpen={modal.isOpen}
        onClose={closeModal}
        title={modal.title}
        content={modal.content}
      />
      {/* 1. Navbar — nur Logo "BindiMarket", kein NavLinks/NavActions */}
      <div className="notfound__navbar">
        <Link to="/" className="notfound__navbar-brand">
          BindiMarket
        </Link>
      </div>

      {/* 2. Content — Bild, Headline, Beschreibung, Button */}
      <div className="notfound__content">
        <img className="notfound__image" src={RobotImg} alt="Robot Image" />
        {/* Headline: Medium-28, Text Heading */}
        <h1 className="notfound__headline">Hoppla! Seite nicht gefunden</h1>
        <p className="notfound__description">
          Die von Ihnen gesuchte Seite scheint nicht mehr zu existieren oder
          wurde verschoben. Keine Sorge, wir führen Sie zurück auf den richtigen
          Weg.
        </p>
        {/* Button: Primary, 226×48px */}
        <Link to="/" className="notfound__btn">
          {/* Pfeil-Links — CSS-only via ::before + ::after */}
          <span className="notfound__btn-arrow" aria-hidden="true" />
          {/* Button-Text: Medium-500, 16px, Weiß */}
          <span className="notfound__btn-label">Zurück zur Startseite</span>
        </Link>
      </div>
      {/* 3. Footer — Copyright links, Links rechts */}
      <footer className="notfound__footer">
        {/* Links: Brand + Copyright */}
        <div className="notfound__footer-left">
          <span className="notfound__footer-brand">BindiMarket</span>
          <div className="notfound__copyright">
            <CopyrightIcon />
            <span className="notfound__copyright-text">
              2024 BindiMarket. Alle Rechte vorbehalten.
            </span>
          </div>
        </div>

        {/* Rechts: Rechtliche Links */}
        <div className="notfound__footer-right">
          <span
            className=" notfound__footer-link notfound__footer-link--impressum"
            onClick={() => openModal('impressum')}
          >
            Impressum
          </span>
          <span
            className="notfound__footer-link notfound__footer-link--datenschutz"
            onClick={() => openModal('datenschutz')}
          >
            Datenschutz
          </span>
          <span
            className="notfound__footer-link notfound__footer-link--kontakt"
            onClick={() => openModal('kontakt')}
          >
            Kontakt
          </span>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
