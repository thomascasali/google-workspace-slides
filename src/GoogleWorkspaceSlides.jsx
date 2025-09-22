import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Home, Mail, Folder, FileText, BarChart3, Presentation, FileQuestion, Calendar, Video, MessageCircle, Globe, GraduationCap, StickyNote, Shield, Users, BookOpen, Settings, CheckCircle, Lightbulb, Share2, Cloud, Search, Edit, Play, Menu, Star, Clock, Filter, Archive, Send, Eye, MessageSquare, Lock, Smartphone, Monitor, Tablet, Download, Upload, Link, Copy, Trash2, AlertCircle, Zap, Target, Bell, Mic, Camera, Plus, Minus, RotateCcw, History, Database, PieChart, TrendingUp, Layers, GitBranch, Wifi, WifiOff, Palette, Image, MousePointer, Hand, Trophy, Rocket, Repeat, Heart, Laptop } from 'lucide-react';


// ===== COMPONENTI SLIDE INDIVIDUALI =====

// Slide 1-4: Introduzione (già implementate)
const Slide01_Title = () => (
  <div className="text-center space-y-12 px-4">
    <div className="text-9xl mb-12">📚</div>
    <div className="space-y-8">
      <h1 className="text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">Google Workspace per l'Educazione</h1>
      <p className="text-3xl text-gray-600">Strumenti digitali per la didattica moderna</p>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl inline-block border-2 border-blue-200">
        <p className="text-2xl text-blue-800 font-semibold">Corso di formazione per docenti di scuola secondaria</p>
      </div>
    </div>
  </div>
);

