// ── DOCUMENTS DATA ─────────────────────────────────────
const docs = [
  { id:1,  name:'Gravidanza Protratta',            chunks: 112, active: true  },
  { id:2,  name:'Emorragia Post-Partum',           chunks:  98, active: true  },
  { id:3,  name:'Gravidanza Multipla (SNLG)',      chunks: 156, active: true  },
  { id:4,  name:'Screening Prenatale Trisomia',    chunks:  87, active: true  },
  { id:5,  name:'Iperplasia Endometriale',         chunks: 203, active: true  },
  { id:6,  name:'Parto Pretermine',                chunks: 178, active: true  },
  { id:7,  name:'Endometriosi ESHRE 2022',         chunks: 241, active: false },
  { id:8,  name:'Gravidanza Fisiologica Pt.1',     chunks: 312, active: false },
  { id:9,  name:'Gravidanza Fisiologica Pt.2',     chunks: 289, active: false },
  { id:10, name:'Fibromi Uterini',                 chunks:  94, active: false },
  { id:11, name:'Carcinoma Ovarico AIOM',          chunks: 167, active: false },
  { id:12, name:'Diagnosi Prenatale',              chunks: 134, active: false },
  { id:13, name:'Parto Vaginale Pregressa Cesareo',chunks:  76, active: false },
  { id:14, name:'Preeclampsia e Ipertensione',     chunks: 145, active: false },
];

