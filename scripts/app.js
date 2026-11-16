// ==========================================================
// DOM HELPERS
// ==========================================================
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function showToast(text, kind = 'warn') {
  const toast = document.createElement('div');
  toast.className = `toast ${kind}`;
  toast.textContent = text;
  $('#toasts').appendChild(toast);
  setTimeout(() => toast.remove(), 5000);
}

function setFieldState(input, helpEl, message, ok = false) {
  input.classList.toggle('is-invalid', Boolean(message) && !ok);
  input.classList.toggle('is-valid', ok);
  input.setAttribute('aria-invalid', String(Boolean(message) && !ok));
  if (helpEl) {
    helpEl.textContent = message || '';
    helpEl.classList.toggle('error', Boolean(message) && !ok);
    helpEl.classList.toggle('ok', ok);
  }
}

// ==========================================================
// TRANSLATIONS ES / EN (US55)
// ==========================================================
const translations = {
  en: {
    skip: 'Skip to content',
    'nav.features': 'Features',
    'nav.benefits': 'Benefits',
    'nav.demo': 'Try it',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'cta.demo': 'Request a demo',
    'cta.try': 'Try the interactive demo',
    'hero.eyebrow': 'Real-time HVOF monitoring',
    'hero.title': 'Every coated part, with its evidence.',
    'hero.lead':
      'EdgeWatch connects your HVOF equipment to monitor parameters, diagnose deviations and give mining companies full traceability of every component.',
    'hero.s1': 'HVOF parameters monitored per session',
    'hero.s2': 'of parts with a traceable timeline',
    'hero.s3': 'profiles: operator, quality and Asset Owner',
    'features.title': 'Your whole HVOF process in one platform',
    'features.lead':
      'From spraying to certificate: monitoring, diagnosis, traceability and evidence.',
    'f1.t': 'Real-time monitoring',
    'f1.d':
      'Pressure, O₂, kerosene, powder and temperature of every session against the recipe nominal band.',
    'f2.t': 'Alerts and diagnosis',
    'f2.d':
      'Alert when out of range, ranked probable causes and a step-by-step recommended action.',
    'f3.t': 'Part traceability',
    'f3.d': 'Search by S/N, MO or WO and review the full timeline from reception to certificate.',
    'f4.t': 'Reports and certificates',
    'f4.d':
      'Generate technical evidence and application certificates ready to share with your client.',
    'f5.t': 'Asset Owner portal',
    'f5.d': 'The mine sees its components, certificates and real performance against the PCR.',
    'f6.t': 'Equipment and recipes',
    'f6.d': 'Manage your HVOF units, recipes (PCR) and downtime history per unit.',
    'seg.title': 'Built for those who coat and those who operate',
    'seg.shop': 'HVOF shops',
    'seg.mine': 'Mining · Asset Owners',
    'seg.shop.who': 'Technical operator and quality lead',
    'seg.shop.b1': 'Less rework: catch deviations during spraying, not after.',
    'seg.shop.b2': 'Certificates and reports in minutes, with real session data.',
    'seg.shop.b3': 'Back your warranties with evidence when claims arrive.',
    'seg.mine.who': 'Reliability engineer',
    'seg.mine.b1': 'Know the status and service life of every recovered component.',
    'seg.mine.b2': 'Compare suppliers with performance data, not perceptions.',
    'seg.mine.b3': 'Get notified before end of life and request reviews.',
    'demo.title': 'Try it: interactive demo',
    'demo.lead': 'Simulated in-memory data. Reloading the page resets the demo.',
    'demo.op': 'HVOF operator',
    'demo.qa': 'Quality',
    'demo.ao': 'Asset Owner',
    'pricing.title': 'Plans based on your equipment',
    'pricing.lead': 'Monthly billing in USD.',
    'plan.shop': 'Workshop',
    'plan.plant': 'Plant',
    'plan.ent': 'Enterprise',
    'plan.month': '/ month',
    'plan.custom': 'Custom',
    'plan.recommended': 'Recommended',
    'plan.choose': 'Choose plan',
    'plan.shop.1': 'Up to 2 HVOF units',
    'plan.shop.2': '10 users',
    'plan.shop.3': 'Reports and certificates',
    'plan.plant.1': 'Up to 6 HVOF units',
    'plan.plant.2': '30 users',
    'plan.plant.3': 'Diagnosis and similar cases',
    'plan.plant.4': 'Client portal',
    'plan.ent.1': 'Unlimited units',
    'plan.ent.2': 'ERP / SSO integration',
    'contact.title': 'Request a demo',
    'contact.lead': 'We will show you EdgeWatch with real HVOF shop data in 30 minutes.',
    'form.name': 'Full name *',
    'form.company': 'Company *',
    'form.email': 'Work email *',
    'form.type': 'Company type *',
    'form.shop': 'HVOF coating shop',
    'form.mine': 'Mining company · Asset Owner',
    'nl.title': 'EdgeWatch news',
    'nl.lead': 'HVOF use cases and new features, once a month.',
    'nl.cta': 'Subscribe',
    'footer.copy': '© 2026 InnovaCorp · EdgeWatch. Demo data is simulated.',
  },
};
const messages = {
  es: {
    required: 'Este campo es obligatorio.',
    email: 'Ingresa un correo corporativo válido (no gmail, hotmail ni outlook).',
    demoOk: '¡Gracias! Te contactaremos en menos de 24 h.',
    nlOk: '¡Listo! Te suscribiste al newsletter.',
    nlDup: 'Este correo ya está suscrito.',
    plan: 'Plan elegido: ',
  },
  en: {
    required: 'This field is required.',
    email: 'Enter a valid work email (not gmail, hotmail or outlook).',
    demoOk: 'Thanks! We will contact you within 24 h.',
    nlOk: 'Done! You are subscribed to the newsletter.',
    nlDup: 'This email is already subscribed.',
    plan: 'Selected plan: ',
  },
};