const Slide02_Agenda = () => (
  <div className="space-y-8">
    <div className="text-center mb-10">
      <h2 className="text-5xl font-bold text-gray-800">Agenda del Corso</h2>
      <p className="text-2xl text-gray-600 mt-4">Struttura completa della formazione</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {[
        { title: "Modulo 1: Introduzione", desc: "Panoramica Google Workspace e configurazione account", color: "blue", icon: "🚀" },
        { title: "Modulo 2: Strumenti Core", desc: "Drive, Gmail, Calendar, Chat - I fondamentali", color: "green", icon: "🛠️" },
        { title: "Modulo 3: Creazione Contenuti", desc: "Docs, Sheets, Slides, Forms", color: "purple", icon: "📝" },
        { title: "Modulo 4: Didattica Avanzata", desc: "Meet, Classroom, Sites, Keep, Tasks", color: "orange", icon: "🎓" },
        { title: "Modulo 5: Best Practices", desc: "Integrazione, sicurezza, casi d'uso", color: "red", icon: "🔒" }
      ].map((module, index) => (
        <div key={index} className={`bg-${module.color}-50 p-8 rounded-2xl border-l-8 border-${module.color}-400 shadow-lg hover:shadow-xl transition-shadow`}>
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-4">
              <span className="text-3xl">{module.icon}</span>
              <h3 className={`text-2xl font-bold text-${module.color}-800`}>{module.title}</h3>
            </div>
          </div>
          <p className={`text-${module.color}-700 text-lg`}>{module.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const Slide03_Overview = () => (
  <div className="space-y-10">
    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-10 rounded-3xl shadow-2xl">
      <h2 className="text-5xl font-bold mb-6">Cos'è Google Workspace?</h2>
      <p className="text-2xl leading-relaxed">Suite integrata di strumenti cloud progettata per migliorare produttività e collaborazione in ambito educativo</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <CheckCircle className="w-8 h-8 text-green-500" />
          Vantaggi Chiave
        </h3>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-center gap-4 text-xl"><CheckCircle className="w-6 h-6 text-green-500" /><span>Accessibile ovunque, sempre sincronizzato</span></li>
          <li className="flex items-center gap-4 text-xl"><CheckCircle className="w-6 h-6 text-green-500" /><span>Collaborazione in tempo reale</span></li>
          <li className="flex items-center gap-4 text-xl"><CheckCircle className="w-6 h-6 text-green-500" /><span>Aggiornamenti automatici</span></li>
          <li className="flex items-center gap-4 text-xl"><CheckCircle className="w-6 h-6 text-green-500" /><span>Sicurezza e privacy integrate</span></li>
          <li className="flex items-center gap-4 text-xl"><CheckCircle className="w-6 h-6 text-green-500" /><span>Storage illimitato per Education</span></li>
        </ul>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <GraduationCap className="w-8 h-8 text-blue-500" />
          Per l'Educazione
        </h3>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-center gap-4 text-xl"><GraduationCap className="w-6 h-6 text-blue-500" /><span>Completamente gratuito per le scuole</span></li>
          <li className="flex items-center gap-4 text-xl"><GraduationCap className="w-6 h-6 text-blue-500" /><span>Strumenti specifici per la didattica</span></li>
          <li className="flex items-center gap-4 text-xl"><GraduationCap className="w-6 h-6 text-blue-500" /><span>Gestione classi virtuali avanzata</span></li>
          <li className="flex items-center gap-4 text-xl"><GraduationCap className="w-6 h-6 text-blue-500" /><span>Controllo amministrativo completo</span></li>
          <li className="flex items-center gap-4 text-xl"><GraduationCap className="w-6 h-6 text-blue-500" /><span>Conformità GDPR, FERPA, COPPA</span></li>
        </ul>
      </div>
    </div>
    <div className="bg-yellow-50 p-6 rounded-2xl border-l-6 border-yellow-400">
      <p className="text-xl text-yellow-800"><strong>🔒 Privacy e Sicurezza:</strong> I dati rimangono di proprietà degli istituti e non vengono usati per pubblicità. I servizi principali non contengono annunci.</p>
    </div>
  </div>
);

const Slide04_ToolsOverview = () => (
  <div className="space-y-8">
    <div className="text-center mb-10">
      <h2 className="text-5xl font-bold text-gray-800">Ecosistema Google Workspace</h2>
      <p className="text-2xl text-gray-600 mt-4">12 strumenti integrati per l'educazione digitale</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[
        { icon: Folder, name: "Drive", desc: "Archiviazione cloud", color: "blue", users: "Storage illimitato", priority: 1 },
        { icon: Mail, name: "Gmail", desc: "Email professionale", color: "red", users: "15GB gratuiti", priority: 2 },
        { icon: Calendar, name: "Calendar", desc: "Calendario condiviso", color: "blue", users: "Pianificazione integrata", priority: 3 },
        { icon: MessageCircle, name: "Chat", desc: "Messaggistica", color: "green", users: "Comunicazione real-time", priority: 4 },
        { icon: FileText, name: "Docs", desc: "Documenti di testo", color: "blue", users: "Editing collaborativo" },
        { icon: BarChart3, name: "Sheets", desc: "Fogli di calcolo", color: "green", users: "Analisi dati" },
        { icon: Presentation, name: "Slides", desc: "Presentazioni", color: "yellow", users: "Lezioni interattive" },
        { icon: FileQuestion, name: "Forms", desc: "Quiz e sondaggi", color: "purple", users: "Valutazione automatica" },
        { icon: Video, name: "Meet", desc: "Videoconferenze", color: "green", users: "Fino a 250 partecipanti" },
        { icon: GraduationCap, name: "Classroom", desc: "Gestione classi", color: "green", users: "LMS completo" },
        { icon: Globe, name: "Sites", desc: "Siti web", color: "blue", users: "Senza programmazione" },
        { icon: StickyNote, name: "Keep", desc: "Note e promemoria", color: "yellow", users: "Sincronizzazione totale" }
      ].map((tool, index) => (
        <div key={index} className={`bg-white border-3 border-gray-200 p-6 rounded-2xl hover:shadow-2xl transition-all hover:border-blue-300 hover:scale-105 ${tool.priority ? 'ring-2 ring-blue-200' : ''}`}>
          <div className="text-center">
            {tool.priority && <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full mb-2 inline-block">Priorità {tool.priority}</div>}
            <tool.icon className={`w-12 h-12 mx-auto mb-4 text-${tool.color}-600`} />
            <h3 className="font-bold text-gray-800 text-xl mb-2">{tool.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{tool.desc}</p>
            <p className="text-xs text-blue-600 font-semibold">{tool.users}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ===== GOOGLE DRIVE SLIDES (5-8) =====

const Slide05_Drive_Intro = () => (
  <div className="space-y-10">
    <div className="flex items-center gap-8 mb-8">
      <Folder className="w-24 h-24 text-blue-500" />
      <div>
        <h1 className="text-6xl font-bold text-gray-800">Google Drive</h1>
        <p className="text-3xl text-gray-600">Il cuore dello storage scolastico</p>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-800 mb-6">Spazio e Sincronizzazione</h3>
        <ul className="space-y-4 text-blue-700 text-lg">
          <li className="flex items-center gap-3"><Cloud className="w-6 h-6" /><span><strong>Storage illimitato</strong> per Google for Education</span></li>
          <li className="flex items-center gap-3"><Settings className="w-6 h-6" /><span><strong>Sincronizzazione automatica</strong> su tutti i dispositivi</span></li>
          <li className="flex items-center gap-3"><Search className="w-6 h-6" /><span><strong>Ricerca intelligente</strong> con OCR per immagini</span></li>
          <li className="flex items-center gap-3"><Shield className="w-6 h-6" /><span><strong>Backup sicuro</strong> e versioning automatico</span></li>
          <li className="flex items-center gap-3"><Smartphone className="w-6 h-6" /><span><strong>Accesso offline</strong> configurabile</span></li>
        </ul>
      </div>
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-green-800 mb-6">Didattica Digitale</h3>
        <ul className="space-y-4 text-green-700 text-lg">
          <li className="flex items-center gap-3"><BookOpen className="w-6 h-6" /><span><strong>Biblioteca risorse</strong> condivise per materia</span></li>
          <li className="flex items-center gap-3"><Users className="w-6 h-6" /><span><strong>Cartelle collaborative</strong> per ogni classe</span></li>
          <li className="flex items-center gap-3"><Edit className="w-6 h-6" /><span><strong>Collaborazione real-time</strong> su progetti</span></li>
          <li className="flex items-center gap-3"><Share2 className="w-6 h-6" /><span><strong>Condivisione controllata</strong> con permessi granulari</span></li>
          <li className="flex items-center gap-3"><Link className="w-6 h-6" /><span><strong>Integrazione seamless</strong> con tutti gli strumenti</span></li>
        </ul>
      </div>
    </div>
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-3">💾 Il Cuore dell'Ecosistema Educativo</h4>
      <p className="text-xl">Google Drive non è solo storage: è il centro nevralgico che connette tutti gli strumenti, permettendo flussi di lavoro fluidi dalla creazione alla valutazione.</p>
    </div>
  </div>
);

const Slide06_Drive_Organization = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Drive: Organizzazione Avanzata</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="space-y-6">
        <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-3">
            <Folder className="w-8 h-8" />
            Struttura Raccomandata
          </h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg flex items-center gap-3 shadow-sm">
              <Folder className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-lg">📚 Anno Scolastico 2024-25</span>
            </div>
            <div className="ml-6 space-y-3">
              <div className="bg-white p-3 rounded flex items-center gap-3 shadow-sm">
                <Folder className="w-5 h-5 text-green-600" />
                <span className="text-lg">📖 Classe 1A - Matematica</span>
              </div>
              <div className="bg-white p-3 rounded flex items-center gap-3 shadow-sm">
                <Folder className="w-5 h-5 text-green-600" />
                <span className="text-lg">📖 Classe 2B - Italiano</span>
              </div>
              <div className="bg-white p-3 rounded flex items-center gap-3 shadow-sm">
                <Folder className="w-5 h-5 text-purple-600" />
                <span className="text-lg">📋 Programmazioni Didattiche</span>
              </div>
              <div className="bg-white p-3 rounded flex items-center gap-3 shadow-sm">
                <Folder className="w-5 h-5 text-orange-600" />
                <span className="text-lg">📊 Valutazioni e Report</span>
              </div>
              <div className="bg-white p-3 rounded flex items-center gap-3 shadow-sm">
                <Folder className="w-5 h-5 text-red-600" />
                <span className="text-lg">🗂️ Archivio Anni Precedenti</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
            <Edit className="w-8 h-8" />
            Convenzioni Nomi File
          </h3>
          <div className="space-y-4 text-green-700">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-lg mb-2">📝 Lezioni:</h4>
              <code className="text-sm bg-gray-100 p-2 rounded block">2024-10-15_Storia_Rivoluzione_1A.pptx</code>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-lg mb-2">📋 Verifiche:</h4>
              <code className="text-sm bg-gray-100 p-2 rounded block">2024-11-20_Verifica_Matematica_2B.docx</code>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-lg mb-2">📚 Materiali:</h4>
              <code className="text-sm bg-gray-100 p-2 rounded block">Dispensa_Letteratura_Ungaretti.pdf</code>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-lg mb-2">🎯 Progetti:</h4>
              <code className="text-sm bg-gray-100 p-2 rounded block">Progetto_Scienze_Ecosistema_Gruppo3.docx</code>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-yellow-100 p-8 rounded-2xl border-l-6 border-yellow-500">
      <h4 className="text-2xl font-bold text-yellow-800 mb-3 flex items-center gap-3">
        <Lightbulb className="w-8 h-8" />
        Best Practice: "Stop Digging in Folders!"
      </h4>
      <p className="text-yellow-700 text-xl mb-4">Utilizza la ricerca intelligente di Drive invece di navigare manualmente nelle cartelle. Cerca per tipo di file, parole chiave, o usa i filtri avanzati.</p>
      <div className="bg-white p-4 rounded-lg">
        <p className="text-gray-700"><strong>Esempio:</strong> Cerca "tipo:presentazione matematica ottobre" per trovare tutte le slide di matematica di ottobre.</p>
      </div>
    </div>
  </div>
);

const Slide07_Drive_Sharing = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Drive: Condivisione e Permessi</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-red-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto bg-red-500 rounded-full flex items-center justify-center text-white mb-4">
            <Eye className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-red-800">Visualizzazione</h3>
        </div>
        <ul className="space-y-3 text-red-700">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Solo lettura del documento</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Nessuna modifica possibile</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Ideale per materiali finali</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Studenti possono solo consultare</li>
        </ul>
      </div>
      <div className="bg-yellow-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto bg-yellow-500 rounded-full flex items-center justify-center text-white mb-4">
            <MessageSquare className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-yellow-800">Commenti</h3>
        </div>
        <ul className="space-y-3 text-yellow-700">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Possono aggiungere commenti</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Suggerimenti e feedback</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Perfetto per revisioni</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Correzione collaborativa</li>
        </ul>
      </div>
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto bg-green-500 rounded-full flex items-center justify-center text-white mb-4">
            <Edit className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-green-800">Modifica</h3>
        </div>
        <ul className="space-y-3 text-green-700">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Modifica completa del contenuto</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Collaborazione in tempo reale</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Progetti di gruppo</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Massima flessibilità</li>
        </ul>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center gap-3">
          <Link className="w-8 h-8" />
          Condivisione Cartelle vs File
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-700">✅ MEGLIO: Condividi Cartelle</h4>
            <p className="text-sm text-green-600">I file ereditano automaticamente i permessi della cartella genitore</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-red-700">❌ EVITA: File Singoli</h4>
            <p className="text-sm text-red-600">Gestione complessa dei permessi file per file</p>
          </div>
        </div>
      </div>
      <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold text-purple-800 mb-6 flex items-center gap-3">
          <Copy className="w-8 h-8" />
          Collegamenti (Shortcut)
        </h3>
        <div className="space-y-4">
          <p className="text-purple-700">Un file può apparire in più cartelle senza duplicazione:</p>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-sm text-gray-700"><strong>Esempio:</strong> La stessa verifica può stare nella cartella "Classe 2A" e in "Verifiche Matematica" usando i collegamenti.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Slide08_Drive_Advanced = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Drive: Ricerca e Workspaces</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-3">
          <Search className="w-8 h-8" />
          Ricerca Avanzata
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-blue-700 mb-2">Operatori di Ricerca:</h4>
            <ul className="text-sm space-y-1">
              <li><code className="bg-gray-100 px-2 py-1 rounded">tipo:pdf matematica</code> - Trova PDF di matematica</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">proprietario:me before:2024-01-01</code> - I miei file prima del 2024</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">is:starred</code> - Solo file con stella</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">nome:"verifica"</code> - Nel nome del file</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-blue-700 mb-2">OCR Intelligente:</h4>
            <p className="text-sm text-gray-700">Drive può cercare testo all'interno delle immagini. Cerca "formula" per trovare foto di formule matematiche.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
          <Layers className="w-8 h-8" />
          Workspaces
        </h3>
        <div className="space-y-4">
          <p className="text-green-700 text-lg">Raggruppa file di un progetto senza spostarli dalle cartelle originali.</p>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-green-700 mb-2">Esempio Workspace:</h4>
            <p className="text-sm text-gray-700">"Progetto Gita Roma" può contenere:</p>
            <ul className="text-sm mt-2 space-y-1">
              <li>• Autorizzazioni (da cartella Amministrazione)</li>
              <li>• Itinerario (da cartella Geografia)</li>
              <li>• Budget (da cartella Economia)</li>
              <li>• Comunicazioni (da cartella Famiglie)</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-green-700 mb-2">Vantaggi:</h4>
            <ul className="text-sm space-y-1">
              <li>• File rimangono nelle cartelle originali</li>
              <li>• Vista unificata del progetto</li>
              <li>• Condivisione semplificata</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-4">🔍 Strategia Pro: Descrizioni e Metadati</h4>
      <p className="text-xl mb-4">Usa il pannello informazioni (icona "i") per aggiungere descrizioni ricercabili ai tuoi file.</p>
      <div className="bg-white bg-opacity-20 p-4 rounded-lg">
        <p><strong>Esempio:</strong> Aggiungi "#matematica #geometria #teorema-pitagora" nella descrizione di una lezione per trovarla facilmente in futuro.</p>
      </div>
    </div>
  </div>
);

// ===== GMAIL SLIDES (9-12) =====

const Slide09_Gmail_Intro = () => (
  <div className="space-y-10">
    <div className="flex items-center gap-8 mb-8">
      <Mail className="w-24 h-24 text-red-500" />
      <div>
        <h1 className="text-6xl font-bold text-gray-800">Gmail</h1>
        <p className="text-3xl text-gray-600">Email professionale per l'educazione</p>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-red-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-red-800 mb-6">Caratteristiche Principali</h3>
        <ul className="space-y-4 text-red-700 text-lg">
          <li className="flex items-center gap-3"><Cloud className="w-6 h-6" /><span><strong>15 GB gratuiti</strong> per Education</span></li>
          <li className="flex items-center gap-3"><Shield className="w-6 h-6" /><span><strong>Filtri anti-spam</strong> intelligenti</span></li>
          <li className="flex items-center gap-3"><Search className="w-6 h-6" /><span><strong>Ricerca avanzata</strong> potente</span></li>
          <li className="flex items-center gap-3"><Settings className="w-6 h-6" /><span><strong>Integrazione completa</strong> Workspace</span></li>
          <li className="flex items-center gap-3"><Clock className="w-6 h-6" /><span><strong>Annulla invio</strong> fino a 30 secondi</span></li>
        </ul>
      </div>
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-800 mb-6">Utilizzo Didattico</h3>
        <ul className="space-y-4 text-blue-700 text-lg">
          <li className="flex items-center gap-3"><GraduationCap className="w-6 h-6" /><span>Comunicazione studenti/genitori</span></li>
          <li className="flex items-center gap-3"><Share2 className="w-6 h-6" /><span>Condivisione materiali</span></li>
          <li className="flex items-center gap-3"><Upload className="w-6 h-6" /><span>Raccolta compiti e progetti</span></li>
          <li className="flex items-center gap-3"><Users className="w-6 h-6" /><span>Coordinamento colleghi</span></li>
          <li className="flex items-center gap-3"><Bell className="w-6 h-6" /><span>Notifiche da Classroom</span></li>
        </ul>
      </div>
    </div>
    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-3">📧 Nessuna Pubblicità per Education</h4>
      <p className="text-xl">Gmail Education è privo di annunci e i dati rimangono di proprietà della scuola. Conformità totale a GDPR, FERPA e COPPA.</p>
    </div>
  </div>
);

const Slide10_Gmail_Organization = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Gmail: Organizzazione Avanzata</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-yellow-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-yellow-800 mb-6 flex items-center gap-3">
          <Filter className="w-8 h-8" />
          Etichette Smart
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-3">Sistema Gerarchico Raccomandato:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span><strong>A-URGENTE:</strong> Richiede azione immediata</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span><strong>B-Genitori:</strong> Comunicazioni famiglie</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span><strong>C-Colleghi:</strong> Staff e docenti</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span><strong>D-Studenti:</strong> Comunicazioni dirette</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span><strong>E-Amministrazione:</strong> Burocrazia scuola</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
          <Zap className="w-8 h-8" />
          Filtri Automatici
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-700">Filtro: Email Genitori</h4>
            <p className="text-sm text-gray-600 mt-1">
              <strong>Condizione:</strong> Oggetto contiene "Genitore" OR "Famiglia"<br/>
              <strong>Azione:</strong> Applica etichetta "B-Genitori" + Stella dorata
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-700">Filtro: Consegne Studenti</h4>
            <p className="text-sm text-gray-600 mt-1">
              <strong>Condizione:</strong> Da domini studenti + Oggetto "Compito"<br/>
              <strong>Azione:</strong> Etichetta "D-Studenti/Consegne" + Archivia
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-700">Filtro: Approvazioni</h4>
            <p className="text-sm text-gray-600 mt-1">
              <strong>Condizione:</strong> "Bisogna approvare" in oggetto<br/>
              <strong>Azione:</strong> "A-URGENTE" + Notifica push + Non archiviare
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-blue-100 p-8 rounded-2xl border-l-6 border-blue-500">
      <h4 className="text-2xl font-bold text-blue-800 mb-3 flex items-center gap-3">
        <Lightbulb className="w-8 h-8" />
        Pro Tip: Etichette Multiple
      </h4>
      <p className="text-blue-700 text-xl">A differenza delle cartelle, una email può avere più etichette. Esempio: "B-Genitori" + "A-URGENTE" + "Classe-2A" per una comunicazione importante.</p>
    </div>
  </div>
);

const Slide11_Gmail_Advanced = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Gmail: Funzionalità Avanzate</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Clock className="w-16 h-16 mx-auto text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold text-purple-800">Invio Programmato</h3>
        </div>
        <ul className="space-y-3 text-purple-700">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Email a orari specifici</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Promemoria automatici</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Comunicazioni weekend</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Rispetto privacy studenti</li>
        </ul>
        <div className="bg-white p-3 rounded-lg mt-4">
          <p className="text-sm text-gray-700"><strong>Esempio:</strong> Scrivi la domenica sera ma invia lunedì mattina alle 8:00.</p>
        </div>
      </div>
      <div className="bg-orange-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <FileText className="w-16 h-16 mx-auto text-orange-600 mb-4" />
          <h3 className="text-2xl font-bold text-orange-800">Template Email</h3>
        </div>
        <ul className="space-y-3 text-orange-700">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Risposte predefinite</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Comunicazioni ricorrenti</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Convocazioni standard</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Segnalazioni compiti</li>
        </ul>
        <div className="bg-white p-3 rounded-lg mt-4">
          <p className="text-sm text-gray-700"><strong>Attivazione:</strong> Impostazioni → Avanzate → Template (Risposte predefinite).</p>
        </div>
      </div>
      <div className="bg-teal-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Archive className="w-16 h-16 mx-auto text-teal-600 mb-4" />
          <h3 className="text-2xl font-bold text-teal-800">Archiviazione Smart</h3>
        </div>
        <ul className="space-y-3 text-teal-700">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Conserva senza cancellare</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Sempre ricercabile</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Inbox pulita</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Recupero semplice</li>
        </ul>
        <div className="bg-white p-3 rounded-lg mt-4">
          <p className="text-sm text-gray-700"><strong>Differenza:</strong> Archiviazione vs Cancellazione (30 giorni di vita).</p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-3">
          <Star className="w-8 h-8" />
          Sistema Stelle Multiple
        </h3>
        <div className="space-y-4">
          <p className="text-blue-700 text-lg">Attiva stelle multiple per categorizzazione visiva:</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-white p-3 rounded">⭐ <strong>Stella gialla:</strong> Da leggere</div>
            <div className="bg-white p-3 rounded">🔴 <strong>Rossa:</strong> Urgente</div>
            <div className="bg-white p-3 rounded">🟠 <strong>Arancione:</strong> In attesa</div>
            <div className="bg-white p-3 rounded">🟢 <strong>Verde:</strong> Completato</div>
            <div className="bg-white p-3 rounded">🔵 <strong>Blu:</strong> Informativo</div>
            <div className="bg-white p-3 rounded">🟣 <strong>Viola:</strong> Personale</div>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
          <Settings className="w-8 h-8" />
          Firma Professionale
        </h3>
        <div className="bg-white p-4 rounded-lg">
          <div className="text-sm text-gray-700">
            <p className="font-bold">Prof.ssa Maria Rossi</p>
            <p>Docente di Matematica e Scienze</p>
            <p>Istituto Comprensivo "G. Verdi"</p>
            <p>📧 maria.rossi@icverdi.edu.it</p>
            <p>📞 Tel: 051-1234567</p>
            <p>🗓️ <a href="#" className="text-blue-600">Calendario ricevimenti</a></p>
            <p>🌐 <a href="#" className="text-blue-600">Sito classe 2A</a></p>
            <p className="text-xs text-gray-500 mt-2">Orari ricevimento: Martedì 14:00-15:00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Slide12_Gmail_Security = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Gmail: Sicurezza e Privacy</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-red-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-red-800 mb-6 flex items-center gap-3">
          <Shield className="w-8 h-8" />
          Protezione Avanzata
        </h3>
        <ul className="space-y-4 text-red-700 text-lg">
          <li className="flex items-center gap-3"><Lock className="w-6 h-6" /><span><strong>Verifica in due passaggi</strong> obbligatoria</span></li>
          <li className="flex items-center gap-3"><Shield className="w-6 h-6" /><span><strong>Crittografia automatica</strong> TLS</span></li>
          <li className="flex items-center gap-3"><AlertCircle className="w-6 h-6" /><span><strong>Rilevamento phishing</strong> AI</span></li>
          <li className="flex items-center gap-3"><Users className="w-6 h-6" /><span><strong>Controllo accessi</strong> admin</span></li>
          <li className="flex items-center gap-3"><Archive className="w-6 h-6" /><span><strong>Backup automatici</strong> cloud</span></li>
        </ul>
      </div>
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-3">
          <GraduationCap className="w-8 h-8" />
          Privacy Education
        </h3>
        <ul className="space-y-4 text-blue-700 text-lg">
          <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6" /><span><strong>Zero pubblicità</strong> in Education</span></li>
          <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6" /><span><strong>Dati proprietà</strong> della scuola</span></li>
          <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6" /><span><strong>Conformità GDPR</strong> completa</span></li>
          <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6" /><span><strong>Audit log</strong> dettagliati</span></li>
          <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6" /><span><strong>Controllo geografico</strong> dati</span></li>
        </ul>
      </div>
    </div>
    <div className="bg-yellow-100 p-8 rounded-2xl border-l-6 border-yellow-500">
      <h4 className="text-2xl font-bold text-yellow-800 mb-4">⚠️ Raccomandazioni Sicurezza per Docenti</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
        <div>
          <h5 className="font-bold text-green-800 mb-3">✅ Da Fare:</h5>
          <ul className="space-y-2 text-green-700">
            <li>• Attiva 2FA con app authenticator</li>
            <li>• Password lunghe e uniche (12+ caratteri)</li>
            <li>• Verifica regolarmente dispositivi autorizzati</li>
            <li>• Mantieni browser aggiornato</li>
            <li>• Segnala tentativi di phishing</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-red-800 mb-3">❌ Mai Fare:</h5>
          <ul className="space-y-2 text-red-700">
            <li>• Condividere credenziali con studenti</li>
            <li>• Ignorare avvisi di sicurezza Google</li>
            <li>• Usare WiFi pubblici per email</li>
            <li>• Cliccare link sospetti da sconosciuti</li>
            <li>• Salvare password in browser condivisi</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-4">🛡️ Caso d'Uso: Protezione Account Education</h4>
      <p className="text-xl mb-4">Gmail Education include protezioni specifiche per ambienti scolastici:</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Filtri Contenuti:</strong> Blocco automatico contenuti inappropriati
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Limitazioni Condivisione:</strong> Solo domini educativi autorizzati
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Monitoraggio:</strong> Log attività per compliance
        </div>
      </div>
    </div>
  </div>
);

// ===== CALENDAR SLIDES (13-16) =====

const Slide13_Calendar_Intro = () => (
  <div className="space-y-10">
    <div className="flex items-center gap-8 mb-8">
      <Calendar className="w-24 h-24 text-blue-600" />
      <div>
        <h1 className="text-6xl font-bold text-gray-800">Google Calendar</h1>
        <p className="text-3xl text-gray-600">Gestione del tempo e integrazione</p>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-800 mb-6">Gestione Orari Scolastici</h3>
        <ul className="space-y-4 text-blue-700 text-lg">
          <li className="flex items-center gap-3"><Clock className="w-6 h-6" /><span><strong>Orario delle lezioni</strong> automatico</span></li>
          <li className="flex items-center gap-3"><Users className="w-6 h-6" /><span><strong>Ricevimento</strong> studenti/genitori</span></li>
          <li className="flex items-center gap-3"><BookOpen className="w-6 h-6" /><span><strong>Riunioni collegio</strong> docenti</span></li>
          <li className="flex items-center gap-3"><AlertCircle className="w-6 h-6" /><span><strong>Scadenze</strong> e consegne</span></li>
          <li className="flex items-center gap-3"><Star className="w-6 h-6" /><span><strong>Eventi scolastici</strong> speciali</span></li>
        </ul>
      </div>
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-green-800 mb-6">Integrazione Didattica</h3>
        <ul className="space-y-4 text-green-700 text-lg">
          <li className="flex items-center gap-3"><GraduationCap className="w-6 h-6" /><span><strong>Classroom sync</strong> automatica</span></li>
          <li className="flex items-center gap-3"><Video className="w-6 h-6" /><span><strong>Meet integrato</strong> per ogni evento</span></li>
          <li className="flex items-center gap-3"><Share2 className="w-6 h-6" /><span><strong>Calendari condivisi</strong> per classe</span></li>
          <li className="flex items-center gap-3"><Bell className="w-6 h-6" /><span><strong>Promemoria intelligenti</strong> configurabili</span></li>
          <li className="flex items-center gap-3"><Smartphone className="w-6 h-6" /><span><strong>Notifiche cross-device</strong> sincronizzate</span></li>
        </ul>
      </div>
    </div>
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-3">📅 Hub Centrale della Didattica</h4>
      <p className="text-xl">Calendar non è solo un agenda: è il centro di coordinamento che sincronizza lezioni, verifiche, riunioni e scadenze con tutto l'ecosistema Workspace.</p>
    </div>
  </div>
);

const Slide14_Calendar_Advanced = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Calendar: Funzionalità Avanzate</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Zap className="w-16 h-16 mx-auto text-green-600 mb-4" />
          <h3 className="text-2xl font-bold text-green-800">Sintassi Veloce</h3>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-3 rounded-lg">
            <code className="text-sm">cal.new</code>
            <p className="text-xs text-gray-600">Crea nuovo evento istantaneo</p>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <code className="text-sm">"2PM Lezione Storia"</code>
            <p className="text-xs text-gray-600">Evento automatico alle 14:00</p>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <code className="text-sm">"Riunione domani 9-10"</code>
            <p className="text-xs text-gray-600">Evento giorno successivo</p>
          </div>
        </div>
      </div>
      <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Palette className="w-16 h-16 mx-auto text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold text-purple-800">Color Coding</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <span className="text-sm"><strong>Blu:</strong> Lezioni curricolari</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <span className="text-sm"><strong>Rosso:</strong> Verifiche e esami</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span className="text-sm"><strong>Verde:</strong> Riunioni collegiali</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
            <span className="text-sm"><strong>Giallo:</strong> Eventi speciali</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
            <span className="text-sm"><strong>Viola:</strong> Ricevimenti</span>
          </div>
        </div>
      </div>
      <div className="bg-orange-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <MousePointer className="w-16 h-16 mx-auto text-orange-600 mb-4" />
          <h3 className="text-2xl font-bold text-orange-800">Drag & Drop</h3>
        </div>
        <ul className="space-y-3 text-orange-700">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Sposta eventi trascinando</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Ridimensiona per durata</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Copia con Ctrl+Drag</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Modifica rapida inline</li>
        </ul>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-3">
          <Search className="w-8 h-8" />
          Ricerca Intelligente
        </h3>
        <div className="space-y-4">
          <p className="text-blue-700 text-lg">Trova eventi passati e futuri con filtri avanzati:</p>
          <div className="bg-white p-4 rounded-lg">
            <div className="space-y-2 text-sm">
              <div><code className="bg-gray-100 px-2 py-1 rounded">riunione next week</code> - Prossima settimana</div>
              <div><code className="bg-gray-100 px-2 py-1 rounded">verifica matematica</code> - Per materia</div>
              <div><code className="bg-gray-100 px-2 py-1 rounded">organizer:preside</code> - Chi ha creato</div>
              <div><code className="bg-gray-100 px-2 py-1 rounded">location:aula magna</code> - Per luogo</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-red-800 mb-6 flex items-center gap-3">
          <Bell className="w-8 h-8" />
          Notifiche Smart
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-red-700 mb-2">Promemoria Configurabili:</h4>
            <ul className="text-sm space-y-1">
              <li>• 1 settimana prima (preparazione verifiche)</li>
              <li>• 1 giorno prima (promemoria generale)</li>
              <li>• 15 minuti prima (eventi imminenti)</li>
              <li>• All'orario esatto (per lezioni)</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-red-700 mb-2">Canali Notifica:</h4>
            <ul className="text-sm space-y-1">
              <li>• Email per eventi importanti</li>
              <li>• Popup desktop per urgenti</li>
              <li>• Push mobile per tutto</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Slide15_Calendar_Classroom = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Calendar + Classroom: Integrazione Perfetta</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
          <GitBranch className="w-8 h-8" />
          Sincronizzazione Automatica
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-700">Compiti e Scadenze</h4>
            <p className="text-sm text-gray-600">Ogni compito assegnato in Classroom appare automaticamente in Calendar con la data di scadenza.</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-700">Eventi di Classe</h4>
            <p className="text-sm text-gray-600">Gite, verifiche programmate e eventi speciali creati in Classroom si sincronizzano con i calendari di studenti e docenti.</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-700">Meet Integration</h4>
            <p className="text-sm text-gray-600">Ogni lezione programmata può avere un link Meet automatico per didattica ibrida.</p>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-3">
          <Users className="w-8 h-8" />
          Calendari Condivisi
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-blue-700 mb-2">Calendario Classe:</h4>
            <ul className="text-sm space-y-1">
              <li>• Visibile a tutti gli studenti della classe</li>
              <li>• Include lezioni, verifiche, scadenze</li>
              <li>• Aggiornamenti in tempo reale</li>
              <li>• Permessi di sola lettura per studenti</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-blue-700 mb-2">Calendario Dipartimento:</h4>
            <ul className="text-sm space-y-1">
              <li>• Condiviso tra colleghi della stessa materia</li>
              <li>• Coordinamento programmazioni</li>
              <li>• Riunioni e formazioni</li>
              <li>• Permessi di modifica per tutti</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-yellow-50 p-8 rounded-2xl shadow-lg">
      <h3 className="text-3xl font-bold text-yellow-800 mb-6 flex items-center gap-3">
        <Target className="w-8 h-8" />
        Workflow Completo: Dalla Programmazione alla Valutazione
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg text-center">
          <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">1</div>
          <h4 className="font-bold text-blue-800">Programma</h4>
          <p className="text-sm text-gray-600">Crea eventi in Calendar per lezioni e verifiche</p>
        </div>
        <div className="bg-white p-4 rounded-lg text-center">
          <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">2</div>
          <h4 className="font-bold text-green-800">Assegna</h4>
          <p className="text-sm text-gray-600">In Classroom crea compiti con scadenze sincronizzate</p>
        </div>
        <div className="bg-white p-4 rounded-lg text-center">
          <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">3</div>
          <h4 className="font-bold text-orange-800">Notifica</h4>
          <p className="text-sm text-gray-600">Promemoria automatici a studenti e genitori</p>
        </div>
        <div className="bg-white p-4 rounded-lg text-center">
          <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">4</div>
          <h4 className="font-bold text-purple-800">Valuta</h4>
          <p className="text-sm text-gray-600">Correzione e feedback con timeline chiara</p>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-4">📅 Pro Tip: Orario Ricorrente</h4>
      <p className="text-xl mb-4">Crea il tuo orario scolastico una sola volta come eventi ricorrenti settimanali. Calendar genererà automaticamente tutte le lezioni dell'anno!</p>
      <div className="bg-white bg-opacity-20 p-4 rounded-lg">
        <p><strong>Esempio:</strong> "Matematica 1A" ogni Lunedì 8:00-9:00, ricorrenza fino a Giugno 2025. Fatto!</p>
      </div>
    </div>
  </div>
);

const Slide16_Calendar_Mobile = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Calendar: Mobilità e Accesso</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Smartphone className="w-16 h-16 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold text-blue-800">App Mobile</h3>
        </div>
        <ul className="space-y-3 text-blue-700">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Sincronizzazione istantanea</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Widget home screen</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Notifiche push intelligenti</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Creazione eventi vocale</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />GPS per luoghi eventi</li>
        </ul>
      </div>
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Wifi className="w-16 h-16 mx-auto text-green-600 mb-4" />
          <h3 className="text-2xl font-bold text-green-800">Modalità Offline</h3>
        </div>
        <ul className="space-y-3 text-green-700">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Visualizzazione offline completa</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Modifiche in cache</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Sync al ritorno online</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Promemoria anche offline</li>
        </ul>
      </div>
      <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Monitor className="w-16 h-16 mx-auto text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold text-purple-800">Cross-Platform</h3>
        </div>
        <ul className="space-y-3 text-purple-700">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Web, mobile, desktop</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Sidebar Gmail integrata</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Embed in Google Sites</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Widget personalizzabili</li>
        </ul>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-yellow-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-yellow-800 mb-6 flex items-center gap-3">
          <Clock className="w-8 h-8" />
          Time Zone Intelligence
        </h3>
        <div className="space-y-4">
          <p className="text-yellow-700 text-lg">Calendar gestisce automaticamente i fusi orari per:</p>
          <div className="bg-white p-4 rounded-lg">
            <ul className="text-sm space-y-2">
              <li>• <strong>Scambi internazionali:</strong> Videoconferenze con classi estere</li>
              <li>• <strong>Formazione online:</strong> Corsi da provider internazionali</li>
              <li>• <strong>Gite scolastiche:</strong> Eventi in fusi orari diversi</li>
              <li>• <strong>Colleghi in trasferta:</strong> Riunioni a distanza</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-sm text-gray-700"><strong>Automatico:</strong> Ogni partecipante vede l'orario nel proprio fuso orario locale.</p>
          </div>
        </div>
      </div>
      <div className="bg-red-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-red-800 mb-6 flex items-center gap-3">
          <Share2 className="w-8 h-8" />
          Condivisione Pubblica
        </h3>
        <div className="space-y-4">
          <p className="text-red-700 text-lg">Rendi visibili gli eventi a famiglie e studenti:</p>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-red-700 mb-2">Calendario Pubblico Classe:</h4>
            <ul className="text-sm space-y-1">
              <li>• Link condivisibile per genitori</li>
              <li>• Solo eventi non sensibili (no riunioni staff)</li>
              <li>• Aggiornamenti automatici</li>
              <li>• Embed nel sito della scuola</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-red-700 mb-2">Privacy Control:</h4>
            <ul className="text-sm space-y-1">
              <li>• Livelli di visibilità granulari</li>
              <li>• Eventi privati sempre nascosti</li>
              <li>• Controllo dettagli mostrati</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-4">📱 Scenario: Docente in Mobilità</h4>
      <p className="text-xl mb-4">Sei in gita scolastica a Roma e devi riprogrammare una riunione:</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>1. Mobile:</strong> Apri Calendar app, trascina l'evento
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>2. Automatico:</strong> Inviti aggiornati inviati a tutti
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>3. Sync:</strong> Colleghi vedono subito il cambiamento
        </div>
      </div>
    </div>
  </div>
);

// ===== CHAT SLIDES (17-20) =====

const Slide17_Chat_Intro = () => (
  <div className="space-y-10">
    <div className="flex items-center gap-8 mb-8">
      <MessageCircle className="w-24 h-24 text-green-600" />
      <div>
        <h1 className="text-6xl font-bold text-gray-800">Google Chat</h1>
        <p className="text-3xl text-gray-600">Comunicazione in tempo reale</p>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-green-800 mb-6">Tipologie di Comunicazione</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4 bg-white p-4 rounded-lg">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-blue-800">Messaggi Diretti</h4>
              <p className="text-sm text-gray-600">Comunicazione 1:1 con colleghi e studenti</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white p-4 rounded-lg">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-green-800">Gruppi</h4>
              <p className="text-sm text-gray-600">Fino a 8.000 membri per dipartimenti</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white p-4 rounded-lg">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-purple-800">Spazi</h4>
              <p className="text-sm text-gray-600">Conversazioni tematiche organizzate</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-800 mb-6">Vantaggi per la Scuola</h3>
        <ul className="space-y-4 text-blue-700 text-lg">
          <li className="flex items-center gap-3"><Zap className="w-6 h-6" /><span><strong>Comunicazione istantanea</strong> real-time</span></li>
          <li className="flex items-center gap-3"><Share2 className="w-6 h-6" /><span><strong>Condivisione file</strong> diretta da Drive</span></li>
          <li className="flex items-center gap-3"><Video className="w-6 h-6" /><span><strong>Meet integrato</strong> con un click</span></li>
          <li className="flex items-center gap-3"><Search className="w-6 h-6" /><span><strong>Ricerca messaggi</strong> storica</span></li>
          <li className="flex items-center gap-3"><Archive className="w-6 h-6" /><span><strong>Archiviazione automatica</strong> conversazioni</span></li>
        </ul>
      </div>
    </div>
    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-3">💬 Rivoluzione Comunicativa Scolastica</h4>
      <p className="text-xl">Google Chat elimina le email per comunicazioni rapide, mantiene lo storico ricercabile e si integra perfettamente con Gmail, Calendar e Drive.</p>
    </div>
  </div>
);

const Slide18_Chat_Usage = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Chat: Utilizzo Didattico</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Users className="w-16 h-16 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold text-blue-800">Coordinamento Docenti</h3>
        </div>
        <ul className="space-y-3 text-blue-700">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Gruppo "Dipartimento Matematica"</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Spazio "Programmazione 2024-25"</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Chat rapide per sostituzioni</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Condivisione materiali urgenti</li>
        </ul>
      </div>
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <GraduationCap className="w-16 h-16 mx-auto text-green-600 mb-4" />
          <h3 className="text-2xl font-bold text-green-800">Supporto Studenti</h3>
        </div>
        <ul className="space-y-3 text-green-700">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Risposte immediate a dubbi</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Gruppi studio guidati</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Condivisione link utili</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Promemoria personalizzati</li>
        </ul>
      </div>
      <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <AlertCircle className="w-16 h-16 mx-auto text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold text-purple-800">Comunicazioni Urgenti</h3>
        </div>
        <ul className="space-y-3 text-purple-700">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Avvisi emergenza immediati</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Modifiche orario dell'ultimo minuto</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Comunicazioni COVID-related</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Alert sicurezza scuola</li>
        </ul>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-yellow-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-yellow-800 mb-6 flex items-center gap-3">
          <BookOpen className="w-8 h-8" />
          Progetti Collaborativi
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-yellow-700 mb-2">Spazio "Progetto PCTO":</h4>
            <ul className="text-sm space-y-1">
              <li>• Docenti referenti + studenti selezionati</li>
              <li>• Condivisione documenti progress</li>
              <li>• Coordinamento con aziende esterne</li>
              <li>• Timeline e milestone condivise</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-yellow-700 mb-2">Chat "Olimpiadi Matematica":</h4>
            <ul className="text-sm space-y-1">
              <li>• Preparazione team studenti</li>
              <li>• Condivisione esercizi e soluzioni</li>
              <li>• Coordinamento trasferte</li>
              <li>• Supporto motivazionale continuo</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-red-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-red-800 mb-6 flex items-center gap-3">
          <Settings className="w-8 h-8" />
          Integrazione Tasks
        </h3>
        <div className="space-y-4">
          <p className="text-red-700 text-lg">Chat si integra perfettamente con Google Tasks per gestione attività:</p>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-red-700 mb-2">Workflow Integrato:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">1</div>
                <span>Discussione in Chat su attività da fare</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">2</div>
                <span>Creazione task direttamente da messaggio Chat</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs">3</div>
                <span>Assegnazione task a colleghi con notifica</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">4</div>
                <span>Aggiornamento status in tempo reale</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-red-700 mb-2">Esempio Pratico:</h4>
            <p className="text-sm text-gray-700">"Chi può preparare la relazione finale del progetto per venerdì?" → Creazione task automatica → Assegnazione → Tracking progresso.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-green-500 to-purple-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-4">💬 Caso d'Uso: Gestione Emergenza COVID</h4>
      <p className="text-xl mb-4">Durante la pandemia, Chat è diventato essenziale per:</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Comunicazioni Rapide:</strong> Aggiornamenti protocolli in tempo reale
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Coordinamento DAD:</strong> Supporto tecnico immediato a colleghi
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Supporto Famiglie:</strong> Canali dedicati per problemi urgenti
        </div>
      </div>
    </div>
  </div>
);

const Slide19_Chat_Spaces = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Chat: Spazi e Organizzazione</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-purple-800 mb-6 flex items-center gap-3">
          <Globe className="w-8 h-8" />
          Spazi Tematici
        </h3>
        <div className="space-y-4">
          <p className="text-purple-700 text-lg">Gli Spazi organizzano conversazioni per argomenti specifici:</p>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700">Spazio "Dipartimento Scienze"</h4>
              <p className="text-sm text-gray-600">Thread separati per: Programmazioni, Laboratori, Sicurezza, Acquisti</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700">Spazio "Classe 3A"</h4>
              <p className="text-sm text-gray-600">Thread per: Comunicazioni, Compiti, Progetti, Gite</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-700">Spazio "Formazione Docenti"</h4>
              <p className="text-sm text-gray-600">Thread per: Corsi esterni, Condivisione buone pratiche, Risorse</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-3">
          <Search className="w-8 h-8" />
          Ricerca e Archiviazione
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-blue-700 mb-2">Ricerca Avanzata:</h4>
            <ul className="text-sm space-y-1">
              <li>• <strong>from:mario.rossi</strong> - Messaggi da persona specifica</li>
              <li>• <strong>has:link</strong> - Messaggi con collegamenti</li>
              <li>• <strong>has:attachment</strong> - Con file allegati</li>
              <li>• <strong>before:2024-01-01</strong> - Prima di una data</li>
              <li>• <strong>"progetto scienze"</strong> - Frase esatta</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-blue-700 mb-2">Archiviazione Intelligente:</h4>
            <ul className="text-sm space-y-1">
              <li>• Conversazioni archiviate automaticamente</li>
              <li>• Recupero messaggi storici illimitato</li>
              <li>• Backup conformi normative scolastiche</li>
              <li>• Export dati per compliance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Bell className="w-16 h-16 mx-auto text-green-600 mb-4" />
          <h3 className="text-2xl font-bold text-green-800">Notifiche Smart</h3>
        </div>
        <ul className="space-y-3 text-green-700">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Priorità per Spazi importanti</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Silenzioso per gruppi informativi</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Menzioni @nome immediate</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Parole chiave personalizzate</li>
        </ul>
      </div>
      <div className="bg-orange-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Shield className="w-16 h-16 mx-auto text-orange-600 mb-4" />
          <h3 className="text-2xl font-bold text-orange-800">Moderazione</h3>
        </div>
        <ul className="space-y-3 text-orange-700">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Ruoli admin per Spazi</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Controllo accesso membri</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Filtri contenuti automatici</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Report comportamenti</li>
        </ul>
      </div>
      <div className="bg-red-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Zap className="w-16 h-16 mx-auto text-red-600 mb-4" />
          <h3 className="text-2xl font-bold text-red-800">Bot e Automazioni</h3>
        </div>
        <ul className="space-y-3 text-red-700">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Bot promemoria scadenze</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Integrazione sistemi scuola</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Risposte automatiche FAQ</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Workflow personalizzati</li>
        </ul>
      </div>
    </div>
  </div>
);

const Slide20_Chat_Integration = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Chat: Integrazione Workspace</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-3">
          <Link className="w-8 h-8" />
          Connessioni Dirette
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-red-700 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Gmail Integration
            </h4>
            <p className="text-sm text-gray-600">Chat accessibile dalla sidebar Gmail. Converti email in task o avvia chat dirette.</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-700 flex items-center gap-2">
              <Folder className="w-5 h-5" />
              Drive Sharing
            </h4>
            <p className="text-sm text-gray-600">Condividi file Drive direttamente in chat. Anteprima automatica e permessi ereditati.</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-700 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Calendar Events
            </h4>
            <p className="text-sm text-gray-600">Crea eventi Calendar da messaggi chat. Link Meet automatici per riunioni improvvisate.</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-700 flex items-center gap-2">
              <Video className="w-5 h-5" />
              Meet Istantaneo
            </h4>
            <p className="text-sm text-gray-600">Avvia videochiamata con un click da qualsiasi conversazione chat.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
          <Layers className="w-8 h-8" />
          Workflow Educativi
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-green-700 mb-3">Scenario: Preparazione Verifica</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">1</div>
                <span>Chat dipartimento: "Chi ha domande per verifica geografia?"</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">2</div>
                <span>Condivisione file Docs con bozza domande</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs">3</div>
                <span>Feedback collaborativo in tempo reale</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">4</div>
                <span>Evento Calendar "Verifica Geografia 3A" condiviso</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-green-700 mb-3">Scenario: Supporto Tecnico</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">!</div>
                <span>Problema LIM in aula: chat immediata a tecnico</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">✓</div>
                <span>Foto problema condivisa da smartphone</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">→</div>
                <span>Meet per assistenza remota avviato</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-yellow-100 p-8 rounded-2xl border-l-6 border-yellow-500">
      <h4 className="text-2xl font-bold text-yellow-800 mb-4">📱 Multi-Device Experience</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg">
          <h5 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
            <Smartphone className="w-5 h-5" />
            Mobile
          </h5>
          <ul className="text-sm space-y-1">
            <li>• App dedicata iOS/Android</li>
            <li>• Notifiche push intelligenti</li>
            <li>• Condivisione foto diretta</li>
            <li>• Chat offline con sync</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h5 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
            <Monitor className="w-5 h-5" />
            Desktop
          </h5>
          <ul className="text-sm space-y-1">
            <li>• Sidebar Gmail integrata</li>
            <li>• App desktop dedicata</li>
            <li>• Scorciatoie tastiera</li>
            <li>• Multi-window support</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h5 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Web
          </h5>
          <ul className="text-sm space-y-1">
            <li>• chat.google.com diretto</li>
            <li>• Integrazione completa Workspace</li>
            <li>• Condivisione schermo da browser</li>
            <li>• PWA installabile</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-4">🚀 Il Futuro della Comunicazione Scolastica</h4>
      <p className="text-xl mb-4">Google Chat sta evolvendo verso una piattaforma di comunicazione completa per l'educazione:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>AI Assistant:</strong> Bot per supporto automatico a domande frequenti studenti
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Translation:</strong> Traduzione automatica per famiglie multilingue
        </div>
      </div>
    </div>
  </div>
);