// ── FAKE RESPONSES ─────────────────────────────────────
const responses = [
  {
    keywords: ['protratta','termine','41','42','post-term'],
    text: `La **gravidanza protratta** è definita come quella che raggiunge o supera le **42 settimane complete (294 giorni)**, secondo i criteri FIGO e ACOG.\n\nLe principali raccomandazioni per la gestione sono:\n\n- **Datazione accurata** dell'età gestazionale con CRL nel 1° trimestre (Livello A)\n- **Valutazione materna e fetale** a 41 settimane per identificare rischi specifici (Livello B)\n- **Offerta di induzione o sorveglianza** in assenza di rischi specifici dopo 294 giorni (Livello A)\n- La **CTG computerizzata** è raccomandata per il monitoraggio fetale bisettimanale\n- La **biometria fetale** è essenziale per identificare IUGR o macrosomia\n\nNon esiste evidenza che l'induzione routinaria prima di 294 giorni migliori l'esito perinatale (Livello B).`,
    sources: [
      { doc:'Gravidanza Protratta', section:'DIAGNOSI', score:96, color:'high',
        preview:'Il metodo più accurato per stabilire l\'età gestazionale è la biometria fetale ultrasonora eseguita in gravidanza precoce.' },
      { doc:'Gravidanza Protratta', section:'RACCOMANDAZIONI', score:91, color:'high',
        preview:'Una valutazione delle condizioni materne e fetali a 41 settimane mirata ad identificare specifici rischi è raccomandata.' },
      { doc:'Gravidanza Fisiologica Pt.1', section:'MONITORAGGIO', score:68, color:'low',
        preview:'Il monitoraggio fetale nelle ultime settimane include cardiotocografia e valutazione del liquido amniotico.' },
    ]
  },
  {
    keywords: ['emorragia','postpartum','sanguinamento','parto'],
    text: `L'**emorragia post-partum (EPP)** è definita come perdita ematica ≥500 ml dopo parto vaginale o ≥1000 ml dopo taglio cesareo.\n\nIl protocollo di gestione prevede:\n\n- **Uterotonica di prima scelta**: ossitocina 10 UI IM/EV (Livello A)\n- **Massaggio uterino** e verifica integrità placentare\n- In caso di mancata risposta: **carbetocina**, misoprostolo o prostaglandine F2α\n- **Acido tranexamico** 1g EV entro 3 ore dall'insorgenza (Livello A — WOMAN Trial)\n- Accesso venoso doppio, infusione cristalloidi, monitoraggio continuo\n\nLa **BPM (Bundle Post-partum Management)** riduce la mortalità materna del 67% se applicata entro 60 minuti.`,
    sources: [
      { doc:'Emorragia Post-Partum', section:'TRATTAMENTO', score:97, color:'high',
        preview:'L\'ossitocina è l\'uterotonico di prima scelta per la prevenzione e il trattamento dell\'emorragia post-partum.' },
      { doc:'Emorragia Post-Partum', section:'RACCOMANDAZIONI', score:93, color:'high',
        preview:'L\'acido tranexamico 1g EV deve essere somministrato entro 3 ore dall\'insorgenza dell\'emorragia.' },
      { doc:'Gravidanza Fisiologica Pt.2', section:'TERZO STADIO', score:72, color:'mid',
        preview:'La gestione attiva del terzo stadio del travaglio riduce significativamente il rischio di emorragia post-partum.' },
    ]
  },
  {
    keywords: ['screening','trisomia','21','down','translucenza','nucale'],
    text: `Lo **screening prenatale per la trisomia 21** è basato sul test combinato del primo trimestre:\n\n- **Translucenza nucale (NT)** a 11+0 – 13+6 settimane\n- **Free β-hCG** e **PAPP-A** sierici materni\n- **Età materna** come fattore correttivo\n\nIl test combinato raggiunge un **detection rate dell'85-90%** con un tasso di falsi positivi del 5%.\n\nOpzioni di secondo livello:\n- **DNA fetale cell-free (cfDNA/NIPT)**: DR >99%, FPR <0.1% — raccomandato come test di II livello\n- **Amniocentesi/villocentesi**: diagnosi definitiva con cariotipo fetale\n\nNon è raccomandato offrire il solo dosaggio biochimico senza NT (Livello A).`,
    sources: [
      { doc:'Screening Prenatale Trisomia', section:'TEST COMBINATO', score:95, color:'high',
        preview:'Il test combinato del primo trimestre, che include NT, free β-hCG e PAPP-A, è il gold standard per lo screening della trisomia 21.' },
      { doc:'Screening Prenatale Trisomia', section:'cfDNA / NIPT', score:88, color:'high',
        preview:'Il test del DNA fetale cell-free nel sangue materno ha una sensibilità >99% per la trisomia 21 con un tasso di falsi positivi <0.1%.' },
      { doc:'Diagnosi Prenatale', section:'PROCEDURE INVASIVE', score:65, color:'low',
        preview:'L\'amniocentesi e la villocentesi rimangono i metodi diagnostici definitivi per l\'identificazione delle anomalie cromosomiche fetali.' },
    ]
  },
  {
    keywords: ['induzione','cervice','bishop','misoprostolo','ossitocina'],
    text: `L'**induzione del parto** richiede una valutazione preliminare delle condizioni cervicali.\n\nValutazione cervicale:\n- **Score di Bishop ≤6**: cervice sfavorevole → necessaria maturazione cervicale\n- **Ecografia transvaginale**: lunghezza cervicale <25 mm predice il successo dell'induzione con precisione superiore al Bishop (Livello B)\n\nMetodi di maturazione:\n- **Meccanici**: catetere di Foley transcervicale, dilatatori osmotici\n- **Farmacologici**: PGE2 (dinoprostone), misoprostolo 25-50 mcg vaginale\n\nInduzione vera:\n- **Ossitocina EV** a dosi crescenti ± amniotomia\n- Monitoraggio CTG continuo obbligatorio\n- L'uso combinato di PG + ossitocina è **controindicato** per rischio di iperstimolazione.`,
    sources: [
      { doc:'Gravidanza Protratta', section:'INDUZIONE', score:92, color:'high',
        preview:'La valutazione ecografica per via transvaginale è superiore allo score di Bishop nel predire l\'insorgenza del travaglio e il successo dell\'induzione.' },
      { doc:'Parto Pretermine', section:'METODI DI INDUZIONE', score:81, color:'mid',
        preview:'Il misoprostolo per via vaginale alla dose di 25 mcg ogni 4-6 ore è efficace per la maturazione cervicale e l\'induzione del parto.' },
      { doc:'Gravidanza Fisiologica Pt.1', section:'TRAVAGLIO', score:61, color:'low',
        preview:'L\'amniotomia associata all\'infusione di ossitocina riduce la durata del travaglio senza aumentare il tasso di cesarei.' },
    ]
  },
  {
    keywords: [],
    text: `Sulla base delle **linee guida SIGO selezionate**, posso fornirti informazioni cliniche basate su evidenze per il quesito indicato.\n\nPer una risposta più precisa ti chiedo di specificare:\n- Il contesto clinico (età gestazionale, parità, comorbidità)\n- Il quesito diagnostico o terapeutico specifico\n- Le linee guida di riferimento che vuoi consultare\n\nSono disponibili **41 linee guida** che coprono le principali aree della ginecologia e ostetricia, tra cui gravidanza fisiologica, patologica, parto, oncologia ginecologica e diagnosi prenatale.`,
    sources: [
      { doc:'Gravidanza Fisiologica Pt.1', section:'INTRODUZIONE', score:55, color:'low',
        preview:'Le presenti linee guida forniscono raccomandazioni basate su evidenze per la gestione della gravidanza fisiologica.' },
    ]
  }
];

