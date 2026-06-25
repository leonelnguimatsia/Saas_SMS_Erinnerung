/* =============================================================
   Modal.jsx
   Wiederverwendbare Modal-Komponente für alle Popup-Fenster.
   Props:
     isOpen  → true/false — Modal anzeigen oder ausblenden
     onClose → Funktion zum Schließen (Button, Overlay, Escape)
     title   → Überschrift im Modal-Header
     content → JSX-Inhalt des Modals (aus ModalInhalte.jsx)
   Schließen: Klick auf Overlay, Klick auf X-Button, Escape-Taste.
   Stile kommen aus Modal.css.
   ============================================================= */

import React, { useEffect } from 'react';
import './Modal.css';
import CloseIcon from '../../Icon_SVG/close-icon.svg?react';

const Modal = ({ isOpen, onClose, title, content }) => {

  /* Escape-Taste schließt das Modal */
  useEffect(() => {
    const handlekeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handlekeyDown);
    }
    /* Cleanup: Event-Listener entfernen wenn Modal geschlossen wird */
    return () => {
      document.removeEventListener('keydown', handlekeyDown);
    };
  }, [isOpen, onClose]);

  /* Modal nicht rendern wenn geschlossen */
  if (!isOpen) {
    return null;
  }

  return (
    /* Dunkler Hintergrund — Klick schließt das Modal */
    <div className="modal-overlay" onClick={onClose}>

      {/* Modal-Fenster — stopPropagation verhindert Schließen bei Klick ins Fenster */}
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        {/* Header: Titel links + X-Button rechts */}
        <div className="modal__header">
          <h2 className="modal__title">{title}</h2>
          <button className="modal__close-btn" onClick={onClose}>
            <CloseIcon className="modal__close-icon" />
          </button>
        </div>

        {/* Trennlinie zwischen Header und Inhalt */}
        <div className="modal__divider"></div>

        {/* Scrollbarer Inhaltsbereich — kommt aus ModalInhalte.jsx */}
        <div className="modal__content">{content}</div>

      </div>
    </div>
  );
};

export default Modal;