// ===== GOOGLE DOCS SLIDES (21-24) =====

const Slide21_Docs_Intro = () => (
  <div className="space-y-10">
    <div className="flex items-center gap-8 mb-8">
      <FileText className="w-24 h-24 text-blue-600" />
      <div>
        <h1 className="text-6xl font-bold text-gray-800">Google Docs</h1>
        <p className="text-3xl text-gray-600">Scrittura collaborativa avanzata</p>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-800 mb-6">Collaborazione Real-Time</h3>
        <ul className="space-y-4 text-blue-700 text-lg">
          <li className="flex items-center gap-3"><Edit className="w-6 h-6" /><span><strong>Editing simultaneo</strong> multipli utenti</span></li>
          <li className="flex items-center gap-3"><Users className="w-6 h-6" /><span><strong>Cursori colorati</strong> per ogni collaboratore</span></li>
          <li className="flex items-center gap-3"><MessageSquare className="w-6 h-6" /><span><strong>Commenti contestuali</strong> sul testo</span></li>
          <li className="flex items-center gap-3"><History className="w-6 h-6" /><span><strong>Modalità Suggerimento</strong> tracciata</span></li>
          <li className="flex items-center gap-3"><Cloud className="w-6 h-6" /><span><strong>Salvataggio automatico</strong> continuo</span></li>
        </ul>
      </div>
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-green-800 mb-6">Didattica Innovativa</h3>
        <ul className="space-y-4 text-green-700 text-lg">
          <li className="flex items-center gap-3"><BookOpen className="w-6 h-6" /><span><strong>Tesine collaborative</strong> studenti</span></li>
          <li className="flex items-center gap-3"><GraduationCap className="w-6 h-6" /><span><strong>Peer review</strong> digitale</span></li>
          <li className="flex items-center gap-3"><Mic className="w-6 h-6" /><span><strong>Dettatura vocale</strong> integrata</span></li>
          <li className="flex items-center gap-3"><Search className="w-6 h-6" /><span><strong>Ricerca e citazioni</strong> automatiche</span></li>
          <li className="flex items-center gap-3"><Share2 className="w-6 h-6" /><span><strong>Condivisione granulare</strong> permessi</span></li>
        </ul>
      </div>
    </div>
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-3">📝 Oltre il Word Processor Tradizionale</h4>
      <p className="text-xl">Google Docs trasforma la scrittura in un'esperienza collaborativa, permettendo feedback immediato e revisioni condivise che migliorano significativamente l'apprendimento.</p>
    </div>
  </div>
);

const Slide22_Docs_SmartChips = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Docs: Smart Chips e Automazione</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Users className="w-16 h-16 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold text-blue-800">Smart Chips Persone</h3>
        </div>
        <div className="space-y-3">
          <div className="bg-white p-3 rounded-lg">
            <code className="text-sm">@maria.rossi</code>
            <p className="text-xs text-gray-600 mt-1">Inserisce chip con email e info contatto</p>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <code className="text-sm">@studenti.classe2a</code>
            <p className="text-xs text-gray-600 mt-1">Riferimento diretto a gruppo classe</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Calendar className="w-16 h-16 mx-auto text-green-600 mb-4" />
          <h3 className="text-2xl font-bold text-green-800">Smart Chips Date</h3>
        </div>
        <div className="space-y-3">
          <div className="bg-white p-3 rounded-lg">
            <code className="text-sm">@oggi</code>
            <p className="text-xs text-gray-600 mt-1">Data corrente aggiornata automaticamente</p>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <code className="text-sm">@prossima settimana</code>
            <p className="text-xs text-gray-600 mt-1">Date relative intelligenti</p>
          </div>
        </div>
      </div>
      <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Folder className="w-16 h-16 mx-auto text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold text-purple-800">Smart Chips File</h3>
        </div>
        <div className="space-y-3">
          <div className="bg-white p-3 rounded-lg">
            <code className="text-sm">@programma storia</code>
            <p className="text-xs text-gray-600 mt-1">Link automatico a file Drive pertinenti</p>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <code className="text-sm">@verifica matematica</code>
            <p className="text-xs text-gray-600 mt-1">Collegamento diretto ai documenti</p>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-yellow-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-yellow-800 mb-6 flex items-center gap-3">
          <Video className="w-8 h-8" />
          Smart Chips Eventi
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-yellow-700 mb-2">Esempi Pratici:</h4>
            <ul className="text-sm space-y-2">
              <li><code className="bg-gray-100 px-2 py-1 rounded">@riunione dipartimento</code> - Collega evento Calendar con link Meet</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">@lezione fisica domani</code> - Inserisce automaticamente orario e aula</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">@colloquio genitori</code> - Link diretto a prenotazione Calendar</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-yellow-700 mb-2">Vantaggi Didattici:</h4>
            <ul className="text-sm space-y-1">
              <li>• Piani di lezione con eventi sincronizzati</li>
              <li>• Programmazioni con scadenze automatiche</li>
              <li>• Report con collegamenti a riunioni</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-red-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-red-800 mb-6 flex items-center gap-3">
          <Globe className="w-8 h-8" />
          Smart Chips Luoghi
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-red-700 mb-2">Geolocalizzazione Educativa:</h4>
            <ul className="text-sm space-y-2">
              <li><code className="bg-gray-100 px-2 py-1 rounded">@Aula Magna</code> - Mappa interna scuola</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">@Laboratorio Informatica</code> - Prenotazione spazi</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">@Palazzo Ducale, Venezia</code> - Gite scolastiche</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-red-700 mb-2">Applicazioni:</h4>
            <ul className="text-sm space-y-1">
              <li>• Relazioni gite con mappe automatiche</li>
              <li>• Programmazioni con luoghi delle lezioni</li>
              <li>• Progetti geografici interattivi</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-4">🔗 Interconnessione Intelligente</h4>
      <p className="text-xl mb-4">Gli Smart Chips trasformano i documenti in hub interconnessi che collegano automaticamente persone, eventi, file e luoghi del mondo scolastico.</p>
      <div className="bg-white bg-opacity-20 p-4 rounded-lg">
        <p><strong>Esempio Completo:</strong> "La @maria.rossi terrà la @lezione di storia @domani nell'@Aula 12 usando il @documento_guerra_mondiale del @drive_storia."</p>
      </div>
    </div>
  </div>
);