// Textos de accesibilidad por idioma (US55)
const ariaText = {
  es: {
    brand: 'EdgeWatch, ir al inicio',
    nav: 'Navegación principal',
    lang: 'Idioma',
    open: 'Abrir menú',
    close: 'Cerrar menú',
  },
  en: {
    brand: 'EdgeWatch, go to home',
    nav: 'Main navigation',
    lang: 'Language',
    open: 'Open menu',
    close: 'Close menu',
    title: 'EdgeWatch · HVOF monitoring, traceability and diagnosis',
  },
};

// ==========================================================
// LANGUAGE SWITCH (US55)
// ==========================================================
const i18n = {
  lang: 'es',
  originals: new Map(),
  t(key) {
    return messages[this.lang][key];
  },
  apply(lang) {
    this.lang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      if (!this.originals.has(el)) this.originals.set(el, el.textContent);
      const key = el.dataset.i18n;
      el.textContent =
        lang === 'es' ? this.originals.get(el) : translations.en[key] || this.originals.get(el);
    });
    document.querySelectorAll('.lang-btn').forEach((b) => {
      const active = b.dataset.lang === lang;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', String(active));
    });
    // Textos de accesibilidad y título de la pestaña
    const a = ariaText[lang];
    $('.brand').setAttribute('aria-label', a.brand);
    $('#main-nav').setAttribute('aria-label', a.nav);
    $('.lang-switch').setAttribute('aria-label', a.lang);
    if (!this.titleEs) this.titleEs = document.title;
    document.title = lang === 'es' ? this.titleEs : a.title;
    syncMenuLabel();
  },
};

// Language
$$('.lang-btn').forEach((b) => b.addEventListener('click', () => i18n.apply(b.dataset.lang)));

// ==========================================================
// MOBILE MENU (US52, US53)
// ==========================================================
const menuToggle = $('.menu-toggle');
const mainNav = $('#main-nav');

