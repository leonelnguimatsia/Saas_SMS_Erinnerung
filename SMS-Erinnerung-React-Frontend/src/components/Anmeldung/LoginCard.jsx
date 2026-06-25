/* =============================================================
   LoginCard.jsx
   Login-Formular-Karte auf der Anmeldung-Seite.
   Enthält: Social-Buttons (Google, Yahoo), E-Mail + Passwort,
   Passwort anzeigen/ausblenden, Checkbox "Angemeldet bleiben",
   "Passwort vergessen" und Link zur Registrierung.
   Stile kommen aus LoginCard.css.
   ============================================================= */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginCard.css';
import GoogleIcon from '../../Icon_SVG/google-color.svg?react';
import YahooIcon from '../../Icon_SVG/yahoo-square.svg?react';
import EyeLook from '../../Icon_SVG/eye-look.svg?react';
import EyeHidden from '../../Icon_SVG/eye-hidden.svg?react';

export const handleGoogleLogin = (onSuccess, onError) => {
  // Google OAuth Logik hier
  console.log('Google Login gestartet...');
};

export const handleYahooLogin = (onSuccess, onError) => {
  // Yahoo OAuth Logik hier
  console.log('Yahoo Login gestartet...');
};

export const handleAnmelden = (onSuccess, onError) => {
  // Yahoo OAuth Logik hier
  console.log('Anmdelden gestartet...');
};

const LoginCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="login-card">

      {/* Logo-Link → zurück zur Startseite */}
      <Link to="/" className="login-card__brand">BindiMarket</Link>

      {/* Seitentitel */}
      <p className="login-card__title">Anmelden</p>

      {/* Social-Login: Google */}
      <button className="login-card__btn-social" onClick={handleGoogleLogin}>
        <GoogleIcon width="24" height="24" />
        Mit Google anmelden
      </button>

      {/* Social-Login: Yahoo */}
      <button className="login-card__btn-social" onClick={handleYahooLogin}>
        <YahooIcon width="24" height="24" />
        Mit Yahoo anmelden
      </button>

      {/* Trennlinie mit "Oder"-Text */}
      <div className="login-card__divider">
        <div className="login-card__divider-line"> </div>
        <span className="login-card__divider-text">Oder</span>
        <div className="login-card__divider-line"> </div>
      </div>

      {/* E-Mail-Eingabefeld */}
      <div className="login-card__field">
        <label className="login-card__label">
          E-Mail
          <span className="register-card__required" title="Pflichtfeld">*</span>
        </label>
        <input
          className="login-card__input"
          type="email"
          placeholder="name@gmail.com"
        />
      </div>

      {/* Passwort-Eingabe mit Anzeigen/Ausblenden-Button */}
      <div className="login-card__field">
        <label className="login-card__label">
          Passwort
          <span className="register-card__required" title="Pflichtfeld">*</span>
        </label>
        <div className="login-card__input-wrapper">
          <input
            className="login-card__input"
            type={showPassword ? 'text' : 'password'}
            placeholder="********"
          />
          {/* Eye-Button: wechselt zwischen text und password */}
          <button
            type="button"
            className="login-card__eye-btn"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <EyeLook width="24" height="24" />
            ) : (
              <EyeHidden width="24" height="24" />
            )}
          </button>
        </div>
      </div>

      {/* Checkbox "Angemeldet bleiben" + "Passwort vergessen" */}
      <div className="login-card__checkbox-zeile">
        <div className="login-card__checkbox-links">
          <input type="checkbox" className="login-card__checkbox" />
          <p className="login-card__checkbox-label">Angemeldet bleiben</p>
        </div>
        <p className="login-card__forgot">Passwort vergessen?</p>
      </div>

      {/* Anmelden-Button */}
      <button
        className="login-card__btn-submit"
        type="button"
        onClick={handleAnmelden}
      >
        Anmelden
      </button>

      {/* Link zur Registrierung für neue Nutzer */}
      <div className="login-card__registrieren">
        <span className="login-card__registrieren-text">Noch Kein Konto?</span>
        <Link to="/registrieren" className="login-card__registrieren-link">
          Registrieren
        </Link>
      </div>

    </div>
  );
};

export default LoginCard;