const Slide23_Docs_Collaboration = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Docs: Collaborazione e Feedback</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <MessageSquare className="w-16 h-16 mx-auto text-green-600 mb-4" />
          <h3 className="text-2xl font-bold text-green-800">Commenti</h3>
        </div>
        <ul className="space-y-3 text-green-700">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Feedback contestuale</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Thread di discussione</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Risoluzione automatica</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Notifiche immediate</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Cronologia completa</li>
        </ul>
      </div>
      <div className="bg-orange-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Edit className="w-16 h-16 mx-auto text-orange-600 mb-4" />
          <h3 className="text-2xl font-bold text-orange-800">Modalità Suggerimento</h3>
        </div>
        <ul className="space-y-3 text-orange-700">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Modifiche tracciabili</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Accetta/rifiuta singola</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Autore visibile sempre</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Comparazione versioni</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Workflow approvazione</li>
        </ul>
      </div>
      <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <History className="w-16 h-16 mx-auto text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold text-purple-800">Cronologia Versioni</h3>
        </div>
        <ul className="space-y-3 text-purple-700">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Ogni modifica tracciata</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Ripristino versione precedente</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Versioni nominate</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Confronto timeline</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Backup automatico</li>
        </ul>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-3">
          <GraduationCap className="w-8 h-8" />
          Correzione Digitale
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-700">Workflow Insegnante:</h4>
            <ol className="text-sm mt-2 space-y-1">
              <li>1. Studente condivide compito con permessi "Commenti"</li>
              <li>2. Docente aggiunge feedback con commenti mirati</li>
              <li>3. Modalità "Suggerimento" per correzioni</li>
              <li>4. Studente risolve commenti e accetta modifiche</li>
              <li>5. Versione finale automaticamente salvata</li>
            </ol>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-700">Vantaggi vs Cartaceo:</h4>
            <ul className="text-sm mt-2 space-y-1">
              <li>• Feedback più dettagliato e leggibile</li>
              <li>• Processo iterativo di miglioramento</li>
              <li>• Storico completo delle correzioni</li>
              <li>• Condivisione immediata risultati</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-yellow-800 mb-6 flex items-center gap-3">
          <Users className="w-8 h-8" />
          Peer Review Digitale
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-yellow-700 mb-2">Setup Attività:</h4>
            <div className="text-sm space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">1</div>
                <span>Crea documento template in Drive</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">2</div>
                <span>Condividi con studenti come "Commentatori"</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs">3</div>
                <span>Assegna coppie di revisori per ogni lavoro</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">4</div>
                <span>Monitora feedback e guida discussioni</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-yellow-700 mb-2">Risultati Pedagogici:</h4>
            <ul className="text-sm space-y-1">
              <li>• Sviluppo pensiero critico</li>
              <li>• Miglioramento capacità comunicative</li>
              <li>• Apprendimento collaborativo autentico</li>
              <li>• Responsabilizzazione studenti</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-4">📚 Caso Studio: Tesina Collaborativa</h4>
      <p className="text-xl mb-4">Classe 5^ Liceo - Tesina interdisciplinare "Rivoluzione Industriale":</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Setup:</strong> 25 studenti, 5 gruppi da 5, un documento condiviso per gruppo
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Processo:</strong> 3 settimane di scrittura collaborativa con feedback docenti
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Risultato:</strong> 5 tesine di qualità superiore con processo trasparente
        </div>
      </div>
    </div>
  </div>
);

const Slide24_Docs_Advanced = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Docs: Strumenti Avanzati</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Mic className="w-16 h-16 mx-auto text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold text-purple-800">Digitazione Vocale</h3>
        </div>
        <ul className="space-y-3 text-purple-700">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Supporto DSA/BES</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Multilingual support</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Comandi vocali editing</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Punteggiatura automatica</li>
        </ul>
      </div>
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Search className="w-16 h-16 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold text-blue-800">Esplora e Ricerca</h3>
        </div>
        <ul className="space-y-3 text-blue-700">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Ricerca web integrata</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Citazioni automatiche</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Immagini copyright-free</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Drive file suggestions</li>
        </ul>
      </div>
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <StickyNote className="w-16 h-16 mx-auto text-green-600 mb-4" />
          <h3 className="text-2xl font-bold text-green-800">Integrazione Keep</h3>
        </div>
        <ul className="space-y-3 text-green-700">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Note sidebar</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Drag & drop note</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Sincronizzazione mobile</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Promemoria attivi</li>
        </ul>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-orange-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-orange-800 mb-6 flex items-center gap-3">
          <Settings className="w-8 h-8" />
          Correzione Automatica
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-orange-700 mb-2">Grammatica e Stile:</h4>
            <ul className="text-sm space-y-1">
              <li>• Controllo ortografico multilingue</li>
              <li>• Suggerimenti grammaticali contestuali</li>
              <li>• Miglioramenti di stile automatici</li>
              <li>• Rilevamento plagio (Education Plus)</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-orange-700 mb-2">Accessibilità:</h4>
            <ul className="text-sm space-y-1">
              <li>• Screen reader compatibility</li>
              <li>• Navigazione da tastiera</li>
              <li>• Contrasto colori regolabile</li>
              <li>• Font size dinamico</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-red-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-red-800 mb-6 flex items-center gap-3">
          <Download className="w-8 h-8" />
          Export e Formati
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-red-700 mb-2">Formati Supportati:</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>• Microsoft Word (.docx)</div>
              <div>• PDF (con segnalibri)</div>
              <div>• OpenDocument (.odt)</div>
              <div>• RTF (Rich Text)</div>
              <div>• HTML (pagina web)</div>
              <div>• EPUB (e-book)</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-red-700 mb-2">Pubblicazione:</h4>
            <ul className="text-sm space-y-1">
              <li>• Pubblica come pagina web</li>
              <li>• Embed in Google Sites</li>
              <li>• Stampa ottimizzata</li>
              <li>• QR code per condivisione rapida</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-yellow-100 p-8 rounded-2xl border-l-6 border-yellow-500">
      <h4 className="text-2xl font-bold text-yellow-800 mb-4">🎯 Template Educativi Pronti</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg">
          <h5 className="font-bold text-gray-800 mb-2">Per Docenti:</h5>
          <ul className="text-sm space-y-1">
            <li>• Piano di lezione settimanale</li>
            <li>• Relazione finale classe</li>
            <li>• Verbale riunione dipartimento</li>
            <li>• Programmazione didattica annuale</li>
            <li>• Report valutazione studenti</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h5 className="font-bold text-gray-800 mb-2">Per Studenti:</h5>
          <ul className="text-sm space-y-1">
            <li>• Template tesina maturità</li>
            <li>• Schema relazione laboratorio</li>
            <li>• Format presentazione progetto</li>
            <li>• Struttura tema argomentativo</li>
            <li>• Modello curriculum vitae</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-4">🔮 Funzionalità Future con AI</h4>
      <p className="text-xl mb-4">Google Docs sta integrando intelligenza artificiale per supportare ulteriormente l'educazione:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Smart Compose:</strong> Suggerimenti automatici per completare frasi comuni in ambito educativo
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Grammar Coach:</strong> Spiegazioni dettagliate degli errori per miglioramento continuo
        </div>
      </div>
    </div>
  </div>
);

// ===== GOOGLE SHEETS SLIDES (25-28) =====

const Slide25_Sheets_Intro = () => (
  <div className="space-y-10">
    <div className="flex items-center gap-8 mb-8">
      <BarChart3 className="w-24 h-24 text-green-600" />
      <div>
        <h1 className="text-6xl font-bold text-gray-800">Google Sheets</h1>
        <p className="text-3xl text-gray-600">Analisi dati e griglie di calcolo</p>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-green-800 mb-6">Potenza di Calcolo</h3>
        <ul className="space-y-4 text-green-700 text-lg">
          <li className="flex items-center gap-3"><TrendingUp className="w-6 h-6" /><span><strong>Formule avanzate</strong> QUERY, FILTER, ARRAYFORMULA</span></li>
          <li className="flex items-center gap-3"><Database className="w-6 h-6" /><span><strong>Importazione dati</strong> da web e API</span></li>
          <li className="flex items-center gap-3"><PieChart className="w-6 h-6" /><span><strong>Grafici dinamici</strong> aggiornamento automatico</span></li>
          <li className="flex items-center gap-3"><Zap className="w-6 h-6" /><span><strong>Script personalizzati</strong> automazione task</span></li>
          <li className="flex items-center gap-3"><Share2 className="w-6 h-6" /><span><strong>Collaborazione real-time</strong> calcoli condivisi</span></li>
        </ul>
      </div>
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-800 mb-6">Applicazioni Didattiche</h3>
        <ul className="space-y-4 text-blue-700 text-lg">
          <li className="flex items-center gap-3"><GraduationCap className="w-6 h-6" /><span><strong>Registro voti</strong> digitale avanzato</span></li>
          <li className="flex items-center gap-3"><BarChart3 className="w-6 h-6" /><span><strong>Analisi performance</strong> classe</span></li>
          <li className="flex items-center gap-3"><Target className="w-6 h-6" /><span><strong>Tracciamento obiettivi</strong> apprendimento</span></li>
          <li className="flex items-center gap-3"><Users className="w-6 h-6" /><span><strong>Gestione progetti</strong> collaborativi</span></li>
          <li className="flex items-center gap-3"><FileQuestion className="w-6 h-6" /><span><strong>Quiz automatici</strong> con correzione</span></li>
        </ul>
      </div>
    </div>
    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-3">📊 Database Educativo Intelligente</h4>
      <p className="text-xl">Google Sheets trasforma la gestione dati scolastici da semplice tabellazione a sistema di analisi avanzato per decisioni educative data-driven.</p>
    </div>
  </div>
);

const Slide26_Sheets_Formulas = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Sheets: Formule per l'Educazione</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <TrendingUp className="w-16 h-16 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold text-blue-800">Formule Base</h3>
        </div>
        <div className="space-y-3">
          <div className="bg-white p-3 rounded-lg">
            <code className="text-xs">=(SOMMA(B2:B10))/CONTA.VALORI(B2:B10)</code>
            <p className="text-xs text-gray-600 mt-1">Media voti classe</p>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <code className="text-xs">=SE(C2&gt;=6;"Sufficiente";"Insufficiente")</code>
            <p className="text-xs text-gray-600 mt-1">Valutazione automatica</p>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <code className="text-xs">=CONTA.SE(B2:B20;"&gt;=8")</code>
            <p className="text-xs text-gray-600 mt-1">Conteggio eccellenze</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Database className="w-16 h-16 mx-auto text-green-600 mb-4" />
          <h3 className="text-2xl font-bold text-green-800">QUERY Avanzate</h3>
        </div>
        <div className="space-y-3">
          <div className="bg-white p-3 rounded-lg">
            <code className="text-xs">=QUERY(A:C;"SELECT A,AVG(C) GROUP BY A")</code>
            <p className="text-xs text-gray-600 mt-1">Media per studente</p>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <code className="text-xs">=QUERY(Dati;"SELECT * WHERE B&gt;6")</code>
            <p className="text-xs text-gray-600 mt-1">Solo voti sufficienti</p>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <code className="text-xs">=QUERY(A:D;"SELECT A,COUNT(B) GROUP BY A")</code>
            <p className="text-xs text-gray-600 mt-1">Numero verifiche per studente</p>
          </div>
        </div>
      </div>
      <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Zap className="w-16 h-16 mx-auto text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold text-purple-800">Funzioni Speciali</h3>
        </div>
        <div className="space-y-3">
          <div className="bg-white p-3 rounded-lg">
            <code className="text-xs">=ARRAYFORMULA(B2:B*C2:C)</code>
            <p className="text-xs text-gray-600 mt-1">Calcoli su intere colonne</p>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <code className="text-xs">=FILTER(A:C,B:B&gt;7)</code>
            <p className="text-xs text-gray-600 mt-1">Filtro dinamico eccellenze</p>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <code className="text-xs">=SPARKLINE(B2:F2)</code>
            <p className="text-xs text-gray-600 mt-1">Grafici in cella</p>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-yellow-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-yellow-800 mb-6 flex items-center gap-3">
          <FileQuestion className="w-8 h-8" />
          Quiz Autocorrettivi
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-yellow-700 mb-2">Setup Formula Quiz:</h4>
            <code className="text-xs bg-gray-100 p-2 rounded block">
              =SE(B2=C2;"Corretto ✓";"Sbagliato ✗ - Risposta: "&C2)
            </code>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-yellow-700 mb-2">Punteggio Automatico:</h4>
            <code className="text-xs bg-gray-100 p-2 rounded block">
              ="Punteggio: "&CONTA.SE(D:D;"Corretto ✓")&"/10"
            </code>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-yellow-700 mb-2">Vantaggi:</h4>
            <ul className="text-sm space-y-1">
              <li>• Correzione istantanea</li>
              <li>• Feedback immediato</li>
              <li>• Raccolta dati automatica</li>
              <li>• Analisi errori comuni</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-red-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-red-800 mb-6 flex items-center gap-3">
          <Upload className="w-8 h-8" />
          Importazione Dati
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-red-700 mb-2">Da Google Forms:</h4>
            <code className="text-xs bg-gray-100 p-2 rounded block">
              Collegamento automatico risposta → Foglio
            </code>
            <p className="text-xs text-gray-600 mt-1">Quiz e sondaggi si popolano automaticamente</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-red-700 mb-2">Da Web:</h4>
            <code className="text-xs bg-gray-100 p-2 rounded block">
              =IMPORTHTML("URL";"table";1)
            </code>
            <p className="text-xs text-gray-600 mt-1">Tabelle da siti web (es. calendario eventi)</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-red-700 mb-2">CSV e Excel:</h4>
            <p className="text-xs text-gray-600">Import diretto da file registro tradizionale</p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-4">🧮 Esempio Pratico: Registro Classe Intelligente</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Input:</strong> Voti inseriti da docenti in colonne per materia
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Process:</strong> Formule calcolano medie, identificano criticità, trend
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Output:</strong> Dashboard automatica con alert per interventi
        </div>
      </div>
    </div>
  </div>
);

const Slide27_Sheets_DataViz = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Sheets: Visualizzazione Dati</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <PieChart className="w-16 h-16 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold text-blue-800">Grafici Dinamici</h3>
        </div>
        <ul className="space-y-3 text-blue-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Istogrammi distribuzione voti</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Torta: partecipazione attività</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Linee: trend performance temporale</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Scatter: correlazione materie</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Barre: confronto classi</li>
        </ul>
      </div>
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Palette className="w-16 h-16 mx-auto text-green-600 mb-4" />
          <h3 className="text-2xl font-bold text-green-800">Formattazione Conditionale</h3>
        </div>
        <ul className="space-y-3 text-green-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Voti: scala colore verde-rosso</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Presenze: evidenzia assenze</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Scadenze: allarmi temporali</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Performance: barre di progresso</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Icone: stato attività</li>
        </ul>
      </div>
      <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <TrendingUp className="w-16 h-16 mx-auto text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold text-purple-800">Sparklines</h3>
        </div>
        <ul className="space-y-3 text-purple-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Mini-grafici in singole celle</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Trend voti studente nel tempo</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Progressi per competenza</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Confronti visuali rapidi</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Dashboard compatte</li>
        </ul>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-orange-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-orange-800 mb-6 flex items-center gap-3">
          <Database className="w-8 h-8" />
          Tabelle Pivot
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-orange-700 mb-2">Setup Rapido:</h4>
            <ol className="text-sm space-y-1">
              <li>1. Seleziona dati registro completo</li>
              <li>2. Inserisci → Tabella pivot</li>
              <li>3. Trascina "Studente" in Righe</li>
              <li>4. Trascina "Materia" in Colonne</li>
              <li>5. Trascina "Voto" in Valori (Media)</li>
            </ol>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-orange-700 mb-2">Risultati:</h4>
            <ul className="text-sm space-y-1">
              <li>• Matrice studenti × materie</li>
              <li>• Medie automatiche per ogni incrocio</li>
              <li>• Totali di riga e colonna</li>
              <li>• Aggiornamento dinamico dati</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-red-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-red-800 mb-6 flex items-center gap-3">
          <Eye className="w-8 h-8" />
          Dashboard Genitori
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-red-700 mb-2">Elementi Visuali:</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>📊 Grafico trend voti</div>
              <div>🎯 Obiettivi raggiunti</div>
              <div>📅 Prossime scadenze</div>
              <div>👥 Confronto classe</div>
              <div>📝 Ultimi feedback</div>
              <div>⚠️ Aree miglioramento</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-red-700 mb-2">Condivisione Sicura:</h4>
            <ul className="text-sm space-y-1">
              <li>• Filtro automatico per studente</li>
              <li>• Solo dati del proprio figlio</li>
              <li>• Accesso di sola lettura</li>
              <li>• Link personalizzati</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-yellow-100 p-8 rounded-2xl border-l-6 border-yellow-500">
      <h4 className="text-2xl font-bold text-yellow-800 mb-4">📈 Case Study: Analisi Performance Classe</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg">
          <h5 className="font-bold text-gray-800 mb-2">Problema:</h5>
          <p className="text-sm text-gray-700">Classe 2B Matematica con performance molto variabili tra studenti</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h5 className="font-bold text-gray-800 mb-2">Analisi:</h5>
          <p className="text-sm text-gray-700">Grafici rivelano correlazione tra presenze e voti, identificano 5 studenti a rischio</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h5 className="font-bold text-gray-800 mb-2">Azione:</h5>
          <p className="text-sm text-gray-700">Piano recupero mirato per i 5 studenti, monitoraggio settimanale</p>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-4">🎨 Pro Tips: Design Dashboard Efficace</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h5 className="font-bold mb-2">✅ Best Practices:</h5>
          <ul className="text-sm space-y-1">
            <li>• Usa colori consistenti (verde=positivo, rosso=problema)</li>
            <li>• Raggruppa informazioni correlate</li>
            <li>• Evidenzia trend, non solo numeri statici</li>
            <li>• Aggiungi titoli esplicativi ai grafici</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-2">❌ Da Evitare:</h5>
          <ul className="text-sm space-y-1">
            <li>• Troppi grafici in poco spazio</li>
            <li>• Colori che non hanno significato logico</li>
            <li>• Dati non aggiornati automaticamente</li>
            <li>• Scale che distorcono la realtà</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const Slide28_Sheets_Automation = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Sheets: Automazione e Integrazione</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-purple-800 mb-6 flex items-center gap-3">
          <Settings className="w-8 h-8" />
          Google Apps Script
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-700">Script Esempio: Email Automatica</h4>
            <code className="text-xs bg-gray-100 p-2 rounded block mt-2">
              function inviaAvvisoVotiBassi() {}<br/>
              {"  // Trova studenti con media < 6"}<br/>
              {"  // Invia email personalizzata a famiglie"}
            </code>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-700">Trigger Temporali:</h4>
            <ul className="text-sm space-y-1">
              <li>• Report settimanali automatici</li>
              <li>• Promemoria scadenze</li>
              <li>• Backup dati giornalieri</li>
              <li>• Sincronizzazione con sistemi scuola</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-3">
          <Link className="w-8 h-8" />
          Integrazioni Native
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-700 flex items-center gap-2">
              <FileQuestion className="w-5 h-5" />
              Google Forms
            </h4>
            <p className="text-sm text-gray-600">Risposte quiz automaticamente in Sheets, correzione immediata con formule</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-red-700 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Gmail Integration
            </h4>
            <p className="text-sm text-gray-600">Invia email con dati Sheets, allegati automatici report personalizzati</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-700 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Calendar Events
            </h4>
            <p className="text-sm text-gray-600">Crea eventi da righe Sheets, scadenze dinamiche nei calendari</p>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Plus className="w-16 h-16 mx-auto text-green-600 mb-4" />
          <h3 className="text-2xl font-bold text-green-800">Add-ons Educativi</h3>
        </div>
        <ul className="space-y-3 text-green-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Flubaroo: correzione automatica</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />AutoCrat: certificati personalizzati</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Doctopus: workflow documenti</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Form Publisher: report automatici</li>
        </ul>
      </div>
      <div className="bg-orange-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Database className="w-16 h-16 mx-auto text-orange-600 mb-4" />
          <h3 className="text-2xl font-bold text-orange-800">Data Sources</h3>
        </div>
        <ul className="space-y-3 text-orange-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Registro elettronico esistente</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Sistema gestionale scuola</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Piattaforme quiz online</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />App presenze mobile</li>
        </ul>
      </div>
      <div className="bg-red-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Shield className="w-16 h-16 mx-auto text-red-600 mb-4" />
          <h3 className="text-2xl font-bold text-red-800">Privacy & Backup</h3>
        </div>
        <ul className="space-y-3 text-red-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Conformità GDPR automatica</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Cronologia versioni completa</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Controllo accessi granulare</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Export dati sicuri</li>
        </ul>
      </div>
    </div>
    <div className="bg-yellow-100 p-8 rounded-2xl border-l-6 border-yellow-500">
      <h4 className="text-2xl font-bold text-yellow-800 mb-4">🔄 Workflow Completo: Da Quiz a Report</h4>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-lg text-center">
          <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">1</div>
          <h5 className="font-bold text-blue-800">Forms</h5>
          <p className="text-xs text-gray-600">Quiz creato e condiviso</p>
        </div>
        <div className="bg-white p-4 rounded-lg text-center">
          <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">2</div>
          <h5 className="font-bold text-green-800">Sheets</h5>
          <p className="text-xs text-gray-600">Risposte automatiche</p>
        </div>
        <div className="bg-white p-4 rounded-lg text-center">
          <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">3</div>
          <h5 className="font-bold text-orange-800">Formule</h5>
          <p className="text-xs text-gray-600">Correzione automatica</p>
        </div>
        <div className="bg-white p-4 rounded-lg text-center">
          <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">4</div>
          <h5 className="font-bold text-purple-800">Script</h5>
          <p className="text-xs text-gray-600">Email con voti</p>
        </div>
        <div className="bg-white p-4 rounded-lg text-center">
          <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">5</div>
          <h5 className="font-bold text-red-800">Dashboard</h5>
          <p className="text-xs text-gray-600">Analisi per docenti</p>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-4">⚡ Automazione Avanzata: Esempio Reale</h4>
      <p className="text-xl mb-4">Sistema completo per gestione verifiche scritte:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Input:</strong> Docente inserisce voti verifica in Sheets condiviso
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Output:</strong> Email automatiche a famiglie, grafici performance, alert criticità
        </div>
      </div>
    </div>
  </div>
);