// ── TOKEN TRACKING (Gemini 2.5 Flash pricing) ──────────
// $0.075 / 1M input tok   $0.30 / 1M output tok
const PRICE_IN  = 0.075 / 1_000_000;
const PRICE_OUT = 0.30  / 1_000_000;
const CTX_OVERHEAD = 2200;

let sessionTokIn  = 0;
let sessionTokOut = 0;

function estTok(text) { return Math.round(text.length / 4); }

function addTokIn(text)  { sessionTokIn  += CTX_OVERHEAD + estTok(text); updateTokBar(); }
function addTokOut(text) { sessionTokOut += estTok(text); updateTokBar(); }

function fmtTok(n) { return n >= 1000 ? (n / 1000).toFixed(1) + 'k' : String(n); }

function updateTokBar() {
  const cost = sessionTokIn * PRICE_IN + sessionTokOut * PRICE_OUT;
  document.getElementById('tokIn').textContent   = fmtTok(sessionTokIn);
  document.getElementById('tokOut').textContent  = fmtTok(sessionTokOut);
  document.getElementById('tokCost').textContent = '$' + cost.toFixed(4);
}

// ── SESSION MANAGEMENT ─────────────────────────────────
const sessions = [];
let currentSessionId = null;
let openSessionDocsId = null;

function createSession() {
  const session = {
    id: Date.now(),
    title: 'Nuova sessione',
    tag: '',
    createdAt: new Date(),
    updatedAt: new Date(),
    messages: []
  };
  sessions.unshift(session);
  currentSessionId = session.id;
  openSessionDocsId = null;
  renderSessions();
  return session;
}

function saveToSession(role, text, sources, timeStr) {
  const session = sessions.find(s => s.id === currentSessionId);
  if (!session) return;
  session.messages.push({ role, text, sources: sources || [], timeStr });
  session.updatedAt = new Date();
  if (role === 'user' && session.title === 'Nuova sessione') {
    session.title = text.length > 46 ? text.slice(0, 43) + '…' : text;
    updateHeaderTitle(session.title);
  }
  const idx = sessions.findIndex(s => s.id === currentSessionId);
  if (idx > 0) { sessions.unshift(sessions.splice(idx, 1)[0]); }
  renderSessions();
}

function formatSessionTime(date) {
  const now = new Date();
  const diff = now - date;
  if (diff < 60000) return 'ora';
  if (diff < 3600000) return Math.floor(diff / 60000) + ' min fa';
  if (date.toDateString() === now.toDateString())
    return date.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  if (date.toDateString() === yesterday.toDateString()) return 'ieri';
  return date.toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit' });
}

function getSessionDocs(session) {
  const byDoc = new Map();
  session.messages.forEach(m => {
    if (!m.sources || !m.sources.length) return;
    m.sources.forEach(src => {
      const current = byDoc.get(src.doc) || { name: src.doc, refs: 0, bestScore: 0 };
      current.refs += 1;
      current.bestScore = Math.max(current.bestScore, src.score || 0);
      byDoc.set(src.doc, current);
    });
  });
  return [...byDoc.values()].sort((a, b) => b.bestScore - a.bestScore || b.refs - a.refs);
}