function syncMenuLabel() {
  const open = mainNav.classList.contains('is-open');
  menuToggle.setAttribute('aria-label', ariaText[i18n.lang][open ? 'close' : 'open']);
}
function closeMenu() {
  mainNav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  syncMenuLabel();
}

menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
  syncMenuLabel();
});
$$('#main-nav a').forEach((a) => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
    closeMenu();
    menuToggle.focus();
  }
});

// ==========================================================
// ACCESSIBLE TABS
// ==========================================================
$$('[data-tabs]').forEach((tabs) => {
  const tabList = $$(":scope > .tab-list [role='tab']", tabs);
  const select = (tab) => {
    tabList.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    tab.focus();
  };
  tabList.forEach((tab, i) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', (e) => {
      const map = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabList.length - 1 };
      if (e.key in map) {
        e.preventDefault();
        select(tabList[(map[e.key] + tabList.length) % tabList.length]);
      }
    });
  });
});

// ==========================================================
// PLANS (US47)
// ==========================================================
$$('[data-plan]').forEach((b) =>
  b.addEventListener('click', () => {
    $('#selected-plan').textContent = i18n.t('plan') + b.dataset.plan;
    $('#contact').scrollIntoView();
    $('#df-name').focus({ preventScroll: true });
  }),
);

// ==========================================================
// DEMO REQUEST FORM (US51)
// ==========================================================
const FREE_DOMAINS = /@(gmail|hotmail|outlook|yahoo)\./i;
$('#demo-form').addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;
  [
    ['#df-name', '#df-name-err'],
    ['#df-company', '#df-company-err'],
  ].forEach(([i, h]) => {
    const empty = !$(i).value.trim();
    setFieldState($(i), $(h), empty ? i18n.t('required') : '');
    if (empty) valid = false;
  });
  const email = $('#df-email');
  const emailOk = email.checkValidity() && email.value && !FREE_DOMAINS.test(email.value);
  setFieldState(email, $('#df-email-err'), emailOk ? '' : i18n.t('email'));
  if (!emailOk) valid = false;
  const status = $('#demo-status');
  if (!valid) {
    status.textContent = '';
    $('#demo-form .is-invalid').focus();
    return;
  }
  status.textContent = i18n.t('demoOk');
  status.className = 'form-status ok';
  e.target.reset();
  $$('#demo-form input').forEach((i) => i.classList.remove('is-valid'));
});

// ==========================================================
// NEWSLETTER (US54)
// ==========================================================
const subscribers = new Set();
$('#newsletter-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = $('#nl-email');
  const status = $('#nl-status');
  const value = input.value.trim().toLowerCase();
  if (!input.checkValidity() || !value) {
    status.textContent = i18n.t('email');
    status.className = 'form-status err';
    input.setAttribute('aria-invalid', 'true');
    return;
  }
  input.removeAttribute('aria-invalid');
  if (subscribers.has(value)) {
    status.textContent = i18n.t('nlDup');
    status.className = 'form-status err';
    return;
  }
  subscribers.add(value);
  status.textContent = i18n.t('nlOk');
  status.className = 'form-status ok';
  input.value = '';
});