// ===== GOOGLE SLIDES SLIDES (29-32) =====

const Slide29_Slides_Intro = () => (
  <div className="space-y-10">
    <div className="flex items-center gap-8 mb-8">
      <Presentation className="w-24 h-24 text-orange-600" />
      <div>
        <h1 className="text-6xl font-bold text-gray-800">Google Slides</h1>
        <p className="text-3xl text-gray-600">Lezioni interattive e presentazioni</p>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-orange-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-orange-800 mb-6">Creazione Collaborativa</h3>
        <ul className="space-y-4 text-orange-700 text-lg">
          <li className="flex items-center gap-3"><Users className="w-6 h-6" /><span><strong>Editing simultaneo</strong> multi-utente</span></li>
          <li className="flex items-center gap-3"><Palette className="w-6 h-6" /><span><strong>Template professionali</strong> per educazione</span></li>
          <li className="flex items-center gap-3"><Image className="w-6 h-6" /><span><strong>Media integrati</strong> video, audio, immagini</span></li>
          <li className="flex items-center gap-3"><Layers className="w-6 h-6" /><span><strong>Master slides</strong> per coerenza visiva</span></li>
          <li className="flex items-center gap-3"><History className="w-6 h-6" /><span><strong>Cronologia versioni</strong> completa</span></li>
        </ul>
      </div>
      <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-purple-800 mb-6">Innovazione Didattica</h3>
        <ul className="space-y-4 text-purple-700 text-lg">
          <li className="flex items-center gap-3"><Play className="w-6 h-6" /><span><strong>Modalità presentatore</strong> con note private</span></li>
          <li className="flex items-center gap-3"><MessageSquare className="w-6 h-6" /><span><strong>Q&A dal vivo</strong> con studenti</span></li>
          <li className="flex items-center gap-3"><Share2 className="w-6 h-6" /><span><strong>Condivisione istantanea</strong> link pubblici</span></li>
          <li className="flex items-center gap-3"><Download className="w-6 h-6" /><span><strong>Export multipli</strong> PDF, PowerPoint, video</span></li>
          <li className="flex items-center gap-3"><WifiOff className="w-6 h-6" /><span><strong>Modalità offline</strong> per lezioni ovunque</span></li>
        </ul>
      </div>
    </div>
    <div className="bg-gradient-to-r from-orange-500 to-purple-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-3">🎭 Rivoluzione della Lezione Frontale</h4>
      <p className="text-xl">Google Slides trasforma le presentazioni da monologhi statici a esperienze interattive che coinvolgono attivamente gli studenti nell'apprendimento.</p>
    </div>
  </div>
);

const Slide30_Slides_Interactive = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Slides: Funzionalità Interattive</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-3">
          <MessageSquare className="w-8 h-8" />
          Q&A Sessioni Live
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-blue-700 mb-2">Come Attivare:</h4>
            <ol className="text-sm space-y-1">
              <li>1. Durante presentazione: clicca "Audience Tools"</li>
              <li>2. Attiva "Accept questions"</li>
              <li>3. Studenti visitano URL generato automaticamente</li>
              <li>4. Domande appaiono in tempo reale</li>
              <li>5. Docente modera e risponde dal vivo</li>
            </ol>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-blue-700 mb-2">Vantaggi Pedagogici:</h4>
            <ul className="text-sm space-y-1">
              <li>• Studenti timidi possono partecipare</li>
              <li>• Domande anonime riducono imbarazzo</li>
              <li>• Engagement misurato in tempo reale</li>
              <li>• Raccolta feedback istantaneo</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
          <Eye className="w-8 h-8" />
          Modalità Presentatore
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-green-700 mb-2">Controllo Avanzato:</h4>
            <ul className="text-sm space-y-1">
              <li>• Note private del docente non visibili</li>
              <li>• Anteprima slide successiva</li>
              <li>• Timer per gestione tempo</li>
              <li>• Laser pointer virtuale</li>
              <li>• Controllo remoto da mobile</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-green-700 mb-2">Preparazione Lezione:</h4>
            <ul className="text-sm space-y-1">
              <li>• Script dettagliato nelle note</li>
              <li>• Promemoria per domande agli studenti</li>
              <li>• Link di approfondimento nascosti</li>
              <li>• Indicazioni per esperimenti/demo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Link className="w-16 h-16 mx-auto text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold text-purple-800">Embed Interattivi</h3>
        </div>
        <ul className="space-y-3 text-purple-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Video YouTube incorporati</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Mappe Google Maps live</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Grafici Sheets dinamici</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Documenti Drive collegati</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Forms per quiz istantanei</li>
        </ul>
      </div>
      <div className="bg-red-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Play className="w-16 h-16 mx-auto text-red-600 mb-4" />
          <h3 className="text-2xl font-bold text-red-800">Animazioni Smart</h3>
        </div>
        <ul className="space-y-3 text-red-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Transizioni fluide automatiche</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Elementi che appaiono gradualmente</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Focus progressivo su concetti</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Effetti zoom per dettagli</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Timing automatico personalizzabile</li>
        </ul>
      </div>
      <div className="bg-yellow-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Smartphone className="w-16 h-16 mx-auto text-yellow-600 mb-4" />
          <h3 className="text-2xl font-bold text-yellow-800">Controllo Remoto</h3>
        </div>
        <ul className="space-y-3 text-yellow-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />App mobile per navigazione</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Cambia slide da smartphone</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Laser pointer virtuale</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Note private su mobile</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Libertà movimento in aula</li>
        </ul>
      </div>
    </div>
    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-4">🎯 Scenario: Lezione di Storia Interattiva</h4>
      <p className="text-xl mb-4">Argomento: Rivoluzione Francese - Come rendere il 1789 coinvolgente nel 2024:</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Setup:</strong> Slides con video, mappe, timeline interattiva e sessione Q&A attiva
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Engagement:</strong> Studenti fanno domande anonime, votano cause rivoluzione
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Risultato:</strong> Comprensione profonda attraverso partecipazione attiva
        </div>
      </div>
    </div>
  </div>
);

const Slide31_Slides_Collaboration = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Slides: Progetti Collaborativi</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
          <Users className="w-8 h-8" />
          Lavoro di Gruppo
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-700">Setup Presentazione Gruppo:</h4>
            <ol className="text-sm mt-2 space-y-1">
              <li>1. Docente crea presentazione template</li>
              <li>2. Condivide con studenti (permessi "Editor")</li>
              <li>3. Ogni studente responsabile di sezioni specifiche</li>
              <li>4. Collaborazione real-time su contenuti</li>
              <li>5. Cronologia modifiche per valutazione contributi</li>
            </ol>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-700">Ruoli Definiti:</h4>
            <ul className="text-sm mt-2 space-y-1">
              <li>• <strong>Content Creator:</strong> Ricerca e scrive contenuti</li>
              <li>• <strong>Visual Designer:</strong> Cura aspetto e layout</li>
              <li>• <strong>Media Specialist:</strong> Integra video e immagini</li>
              <li>• <strong>Presenter:</strong> Prepara note e timing</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-3">
          <MessageSquare className="w-8 h-8" />
          Peer Review Digitale
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-blue-700 mb-2">Processo di Revisione:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">1</div>
                <span>Gruppi condividono bozze con altri gruppi</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">2</div>
                <span>Feedback tramite commenti su slide specifiche</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs">3</div>
                <span>Suggerimenti per miglioramenti</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">4</div>
                <span>Iterazione e perfezionamento basato su feedback</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-blue-700 mb-2">Competenze Sviluppate:</h4>
            <ul className="text-sm space-y-1">
              <li>• Pensiero critico nell'analisi di contenuti</li>
              <li>• Capacità di dare feedback costruttivo</li>
              <li>• Collaborazione inter-gruppo</li>
              <li>• Miglioramento continuo del lavoro</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-orange-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Layers className="w-16 h-16 mx-auto text-orange-600 mb-4" />
          <h3 className="text-2xl font-bold text-orange-800">Master Templates</h3>
        </div>
        <ul className="space-y-3 text-orange-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Layout coerente per tutti</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Colori e font standardizzati</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Elementi grafici unificati</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Facilita focus su contenuti</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Risultato professionale</li>
        </ul>
      </div>
      <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Share2 className="w-16 h-16 mx-auto text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold text-purple-800">Condivisione Pubblica</h3>
        </div>
        <ul className="space-y-3 text-purple-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Link pubblico per famiglie</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Embed in sito scuola</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Portfolio digitale studenti</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Showcase lavori migliori</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Motivazione attraverso visibilità</li>
        </ul>
      </div>
      <div className="bg-red-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <History className="w-16 h-16 mx-auto text-red-600 mb-4" />
          <h3 className="text-2xl font-bold text-red-800">Valutazione Process</h3>
        </div>
        <ul className="space-y-3 text-red-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Cronologia contributi individuali</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Timestamp ogni modifica</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Qualità feedback dato/ricevuto</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Partecipazione misurata</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Valutazione autentica processo</li>
        </ul>
      </div>
    </div>
    <div className="bg-yellow-100 p-8 rounded-2xl border-l-6 border-yellow-500">
      <h4 className="text-2xl font-bold text-yellow-800 mb-4">🎓 Case Study: Progetto "Cambiamento Climatico"</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h5 className="font-bold text-gray-800 mb-2">Setup Iniziale:</h5>
            <ul className="text-sm space-y-1">
              <li>• 20 studenti divisi in 4 gruppi</li>
              <li>• Ogni gruppo: un aspetto diverso (cause, effetti, soluzioni, policy)</li>
              <li>• Template condiviso con sezioni prestrutturate</li>
              <li>• 2 settimane di lavoro collaborativo</li>
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h5 className="font-bold text-gray-800 mb-2">Risultati Ottenuti:</h5>
            <ul className="text-sm space-y-1">
              <li>• Presentazione finale coesa di 80 slide</li>
              <li>• Peer review ha migliorato qualità contenuti</li>
              <li>• Ogni studente ha contributo documentato</li>
              <li>• Competenze digitali e collaborazione sviluppate</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-4">💡 Strategie per Collaborazione Efficace</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h5 className="font-bold mb-2">Organizzazione:</h5>
          <ul className="text-sm space-y-1">
            <li>• Definisci chiaramente ruoli e responsabilità</li>
            <li>• Stabilisci timeline con milestone intermedie</li>
            <li>• Usa commenti per coordinamento continuo</li>
            <li>• Crea template con sezioni pre-assegnate</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-2">Valutazione:</h5>
          <ul className="text-sm space-y-1">
            <li>• Combina valutazione processo e prodotto</li>
            <li>• Usa cronologia per contributi individuali</li>
            <li>• Includi autovalutazione e peer evaluation</li>
            <li>• Premia qualità feedback, non solo contenuti</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const Slide32_Slides_Advanced = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Slides: Funzionalità Avanzate</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Download className="w-16 h-16 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold text-blue-800">Export Multipli</h3>
        </div>
        <ul className="space-y-3 text-blue-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />PDF per stampa e lettura</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />PowerPoint (.pptx) compatibilità</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Video MP4 per condivisione social</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Immagini PNG/JPG singole slide</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />HTML per siti web</li>
        </ul>
      </div>
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Globe className="w-16 h-16 mx-auto text-green-600 mb-4" />
          <h3 className="text-2xl font-bold text-green-800">Pubblicazione Web</h3>
        </div>
        <ul className="space-y-3 text-green-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Link pubblico sempre aggiornato</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Embed in Google Sites</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Autoplay e loop configurabili</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Responsive su mobile</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Controlli navigazione nascondibili</li>
        </ul>
      </div>
      <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <WifiOff className="w-16 h-16 mx-auto text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold text-purple-800">Modalità Offline</h3>
        </div>
        <ul className="space-y-3 text-purple-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Sincronizzazione automatica</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Modifica senza connessione</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Presentazione ovunque</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Media precaricati</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Backup locale automatico</li>
        </ul>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-orange-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-orange-800 mb-6 flex items-center gap-3">
          <Settings className="w-8 h-8" />
          Automazioni Avanzate
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-orange-700 mb-2">Add-ons Educativi:</h4>
            <ul className="text-sm space-y-1">
              <li>• <strong>Pear Deck:</strong> Quiz interattivi durante presentazione</li>
              <li>• <strong>Nearpod:</strong> Realtà virtuale e simulazioni</li>
              <li>• <strong>Flipgrid:</strong> Registrazioni video risposta</li>
              <li>• <strong>Padlet:</strong> Bacheche collaborative live</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-orange-700 mb-2">Script Personalizzati:</h4>
            <ul className="text-sm space-y-1">
              <li>• Generazione automatica quiz da slide</li>
              <li>• Export note in Docs per ogni studente</li>
              <li>• Creazione certificati personalizzati</li>
              <li>• Invio automatico link a genitori</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-red-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-red-800 mb-6 flex items-center gap-3">
          <Image className="w-8 h-8" />
          Media Avanzati
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-red-700 mb-2">Contenuti Multimediali:</h4>
            <ul className="text-sm space-y-1">
              <li>• Video YouTube con start/end time precisi</li>
              <li>• Audio recording per pronuncia lingue</li>
              <li>• GIF animate per processi scientifici</li>
              <li>• Diagrammi interattivi con Lucidchart</li>
              <li>• Mappe concettuali collaborative</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-red-700 mb-2">Accessibilità:</h4>
            <ul className="text-sm space-y-1">
              <li>• Alt text automatico per immagini</li>
              <li>• Screen reader compatibility</li>
              <li>• High contrast mode</li>
              <li>• Font size scaling</li>
              <li>• Subtitles per video integrati</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-yellow-100 p-8 rounded-2xl border-l-6 border-yellow-500">
      <h4 className="text-2xl font-bold text-yellow-800 mb-4">🚀 Trends Futuri: AI-Powered Slides</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg">
          <h5 className="font-bold text-gray-800 mb-2">Smart Design:</h5>
          <p className="text-sm text-gray-700">AI suggerisce layout e colori basati su contenuto e audience</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h5 className="font-bold text-gray-800 mb-2">Auto-Generation:</h5>
          <p className="text-sm text-gray-700">Slides create automaticamente da testo o outline forniti</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h5 className="font-bold text-gray-800 mb-2">Real-time Analytics:</h5>
          <p className="text-sm text-gray-700">Insights su engagement e comprensione durante presentazione</p>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-4">🎯 Best Practices Design Educativo</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h5 className="font-bold mb-2">Visual Design:</h5>
          <ul className="text-sm space-y-1">
            <li>• Massimo 6 elementi per slide (regola 6x6)</li>
            <li>• Font sans-serif per leggibilità su schermo</li>
            <li>• Contrasto alto per accessibilità</li>
            <li>• Immagini di qualità, mai pixelate</li>
            <li>• Coerenza cromatica per professionalità</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-2">Content Strategy:</h5>
          <ul className="text-sm space-y-1">
            <li>• Una idea principale per slide</li>
            <li>• Storytelling lineare e logico</li>
            <li>• Interazione ogni 5-7 slide</li>
            <li>• Call-to-action chiare per studenti</li>
            <li>• Recap e sintesi a fine lezione</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// ===== GOOGLE MEET SLIDES (33-35) =====

const Slide33_Meet_Intro = () => (
  <div className="space-y-10">
    <div className="flex items-center gap-8 mb-8">
      <Video className="w-24 h-24 text-green-600" />
      <div>
        <h1 className="text-6xl font-bold text-gray-800">Google Meet</h1>
        <p className="text-3xl text-gray-600">Videoconferenze per l'educazione</p>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-green-800 mb-6">Capacità Enterprise</h3>
        <ul className="space-y-4 text-green-700 text-lg">
          <li className="flex items-center gap-3"><Users className="w-6 h-6" /><span><strong>Fino a 250 partecipanti</strong> Education Plus</span></li>
          <li className="flex items-center gap-3"><Shield className="w-6 h-6" /><span><strong>Sicurezza avanzata</strong> crittografia end-to-end</span></li>
          <li className="flex items-center gap-3"><Monitor className="w-6 h-6" /><span><strong>Condivisione schermo</strong> fluida e stabile</span></li>
          <li className="flex items-center gap-3"><Camera className="w-6 h-6" /><span><strong>Recording cloud</strong> automatico</span></li>
          <li className="flex items-center gap-3"><Settings className="w-6 h-6" /><span><strong>Controlli admin</strong> per gestione partecipanti</span></li>
        </ul>
      </div>
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-800 mb-6">Didattica a Distanza</h3>
        <ul className="space-y-4 text-blue-700 text-lg">
          <li className="flex items-center gap-3"><GraduationCap className="w-6 h-6" /><span><strong>Lezioni virtuali</strong> interattive</span></li>
          <li className="flex items-center gap-3"><MessageSquare className="w-6 h-6" /><span><strong>Chat integrata</strong> per domande</span></li>
          <li className="flex items-center gap-3"><Hand className="w-6 h-6" /><span><strong>"Alza la mano"</strong> virtuale</span></li>
          <li className="flex items-center gap-3"><Eye className="w-6 h-6" /><span><strong>Breakout rooms</strong> per lavori gruppo</span></li>
          <li className="flex items-center gap-3"><FileText className="w-6 h-6" /><span><strong>Whiteboard condivisa</strong> Jamboard</span></li>
        </ul>
      </div>
    </div>
    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-3">🌐 Rivoluzione Didattica Digitale</h4>
      <p className="text-xl">Google Meet ha reso possibile la continuità educativa durante la pandemia e continua a offrire opportunità innovative per didattica mista e collaborazioni a distanza.</p>
    </div>
  </div>
);