function toggleSessionDocs(e, id) {
  e.stopPropagation();
  openSessionDocsId = openSessionDocsId === id ? null : id;
  renderSessions();
}

function focusDocByName(e, docName) {
  e.stopPropagation();
  const input = document.getElementById('docSearch');
  if (input) input.value = docName;
  renderDocs(docName);
  const panel = document.getElementById('docsPanel');
  const btn = document.getElementById('toggleDocsBtn');
  if (panel && panel.classList.contains('collapsed')) {
    panel.classList.remove('collapsed');
    if (btn) btn.classList.add('active');
  }
}

function renderSessions(filter) {
  if (filter === undefined) filter = document.getElementById('sessionSearch').value || '';
  const fl = filter.toLowerCase();
  const list = document.getElementById('sessionList');
  const countEl = document.getElementById('sessionsCount');

  const filtered = fl
    ? sessions.filter(s =>
        s.title.toLowerCase().includes(fl) ||
        (s.tag && s.tag.toLowerCase().includes(fl)))
    : sessions;

  if (countEl) countEl.textContent = sessions.length;

  if (!filtered.length) {
    list.innerHTML = sessions.length === 0
      ? '<div class="session-empty">Nessuna sessione — avvia una chat</div>'
      : '<div class="session-empty">Nessun risultato</div>';
    return;
  }

  list.innerHTML = '';
  filtered.forEach(s => {
    const isActive = s.id === currentSessionId;
    const docsUsed = getSessionDocs(s);
    const hasDocs = docsUsed.length > 0;
    const isOpen = hasDocs && openSessionDocsId === s.id;

    const wrap = document.createElement('div');
    wrap.className = 'session-wrap' + (isOpen ? ' open' : '');

    const item = document.createElement('div');
    item.className = 'session-item' + (isActive ? ' active' : '');

    const tagHtml = s.tag
      ? `<span class="session-tag-badge" onclick="editTag(event,${s.id})" title="Modifica tag">${escHtml(s.tag)}</span>`
      : `<span class="session-tag-badge empty" onclick="editTag(event,${s.id})" title="Aggiungi tag">+ tag</span>`;

    const treeToggle = hasDocs
      ? `<button class="session-tree-toggle ${isOpen ? 'open' : ''}" onclick="toggleSessionDocs(event,${s.id})" title="Documenti usati (${docsUsed.length})">▸</button>`
      : `<span class="session-tree-toggle disabled" title="Nessuna fonte">•</span>`;

    item.innerHTML = `
      <div class="session-icon">💬</div>
      <div class="session-info">
        <div class="session-title">${escHtml(s.title)}</div>
        <div class="session-bottom">
          <span class="session-time">${formatSessionTime(s.updatedAt)}</span>
          <span class="session-msgs">${s.messages.length} msg</span>
          ${tagHtml}
        </div>
      </div>
      ${treeToggle}
      <span class="session-del" onclick="deleteSession(event,${s.id})" title="Elimina">×</span>`;

    item.addEventListener('click', () => loadSession(s.id));
    wrap.appendChild(item);

    if (isOpen) {
      const tree = document.createElement('div');
      tree.className = 'session-doc-tree';
      tree.innerHTML = docsUsed.map(d => `
        <button class="session-doc-leaf" onclick="focusDocByName(event,'${escHtml(d.name).replace(/'/g, '&#39;')}')" title="Apri nel pannello documenti">
          <span class="doc-leaf-branch">└</span>
          <span class="doc-leaf-name">${escHtml(d.name)}</span>
          <span class="doc-leaf-meta">${d.refs} fonti</span>
        </button>`).join('');
      wrap.appendChild(tree);
    }

    list.appendChild(wrap);
  });
}