// ==========================================================
// DEMO: SIMULATED DATA (in memory, resets on reload)
// ==========================================================
const demoData = {
  orders: {
    'OF-02548': {
      client: 'Cerro Verde',
      recipe: 'PCR-0091 · WC-10Co-4Cr',
      equipment: 'JP-5000 · Cabina HVOF 2',
    },
    'OF-02551': {
      client: 'Las Bambas',
      recipe: 'PCR-0088 · WC-10Co-4Cr',
      equipment: 'JP-5000 · Cabina HVOF 2',
    },
  },
  parameters: [
    {
      id: 'pressure',
      name: 'Presión de cámara',
      unit: 'bar',
      min: 6.8,
      max: 7.6,
      base: 7.2,
      noise: 0.08,
      decimals: 2,
    },
    {
      id: 'oxygen',
      name: 'Flujo de oxígeno',
      unit: 'SCFH',
      min: 1850,
      max: 1950,
      base: 1900,
      noise: 12,
      decimals: 0,
    },
    {
      id: 'kerosene',
      name: 'Flujo de kerosene',
      unit: 'GPH',
      min: 5.8,
      max: 6.2,
      base: 6.0,
      noise: 0.04,
      decimals: 2,
    },
    {
      id: 'powder',
      name: 'Alimentación de polvo',
      unit: 'g/min',
      min: 70,
      max: 80,
      base: 75,
      noise: 1,
      decimals: 0,
    },
    {
      id: 'substrate',
      name: 'Temp. de sustrato',
      unit: '°C',
      min: 0,
      max: 150,
      base: 142,
      noise: 1.5,
      decimals: 0,
    },
  ],
  causes: [
    ['Obstrucción parcial de boquilla', 72],
    ['Variación en suministro de O₂', 18],
    ['Desgaste del inyector de polvo', 10],
  ],
  activeSessions: [
    { of: 'OF-02551', detail: 'JP-5000 · Cabina 1 · Luis Q.', status: 'EN SESIÓN' },
    { of: 'OF-02553', detail: 'DJ-2700 · Cabina 3 · Ana P.', status: 'ALERTA' },
  ],
  pieces: [
    {
      sn: 'EB-7734',
      name: 'Eje de bomba',
      of: 'OF-02541',
      wo: 'WO-01571',
      client: 'Cerro Verde',
      status: 'COMPLETADA',
      inspected: true,
      timeline: [
        ['Recepción de la pieza', 'Desgaste 0.6 mm', 'done', '10/09'],
        ['Rociado HVOF · S-0187', '5/5 parámetros dentro de PCR', 'done', '18/09'],
        ['Inspección post-proceso', '0.30 mm · 1 150 HV', 'done', '19/09'],
        ['Certificado', 'Pendiente de emisión', 'now', ''],
      ],
      previous: [['OF-02312 · 2025', 'Vida real 3 100 h · PCR 3 000 h']],
    },
    {
      sn: 'VS-1120',
      name: 'Vástago',
      of: 'OF-02546',
      wo: 'WO-01580',
      client: 'Las Bambas',
      status: 'CON ALERTA',
      inspected: false,
      timeline: [
        ['Recepción de la pieza', '', 'done', '24/09'],
        ['Rociado HVOF · S-0191', '1 alerta atendida', 'done', '30/09'],
        ['Inspección post-proceso', 'Pendiente', 'todo', ''],
        ['Certificado', 'Bloqueado hasta la inspección', 'todo', ''],
      ],
      previous: [],
    },
    {
      sn: 'MG-0310',
      name: 'Manga de desgaste',
      of: 'OF-02530',
      wo: 'WO-01560',
      client: 'Chinalco',
      status: 'COMPLETADA',
      inspected: true,
      timeline: [
        ['Recepción de la pieza', '', 'done', '02/09'],
        ['Rociado HVOF · S-0179', 'Telemetría incompleta 09:30–09:41', 'done', '11/09'],
        ['Inspección post-proceso', '0.31 mm · 1 120 HV', 'done', '12/09'],
        ['Certificado CE-0339', 'Emitido', 'done', '12/09'],
      ],
      previous: [],
    },
  ],
  alertHistory: [
    ['AL-0417', 'Presión de cámara', '30/09 · 7.9 bar · OF-02548', 'ATENDIDA'],
    ['AL-0398', 'Presión de cámara', '24/09 · 7.8 bar · OF-02533', 'RESUELTA'],
    ['AL-0390', 'Temp. de sustrato', '21/09 · 153 °C · OF-02529', 'RESUELTA'],
    ['AL-0371', 'Flujo de oxígeno', '18/09 · 1 812 SCFH · OF-02521', 'CRÍTICA'],
  ],
  compare: [
    ['Presión cámara', '6.8–7.6', '7.2'],
    ['Flujo O₂', '1850–1950', '1902'],
    ['Kerosene', '5.8–6.2', '6.0'],
    ['Polvo', '70–80', '74'],
    ['Temp. sustrato', '≤150', '138'],
  ],
  reports: [
    ['CE-0339', 'Certificado · OF-02530 · Chinalco', 'EMITIDO'],
    ['RT-0214', 'Reporte técnico · OF-02537 · Las Bambas', 'BORRADOR'],
  ],
  equipment: [
    ['JP-5000 · Cabina 1', 'Última sesión 09:10', 'DISPONIBLE'],
    ['JP-5000 · Cabina 2', 'OF-02548 · Manuel T.', 'EN SESIÓN'],
    ['DJ-2700 · Cabina 3', 'Cambio de boquilla programado', 'MANTENIMIENTO'],
  ],
  stops: [
    ['30/09 · 6 min', 'Obstrucción de boquilla · JP-5000 C2'],
    ['24/09 · 22 min', 'Variación de O₂ · JP-5000 C2'],
  ],
  components: [
    {
      sn: 'EB-7734',
      name: 'Eje de bomba',
      supplier: 'Recumet S.A.C.',
      hours: 2850,
      pcr: 3000,
      cert: 'CE-0342',
      coating: 'WC-10Co-4Cr · HVOF',
    },
    {
      sn: 'VS-1120',
      name: 'Vástago',
      supplier: 'Recumet S.A.C.',
      hours: 1200,
      pcr: 3000,
      cert: null,
      coating: 'WC-10Co-4Cr · HVOF',
    },
    {
      sn: 'MG-0310',
      name: 'Manga de desgaste',
      supplier: 'Metalizados del Sur',
      hours: 3400,
      pcr: 3000,
      cert: 'CE-0301',
      coating: 'Cr3C2-NiCr · HVOF',
    },
    {
      sn: 'MG-0287',
      name: 'Manga de desgaste',
      supplier: 'Metalizados del Sur',
      hours: 2160,
      pcr: 3000,
      cert: 'CE-0288',
      coating: 'Cr3C2-NiCr · HVOF',
    },
  ],
  requests: [['SR-0018', 'VS-1098 · Recumet · Dictamen: no procede', 'RECHAZADA']],
  shared: [
    ['RT-0198', 'VS-1120 · Recuperación · 02/08', 'COMPARTIDO'],
    ['CE-0301', 'MG-0310 · Certificado · 15/07', 'EMITIDO'],
  ],
};