const Slide34_Meet_Features = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Meet: Funzionalità Educative</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Users className="w-16 h-16 mx-auto text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold text-purple-800">Gestione Classe</h3>
        </div>
        <ul className="space-y-3 text-purple-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Mute automatico all'ingresso</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Controllo accessi sala d'attesa</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Rimozione partecipanti disturbatori</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Lock meeting per sicurezza</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Moderatore sempre docente</li>
        </ul>
      </div>
      <div className="bg-orange-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <MessageSquare className="w-16 h-16 mx-auto text-orange-600 mb-4" />
          <h3 className="text-2xl font-bold text-orange-800">Interazione</h3>
        </div>
        <ul className="space-y-3 text-orange-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Chat dal vivo per domande</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Reactions emoji per feedback</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Sondaggi istantanei</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Q&A organizzate</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Whiteboard collaborativa</li>
        </ul>
      </div>
      <div className="bg-red-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Camera className="w-16 h-16 mx-auto text-red-600 mb-4" />
          <h3 className="text-2xl font-bold text-red-800">Recording e Streaming</h3>
        </div>
        <ul className="space-y-3 text-red-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Recording automatico su Drive</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Live streaming YouTube</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Trascrizioni automatiche</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Sottotitoli real-time</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Traduzione automatica</li>
        </ul>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-3">
          <Eye className="w-8 h-8" />
          Breakout Rooms
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-blue-700 mb-2">Setup Gruppi di Lavoro:</h4>
            <ol className="text-sm space-y-1">
              <li>1. Durante Meet, clicca "Attività" → "Stanze per sottogruppi"</li>
              <li>2. Scegli numero stanze e assegnazione (automatica/manuale)</li>
              <li>3. Studenti vengono spostati in stanze private</li>
              <li>4. Docente può "visitare" ogni stanza</li>
              <li>5. Timer automatico per rientro in aula principale</li>
            </ol>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-blue-700 mb-2">Pedagogia Attiva:</h4>
            <ul className="text-sm space-y-1">
              <li>• Discussioni in piccoli gruppi</li>
              <li>• Peer learning e tutoring</li>
              <li>• Brainstorming collaborativo</li>
              <li>• Esercitazioni pratiche guidate</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
          <FileText className="w-8 h-8" />
          Jamboard Integration
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-green-700 mb-2">Whiteboard Digitale:</h4>
            <ul className="text-sm space-y-1">
              <li>• Condivisione schermo Jamboard in Meet</li>
              <li>• Scrittura simultanea tutti i partecipanti</li>
              <li>• Strumenti disegno, forme, testo</li>
              <li>• Inserimento immagini e note adesive</li>
              <li>• Salvataggio automatico su Drive</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-green-700 mb-2">Applicazioni Didattiche:</h4>
            <ul className="text-sm space-y-1">
              <li>• Mappe concettuali collaborative</li>
              <li>• Brainstorming visuale organizzato</li>
              <li>• Dimostrazioni matematiche step-by-step</li>
              <li>• Analisi testi con annotazioni</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-purple-500 to-orange-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-4">📚 Scenario: Lezione di Letteratura Interattiva</h4>
      <p className="text-xl mb-4">Analisi "Divina Commedia" con 25 studenti in DAD:</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Introduzione (10min):</strong> Presentazione condivisa + Q&A chat
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Breakout (20min):</strong> 5 gruppi analizzano canti diversi
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Jamboard (15min):</strong> Mappa concettuale collaborativa
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Sintesi (10min):</strong> Recording per assenti + compiti
        </div>
      </div>
    </div>
  </div>
);

const Slide35_Meet_BestPractices = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Meet: Best Practices Educative</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
          <CheckCircle className="w-8 h-8" />
          Prima della Lezione
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-700">Setup Tecnico:</h4>
            <ul className="text-sm mt-2 space-y-1">
              <li>• Test audio/video 10 minuti prima</li>
              <li>• Backup internet (hotspot mobile)</li>
              <li>• Luci frontali per illuminazione</li>
              <li>• Background blur o virtuale professionale</li>
              <li>• Chiusura app non necessarie per performance</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-700">Preparazione Contenuti:</h4>
            <ul className="text-sm mt-2 space-y-1">
              <li>• Slides salvate localmente (backup offline)</li>
              <li>• Link Meet in Calendar + Classroom</li>
              <li>• Materiali condivisi su Drive preventivamente</li>
              <li>• Jamboard prep per attività interattive</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-3">
          <Play className="w-8 h-8" />
          Durante la Lezione
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-700">Gestione Partecipanti:</h4>
            <ul className="text-sm mt-2 space-y-1">
              <li>• Mute automatico all'ingresso</li>
              <li>• "Alza la mano" per interventi ordinati</li>
              <li>• Chat moderata per domande</li>
              <li>• Rimozione immediata disturbatori</li>
              <li>• Recording per studenti assenti</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
            <h4 className="font-bold text-orange-700">Engagement Continuo:</h4>
            <ul className="text-sm mt-2 space-y-1">
              <li>• Interazione ogni 7-10 minuti</li>
              <li>• Domande dirette nominali</li>
              <li>• Polls rapidi per feedback</li>
              <li>• Breakout rooms per socializzazione</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-yellow-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Shield className="w-16 h-16 mx-auto text-yellow-600 mb-4" />
          <h3 className="text-2xl font-bold text-yellow-800">Sicurezza</h3>
        </div>
        <ul className="space-y-3 text-yellow-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Link non pubblici mai</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Sala d'attesa sempre attiva</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Solo utenti dominio scuola</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Lock meeting una volta iniziato</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Recording solo con consenso</li>
        </ul>
      </div>
      <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Users className="w-16 h-16 mx-auto text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold text-purple-800">Inclusività</h3>
        </div>
        <ul className="space-y-3 text-purple-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Sottotitoli automatici sempre</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Chat per studenti timidi</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Recording per flessibilità orari</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Multiple modalità partecipazione</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Support BES/DSA integrato</li>
        </ul>
      </div>
      <div className="bg-red-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <TrendingUp className="w-16 h-16 mx-auto text-red-600 mb-4" />
          <h3 className="text-2xl font-bold text-red-800">Performance</h3>
        </div>
        <ul className="space-y-3 text-red-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Bandwidth test preventivo</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Qualità video adattiva</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Audio priorità su video</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />App mobile per stabilità</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Backup plan sempre pronto</li>
        </ul>
      </div>
    </div>
    <div className="bg-yellow-100 p-8 rounded-2xl border-l-6 border-yellow-500">
      <h4 className="text-2xl font-bold text-yellow-800 mb-4">⚡ Problem Solving Rapido</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg">
          <h5 className="font-bold text-red-700 mb-2">Problemi Comuni:</h5>
          <ul className="text-sm space-y-1">
            <li><strong>Audio che non funziona:</strong> Check microfono browser/sistema</li>
            <li><strong>Video pixelato:</strong> Disabilita HD se connessione lenta</li>
            <li><strong>Lag eccessivo:</strong> Chiudi altre app, usa ethernet</li>
            <li><strong>Impossibile condividere schermo:</strong> Autorizzazioni browser</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h5 className="font-bold text-green-700 mb-2">Soluzioni Rapide:</h5>
          <ul className="text-sm space-y-1">
            <li><strong>Riavvio Meet:</strong> Esci e rientra rapidamente</li>
            <li><strong>Phone backup:</strong> Chiama in audio se video ko</li>
            <li><strong>Chat alternativa:</strong> Usa Classroom per comunicare</li>
            <li><strong>Recording di emergenza:</strong> Smartphone backup</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-4">🎯 KPI per Valutare Efficacia Lezioni Meet</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h5 className="font-bold mb-2">Metriche Partecipazione:</h5>
          <ul className="text-sm space-y-1">
            <li>• % studenti con video attivo</li>
            <li>• Numero interventi/domande per lezione</li>
            <li>• Tempo medio permanenza in Meet</li>
            <li>• Utilizzo chat e reactions</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-2">Metriche Qualità:</h5>
          <ul className="text-sm space-y-1">
            <li>• Feedback qualità audio/video</li>
            <li>• Problemi tecnici per sessione</li>
            <li>• Completamento breakout rooms</li>
            <li>• Visualizzazioni recording post-lezione</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// ===== GOOGLE CLASSROOM SLIDES (36-39) =====

const Slide36_Classroom_Intro = () => (
  <div className="space-y-10">
    <div className="flex items-center gap-8 mb-8">
      <GraduationCap className="w-24 h-24 text-green-600" />
      <div>
        <h1 className="text-6xl font-bold text-gray-800">Google Classroom</h1>
        <p className="text-3xl text-gray-600">Learning Management System completo</p>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-green-800 mb-6">Gestione Classe Digitale</h3>
        <ul className="space-y-4 text-green-700 text-lg">
          <li className="flex items-center gap-3"><Users className="w-6 h-6" /><span><strong>Iscrizioni automatiche</strong> da registro scuola</span></li>
          <li className="flex items-center gap-3"><FileText className="w-6 h-6" /><span><strong>Assegnazione compiti</strong> con scadenze</span></li>
          <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6" /><span><strong>Correzione digitale</strong> con rubric</span></li>
          <li className="flex items-center gap-3"><BarChart3 className="w-6 h-6" /><span><strong>Voti e feedback</strong> strutturati</span></li>
          <li className="flex items-center gap-3"><Archive className="w-6 h-6" /><span><strong>Archiviazione automatica</strong> portfolio</span></li>
        </ul>
      </div>
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-800 mb-6">Integrazione Workspace</h3>
        <ul className="space-y-4 text-blue-700 text-lg">
          <li className="flex items-center gap-3"><Folder className="w-6 h-6" /><span><strong>Drive automatico</strong> per ogni classe</span></li>
          <li className="flex items-center gap-3"><Calendar className="w-6 h-6" /><span><strong>Calendar sync</strong> scadenze</span></li>
          <li className="flex items-center gap-3"><Video className="w-6 h-6" /><span><strong>Meet integrato</strong> one-click</span></li>
          <li className="flex items-center gap-3"><Mail className="w-6 h-6" /><span><strong>Gmail notifications</strong> studenti/genitori</span></li>
          <li className="flex items-center gap-3"><Share2 className="w-6 h-6" /><span><strong>Condivisione seamless</strong> materiali</span></li>
        </ul>
      </div>
    </div>
    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-3">🎓 La Classe del Futuro, Oggi</h4>
      <p className="text-xl">Google Classroom unifica tutti gli aspetti della didattica digitale: assegnazioni, materiali, feedback e valutazioni in un ambiente sicuro e collaborativo.</p>
    </div>
  </div>
);

const Slide37_Classroom_Management = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Classroom: Gestione Corso</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-purple-800 mb-6 flex items-center gap-3">
          <Settings className="w-8 h-8" />
          Setup Iniziale
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-700">Creazione Classe:</h4>
            <ol className="text-sm mt-2 space-y-1">
              <li>1. Nome corso: "2A - Matematica - Prof. Rossi"</li>
              <li>2. Sezione: "Anno 2024-25"</li>
              <li>3. Materia: seleziona da elenco predefinito</li>
              <li>4. Aula: "Edificio A - Piano 2"</li>
              <li>5. Codice classe generato automaticamente</li>
            </ol>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-700">Personalizzazione:</h4>
            <ul className="text-sm mt-2 space-y-1">
              <li>• Header personalizzato con foto classe</li>
              <li>• Tema colori coordinato materia</li>
              <li>• Descrizione corso e obiettivi</li>
              <li>• Link risorse esterne importanti</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-orange-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-orange-800 mb-6 flex items-center gap-3">
          <Users className="w-8 h-8" />
          Gestione Studenti
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-orange-700 mb-2">Modalità Iscrizione:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">✓</div>
                <span><strong>Codice classe:</strong> Studenti si iscrivono autonomamente</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">✓</div>
                <span><strong>Invito email:</strong> Docente invita singolarmente</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">✓</div>
                <span><strong>Import CSV:</strong> Caricamento massivo da registro</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs">✓</div>
                <span><strong>Sync SIS:</strong> Integrazione sistemi scuola</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-orange-700 mb-2">Controlli Avanzati:</h4>
            <ul className="text-sm space-y-1">
              <li>• Approvazione manuale nuovi studenti</li>
              <li>• Rimozione temporanea (non definitiva)</li>
              <li>• Co-teacher per supplenze/supporto</li>
              <li>• Guardian notifications per genitori</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <FileText className="w-16 h-16 mx-auto text-green-600 mb-4" />
          <h3 className="text-2xl font-bold text-green-800">Materiali Corso</h3>
        </div>
        <ul className="space-y-3 text-green-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Upload files da computer</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Link Drive esistenti</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Video YouTube embedded</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Link risorse web</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Organizzazione per argomenti</li>
        </ul>
      </div>
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Calendar className="w-16 h-16 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold text-blue-800">Stream Classe</h3>
        </div>
        <ul className="space-y-3 text-blue-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Annunci importanti in evidenza</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Feed chronologico attività</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Commenti studenti moderabili</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Programma post automatici</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Notifiche push personalizzabili</li>
        </ul>
      </div>
      <div className="bg-red-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Shield className="w-16 h-16 mx-auto text-red-600 mb-4" />
          <h3 className="text-2xl font-bold text-red-800">Privacy e Sicurezza</h3>
        </div>
        <ul className="space-y-3 text-red-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Solo utenti dominio scuola</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Controllo accessi granulare</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Audit log completo attività</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Backup automatico dati</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Conformità GDPR nativa</li>
        </ul>
      </div>
    </div>
    <div className="bg-yellow-100 p-8 rounded-2xl border-l-6 border-yellow-500">
      <h4 className="text-2xl font-bold text-yellow-800 mb-4">📋 Template Corso Ottimale</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg">
          <h5 className="font-bold text-gray-800 mb-2">Sezione Materiali:</h5>
          <ul className="text-sm space-y-1">
            <li>📚 <strong>Libri di Testo:</strong> PDF capitoli, link editore</li>
            <li>📝 <strong>Dispense:</strong> Note docente, schemi, mappe</li>
            <li>🎥 <strong>Video Lezioni:</strong> Spiegazioni registrate</li>
            <li>🔗 <strong>Risorse Web:</strong> Siti, simulazioni, tool</li>
            <li>📊 <strong>Esempi:</strong> Esercizi svolti, casi studio</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h5 className="font-bold text-gray-800 mb-2">Organizzazione Argomenti:</h5>
          <ul className="text-sm space-y-1">
            <li>🏁 <strong>Unità 0:</strong> Benvenuto, regole, calendario</li>
            <li>📚 <strong>Unità 1-10:</strong> Programma curriculare</li>
            <li>🔄 <strong>Recupero:</strong> Materiali per chi è indietro</li>
            <li>🚀 <strong>Approfondimento:</strong> Eccellenze e curiosi</li>
            <li>📝 <strong>Verifiche:</strong> Archivio compiti e voti</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-purple-500 to-orange-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-4">⚡ Quick Start: Prima Classe in 15 Minuti</h4>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
          <div className="text-2xl mb-2">⚙️</div>
          <strong>Setup (3min):</strong> Crea classe, personalizza
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
          <div className="text-2xl mb-2">👥</div>
          <strong>Studenti (2min):</strong> Condividi codice classe
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
          <div className="text-2xl mb-2">📚</div>
          <strong>Materiali (5min):</strong> Upload prime risorse
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
          <div className="text-2xl mb-2">📝</div>
          <strong>Primo Task (3min):</strong> Compito introduttivo
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
          <div className="text-2xl mb-2">📢</div>
          <strong>Annuncio (2min):</strong> Messaggio benvenuto
        </div>
      </div>
    </div>
  </div>
);

const Slide38_Classroom_Assignments = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Classroom: Compiti e Valutazione</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-3">
          <FileQuestion className="w-8 h-8" />
          Tipologie Compiti
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-700 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Compito Standard
            </h4>
            <p className="text-sm text-gray-600 mt-1">Consegna documenti, PDF, immagini. Correzione manuale con feedback.</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-700 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Quiz (Forms)
            </h4>
            <p className="text-sm text-gray-600 mt-1">Domande chiuse autocorrettive. Punteggio automatico immediato.</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-700 flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Domanda
            </h4>
            <p className="text-sm text-gray-600 mt-1">Domanda aperta per discussioni. Risposte brevi degli studenti.</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
            <h4 className="font-bold text-orange-700 flex items-center gap-2">
              <Edit className="w-5 h-5" />
              Materiale
            </h4>
            <p className="text-sm text-gray-600 mt-1">Condivisione risorse senza consegna. Solo per consultazione.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
          <Settings className="w-8 h-8" />
          Configurazione Avanzata
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-green-700 mb-2">Opzioni Temporali:</h4>
            <ul className="text-sm space-y-1">
              <li>• <strong>Scadenza:</strong> Data e ora precise</li>
              <li>• <strong>Programmazione:</strong> Pubblicazione automatica futura</li>
              <li>• <strong>Consegne in ritardo:</strong> Accetta o blocca</li>
              <li>• <strong>Timer quiz:</strong> Tempo massimo per completamento</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-green-700 mb-2">Distribuzione Intelligente:</h4>
            <ul className="text-sm space-y-1">
              <li>• <strong>Copia personalizzata:</strong> Documento per ogni studente</li>
              <li>• <strong>Template condiviso:</strong> Tutti usano stesso file</li>
              <li>• <strong>Gruppi:</strong> Assegnazione a sottogruppi classe</li>
              <li>• <strong>Differenziazione:</strong> Compiti diversi per livello</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <BarChart3 className="w-16 h-16 mx-auto text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold text-purple-800">Correzione Smart</h3>
        </div>
        <ul className="space-y-3 text-purple-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Rubric personalizzabili</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Commenti audio/video</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Feedback rapido preset</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Voti con scale personalizzate</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Export registro elettronico</li>
        </ul>
      </div>
      <div className="bg-orange-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Copy className="w-16 h-16 mx-auto text-orange-600 mb-4" />
          <h3 className="text-2xl font-bold text-orange-800">Originalità</h3>
        </div>
        <ul className="space-y-3 text-orange-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Report originalità automatico</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Confronto con web e database</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Highlight similarità sospette</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Educazione al plagio</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Privacy-compliant scanning</li>
        </ul>
      </div>
      <div className="bg-red-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <TrendingUp className="w-16 h-16 mx-auto text-red-600 mb-4" />
          <h3 className="text-2xl font-bold text-red-800">Analytics</h3>
        </div>
        <ul className="space-y-3 text-red-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Statistiche consegne</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Tempo medio completamento</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Performance comparison</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Identificazione difficoltà</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Trends apprendimento</li>
        </ul>
      </div>
    </div>
    <div className="bg-yellow-100 p-8 rounded-2xl border-l-6 border-yellow-500">
      <h4 className="text-2xl font-bold text-yellow-800 mb-4">📊 Workflow Correzione Efficiente</h4>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg text-center">
          <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">1</div>
          <h5 className="font-bold text-blue-800">Preparazione</h5>
          <p className="text-xs text-gray-600">Rubric definita, criteri chiari</p>
        </div>
        <div className="bg-white p-4 rounded-lg text-center">
          <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">2</div>
          <h5 className="font-bold text-green-800">Correzione</h5>
          <p className="text-xs text-gray-600">Feedback costruttivo mirato</p>
        </div>
        <div className="bg-white p-4 rounded-lg text-center">
          <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">3</div>
          <h5 className="font-bold text-orange-800">Restituzione</h5>
          <p className="text-xs text-gray-600">Voti + commenti agli studenti</p>
        </div>
        <div className="bg-white p-4 rounded-lg text-center">
          <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">4</div>
          <h5 className="font-bold text-purple-800">Follow-up</h5>
          <p className="text-xs text-gray-600">Analisi dati, recupero</p>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-4">🎯 Case Study: Quiz Interattivo Matematica</h4>
      <p className="text-xl mb-4">Quiz "Equazioni di Secondo Grado" - Classe 3A (22 studenti):</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Setup:</strong> 15 domande miste (scelta multipla + aperte), 45 min tempo
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Risultati:</strong> Media 7.2/10, 3 studenti bisognosi recupero
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Follow-up:</strong> Lezione recupero automaticamente programmata
        </div>
      </div>
    </div>
  </div>
);