function loadSession(id) {
  if (busy) return;
  currentSessionId = id;
  const session = sessions.find(s => s.id === id);
  if (session && getSessionDocs(session).length) openSessionDocsId = id;
  if (!session) return;

  chatArea.innerHTML = '';

  if (!session.messages.length) {
    document.getElementById('hints').style.display = 'flex';
    updateHeaderTitle('Consulenza Clinica AI');
    renderSessions();
    return;
  }

  document.getElementById('hints').style.display = 'none';
  updateHeaderTitle(session.title);

  session.messages.forEach(m => {
    if (m.role === 'user') addUserMsgStatic(m.text, m.timeStr);
    else addAiMsgStatic(m.text, m.sources, m.timeStr);
  });

  renderSessions();
  scrollBottom();
}

function deleteSession(event, id) {
  event.stopPropagation();
  const idx = sessions.findIndex(s => s.id === id);
  if (idx !== -1) sessions.splice(idx, 1);

  if (currentSessionId === id) {
    if (sessions.length > 0) {
      loadSession(sessions[0].id);
    } else {
      currentSessionId = null;
      openSessionDocsId = null;
      chatArea.innerHTML = '';
      document.getElementById('hints').style.display = 'flex';
      updateHeaderTitle('Consulenza Clinica AI');
    }
  }
  renderSessions();
}

function editTag(e, id) {
  e.stopPropagation();
  const tagEl = e.currentTarget;
  const session = sessions.find(s => s.id === id);
  if (!session) return;

  const input = document.createElement('input');
  input.className = 'session-tag-input';
  input.value = session.tag;
  input.placeholder = 'es. clinico…';
  input.maxLength = 20;
  input.addEventListener('click', e2 => e2.stopPropagation());

  tagEl.replaceWith(input);
  input.focus();
  if (session.tag) input.select();

  const save = () => { session.tag = input.value.trim(); renderSessions(); };
  input.addEventListener('blur', save);
  input.addEventListener('keydown', e2 => {
    if (e2.key === 'Enter') input.blur();
    if (e2.key === 'Escape') { input.value = session.tag; input.blur(); }
  });
}

function updateHeaderTitle(title) {
  const el = document.getElementById('headerTitle');
  if (el) el.textContent = title.length > 50 ? title.slice(0, 47) + '…' : title;
}

// ── RENDER DOCS ────────────────────────────────────────
const docList = document.getElementById('docList');

function renderDocs(filter) {
  if (filter === undefined) filter = '';
  docList.innerHTML = '';
  docs.filter(d => d.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(d => {
      const el = document.createElement('div');
      el.className = 'doc-item' + (d.active ? ' active' : '');
      el.innerHTML = `
        <div class="doc-cb"><span class="doc-cb-check">✓</span></div>
        <div class="doc-info">
          <div class="doc-name">${d.name}</div>
          <div class="doc-meta">${d.chunks} chunk</div>
        </div>
        <div class="doc-tag">PDF</div>`;
      el.onclick = () => { d.active = !d.active; renderDocs(filter); updateSelCount(); };
      docList.appendChild(el);
    });
}

function updateSelCount() {
  document.getElementById('selCount').textContent = docs.filter(d => d.active).length;
}

let allSelected = false;
function toggleAll() {
  allSelected = !allSelected;
  docs.forEach(d => d.active = allSelected);
  renderDocs();
  updateSelCount();
}

document.getElementById('sessionSearch').addEventListener('input', e => {
  renderSessions(e.target.value);
});

document.getElementById('docSearch').addEventListener('input', e => {
  renderDocs(e.target.value);
});

renderDocs();

// ── PANEL TOGGLES ──────────────────────────────────────
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('collapsed');
}

function toggleDocs() {
  const panel = document.getElementById('docsPanel');
  const btn   = document.getElementById('toggleDocsBtn');
  panel.classList.toggle('collapsed');
  btn.classList.toggle('active', !panel.classList.contains('collapsed'));
}

// ── CHAT ──────────────────────────────────────────────
const chatArea = document.getElementById('chatArea');
let busy = false;

function now() {
  return new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
}