// ==========================================================
// DEMO: SHARED STATE AND HELPERS
// ==========================================================
const CHIP = {
  NOMINAL: 'ok',
  'EN RANGO': 'ok',
  COMPLETADA: 'ok',
  DISPONIBLE: 'ok',
  RESUELTA: 'ok',
  EMITIDO: 'ok',
  ATENDIDA: 'warn',
  ALERTA: 'warn',
  'CON ALERTA': 'warn',
  'EN REVISIÓN': 'warn',
  MANTENIMIENTO: 'warn',
  PAUSADA: 'warn',
  PRÓXIMO: 'warn',
  'FUERA DE RANGO': 'err',
  CRÍTICA: 'err',
  RECHAZADA: 'err',
  VENCIDO: 'err',
  'EN SESIÓN': 'info',
  BORRADOR: 'info',
  COMPARTIDO: 'info',
  ENVIADA: 'info',
};
const chip = (label) => `<span class="chip chip-${CHIP[label] || 'neutral'}">${label}</span>`;
const fmt = (v, d) =>
  v.toLocaleString('es-PE', { minimumFractionDigits: d, maximumFractionDigits: d });

const state = {
  session: null,
  timer: null,
  deviation: false,
  alertOpen: false,
  alerts: 0,
  sessions: 2,
  history: {},
  selectedPiece: null,
  reports: [...demoData.reports],
  requests: [...demoData.requests],
  shared: [...demoData.shared],
  lastHours: 2610,
  pressureRange: [6.8, 7.6],
  recipeVersion: 3,
  toleranceSeconds: 30,
};

