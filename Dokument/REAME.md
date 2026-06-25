# Git-Projektstruktur und Workflow — SMS-Erinnerung SaaS

Das README ist der erste Einstiegspunkt für jeden Entwickler. Es beschreibt das Projekt, erklärt die Installation und gibt alle notwendigen Befehle um die Anwendung lokal zu starten.

Die vollständige Projektdokumentation befindet sich in Notion unter folgendem Link: [BindiMarket — Projektdokumentation](https://app.notion.com/p/WhatsApp-SMS-Erinnerungen-388709e9a512804c8a6cd57b33f1061b?source=copy_link)

## 1. Zweck

Dieses Dokument beschreibt die Ordnerstruktur des React-Frontends sowie die Git-Branch-Strategie und den vollständigen Workflow für das SMS-Erinnerung SaaS-Projekt. Es dient als Referenz für eine konsistente und professionelle Entwicklung.

## 2. Tech-Stack Übersicht

| Tech/Baustein                                        | Zweck                                                                                | Wofür im Projekt                                                                      |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| React + Vite (Frontend SPA: Single-Page Application) | Frontend Framework + Build/De-Tooling                                                | UI bauen (Dashboard, Einstellung, Kunden/Termine), Schnelle Entwicklung               |
| CSS Design Tokens                                    | Zentrale Design-Variablen (Farben, Abstände, Typografie) für konsistentes UI-Styling | Quelle der Wahrheit für Design-Werte                                                  |
| Java 17 + Spring Boot 3                              | Backend-Framework                                                                    | REST-API, Business-Logik (Termine, Kunden, Reminder-Regeln, Versand Workflow)         |
| Spring Security + JWT                                | Authentifikation & Security                                                          | Login/Registrierung-Zugriffschutz, Token-basierte Sessions                            |
| PostgreSQL 16                                        | Primäre Datenbank                                                                    | Persistente Daten: Admin User, User (Kunden), Termine, Reminder, Logs, Zahlungsstatus |
| Redis                                                | In-Memory Cache/Store                                                                | OTP/Verifikation, Rate Limits, Cache, gegebenenfalls Job/Queue Unterstützung          |
| Stripe / PayPal                                      | Payments                                                                             | Abos, Zahlungen, Rechnungsstatus, Webhooks verarbeiten                                |
| OAuth2 (Google, Yahoo)                               | Social Login                                                                         | "Mit Google anmelden", Weniger Passwort Handling, Schnellere Registrierung            |

## 3. Projektstruktur

```
SMS-Erinnerung-React-Frontend/
│
├── src/
│ ├── components/
│ │ ├── Navbar/
│ │ │ ├── Navbar.jsx
│ │ │ ├── Navbar.css
│ │ │ ├── NavLinks.jsx
│ │ │ └── NavActions.jsx
│ │ │
│ │ ├── HeroSection/
│ │ │ ├── HeroSection.jsx
│ │ │ ├── HeroSection.css
│ │ │ ├── BadgeNew.jsx
│ │ │ ├── HeroCTEGroupButton.jsx
│ │ │ ├── StatistikLine.jsx
│ │ │ └── HauptSectionFeatures.jsx
│ │ │
│ │ ├── CTABanner/
│ │ │ ├── CTABanner.jsx
│ │ │ ├── CTABanner.css
│ │ │ └── SectionBanner.jsx
│ │ │
│ │ └── Footer/
│ │ ├── Footer.jsx
│ │ ├── Footer.css
│ │ ├── FooterTop.jsx
│ │ ├── FooterDivider.jsx
│ │ └── FooterBottom.jsx
│ │
│ ├── pages/
│ │ └── Startseite/
│ │ ├── Startseite.jsx
│ │ └── Startseite.css
│ │
│ ├── assets/
│ │ └── (Bilder, Icons, Fonts)
│ │
│ ├── styles/
│ │ └── global.css ← gemeinsame Variablen, Farben, Fonts
│ │
│ ├── App.jsx
│ ├── App.css
│ ├── main.jsx
│ └── index.css
│
└── package.json
```

## 4. Branches für ein professionelles Projekt

```
main ← nur stabiler, getesteter Code kommt hier rein
develop ← Hauptentwicklungs-Branch, hier wird alles zusammengeführt
test ← hier wird getestet, nichts wird entwickelt
Features        # Für jede neue Komponente oder Seite (einzelne Features)(deine  |tägliche Arbeit)
│               # Tag-Version: ✅ Ja — markiert fertigen Feature-Stand
├── feature/navbar
├── feature/hero-section
├── feature/cta-banner
├── feature/footer
├── feature/anmeldung
├── feature/dashboard
│
├── bugfix/... ← wenn ein Bug auftaucht. Tag-Version: ❌ Nein — kleiner Fix, kein Tag nötig
│
└── hotfix/.... ← nur für dringende Fixes auf main. Tag-Version: ✅ Ja — markiert stabile Version nach kritischem Fix
```

## 5. Kompletter Workflow

```bash
# 1. develop aktualisieren
git checkout develop
git pull origin develop

# 2. Neuen Feature-Branch starten

git checkout -b feature/navbar

# 3. Arbeiten + committen...

# 4. develop   hat sich weiterentwickelt? Reinholen:

git fetch origin # holt Änderungen von GitHub, aber übernimmt noch nichts
git merge develop # ← du bleibst auf feature/navbar

# 5. Konflikte lösen falls nötig, dann:

git checkout develop
git merge feature/navbar
git checkout -b feature/navbar
git tag v0.1-navbar # Später kannst du jederzeit dahin zurück
git branch -d feature/xxx # Branch löschen
git push origin develop

# Wenn develop stabil ist → in main mergen

git checkout main
git pull origin main # main aktualisieren
git merge develop # develop reinholen
git push origin main
```