function addUserMsg(text) {
  const t = now();
  const div = document.createElement('div');
  div.className = 'msg user';
  div.innerHTML = `
    <div class="avatar user-av">👤</div>
    <div class="msg-content">
      <div class="msg-bubble">${escHtml(text)}</div>
      <div class="msg-time">${t}</div>
    </div>`;
  chatArea.appendChild(div);
  scrollBottom();
  saveToSession('user', text, [], t);
  addTokIn(text);
}

function addUserMsgStatic(text, timeStr) {
  const div = document.createElement('div');
  div.className = 'msg user';
  div.innerHTML = `
    <div class="avatar user-av">👤</div>
    <div class="msg-content">
      <div class="msg-bubble">${escHtml(text)}</div>
      <div class="msg-time">${timeStr}</div>
    </div>`;
  chatArea.appendChild(div);
}

function addTyping() {
  const div = document.createElement('div');
  div.className = 'msg ai';
  div.id = 'typing';
  div.innerHTML = `
    <div class="avatar ai">⚕</div>
    <div class="msg-content">
      <div class="typing"><span></span><span></span><span></span></div>
      <div class="msg-time" style="opacity:0">…</div>
    </div>`;
  chatArea.appendChild(div);
  scrollBottom();
}

function removeTyping() {
  const t = document.getElementById('typing');
  if (t) t.remove();
}

function buildSources(cont, sources, animate) {
  if (!sources || !sources.length) return;
  const label = document.createElement('div');
  label.className = 'sources-label';
  label.textContent = `${sources.length} fonti recuperate`;
  cont.appendChild(label);

  const grid = document.createElement('div');
  grid.className = 'sources-grid';
  sources.forEach(s => {
    const card = document.createElement('div');
    card.className = 'src-card';
    const barW = animate ? '0%' : s.score + '%';
    card.innerHTML = `
      <div class="src-header">
        <div class="src-doc">${s.doc}</div>
        <div class="src-score score-${s.color}">${s.score}%</div>
      </div>
      <div class="src-section">${s.section}</div>
      <div class="src-preview">${s.preview}</div>
      <div class="src-bar"><div class="src-bar-fill" style="width:${barW}" data-w="${s.score}%"></div></div>`;
    grid.appendChild(card);
  });
  cont.appendChild(grid);

  if (animate) {
    setTimeout(() => {
      grid.querySelectorAll('.src-bar-fill').forEach(b => { b.style.width = b.dataset.w; });
    }, 100);
  }
}

async function addAiMsg(resp) {
  const t = now();
  const div = document.createElement('div');
  div.className = 'msg ai';
  div.innerHTML = `
    <div class="avatar ai">⚕</div>
    <div class="msg-content">
      <div class="msg-bubble"></div>
      <div class="msg-time" style="opacity:0">${t}</div>
    </div>`;
  chatArea.appendChild(div);

  const bubble = div.querySelector('.msg-bubble');
  const timeEl = div.querySelector('.msg-time');

  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  bubble.appendChild(cursor);

  const md = resp.text;
  let i = 0;
  await new Promise(res => {
    const iv = setInterval(() => {
      if (i >= md.length) { clearInterval(iv); res(); return; }
      cursor.insertAdjacentText('beforebegin', md.slice(i, i + 3));
      i += 3;
      scrollBottom();
    }, 16);
  });
  cursor.remove();
  bubble.innerHTML = formatMd(md);

  buildSources(div.querySelector('.msg-content'), resp.sources, true);

  timeEl.style.opacity = '1';
  scrollBottom();
  saveToSession('ai', resp.text, resp.sources || [], t);
  addTokOut(resp.text);
}

function addAiMsgStatic(text, sources, timeStr) {
  const div = document.createElement('div');
  div.className = 'msg ai';
  div.innerHTML = `
    <div class="avatar ai">⚕</div>
    <div class="msg-content">
      <div class="msg-bubble">${formatMd(text)}</div>
      <div class="msg-time">${timeStr}</div>
    </div>`;
  buildSources(div.querySelector('.msg-content'), sources, false);
  chatArea.appendChild(div);
}