/* ---------- Charts (SVG) ---------- */
function drawChart(svg, values, min, max, lo, hi) {
  const W = 320,
    H = 120,
    pad = 6;
  const y = (v) => H - pad - ((v - min) / (max - min)) * (H - pad * 2);
  const x = (i) => pad + (i * (W - pad * 2)) / Math.max(values.length - 1, 1);
  const pts = values.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const dots = values
    .map((v, i) =>
      v > hi || v < lo ? `<circle cx="${x(i)}" cy="${y(v)}" r="4" fill="#C62828"/>` : '',
    )
    .join('');
  svg.innerHTML = `<rect x="0" y="${y(hi)}" width="${W}" height="${y(lo) - y(hi)}" fill="#DDF3E3"/>
    <line x1="0" x2="${W}" y1="${y(hi)}" y2="${y(hi)}" stroke="#1E8E3E" stroke-dasharray="4 3"/>
    <line x1="0" x2="${W}" y1="${y(lo)}" y2="${y(lo)}" stroke="#1E8E3E" stroke-dasharray="4 3"/>
    <polyline points="${pts}" fill="none" stroke="#00B4D8" stroke-width="2.5" stroke-linejoin="round"/>${dots}`;
}

// ==========================================================
// DEMO: OPERATOR SHIFT AND LIVE SESSION (US01-US06)
// ==========================================================
/* ---------- Operator: US06 · US01 · US02 ---------- */
function renderShift() {
  $('#stat-sessions').textContent = state.sessions;
  $('#stat-alerts').textContent = state.alerts;
  $('#stat-status').textContent = state.session
    ? state.session.paused
      ? 'PAUSADA'
      : 'EN SESIÓN'
    : 'DISPONIBLE';
}

const ofInput = $('#of-input');
ofInput.addEventListener('blur', validateOrder);
function validateOrder() {
  const value = ofInput.value.trim().toUpperCase();
  const order = demoData.orders[value];
  if (!value) {
    setFieldState(ofInput, $('#of-help'), 'Ingresa la OF.');
    return null;
  }
  if (!order) {
    setFieldState(ofInput, $('#of-help'), 'OF no encontrada. Verifica el código.');
    return null;
  }
  setFieldState(ofInput, $('#of-help'), `OF encontrada · Cliente ${order.client}`, true);
  return { of: value, ...order };
}

