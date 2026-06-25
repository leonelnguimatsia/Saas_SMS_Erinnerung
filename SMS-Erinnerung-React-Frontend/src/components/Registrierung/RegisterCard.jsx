/* =============================================================
   RegisterCard.jsx
   Registrierungs-Formular-Karte auf der Registrierungsseite.
   Enthält: Social-Buttons (Google, Yahoo), Vorname + Name,
   E-Mail, Passwort + Bestätigung, AGB-Checkbox mit Modal,
   Submit-Button (deaktiviert bis AGB akzeptiert) und Link
   zur Anmeldung.
   Stile kommen aus RegisterCard.css.
   ============================================================= */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterCard.css';
import Modal from '../Modal/Modal';
import { ModalInhalte } from '../../data/ModalInhalte';

import GoogleIcon from '../../Icon_SVG/google-color.svg?react';
import YahooIcon from '../../Icon_SVG/yahoo-square.svg?react';
import EyeLook from '../../Icon_SVG/eye-look.svg?react';
import EyeHidden from '../../Icon_SVG/eye-hidden.svg?react';

const RegisterCard = () => {
  const handleGoogleLogin = (onSuccess, onError) => {
    // Google OAuth Logik hier
    console.log('Google Login gestartet...');
  };

  const handleYahooLogin = (onSuccess, onError) => {
    // Yahoo OAuth Logik hier
    console.log('Yahoo Login gestartet...');
  };

  const handleAnmelden = (onSuccess, onError) => {
    // Yahoo OAuth Logik hier
    console.log('Anmdelden gestartet...');
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const [agbAkzeptiert, setAgbAkzeptiert] = useState(false);
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
    <div className="register-card">

      {/* Modal: öffnet sich bei Klick auf AGB oder Datenschutz */}
      <Modal
        isOpen={modal.isOpen}
        onClose={closeModal}
        title={modal.title}
        content={modal.content}
      />

      {/* Logo-Link → zurück zur Startseite */}
      <Link to="/" className="register-card__brand">BindiMarket</Link>

      {/* Seitentitel */}
      <span className="register-card__title">Konto erstellen</span>

      {/* Social-Login: Google */}
      <button className="register-card__btn-social" onClick={handleGoogleLogin}>
        <GoogleIcon width="24" height="24" />
        Mit Google registrieren
      </button>

      {/* Social-Login: Yahoo */}
      <button className="register-card__btn-social" onClick={handleYahooLogin}>
        <YahooIcon width="24" height="24" />
        Mit Yahoo registrieren
      </button>

      {/* Trennlinie mit "Oder"-Text */}
      <div className="register-card__divider">
        <div className="register-card__divider-line"></div>
        <span className="register-card__divider-text">Oder</span>
        <div className="register-card__divider-line"></div>
      </div>

      {/* Vorname + Name nebeneinander (auf Mobile untereinander) */}
      <div className="register-card__name-zeile">
        <div className="register-card__name-gruppe">
          <div className="register-card__field">
            <label className="register-card__label">
              Vorname
              <span className="register-card__required" title="Pflichtfeld">*</span>
            </label>
            <input className="register-card__input" type="text" placeholder="Max" />
          </div>
        </div>
        <div className="register-card__name-gruppe">
          <div className="register-card__field">
            <label className="register-card__label">
              Name
              <span className="register-card__required" title="Pflichtfeld">*</span>
            </label>
            <input className="register-card__input" type="text" placeholder="Mustermann" />
          </div>
        </div>
      </div>

      {/* E-Mail-Eingabefeld */}
      <div className="register-card__field">
        <label className="register-card__label">
          Email
          <span className="register-card__required" title="Pflichtfeld">*</span>
        </label>
        <input className="register-card__input" type="email" placeholder="name@gmail.com" />
      </div>

      {/* Passwort-Eingabe mit Anzeigen/Ausblenden-Button */}
      <div className="register-card__field">
        <label className="register-card__label">
          Passwort
          <span className="register-card__required" title="Mind. 8 Zeichen">*</span>
        </label>
        <div className="register-card__input-wrapper">
          <input
            className="register-card__input"
            type={showPassword ? 'text' : 'password'}
            placeholder="********"
          />
          {/* Eye-Button: wechselt zwischen text und password */}
          <button className="register-card__eye-btn" type="button"
            onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <EyeLook width="24" height="24" /> : <EyeHidden width="24" height="24" />}
          </button>
        </div>
      </div>

      {/* Passwort-Bestätigung mit eigenem Eye-Button */}
      <div className="register-card__field">
        <label className="register-card__label">
          Passwort Bestätigen
          <span className="register-card__required" title="Mind. 8 Zeichen">*</span>
        </label>
        <div className="register-card__input-wrapper">
          <input
            className="register-card__input"
            type={showPasswordConfirm ? 'text' : 'password'}
            placeholder="********"
          />
          {/* Unabhängiger Eye-Button für Passwort-Bestätigung */}
          <button className="register-card__eye-btn" type="button"
            onClick={() => setShowPasswordConfirm((prev) => !prev)}>
            {showPasswordConfirm ? <EyeLook width="24" height="24" /> : <EyeHidden width="24" height="24" />}
          </button>
        </div>
      </div>

      {/* AGB-Zeile: Checkbox + Links öffnen Modal */}
      <div className="register-card__agb-zeile">
        <input
          className="register-card__checkbox"
          type="checkbox"
          checked={agbAkzeptiert}
          onChange={() => setAgbAkzeptiert((prev) => !prev)}
        />
        <span className="register-card__agb-text">Ich akzeptiere die</span>
        {/* Klick öffnet AGB-Modal */}
        <span className="register-card__agb-link" onClick={() => openModal('agb')}>
          AGB
        </span>
        <span className="register-card__agb-text">und</span>
        {/* Klick öffnet Datenschutz-Modal */}
        <span className="register-card__agb-link" onClick={() => openModal('datenschutz')}>
          Datenschutzerklärung
        </span>
      </div>

      {/* Registrieren-Button — deaktiviert bis AGB angehakt */}
      <button
        className="register-card__btn-submit"
        onClick={handleAnmelden}
        disabled={!agbAkzeptiert}
      >
        Registrieren
      </button>

      {/* Link zur Anmeldung für bestehende Nutzer */}
      <div className="register-card__anmelden-zeile">
        <span className="register-card__anmelden-text">Schon ein Konto? Dann</span>
        <Link to="/anmelden" className="register-card__anmelden-link">
          Anmelden
        </Link>
      </div>

    </div>
  );
};

export default RegisterCard;
