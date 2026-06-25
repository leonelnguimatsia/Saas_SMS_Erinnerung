# Contributing — BindiMarket

Dieses Dokument beschreibt die Branch-Strategie, Commit-Regeln und den
vollständigen Workflow für die Entwicklung von BindiMarket.

---

## Branch-Strategie

| Branch      | Zweck                           | Git-Tag |
| ----------- | ------------------------------- | ------- |
| main        | Nur stabiler, getesteter Code   | ✅ Ja   |
| develop     | Entwicklungs-Integration        | ✅ Ja   |
| test        | Testbranch — hier wird getestet | ❌ Nein |
| feature/xxx | Neue Komponenten oder Seiten    | ✅ Ja   |
| bugfix/xxx  | Bug-Fixes                       | ❌ Nein |
| hotfix/xxx  | Dringende Fixes direkt auf main | ✅ Ja   |

---

## Vollständiger Workflow

```bash
# 1. Von develop abzweigen
  git checkout develop
  git pull origin develop
  git checkout -b feature/navbar

  # 2. Entwickeln + committen
  git add .
  git commit -m "Vollständiges Frontend Phase 1A — Landingpage, Auth-Seiten, Responsive Design"

  # 3. Feature in develop mergen
  git checkout develop
  git merge feature/navbar

  # 4. Tag auf develop setzen ← nach dem Merge
  git tag v0.1-Phase_1A
  # 5. Feature-Branch löschen
  git branch -d feature/navbar

  # 6. Pushen
  git push origin develop
  git push origin --tags

  # 7. Wenn develop stabil → in main mergen
  git checkout main
  git merge develop
  git push origin main
```

---

## Commit-Nachrichten Format

| Präfix    | Bedeutung                  | Beispiel                               |
| --------- | -------------------------- | -------------------------------------- |
| feat:     | Neue Funktion hinzugefügt  | feat: Burger-Menü für Mobile           |
| fix:      | Bug behoben                | fix: Modal wird nicht angezeigt        |
| docs:     | Dokumentation aktualisiert | docs: CHANGELOG ergänzt                |
| style:    | Formatierung, Kommentare   | style: CSS Kommentare hinzugefügt      |
| refactor: | Code umstrukturiert        | refactor: Handler außerhalb Komponente |
| test:     | Tests hinzugefügt          | test: LoginCard Unit-Test              |

---

## Code-Regeln

- Kommentare in allen JSX-Dateien (Header + HTML-Block-Kommentare)
- Kommentare in allen CSS-Dateien (Header + Abschnitte + @media)
- CSS-Variablen immer aus global.css verwenden (keine Hex-Werte direkt)
- Jede neue Komponente bekommt einen eigenen Ordner
- Keine console.log im fertigen Code
- .env Datei niemals committen

---

## Versionierung (Semantic Versioning)

Format: **MAJOR.MINOR.PATCH**

| Teil  | Wann erhöhen                                 | Beispiel |
| ----- | -------------------------------------------- | -------- |
| MAJOR | Komplette Neugestaltung oder Breaking Change | 2.0.0    |
| MINOR | Neue Funktion hinzugefügt                    | 0.5.0    |
| PATCH | Bug behoben                                  | 0.4.1    |

---

## CHANGELOG pflegen

Nach jedem Commit in CHANGELOG.md eintragen:

```markdown
## [Unreleased]

### Hinzugefügt

- Burger-Menü für Mobile in Navbar.jsx

### Behoben

- Formularvalidierung Login-Seite
```

Wenn eine Phase abgeschlossen ist → Versionsnummer + Datum vergeben:

```markdown
## [0.5.0] — 30.06.2026

### Hinzugefügt

- Burger-Menü für Mobile
- Formularvalidierung
```