const Slide39_Classroom_Integration = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Classroom: Ecosistema Integrato</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
          <Link className="w-8 h-8" />
          Connessioni Native
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-red-700 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Gmail Sync
            </h4>
            <p className="text-sm text-gray-600 mt-1">Notifiche automatiche per nuovi compiti, voti, annunci classe</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-700 flex items-center gap-2">
              <Folder className="w-5 h-5" />
              Drive Integration
            </h4>
            <p className="text-sm text-gray-600 mt-1">Cartella automatica per classe, backup compiti, condivisione materiali</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-700 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Calendar Sync
            </h4>
            <p className="text-sm text-gray-600 mt-1">Scadenze automatiche nei calendari studenti, reminder intelligenti</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-700 flex items-center gap-2">
              <Video className="w-5 h-5" />
              Meet Integration
            </h4>
            <p className="text-sm text-gray-600 mt-1">Link lezioni automatici, registrazioni salvate, partecipazione tracciata</p>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-3">
          <Zap className="w-8 h-8" />
          Automazioni Workflow
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-blue-700 mb-2">Flusso Compiti Automatico:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">1</div>
                <span>Docente crea compito in Classroom</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">2</div>
                <span>File template copiato automaticamente in Drive</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs">3</div>
                <span>Scadenza aggiunta ai Calendar di tutti</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">4</div>
                <span>Email notifica inviata automaticamente</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">5</div>
                <span>Guardian notifications per genitori</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-yellow-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <FileQuestion className="w-16 h-16 mx-auto text-yellow-600 mb-4" />
          <h3 className="text-2xl font-bold text-yellow-800">Forms Integration</h3>
        </div>
        <ul className="space-y-3 text-yellow-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Quiz autocorrettivi integrati</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Risposte automatiche in Sheets</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Grafici performance real-time</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Feedback immediato studenti</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Sondaggi classe istantanei</li>
        </ul>
      </div>
      <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Globe className="w-16 h-16 mx-auto text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold text-purple-800">Sites Portfolio</h3>
        </div>
        <ul className="space-y-3 text-purple-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Sito classe automatico</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Portfolio studenti integrato</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Showcase progetti migliori</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Accesso genitori controllato</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Archivio lavori anno</li>
        </ul>
      </div>
      <div className="bg-red-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Users className="w-16 h-16 mx-auto text-red-600 mb-4" />
          <h3 className="text-2xl font-bold text-red-800">Guardian System</h3>
        </div>
        <ul className="space-y-3 text-red-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Email automatiche a genitori</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Riassunti settimanali attività</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Notifiche compiti mancanti</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Accesso limitato e sicuro</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Privacy students rispettata</li>
        </ul>
      </div>
    </div>
    <div className="bg-yellow-100 p-8 rounded-2xl border-l-6 border-yellow-500">
      <h4 className="text-2xl font-bold text-yellow-800 mb-4">📈 Analytics e Insights Automatici</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg">
          <h5 className="font-bold text-gray-800 mb-2">Dashboard Docente:</h5>
          <ul className="text-sm space-y-1">
            <li>• % completamento compiti per studente</li>
            <li>• Tempo medio consegna per assignment</li>
            <li>• Identificazione automatica studenti a rischio</li>
            <li>• Comparazione performance tra classi</li>
            <li>• Trending topics più difficili</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h5 className="font-bold text-gray-800 mb-2">Report Automatici:</h5>
          <ul className="text-sm space-y-1">
            <li>• Weekly digest per dirigenza</li>
            <li>• Riassunto genitori via Guardian</li>
            <li>• Export dati per registro elettronico</li>
            <li>• Statistiche engagement per dipartimento</li>
            <li>• Forecast bisogni formazione docenti</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-green-500 to-purple-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-4">🚀 Visione Futura: AI-Enhanced Classroom</h4>
      <p className="text-xl mb-4">Google Classroom evolve verso un sistema intelligente che supporta apprendimento personalizzato:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h5 className="font-bold mb-2">Funzionalità AI in Arrivo:</h5>
          <ul className="text-sm space-y-1">
            <li>• Suggerimenti automatici per difficoltà studenti</li>
            <li>• Creazione compiti personalizzati per livello</li>
            <li>• Analisi predittiva performance</li>
            <li>• Feedback intelligente sui contenuti</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-2">Benefici per l'Educazione:</h5>
          <ul className="text-sm space-y-1">
            <li>• Apprendimento adattivo automatico</li>
            <li>• Riduzione carico lavoro docenti</li>
            <li>• Identificazione precoce gap</li>
            <li>• Personalizzazione su scala</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// ===== STRUMENTI COMPLEMENTARI: SITES, KEEP, TASKS (40-42) =====

const Slide40_Sites_Keep_Tasks_Intro = () => (
  <div className="space-y-10">
    <div className="text-center mb-10">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">Strumenti Complementari</h1>
      <p className="text-3xl text-gray-600">Sites, Keep, Tasks: produttività completa</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Globe className="w-16 h-16 mx-auto text-blue-600 mb-4" />
          <h3 className="text-3xl font-bold text-blue-800">Google Sites</h3>
        </div>
        <ul className="space-y-4 text-blue-700">
          <li className="flex items-center gap-3"><Zap className="w-6 h-6" /><span><strong>Siti web senza codice</strong></span></li>
          <li className="flex items-center gap-3"><Share2 className="w-6 h-6" /><span><strong>Portfolio digitali</strong></span></li>
          <li className="flex items-center gap-3"><Users className="w-6 h-6" /><span><strong>Progetti collaborativi</strong></span></li>
          <li className="flex items-center gap-3"><Smartphone className="w-6 h-6" /><span><strong>Responsive automatico</strong></span></li>
          <li className="flex items-center gap-3"><Shield className="w-6 h-6" /><span><strong>Sicurezza integrata</strong></span></li>
        </ul>
      </div>
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <StickyNote className="w-16 h-16 mx-auto text-green-600 mb-4" />
          <h3 className="text-3xl font-bold text-green-800">Google Keep</h3>
        </div>
        <ul className="space-y-4 text-green-700">
          <li className="flex items-center gap-3"><Edit className="w-6 h-6" /><span><strong>Note rapide ovunque</strong></span></li>
          <li className="flex items-center gap-3"><Bell className="w-6 h-6" /><span><strong>Promemoria intelligenti</strong></span></li>
          <li className="flex items-center gap-3"><Image className="w-6 h-6" /><span><strong>Note vocali e immagini</strong></span></li>
          <li className="flex items-center gap-3"><Share2 className="w-6 h-6" /><span><strong>Condivisione collaborativa</strong></span></li>
          <li className="flex items-center gap-3"><Search className="w-6 h-6" /><span><strong>Ricerca e organizzazione</strong></span></li>
        </ul>
      </div>
      <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <CheckCircle className="w-16 h-16 mx-auto text-purple-600 mb-4" />
          <h3 className="text-3xl font-bold text-purple-800">Google Tasks</h3>
        </div>
        <ul className="space-y-4 text-purple-700">
          <li className="flex items-center gap-3"><Target className="w-6 h-6" /><span><strong>Gestione attività</strong></span></li>
          <li className="flex items-center gap-3"><Calendar className="w-6 h-6" /><span><strong>Integrazione Calendar</strong></span></li>
          <li className="flex items-center gap-3"><RotateCcw className="w-6 h-6" /><span><strong>Task ricorrenti</strong></span></li>
          <li className="flex items-center gap-3"><Users className="w-6 h-6" /><span><strong>Deleghe e assegnazioni</strong></span></li>
          <li className="flex items-center gap-3"><BarChart3 className="w-6 h-6" /><span><strong>Tracking progresso</strong></span></li>
        </ul>
      </div>
    </div>
    <div className="bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-3">🔗 L'Ecosistema che Completa la Didattica</h4>
      <p className="text-xl">Sites, Keep e Tasks non sono accessori: sono i collanti che trasformano Google Workspace da insieme di strumenti in sistema integrato per l'eccellenza educativa.</p>
    </div>
  </div>
);

const Slide41_Sites_Portfolio = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Google Sites: Portfolio e Comunicazione</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-3">
          <Globe className="w-8 h-8" />
          Creazione Siti Didattici
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-700">Setup Rapido:</h4>
            <ol className="text-sm mt-2 space-y-1">
              <li>1. sites.google.com → "Crea nuovo sito"</li>
              <li>2. Scegli template educativo o parti da zero</li>
              <li>3. Personalizza header, colori, layout</li>
              <li>4. Aggiungi pagine: Home, Programma, Risorse, Contatti</li>
              <li>5. Pubblica e condividi URL con studenti</li>
            </ol>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-700">Applicazioni Educative:</h4>
            <ul className="text-sm mt-2 space-y-1">
              <li>• <strong>Portfolio classe:</strong> Showcase lavori migliori</li>
              <li>• <strong>Sito materia:</strong> Risorse, calendario, programma</li>
              <li>• <strong>Progetti interdisciplinari:</strong> Collaborazione tra docenti</li>
              <li>• <strong>Diario digitale:</strong> Progresso attività anno</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
          <Layers className="w-8 h-8" />
          Integrazione Workspace
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-green-700 mb-2">Embed Automatico:</h4>
            <ul className="text-sm space-y-1">
              <li>• <strong>Drive:</strong> Documenti, presentazioni, video</li>
              <li>• <strong>Calendar:</strong> Calendario classe embedded</li>
              <li>• <strong>Forms:</strong> Sondaggi e quiz direttamente nel sito</li>
              <li>• <strong>Maps:</strong> Localizzazione gite e uscite</li>
              <li>• <strong>YouTube:</strong> Video lezioni in playlist</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-green-700 mb-2">Controllo Accessi:</h4>
            <ul className="text-sm space-y-1">
              <li>• Pubblico: Visibile a tutti online</li>
              <li>• Dominio scuola: Solo utenti istituzionali</li>
              <li>• Specifica utenti: Lista controllata accessi</li>
              <li>• Editor: Collaborative editing per team docenti</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <GraduationCap className="w-16 h-16 mx-auto text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold text-purple-800">Portfolio Studenti</h3>
        </div>
        <ul className="space-y-3 text-purple-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Raccolta lavori multidisciplinari</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Documentazione percorso apprendimento</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Competenze digitali sviluppate</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Presentazione famiglie/università</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />CV digitale per orientamento</li>
        </ul>
      </div>
      <div className="bg-orange-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Users className="w-16 h-16 mx-auto text-orange-600 mb-4" />
          <h3 className="text-2xl font-bold text-orange-800">Comunicazione Scuola</h3>
        </div>
        <ul className="space-y-3 text-orange-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Sito istituzionale moderno</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />News e comunicazioni ufficiali</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Modulistica online per famiglie</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Calendario eventi scolastici</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Showcase eccellenze studentesche</li>
        </ul>
      </div>
      <div className="bg-red-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Settings className="w-16 h-16 mx-auto text-red-600 mb-4" />
          <h3 className="text-2xl font-bold text-red-800">Template Educativi</h3>
        </div>
        <ul className="space-y-3 text-red-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Portfolio studente pronto</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Sito classe personalizzabile</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Dipartimento disciplinare</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Progetto multidisciplinare</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Documentazione metodologica</li>
        </ul>
      </div>
    </div>
    <div className="bg-yellow-100 p-8 rounded-2xl border-l-6 border-yellow-500">
      <h4 className="text-2xl font-bold text-yellow-800 mb-4">🌐 Case Study: Progetto "Viaggio nella Storia"</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg">
          <h5 className="font-bold text-gray-800 mb-2">Obiettivo:</h5>
          <p className="text-sm text-gray-700">Creare un sito collaborativo dove ogni studente della 4^ Liceo documenta un periodo storico diverso, con multimedia e fonti.</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h5 className="font-bold text-gray-800 mb-2">Risultato:</h5>
          <p className="text-sm text-gray-700">Sito con 25 pagine tematiche, 200+ risorse multimediali, visitato da 500+ genitori e studenti di altre classi.</p>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-4">💡 Sites Pro Tips</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h5 className="font-bold mb-2">Design Efficace:</h5>
          <ul className="text-sm space-y-1">
            <li>• Navigazione chiara e intuitiva</li>
            <li>• Mobile-first per accessibilità</li>
            <li>• Immagini ottimizzate per velocità</li>
            <li>• Contenuti scannable con bullet points</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-2">Manutenzione:</h5>
          <ul className="text-sm space-y-1">
            <li>• Aggiornamenti regolari contenuti</li>
            <li>• Monitoraggio analytics traffico</li>
            <li>• Backup periodico contenuti</li>
            <li>• Test compatibilità dispositivi</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const Slide42_Keep_Tasks_Productivity = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Keep & Tasks: Produttività Docente</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
          <StickyNote className="w-8 h-8" />
          Google Keep: Note Intelligenti
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-700">Capture Rapido:</h4>
            <ul className="text-sm mt-2 space-y-1">
              <li>• <strong>Testo:</strong> Idee lezione, citazioni, appunti</li>
              <li>• <strong>Vocale:</strong> Registrazioni trascritte automaticamente</li>
              <li>• <strong>Foto:</strong> Lavagne, libri, documenti cartacei</li>
              <li>• <strong>Disegni:</strong> Schemi, mappe concettuali rapide</li>
              <li>• <strong>Liste:</strong> Materiali, compiti, checklist</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-700">Organizzazione:</h4>
            <ul className="text-sm mt-2 space-y-1">
              <li>• <strong>Etichette:</strong> #matematica #classe2A #verifiche</li>
              <li>• <strong>Colori:</strong> Sistema cromatico per priorità</li>
              <li>• <strong>Archiviazione:</strong> Nascondi note completate</li>
              <li>• <strong>Collaborazione:</strong> Condividi con colleghi</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-purple-800 mb-6 flex items-center gap-3">
          <CheckCircle className="w-8 h-8" />
          Google Tasks: Gestione Attività
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-700">Organizzazione Tasks:</h4>
            <ul className="text-sm mt-2 space-y-1">
              <li>• <strong>Lista "Lezioni":</strong> Preparazione materiali, correzioni</li>
              <li>• <strong>Lista "Amministrazione":</strong> Scadenze burocratiche</li>
              <li>• <strong>Lista "Formazione":</strong> Corsi, aggiornamenti</li>
              <li>• <strong>Lista "Progetti":</strong> Attività speciali, gite</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
            <h4 className="font-bold text-orange-700">Automazioni:</h4>
            <ul className="text-sm mt-2 space-y-1">
              <li>• <strong>Da Gmail:</strong> Email → Task con un click</li>
              <li>• <strong>Ricorrenti:</strong> Compiti settimanali automatici</li>
              <li>• <strong>Calendar sync:</strong> Deadline nei calendari</li>
              <li>• <strong>Notifiche:</strong> Promemoria personalizzabili</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Bell className="w-16 h-16 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold text-blue-800">Promemoria Educativi</h3>
        </div>
        <ul className="space-y-3 text-blue-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Preparazione verifiche in anticipo</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Scadenze consegna voti</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Riunioni genitori individuali</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Aggiornamento materiali didattici</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Follow-up studenti difficoltà</li>
        </ul>
      </div>
      <div className="bg-yellow-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Share2 className="w-16 h-16 mx-auto text-yellow-600 mb-4" />
          <h3 className="text-2xl font-bold text-yellow-800">Collaborazione Team</h3>
        </div>
        <ul className="space-y-3 text-yellow-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Note condivise dipartimento</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Task assegnati a colleghi</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Brainstorming progetti comuni</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Liste materiali eventi scuola</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Coordinamento supplenze</li>
        </ul>
      </div>
      <div className="bg-red-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Target className="w-16 h-16 mx-auto text-red-600 mb-4" />
          <h3 className="text-2xl font-bold text-red-800">Workflow Integrato</h3>
        </div>
        <ul className="space-y-3 text-red-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Keep → Docs per lezioni</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Tasks → Calendar per scadenze</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Note → Slides per presentazioni</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Gmail → Tasks per follow-up</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Drive → Keep per annotazioni</li>
        </ul>
      </div>
    </div>
    <div className="bg-yellow-100 p-8 rounded-2xl border-l-6 border-yellow-500">
      <h4 className="text-2xl font-bold text-yellow-800 mb-4">⚡ Workflow: Dalla Idea alla Lezione</h4>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-lg text-center">
          <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
            <StickyNote className="w-6 h-6" />
          </div>
          <h5 className="font-bold text-green-800">Keep</h5>
          <p className="text-xs text-gray-600">Idea iniziale catturata</p>
        </div>
        <div className="bg-white p-4 rounded-lg text-center">
          <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
            <CheckCircle className="w-6 h-6" />
          </div>
          <h5 className="font-bold text-purple-800">Tasks</h5>
          <p className="text-xs text-gray-600">Attività pianificate</p>
        </div>
        <div className="bg-white p-4 rounded-lg text-center">
          <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
            <FileText className="w-6 h-6" />
          </div>
          <h5 className="font-bold text-blue-800">Docs</h5>
          <p className="text-xs text-gray-600">Contenuto sviluppato</p>
        </div>
        <div className="bg-white p-4 rounded-lg text-center">
          <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
            <Presentation className="w-6 h-6" />
          </div>
          <h5 className="font-bold text-orange-800">Slides</h5>
          <p className="text-xs text-gray-600">Presentazione creata</p>
        </div>
        <div className="bg-white p-4 rounded-lg text-center">
          <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h5 className="font-bold text-red-800">Classroom</h5>
          <p className="text-xs text-gray-600">Lezione erogata</p>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-green-500 to-purple-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-4">🎯 Sistema GTD per Docenti (Getting Things Done)</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h5 className="font-bold mb-2">Principi Base:</h5>
          <ul className="text-sm space-y-1">
            <li>• <strong>Cattura tutto:</strong> Keep per ogni idea</li>
            <li>• <strong>Organizza subito:</strong> Etichette e colori</li>
            <li>• <strong>Pianifica azioni:</strong> Tasks con deadline</li>
            <li>• <strong>Esegui con focus:</strong> Una cosa alla volta</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-2">Risultati:</h5>
          <ul className="text-sm space-y-1">
            <li>• Riduzione stress e sovraccarico mentale</li>
            <li>• Nessuna scadenza dimenticata</li>
            <li>• Più tempo per didattica di qualità</li>
            <li>• Work-life balance migliorato</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// ===== BEST PRACTICES E SICUREZZA (43-45) =====

const Slide43_Security_Privacy = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Sicurezza e Privacy: Best Practices</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-red-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-red-800 mb-6 flex items-center gap-3">
          <Shield className="w-8 h-8" />
          Sicurezza Account
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-red-700">Autenticazione Sicura:</h4>
            <ul className="text-sm mt-2 space-y-1">
              <li>• <strong>2FA obbligatorio:</strong> App authenticator, non SMS</li>
              <li>• <strong>Password forti:</strong> 12+ caratteri, unica per Education</li>
              <li>• <strong>Passkey:</strong> Attiva per accesso senza password</li>
              <li>• <strong>Recovery:</strong> Backup codes sicuri offline</li>
              <li>• <strong>Sessioni:</strong> Logout automatico dispositivi</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
            <h4 className="font-bold text-orange-700">Monitoraggio Attività:</h4>
            <ul className="text-sm mt-2 space-y-1">
              <li>• Check regolare dispositivi autorizzati</li>
              <li>• Review accessi sospetti in Security</li>
              <li>• Notifiche login automatiche attive</li>
              <li>• Audit log periodici Admin Console</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-3">
          <Lock className="w-8 h-8" />
          Privacy Studenti
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-700">Protezione Dati:</h4>
            <ul className="text-sm mt-2 space-y-1">
              <li>• <strong>GDPR Compliance:</strong> Consenso esplicito per dati</li>
              <li>• <strong>Minimizzazione:</strong> Raccolta solo dati necessari</li>
              <li>• <strong>Anonimizzazione:</strong> Rimuovi identificatori personali</li>
              <li>• <strong>Retention:</strong> Cancellazione automatica a fine anno</li>
              <li>• <strong>Trasparenza:</strong> Informativa completa famiglie</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-700">Condivisioni Controllate:</h4>
            <ul className="text-sm mt-2 space-y-1">
              <li>• Solo domini education autorizzati</li>
              <li>• Permessi granulari per ogni risorsa</li>
              <li>• Scadenza automatica condivisioni temporanee</li>
              <li>• Audit trail completo accessi</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Users className="w-16 h-16 mx-auto text-green-600 mb-4" />
          <h3 className="text-2xl font-bold text-green-800">Gestione Utenti</h3>
        </div>
        <ul className="space-y-3 text-green-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Onboarding automatico studenti</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Gruppi organizzazionali chiari</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Permessi basati su ruolo</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Provisioning ex-studenti</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Account admin separati</li>
        </ul>
      </div>
      <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <AlertCircle className="w-16 h-16 mx-auto text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold text-purple-800">Gestione Incidenti</h3>
        </div>
        <ul className="space-y-3 text-purple-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Piano risposta data breach</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Isolamento account compromessi</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Comunicazione tempestiva stakeholder</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Documentazione incidenti</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Formazione continua staff</li>
        </ul>
      </div>
      <div className="bg-orange-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Database className="w-16 h-16 mx-auto text-orange-600 mb-4" />
          <h3 className="text-2xl font-bold text-orange-800">Backup e Recovery</h3>
        </div>
        <ul className="space-y-3 text-orange-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Export periodico dati critici</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Vault per conservazione legale</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Test recovery procedures</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Ridondanza geografica</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />RTO/RPO documentati</li>
        </ul>
      </div>
    </div>
    <div className="bg-yellow-100 p-8 rounded-2xl border-l-6 border-yellow-500">
      <h4 className="text-2xl font-bold text-yellow-800 mb-4">🛡️ Checklist Security per Docenti</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg">
          <h5 className="font-bold text-green-700 mb-2">✅ Setup Iniziale:</h5>
          <ul className="text-sm space-y-1">
            <li>□ 2FA attivato con app authenticator</li>
            <li>□ Password unica e forte per account scuola</li>
            <li>□ Recovery codes salvati offline</li>
            <li>□ Dispositivi personali registrati</li>
            <li>□ Impostazioni privacy verificate</li>
            <li>□ Notifiche sicurezza abilitate</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h5 className="font-bold text-orange-700 mb-2">🔄 Manutenzione Mensile:</h5>
          <ul className="text-sm space-y-1">
            <li>□ Review dispositivi autorizzati</li>
            <li>□ Check condivisioni attive</li>
            <li>□ Pulizia file sensibili</li>
            <li>□ Aggiornamento password se necessario</li>
            <li>□ Verifica backup personali</li>
            <li>□ Formazione sicurezza team</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-red-500 to-purple-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-4">⚠️ Red Flags: Quando Allertare Admin</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Account Compromise:</strong> Login sospetti, attività non riconosciute, email non inviate
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Data Exposure:</strong> Condivisioni pubbliche accidentali, link non protetti
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Phishing:</strong> Email sospette da "Google", richieste password strane
        </div>
      </div>
    </div>
  </div>
);