function scrollBottom() { chatArea.scrollTop = chatArea.scrollHeight; }

function escHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function formatMd(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n- /g, '</p><ul><li>').replace(/\n/g, '</li><li>')
    .replace(/<\/li><li>(?!.*<\/li>)/gs, (m, o, s) => s.slice(o).includes('</li>') ? m : '</li></ul>')
    .replace(/^/, '<p>').replace(/$/, '</p>')
    .replace(/<p><\/p>/g, '')
    .replace(/<ul><li>/g, '</p><ul><li>')
    .replace(/<\/li><li><\/ul>/g, '</li></ul><p>');
}

function findResponse(text) {
  const lower = text.toLowerCase();
  for (const r of responses.slice(0, -1)) {
    if (r.keywords.some(k => lower.includes(k))) return r;
  }
  return responses[responses.length - 1];
}

async function sendMessage(text) {
  if (busy) return;
  const box = document.getElementById('inputBox');
  const msg = (text || box.value).trim();
  if (!msg) return;

  if (!currentSessionId) createSession();

  busy = true;
  box.value = '';
  box.style.height = '';
  document.getElementById('sendBtn').disabled = true;
  document.getElementById('hints').style.display = 'none';

  addUserMsg(msg);
  addTyping();

  const delay = 1200 + Math.random() * 1000;
  await new Promise(r => setTimeout(r, delay));
  removeTyping();

  const resp = findResponse(msg);
  await addAiMsg(resp);

  busy = false;
  document.getElementById('sendBtn').disabled = false;
  box.focus();
}

function useHint(el) { sendMessage(el.textContent); }

function newChat() {
  if (busy) return;
  createSession();
  chatArea.innerHTML = '';
  document.getElementById('hints').style.display = 'flex';
  updateHeaderTitle('Consulenza Clinica AI');
}

// ── INPUT AUTO-RESIZE ─────────────────────────────────
const box = document.getElementById('inputBox');
box.addEventListener('input', () => {
  box.style.height = 'auto';
  box.style.height = Math.min(box.scrollHeight, 120) + 'px';
});
box.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
});

// ── PRELOADED CONVERSATION ────────────────────────────
async function loadPreloaded() {
  await new Promise(r => setTimeout(r, 400));
  const preQ = 'Qual è la definizione di gravidanza protratta e come va gestita clinicamente?';
  addUserMsg(preQ);
  addTyping();
  await new Promise(r => setTimeout(r, 1800));
  removeTyping();
  await addAiMsg(responses[0]);
}

// ── INIT ──────────────────────────────────────────────
createSession();
loadPreloaded();

// ── SETTINGS PANEL ────────────────────────────────────
function toggleSettings() {
  const panel = document.getElementById('settingsPanel');
  const btn   = document.getElementById('settingsBtn');
  if (!panel) return;
  const open = panel.style.display === 'none' || panel.style.display === '';
  panel.style.display = open ? 'block' : 'none';
  if (btn) btn.classList.toggle('active', open);
}
document.addEventListener('click', e => {
  const panel = document.getElementById('settingsPanel');
  const btn   = document.getElementById('settingsBtn');
  if (panel && panel.style.display === 'block' &&
      !panel.contains(e.target) && e.target !== btn) {
    panel.style.display = 'none';
    if (btn) btn.classList.remove('active');
  }
});

// ── THEME SWITCHER ─────────────────────────────────────
const THEMES = {
  'v0': 'demo-v0.css?v=gh2',
  'v1': 'demo-v1.css?v=gh2',
  'v2': 'demo-v2.css?v=gh2',
  'v3': 'demo-v3.css?v=gh2',
  'v4': 'demo-v4.css?v=gh2',
};

function setTheme(key) {
  if (!THEMES[key]) return;
  document.getElementById('theme-link').href = THEMES[key];
  localStorage.setItem('gyneco-theme', key);
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === key);
  });
}

// Init: load saved theme or default v3 (Grafite)
(function() {
  const saved = localStorage.getItem('gyneco-theme') || 'v3';
  setTheme(saved);
})();

