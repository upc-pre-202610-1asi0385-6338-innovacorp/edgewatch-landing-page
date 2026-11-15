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
