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