$('#session-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const order = validateOrder();
  const wo = $('#wo-input'),
    comp = $('#component-input');
  setFieldState(wo, null, wo.value.trim() ? '' : 'x');
  setFieldState(comp, null, comp.value ? '' : 'x');
  if (!order || !wo.value.trim() || !comp.value) {
    showToast('Completa los campos obligatorios para continuar.');
    return;
  }
  if (state.session) {
    showToast('El equipo ya tiene una sesión activa. Finalízala antes de iniciar otra.');
    return;
  }
  state.pending = { ...order, wo: wo.value.trim().toUpperCase(), component: comp.value };
  $('#confirm-summary').innerHTML = [
    ['OF', order.of],
    ['Cliente', order.client],
    ['WO', state.pending.wo],
    ['Componente', comp.value],
    ['Receta', order.recipe],
    ['Equipo', order.equipment],
  ]
    .map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`)
    .join('');
  $('#session-form').hidden = true;
  $('#confirm-card').hidden = false;
  $('#start-btn').focus();
});
$('#edit-btn').addEventListener('click', () => {
  $('#confirm-card').hidden = true;
  $('#session-form').hidden = false;
  ofInput.focus();
});
$('#start-btn').addEventListener('click', startSession);

/* ---------- Operator: US03 · US04 · US05 ---------- */
function startSession() {
  state.session = { ...state.pending, id: 'S-0192', seconds: 0, paused: false };
  state.history = Object.fromEntries(demoData.parameters.map((p) => [p.id, []]));
  $('#confirm-card').hidden = true;
  $('#session-form').hidden = false;
  $('#session-form').reset();
  setFieldState(ofInput, $('#of-help'), '');
  $('#simulate-btn').disabled = false;
  $('#finish-btn').disabled = false;
  $('#trend-param').innerHTML = demoData.parameters
    .map((p) => `<option value="${p.id}">${p.name}</option>`)
    .join('');
  showToast(`Monitoreo iniciado · ${state.session.id} asociada a ${state.session.of}`, 'ok');
  state.timer = setInterval(tick, 1000);
  tick();
}

function tick() {
  const s = state.session;
  if (!s || s.paused) return;
  s.seconds += 1;
  const rows = demoData.parameters.map((p) => {
    let v = p.base + (Math.random() * 2 - 1) * p.noise;
    if (state.deviation && p.id === 'pressure') v = 7.85 + Math.random() * 0.1;
    const hist = state.history[p.id];
    hist.push(v);
    if (hist.length > 30) hist.shift();
    const [lo, hi] = p.id === 'pressure' ? state.pressureRange : [p.min, p.max];
    const status = v > hi || v < lo ? 'ALERTA' : 'NOMINAL';
    return `<tr class="${status === 'ALERTA' ? 'row-warn' : ''}"><th scope="row">${p.name}</th><td class="mono">${fmt(v, p.decimals)} ${p.unit}</td><td class="mono">${p.min ? fmt(lo, p.decimals) + '–' : '≤ '}${fmt(hi, p.decimals)}</td><td>${chip(status)}</td></tr>`;
  });
  $('#params-body').innerHTML = rows.join('');
  const mm = String(Math.floor(s.seconds / 60)).padStart(2, '0'),
    ss = String(s.seconds % 60).padStart(2, '0');
  $('#session-meta').textContent =
    `${s.of} · ${s.id} · ${s.component} · ${s.recipe} · 00:${mm}:${ss}`;
  $('#session-chip').outerHTML =
    `<span class="chip chip-${state.deviation ? 'warn' : 'info'}" id="session-chip">${state.deviation ? 'ALERTA' : 'EN SESIÓN'}</span>`;
  const p =
    demoData.parameters.find((x) => x.id === $('#trend-param').value) || demoData.parameters[0];
  const [lo, hi] = p.id === 'pressure' ? state.pressureRange : [p.min, p.max];
  const span = hi - lo || hi;
  drawChart(
    $('#trend-chart'),
    state.history[p.id],
    (p.min ? lo : hi * 0.8) - span * 0.6,
    hi + span * 0.6,
    p.min ? lo : 0,
    hi,
  );
  if (state.deviation && !state.alertOpen) raiseAlert();
  renderShift();
}

$('#finish-btn').addEventListener('click', () => {
  $('#finish-form').hidden = false;
  $('#finish-reason').focus();
});
$('#finish-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const reason = $('#finish-reason');
  if (!reason.value) {
    setFieldState(reason, $('#finish-help'), 'El motivo es obligatorio para la trazabilidad.');
    reason.focus();
    return;
  }
  setFieldState(reason, $('#finish-help'), '');
  const action = e.target.finishAction.value;
  if (action === 'pause') {
    state.session.paused = !state.session.paused;
    showToast(state.session.paused ? `Sesión pausada · ${reason.value}` : 'Sesión reanudada', 'ok');
    $('#session-chip').outerHTML =
      `<span class="chip chip-warn" id="session-chip">${state.session.paused ? 'PAUSADA' : 'EN SESIÓN'}</span>`;
  } else {
    clearInterval(state.timer);
    showToast(`Sesión ${state.session.id} finalizada · ${reason.value}`, 'ok');
    state.session = null;
    state.deviation = false;
    state.sessions += 1;
    $('#session-chip').outerHTML =
      `<span class="chip chip-neutral" id="session-chip">SIN SESIÓN</span>`;
    $('#session-meta').textContent =
      'Sesión finalizada. Inicia una nueva sesión para ver los parámetros.';
    $('#simulate-btn').disabled = true;
    $('#finish-btn').disabled = true;
  }
  e.target.hidden = true;
  e.target.reset();
  renderShift();
});

renderShift();

// ==========================================================
// DEMO: OPERATOR ALERTS AND ACTIONS (US08-US18)
// ==========================================================
/* ---------- Operator: US08 · US09 · US10 · US13 · US14 · US15 · US16 · US18 ---------- */
$('#simulate-btn').addEventListener('click', () => {
  state.deviation = true;
});
function raiseAlert() {
  state.alertOpen = true;
  state.alerts += 1;
  showToast('ALERTA · Presión de cámara 7.9 bar fuera de rango (6.8 – 7.6) · ' + state.session.of);
  if ('Notification' in window && Notification.permission === 'granted')
    new Notification('EdgeWatch · ALERTA', { body: 'Presión de cámara fuera de rango' });
  $('#alert-text').innerHTML =
    `<strong>Presión de cámara fuera de rango.</strong> Valor 7.9 bar · Rango PCR ${state.pressureRange.join(' – ')} bar · Tolerancia ${state.toleranceSeconds} s. Equipo ${state.session.equipment}, operador Manuel T.`;
  $('#alert-chip').outerHTML = `<span class="chip chip-warn" id="alert-chip">ALERTA</span>`;
  $('#alert-card').hidden = false;
}
$('#review-btn').addEventListener('click', () => {
  $('#alert-chip').outerHTML = `<span class="chip chip-ok" id="alert-chip">REVISADA</span>`;
  showToast('Alerta AL-0417 marcada como revisada.', 'ok');
});
$('#diagnosis-btn').addEventListener('click', () => {
  $('#causes').innerHTML = demoData.causes
    .map(
      ([c, p], i) =>
        `<li><div class="bar-label"><span>${i + 1}. ${c}</span><span class="mono">${p} %</span></div><div class="track"><span style="width:${p}%"></span></div></li>`,
    )
    .join('');
  $('#diagnosis-card').hidden = false;
  $('#action-form').hidden = false;
  $('#diagnosis-card').scrollIntoView({ block: 'nearest' });
});
$('#notify-btn').addEventListener('click', () =>
  showToast(
    'Aviso enviado a mantenimiento (Jorge R., técnico de turno) con el diagnóstico de AL-0417.',
    'ok',
  ),
);

$('#action-photo').addEventListener('change', (e) => {
  const file = e.target.files[0],
    help = $('#photo-help'),
    img = $('#photo-preview');
  if (!file) return;
  if (file.size > 5 * 1024 * 1024) {
    setFieldState(e.target, help, 'La foto supera 5 MB. Elige una imagen más liviana.');
    e.target.value = '';
    img.hidden = true;
    return;
  }
  setFieldState(e.target, help, `${file.name} adjunta`, true);
  img.src = URL.createObjectURL(file);
  img.hidden = false;
});
$('#action-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const cause = $('#action-cause');
  if (!cause.value) {
    setFieldState(cause, $('#cause-help'), 'Selecciona la causa confirmada.');
    cause.focus();
    return;
  }
  setFieldState(cause, $('#cause-help'), '');
  state.deviation = false;
  $('#alert-chip').outerHTML = `<span class="chip chip-ok" id="alert-chip">ATENDIDA</span>`;
  showToast(
    `Acción registrada: ${$('#action-taken').value} · ${cause.value}${$('#action-stopped').checked ? ' · sesión detenida' : ''}. Supervisor notificado.`,
    'ok',
  );
  e.target.hidden = true;
  $('#diagnosis-card').hidden = true;
});