const Slide44_Integration_Workflow = () => (
  <div className="space-y-10">
    <h2 className="text-5xl font-bold text-gray-800 text-center">Integrazione Completa: Workflow Educativi</h2>
    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-8 rounded-2xl mb-8">
      <h3 className="text-3xl font-bold mb-4">🔄 L'Ecosistema che Funziona</h3>
      <p className="text-xl">Google Workspace diventa potente quando tutti gli strumenti lavorano insieme in workflow automatizzati che semplificano la didattica.</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-3">
          <Layers className="w-8 h-8" />
          Workflow: Nuova Lezione
        </h3>
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
              <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <strong>Keep:</strong> Idea lezione catturata con foto lavagna
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <strong>Tasks:</strong> "Preparare lezione genetica" con deadline
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <strong>Drive:</strong> Creazione cartella "Genetica_2024"
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <strong>Docs:</strong> Stesura contenuti con smart chips
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
              <div>
                <strong>Slides:</strong> Presentazione interattiva con Q&A
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
              <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">6</div>
              <div>
                <strong>Calendar:</strong> Evento lezione con Meet link
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
              <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">7</div>
              <div>
                <strong>Classroom:</strong> Materiali condivisi, compito assegnato
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
          <BarChart3 className="w-8 h-8" />
          Workflow: Valutazione Completa
        </h3>
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <strong>Forms:</strong> Quiz creato con correzione automatica
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <strong>Sheets:</strong> Risposte raccolte con formule analisi
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <strong>Classroom:</strong> Voti inseriti con feedback personali
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <strong>Gmail:</strong> Comunicazione automatica risultati
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
              <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
              <div>
                <strong>Meet:</strong> Sessioni recupero per difficoltà
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
              <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">6</div>
              <div>
                <strong>Drive:</strong> Portfolio studente aggiornato
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
              <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">7</div>
              <div>
                <strong>Sites:</strong> Risultati pubblicati in showcase classe
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Zap className="w-16 h-16 mx-auto text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold text-purple-800">Automazioni Smart</h3>
        </div>
        <ul className="space-y-3 text-purple-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Script personalizzati ricorrenti</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Trigger temporali automatici</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Notifiche intelligenti genitori</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Backup programmati contenuti</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Report analytics settimanali</li>
        </ul>
      </div>
      <div className="bg-orange-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Users className="w-16 h-16 mx-auto text-orange-600 mb-4" />
          <h3 className="text-2xl font-bold text-orange-800">Collaborazione Docenti</h3>
        </div>
        <ul className="space-y-3 text-orange-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Condivisione materiali dipartimento</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Co-teaching classi virtuali</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Peer review lezioni digitali</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Progetti interdisciplinari</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Formazione reciproca continua</li>
        </ul>
      </div>
      <div className="bg-red-50 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <TrendingUp className="w-16 h-16 mx-auto text-red-600 mb-4" />
          <h3 className="text-2xl font-bold text-red-800">Misurazione Impatto</h3>
        </div>
        <ul className="space-y-3 text-red-700 text-sm">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />KPI engagement studenti</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Time-to-feedback ridotto</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Collaboration index migliorato</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Efficienza amministrativa +40%</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Soddisfazione docenti monitorata</li>
        </ul>
      </div>
    </div>
    <div className="bg-yellow-100 p-8 rounded-2xl border-l-6 border-yellow-500">
      <h4 className="text-2xl font-bold text-yellow-800 mb-4">🏆 Success Metrics: Come Misurare l'Adozione</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg">
          <h5 className="font-bold text-gray-800 mb-2">Metriche Tecniche:</h5>
          <ul className="text-sm space-y-1">
            <li>• Active users daily/monthly</li>
            <li>• Storage utilization per docente</li>
            <li>• Collaboration documents created</li>
            <li>• Mobile access percentage</li>
            <li>• Integration features adopted</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h5 className="font-bold text-gray-800 mb-2">Metriche Didattiche:</h5>
          <ul className="text-sm space-y-1">
            <li>• Student engagement in digital activities</li>
            <li>• Time saved on administrative tasks</li>
            <li>• Feedback quality and frequency</li>
            <li>• Parent satisfaction with communication</li>
            <li>• Learning outcomes improvement</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-purple-500 to-orange-500 text-white p-8 rounded-2xl">
      <h4 className="text-2xl font-bold mb-4">🚀 Roadmap: Evoluzione Continua</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Fase 1 (3 mesi):</strong> Adozione strumenti base, formazione intensiva, supporto one-to-one
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Fase 2 (6 mesi):</strong> Workflow avanzati, automazioni personalizzate, peer mentoring
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <strong>Fase 3 (12 mesi):</strong> Innovation lab, AI integration, community of practice
        </div>
      </div>
    </div>
  </div>
);

const Slide45_Conclusion = () => (
  <div className="space-y-10">
    <div className="text-center mb-10">
      <div className="flex items-center justify-center gap-4 mb-6">
        <GraduationCap className="w-16 h-16 text-green-600" />
        <Trophy className="w-16 h-16 text-gold-500" />
        <Rocket className="w-16 h-16 text-blue-600" />
      </div>
      <h1 className="text-6xl font-bold text-gray-800 mb-4">Conclusioni e Prossimi Passi</h1>
      <p className="text-2xl text-gray-600">Il viaggio verso l'eccellenza didattica digitale</p>
    </div>

    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-2xl mb-10">
      <h2 className="text-4xl font-bold mb-6 text-center">🎯 Obiettivi Raggiunti</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
          <CheckCircle className="w-12 h-12 mx-auto mb-3" />
          <h3 className="font-bold text-lg mb-2">Competenze Base</h3>
          <p className="text-sm">Drive, Gmail, Calendar padroneggiati</p>
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
          <Users className="w-12 h-12 mx-auto mb-3" />
          <h3 className="font-bold text-lg mb-2">Collaborazione</h3>
          <p className="text-sm">Workflow di gruppo efficaci</p>
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
          <GraduationCap className="w-12 h-12 mx-auto mb-3" />
          <h3 className="font-bold text-lg mb-2">Didattica Digitale</h3>
          <p className="text-sm">Classroom e strumenti integrati</p>
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
          <Shield className="w-12 h-12 mx-auto mb-3" />
          <h3 className="font-bold text-lg mb-2">Sicurezza</h3>
          <p className="text-sm">Privacy e best practices</p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-3">
          <Target className="w-8 h-8" />
          Prossimi Passi Immediati
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-700 mb-2">📅 Settimana 1-2:</h4>
            <ul className="text-sm space-y-1">
              <li>• Organizza Drive con nuova struttura cartelle</li>
              <li>• Configura filtri Gmail e firma professionale</li>
              <li>• Sincronizza Calendar con tutti i dispositivi</li>
              <li>• Attiva 2FA e verifica impostazioni privacy</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-700 mb-2">📚 Mese 1:</h4>
            <ul className="text-sm space-y-1">
              <li>• Crea prima classe in Classroom</li>
              <li>• Imposta workflow con Docs collaborativi</li>
              <li>• Sperimenta Sheets per registro digitale</li>
              <li>• Usa Meet per riunioni dipartimento</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-700 mb-2">🚀 Trimestre 1:</h4>
            <ul className="text-sm space-y-1">
              <li>• Sviluppa progetti interdisciplinari</li>
              <li>• Crea siti Portfolio studenti</li>
              <li>• Implementa automazioni advanced</li>
              <li>• Forma colleghi su best practices</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
          <BookOpen className="w-8 h-8" />
          Risorse per Continuare
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-green-700 mb-2">📖 Documentazione Ufficiale:</h4>
            <ul className="text-sm space-y-1">
              <li>• <code>edu.google.com/workspace</code> - Centro risorse Education</li>
              <li>• <code>support.google.com</code> - Guide step-by-step</li>
              <li>• <code>teachercenter.withgoogle.com</code> - Corsi gratuiti</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-green-700 mb-2">👥 Community e Forum:</h4>
            <ul className="text-sm space-y-1">
              <li>• Google for Education Community</li>
              <li>• Teacher Tech Groups su social</li>
              <li>• Webinar mensili Google</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-green-700 mb-2">🎓 Certificazioni:</h4>
            <ul className="text-sm space-y-1">
              <li>• Google Certified Educator Level 1 & 2</li>
              <li>• Google Certified Trainer</li>
              <li>• Specializzazioni per materie</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-orange-50 p-8 rounded-2xl shadow-lg">
      <h3 className="text-3xl font-bold text-orange-800 mb-6 flex items-center gap-3">
        <TrendingUp className="w-8 h-8" />
        Metriche di Successo
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-lg text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
          <p className="text-sm text-gray-600">Riduzione tempo amministrativo</p>
        </div>
        <div className="bg-white p-4 rounded-lg text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
          <p className="text-sm text-gray-600">Aumento engagement studenti</p>
        </div>
        <div className="bg-white p-4 rounded-lg text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
          <p className="text-sm text-gray-600">Miglioramento collaborazione</p>
        </div>
        <div className="bg-white p-4 rounded-lg text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
          <p className="text-sm text-gray-600">Soddisfazione docenti</p>
        </div>
      </div>
    </div>

    <div className="bg-yellow-100 p-8 rounded-2xl border-l-6 border-yellow-500">
      <h4 className="text-2xl font-bold text-yellow-800 mb-4">💡 Ricorda: Il Cambiamento è un Processo</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg">
          <h5 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-600" />
            Inizia Piccolo
          </h5>
          <p className="text-sm text-gray-700">Non provare tutto subito. Padroneggia uno strumento alla volta e costruisci la tua competenza gradualmente.</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h5 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            Collabora
          </h5>
          <p className="text-sm text-gray-700">Condividi esperienze con i colleghi. La trasformazione digitale funziona meglio quando è un percorso condiviso.</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h5 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
            <Repeat className="w-5 h-5 text-green-600" />
            Sperimenta
          </h5>
          <p className="text-sm text-gray-700">Non aver paura di provare nuove funzionalità. Google Workspace è sicuro: i tuoi dati sono sempre protetti.</p>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-white p-12 rounded-2xl text-center">
      <h2 className="text-4xl font-bold mb-6">🌟 Benvenuti nel Futuro dell'Educazione</h2>
      <p className="text-xl mb-8">Avete ora tutti gli strumenti per trasformare la vostra didattica e quella della vostra scuola. Google Workspace for Education non è solo tecnologia: è un ponte verso un apprendimento più collaborativo, inclusivo ed efficace.</p>
      <div className="flex items-center justify-center gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
            <Heart className="w-8 h-8" />
          </div>
          <p className="font-semibold">Passione per l'Insegnamento</p>
        </div>
        <div className="text-6xl">+</div>
        <div className="text-center">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
            <Laptop className="w-8 h-8" />
          </div>
          <p className="font-semibold">Strumenti Digitali</p>
        </div>
        <div className="text-6xl">=</div>
        <div className="text-center">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
            <Rocket className="w-8 h-8" />
          </div>
          <p className="font-semibold">Innovazione Educativa</p>
        </div>
      </div>
    </div>

    <div className="text-center pt-8">
      <p className="text-2xl text-gray-600 mb-4">Grazie per aver partecipato al corso!</p>
      <p className="text-lg text-gray-500">Continuate a esplorare, sperimentare e condividere le vostre esperienze.</p>
      <div className="mt-6 flex justify-center items-center gap-2">
        <Mail className="w-5 h-5 text-blue-500" />
        <span className="text-sm text-gray-500">Per domande: support@scuola.edu.it</span>
      </div>
    </div>
  </div>
);

// ===== LISTA COMPLETA SLIDE =====
// (sostituisci TUTTO da qui fino alla fine del file con questo blocco)

const GoogleWorkspaceCourse = () => {
  // keep slides local to avoid name collisions if file contains other declarations
  const slides = [
    // Introduzione (1-4)
    { component: Slide01_Title, title: "Google Workspace per l'Educazione" },
    { component: Slide02_Agenda, title: "Agenda del Corso" },
    { component: Slide03_Overview, title: "Cos'è Google Workspace?" },
    { component: Slide04_ToolsOverview, title: "Ecosistema Google Workspace" },

    // Google Drive (5-8)
    { component: Slide05_Drive_Intro, title: "Google Drive - Introduzione" },
    { component: Slide06_Drive_Organization, title: "Drive: Organizzazione Avanzata" },
    { component: Slide07_Drive_Sharing, title: "Drive: Condivisione e Permessi" },
    { component: Slide08_Drive_Advanced, title: "Drive: Ricerca e Workspaces" },

    // Gmail (9-12)
    { component: Slide09_Gmail_Intro, title: "Gmail - Introduzione" },
    { component: Slide10_Gmail_Organization, title: "Gmail: Organizzazione Avanzata" },
    { component: Slide11_Gmail_Advanced, title: "Gmail: Funzionalità Avanzate" },
    { component: Slide12_Gmail_Security, title: "Gmail: Sicurezza e Privacy" },

    // Calendar (13-16)
    { component: Slide13_Calendar_Intro, title: "Google Calendar - Introduzione" },
    { component: Slide14_Calendar_Advanced, title: "Calendar: Funzionalità Avanzate" },
    { component: Slide15_Calendar_Classroom, title: "Calendar + Classroom: Integrazione" },
    { component: Slide16_Calendar_Mobile, title: "Calendar: Mobilità e Accesso" },

    // Chat (17-20)
    { component: Slide17_Chat_Intro, title: "Google Chat - Introduzione" },
    { component: Slide18_Chat_Usage, title: "Chat: Utilizzo Didattico" },
    { component: Slide19_Chat_Spaces, title: "Chat: Spazi e Organizzazione" },
    { component: Slide20_Chat_Integration, title: "Chat: Integrazione Workspace" },

    // Google Docs (21-24)
    { component: Slide21_Docs_Intro, title: "Google Docs - Introduzione" },
    { component: Slide22_Docs_SmartChips, title: "Docs: Smart Chips e Automazione" },
    { component: Slide23_Docs_Collaboration, title: "Docs: Collaborazione e Feedback" },
    { component: Slide24_Docs_Advanced, title: "Docs: Strumenti Avanzati" },

    // Google Sheets (25-28)
    { component: Slide25_Sheets_Intro, title: "Google Sheets - Introduzione" },
    { component: Slide26_Sheets_Formulas, title: "Sheets: Formule per l'Educazione" },
    { component: Slide27_Sheets_DataViz, title: "Sheets: Visualizzazione Dati" },
    { component: Slide28_Sheets_Automation, title: "Sheets: Automazione e Integrazione" },

    // Google Slides (29-32)
    { component: Slide29_Slides_Intro, title: "Google Slides - Introduzione" },
    { component: Slide30_Slides_Interactive, title: "Slides: Funzionalità Interattive" },
    { component: Slide31_Slides_Collaboration, title: "Slides: Progetti Collaborativi" },
    { component: Slide32_Slides_Advanced, title: "Slides: Funzionalità Avanzate" },

    // Google Meet (33-35)
    { component: Slide33_Meet_Intro, title: "Google Meet - Introduzione" },
    { component: Slide34_Meet_Features, title: "Meet: Funzionalità Educative" },
    { component: Slide35_Meet_BestPractices, title: "Meet: Best Practices" },

    // Google Classroom (36-39)
    { component: Slide36_Classroom_Intro, title: "Google Classroom - Introduzione" },
    { component: Slide37_Classroom_Management, title: "Classroom: Gestione Corso" },
    { component: Slide38_Classroom_Assignments, title: "Classroom: Compiti e Valutazione" },
    { component: Slide39_Classroom_Integration, title: "Classroom: Ecosistema Integrato" },

    // Strumenti Complementari (40-42)
    { component: Slide40_Sites_Keep_Tasks_Intro, title: "Sites, Keep, Tasks - Introduzione" },
    { component: Slide41_Sites_Portfolio, title: "Google Sites: Portfolio e Comunicazione" },
    { component: Slide42_Keep_Tasks_Productivity, title: "Keep & Tasks: Produttività Docente" },

    // Best Practices e Conclusioni (43-45)
    { component: Slide43_Security_Privacy, title: "Sicurezza e Privacy: Best Practices" },
    { component: Slide44_Integration_Workflow, title: "Integrazione: Workflow Educativi" },
    { component: Slide45_Conclusion, title: "Conclusioni e Prossimi Passi" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((s) => Math.min(s + 1, slides.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((s) => Math.max(s - 1, 0));
  };

  const goToSlide = (index) => {
    if (index >= 0 && index < slides.length) setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Home className="w-6 h-6 text-blue-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Google Workspace for Education</h1>
              <div className="text-sm text-gray-600">Slide {currentSlide + 1} di {slides.length} — {slides[currentSlide].title}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={prevSlide} disabled={currentSlide === 0} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50">
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="text-sm text-gray-600 min-w-[100px] text-center">
              {currentSlide + 1} / {slides.length}
            </div>

            <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* progress bar */}
        <div className="w-full bg-gray-200 h-2">
          <div
            className="h-2 rounded-full transition-all duration-300 bg-gradient-to-r from-blue-500 to-green-500"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Slide content */}
      <main className="flex-1 max-w-7xl mx-auto p-6 w-full">
        <div className="bg-white rounded-lg shadow-sm min-h-[70vh] p-8">
          <CurrentSlideComponent />
        </div>
      </main>

      {/* Footer navigation */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-sm text-gray-600">Corso di Formazione Google Workspace for Education | {slides.length} slide totali</div>
          <div className="flex items-center gap-4">
            <button onClick={prevSlide} disabled={currentSlide === 0} className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 rounded-lg">
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Precedente</span>
            </button>
            <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white rounded-lg">
              <span className="hidden sm:inline">Successiva</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GoogleWorkspaceCourse;
