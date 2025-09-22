# Google Workspace per l'Educazione

Slide interattive per il corso di formazione sui strumenti Google Workspace dedicato ai docenti di scuola secondaria.

## 📚 Contenuto del Corso

Il corso è strutturato in 5 moduli principali:

- **Modulo 1: Introduzione** - Panoramica Google Workspace e configurazione account
- **Modulo 2: Strumenti Core** - Drive, Gmail, Calendar, Chat - I fondamentali
- **Modulo 3: Creazione Contenuti** - Docs, Sheets, Slides, Forms
- **Modulo 4: Didattica Avanzata** - Meet, Classroom, Sites, Keep, Tasks
- **Modulo 5: Best Practices** - Integrazione, sicurezza, casi d'uso

## 🚀 Demo Online

Le slide sono disponibili online su GitHub Pages:
[https://thomascasali.github.io/google-workspace-slides](https://thomascasali.github.io/google-workspace-slides)

## 🛠️ Tecnologie Utilizzate

- **React 19** - Framework per l'interfaccia utente
- **Tailwind CSS** - Framework CSS per lo styling
- **Lucide React** - Libreria di icone
- **GitHub Pages** - Hosting delle slide

## 💻 Sviluppo Locale

### Prerequisiti

- Node.js (versione 14 o superiore)
- npm o yarn

### Installazione

1. Clona il repository:
```bash
git clone https://github.com/thomascasali/google-workspace-slides.git
cd google-workspace-slides
```

2. Installa le dipendenze:
```bash
npm install
```

3. Avvia il server di sviluppo:
```bash
npm start
```

L'applicazione sarà disponibile su [http://localhost:3000](http://localhost:3000).

### Build per Produzione

Per creare una build ottimizzata per la produzione:

```bash
npm run build
```

### Deploy su GitHub Pages

Per pubblicare le modifiche su GitHub Pages:

```bash
npm run deploy
```

## 📁 Struttura del Progetto

```
google-workspace-slides/
├── public/
│   ├── index.html
│   └── assets/
├── src/
│   ├── GoogleWorkspaceSlides.jsx  # Componente principale con tutte le slide
│   ├── App.js                     # Componente principale dell'app
│   └── index.js                   # Entry point
├── package.json
└── README.md
```

## 🎯 Funzionalità

- **Navigazione intuitiva** - Frecce direzionali e indicatori di progresso
- **Responsive design** - Ottimizzato per desktop, tablet e mobile
- **Contenuti interattivi** - Esempi pratici e casi d'uso reali
- **Codice colore** - Ogni modulo ha un tema cromatico distintivo
- **Icone visive** - Interfaccia user-friendly con iconografia moderna

## 📝 Personalizzazione

Per modificare il contenuto delle slide, edita il file `src/GoogleWorkspaceSlides.jsx`. Ogni slide è un componente React separato per facilitare la manutenzione.

## 📄 Licenza

Questo progetto è stato creato per scopi educativi e formativi.

## 👨‍💻 Autore

Thomas Casali

---

*Creato con ❤️ per la formazione digitale degli insegnanti*