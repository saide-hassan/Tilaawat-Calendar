
// ═══════════════════════════════════
// DATA
// ═══════════════════════════════════
const DAYS = [
  { day: 1, from: "Al-Fatihah", fromAr: "الفاتحة", fromV: "1", fromVAr: "١", to: "Al-Baqarah", toAr: "البقرة", toV: "141", toVAr: "١٤١" },
  { day: 2, from: "Al-Baqarah", fromAr: "البقرة", fromV: "142", fromVAr: "١٤٢", to: "Al-Baqarah", toAr: "البقرة", toV: "252", toVAr: "٢٥٢" },
  { day: 3, from: "Al-Baqarah", fromAr: "البقرة", fromV: "253", fromVAr: "٢٥٣", to: "Aal-Imran", toAr: "آل عمران", toV: "91", toVAr: "٩١" },
  { day: 4, from: "Aal-Imran", fromAr: "آل عمران", fromV: "92", fromVAr: "٩٢", to: "An-Nissa", toAr: "النساء", toV: "23", toVAr: "٢٣" },
  { day: 5, from: "An-Nissa", fromAr: "النساء", fromV: "24", fromVAr: "٢٤", to: "An-Nissa", toAr: "النساء", toV: "147", toVAr: "١٤٧" },
  { day: 6, from: "An-Nissa", fromAr: "النساء", fromV: "148", fromVAr: "١٤٨", to: "Al-Ma'idah", toAr: "المائدة", toV: "81", toVAr: "٨١" },
  { day: 7, from: "Al-Ma'idah", fromAr: "المائدة", fromV: "82", fromVAr: "٨٢", to: "Al-na'am", toAr: "الأنعام", toV: "110", toVAr: "١١٠" },
  { day: 8, from: "Al-na'am", fromAr: "الأنعام", fromV: "111", fromVAr: "١١١", to: "Al-a'raf", toAr: "الأعراف", toV: "87", toVAr: "٨٧" },
  { day: 9, from: "Al-a'raf", fromAr: "الأعراف", fromV: "88", fromVAr: "٨٨", to: "Al-anfal", toAr: "الأنفال", toV: "40", toVAr: "٤٠" },
  { day: 10, from: "Al-anfal", fromAr: "الأنفال", fromV: "41", fromVAr: "٤١", to: "At-tawbah", toAr: "التوبة", toV: "92", toVAr: "٩٢" },
  { day: 11, from: "At-tawbah", fromAr: "التوبة", fromV: "93", fromVAr: "٩٣", to: "Hud", toAr: "هود", toV: "5", toVAr: "٥" },
  { day: 12, from: "Hud", fromAr: "هود", fromV: "6", fromVAr: "٦", to: "Yussuf", toAr: "يوسف", toV: "52", toVAr: "٥٢" },
  { day: 13, from: "Yussuf", fromAr: "يوسف", fromV: "53", fromVAr: "٥٣", to: "Ibrahim", toAr: "إبراهيم", toV: "52", toVAr: "٥٢" },
  { day: 14, from: "Al-Hijr", fromAr: "الحجر", fromV: "1", fromVAr: "١", to: "Na-nahl", toAr: "النحل", toV: "128", toVAr: "١٢٨" },
  { day: 15, from: "A-Isra'", fromAr: "الإسراء", fromV: "1", fromVAr: "١", to: "Al-Kahf", toAr: "الكهف", toV: "74", toVAr: "٧٤" },
  { day: 16, from: "Al-Kahf", fromAr: "الكهف", fromV: "75", fromVAr: "٧٥", to: "Tua-ha", toAr: "طه", toV: "135", toVAr: "١٣٥" },
  { day: 17, from: "Al-Ambiya'", fromAr: "الأنبياء", fromV: "1", fromVAr: "١", to: "Al-hajj", toAr: "الحج", toV: "78", toVAr: "٧٨" },
  { day: 18, from: "Al-Mu'minun", fromAr: "المؤمنون", fromV: "1", fromVAr: "١", to: "Al-Furqan", toAr: "الفرقان", toV: "20", toVAr: "٢٠" },
  { day: 19, from: "Al-Furqan", fromAr: "الفرقان", fromV: "21", fromVAr: "٢١", to: "An-Naml", toAr: "النمل", toV: "55", toVAr: "٥٥" },
  { day: 20, from: "An-Naml", fromAr: "النمل", fromV: "56", fromVAr: "٥٦", to: "Al-Ankabut", toAr: "العنكبوت", toV: "45", toVAr: "٤٥" },
  { day: 21, from: "Al-Ankabut", fromAr: "العنكبوت", fromV: "46", fromVAr: "٤٦", to: "Al-Ahzab", toAr: "الأحزاب", toV: "30", toVAr: "٣٠" },
  { day: 22, from: "Al-Ahzab", fromAr: "الأحزاب", fromV: "31", fromVAr: "٣١", to: "Yaa-Siin", toAr: "يس", toV: "27", toVAr: "٢٧" },
  { day: 23, from: "Yaa-Siin", fromAr: "يس", fromV: "28", fromVAr: "٢٨", to: "Az-Zumar", toAr: "الزمر", toV: "31", toVAr: "٣١" },
  { day: 24, from: "Az-Zumar", fromAr: "الزمر", fromV: "32", fromVAr: "٣٢", to: "Fussilat", toAr: "فصلت", toV: "46", toVAr: "٤٦" },
  { day: 25, from: "Fussilat", fromAr: "فصلت", fromV: "47", fromVAr: "٤٧", to: "Al-Jathiya", toAr: "الجاثية", toV: "37", toVAr: "٣٧" },
  { day: 26, from: "Al-Ahkaaf", fromAr: "الأحقاف", fromV: "1", fromVAr: "١", to: "Adh-Dhariyat", toAr: "الذاريات", toV: "30", toVAr: "٣٠" },
  { day: 27, from: "Adh-Dhariyat", fromAr: "الذاريات", fromV: "31", fromVAr: "٣١", to: "Al-Hadid", toAr: "الحديد", toV: "29", toVAr: "٢٩" },
  { day: 28, from: "Al-Mujadila", fromAr: "المجادلة", fromV: "1", fromVAr: "١", to: "At-tahrim", toAr: "التحريم", toV: "12", toVAr: "١٢" },
  { day: 29, from: "Al-Mulk", fromAr: "الملك", fromV: "1", fromVAr: "١", to: "Al-Mursalaat", toAr: "المرسلات", toV: "50", toVAr: "٥٠" },
  { day: 30, from: "An-Naba'", fromAr: "النبأ", fromV: "1", fromVAr: "١", to: "An-Naas", toAr: "الناس", toV: "6", toVAr: "٦" }
];
const JUZ_AR = ["الأول", "الثاني", "الثالث", "الرابع", "الخامس", "السادس", "السابع", "الثامن", "التاسع", "العاشر", "الحادي عشر", "الثاني عشر", "الثالث عشر", "الرابع عشر", "الخامس عشر", "السادس عشر", "السابع عشر", "الثامن عشر", "التاسع عشر", "العشرون", "الحادي والعشرون", "الثاني والعشرون", "الثالث والعشرون", "الرابع والعشرون", "الخامس والعشرون", "السادس والعشرون", "السابع والعشرون", "الثامن والعشرون", "التاسع والعشرون", "الثلاثون"];

// ═══════════════════════════════════
// STORAGE
// ═══════════════════════════════════
const LS = {
  get: (k, d) => { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v) } catch { return d } },
  set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)) } catch { } }
};

// ═══════════════════════════════════
// STATE
// ═══════════════════════════════════
const S = {
  read: LS.get('qr_read', []),
  startDate: LS.get('qr_start', null),
  readingTime: LS.get('qr_time', '05:00'),
  notifOn: LS.get('qr_notif', false),
  darkMode: LS.get('qr_dark', true),
  selectedDay: null
};

// ═══════════════════════════════════
// HELPERS
// ═══════════════════════════════════
function todayStr() { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}` }
function juzForToday() { if (!S.startDate) return -1; const diff = Math.round((new Date(todayStr()) - new Date(S.startDate)) / 86400000); return (diff < 0 || diff >= 30) ? -1 : diff + 1 }
function juzDate(n) { if (!S.startDate) return null; const d = new Date(S.startDate + 'T00:00:00'); d.setDate(d.getDate() + n - 1); return d.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: 'short' }) }
function fmtDate(s) { if (!s) return '—'; const d = new Date(s + 'T00:00:00'); return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }) }

// ═══════════════════════════════════
// SERVICE WORKER
// ═══════════════════════════════════
async function registerSW() {
  if (!('serviceWorker' in navigator)) { setSWStatus('<i class="fa-solid fa-xmark"></i>', 'Não suportado neste browser'); return }
  try {
    // Embed SW inline as blob — works offline without a separate sw.js file
    const swCode = `// ╔══════════════════════════════════════════╗
// ║  QURAN CALENDAR — SERVICE WORKER v3      ║
// ║  Offline cache + background notifications║
// ╚══════════════════════════════════════════╝

const CACHE  = 'quran-v3';
const ASSETS = ['./index.html', './manifest.json', 'data:image/png;base64,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', './icon-512.png'];

// ── Install: cache all assets ──────────────
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

// ── Activate: clean old caches ─────────────
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => clients.claim())
  );
});

// ── Fetch: serve from cache first ──────────
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).catch(() => caches.match('./index.html')))
  );
});

// ── Alarm state ────────────────────────────
let alarmTimer   = null;
let alarmPayload = null;

// ── Messages from the app ──────────────────
self.addEventListener('message', e => {
  const { type, payload } = e.data || {};
  if (type === 'SCHEDULE_ALARM') { alarmPayload = payload; scheduleAlarm(payload); }
  if (type === 'CANCEL_ALARM')   { cancelAlarm(); }
  if (type === 'PING')           { e.source && e.source.postMessage({ type: 'PONG' }); }
});

function cancelAlarm() {
  if (alarmTimer) { clearTimeout(alarmTimer); alarmTimer = null; }
}

function scheduleAlarm(payload) {
  cancelAlarm();
  const { timeStr, juzNum, fromSurat, toSurat } = payload;
  const [h, m] = timeStr.split(':').map(Number);
  const now    = new Date();
  const target = new Date();
  target.setHours(h, m, 0, 0);
  if (target <= now) target.setDate(target.getDate() + 1);
  const delay  = target - now;

  alarmTimer = setTimeout(() => {
  showQuranNotification(juzNum, fromSurat, toSurat);
    // Reschedule same time tomorrow
    if (alarmPayload) scheduleAlarm(alarmPayload);
  }, delay);
}

function showQuranNotification(juzNum, fromSurat, toSurat) {
  const title = 'Hora da Leitura do Alcorão';
  const body  = \`Juz \${juzNum}: \${fromSurat} \u2192 \${toSurat}\nQue Allah aceite. \u0622\u0645\u064A\u0646\`;
  return self.registration.showNotification(title, {
    body,
    icon:      'data:image/png;base64,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',
    badge:     'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAHmElEQVR4nO2dzXUbOwxG6XeyyiIFpAx34GZclJtxB24pb6HD47E9mh8NCXwA7l1m4QyB7xLUaCQ9/f7z918DKMp/3hcA4AkCQGkQAEqDAFAaBIDSIACUBgGgNAgApUEAKA0CQGkQAEqDAFAaBIDSIACU5pf3BWTm/e15yN95ef0Y8nfgJ098HuA6o4J+FsS4DgKcxCvsR0GKcyDAAdRDfw9k2AcBVoga+D0Q4icIsCBr8L+DCJ+UF6BK6O9RXYayAlQP/neqilBOAIK/TTURyghA8M9RRYT0AhD8a2QXIfWzQIT/OtlrmHICZG+aFxmnQSoBCL4NmURIcwQi/HZkqnUKATI1JApZah76CBShCVePCxXW6ElYAdSCYR2C6usfRUgBFJqv1nBq8hihBPBucpQGU6fjhBGAjx0+BnXbJoQAHk2M0sCjUMN15AWwblyEpl2Ben5FWgDLZqk3ajTU9oasAFYNUm6OBdXrLCmARVNUG+JF1ZrLPQpRtRHeWNTE+/bsGlITYHaBCP4xKvVBZgJUKro6s2ulNAlkBJgJ4T9PlZpJHIFm7QhVmjibzP1xnwCZi5uFWbVUOAq5CkD445BVAvcJMBrCP4+MtXUTYIb5GRukxowae04BFwEIf2wySWAuAOHPQRYJwr8GIPx+ZKi9qQCjDc/QgOiM7oH1FAj7M6nRwn+2sZHW9/L64X4781HM3gkeWSD1cFR9fyNij00mQNTd4QwWa1z+H+oyXOX97dlkjeGOQEqN9xRbUYaIR6HpR6CIY3EP1SZnrM/sNYW5DarQ3Pe3Z9nwt6ZzfQq9OspUARSaMYpIa4l0rXvMXkuICeC5o6jsqmfxvu4oU2CaAKOK7x3+6GSQYOYawt0FskIh/GcDdO+arW4pRmTKXaDIu3+GHbOztpbINZ1x7SFeA1jh+U3KM5q79ncVJpsSshMg+y+ueB1J+joj1jfEBIi4w1QJ//L/pk83JI9AlgGx/pZkhRej/Tr4hujBAkTcVaxQPHKohnKL0RmTmwDZdn+VXV8BxTrICWBF5m+h7mtjIu8jJYBVYDKHXx21ugwTgN3mE6XHNzL2ZeSapCaABXwNOyyRESDDL5R4h3/rWSAlvOu0ZIgAagWG/IzKXJmnQTPv/kfWpvgZYgUkBIjekGhPWHo9D7RE5QP0EgLMRqHQoxi5FqZCEQFmYh2ckQ+zVQ39kssCZNpdz+J9hOhk/trFLUZ80s19AlT6Sc5ZHJkKiqFXeB0g8z4AgAcI8CCqO+qZf4fkAniPV9AntQCzUN5Rv1+b8rUqcEkAdljw5moGXScAuxN4Z4AjUEJ6qLzDFYG0AlT9mSI4R1oBqoOox0AAKA0CQGkQAEqDAFAaBIDSIACUBgGgNAgApUEAKA0CQGnSCjDrUQAeAc9FWgEAjuAqALspeGfgkgA8cQjeXM0gR6AH8N61YBypBWBCwR6pBZgJUyAHCAClcRcg8w9XwDYKU/SyAJUDptDAyozInvsEiA4SxKaEAJWnFGwjIUD0XTT69XugUjMJASzghzhgjSECcMQAa0ZlTmYCWOygTAENlOokI4AVSABLhgnAMegTJJjLyKxJTQCr4FjIigTrqNVFSgBLkABaExTAMjRWEiDCDcU6DBWA1wH3UWy+4jXtMTpjchOgtXxToKMyDfp1WK9dkeECRJwC1tfsGYb+f9OnG0+///z9N/qPjmpwlWBavzcRta4zrlvyCOSF164462i09ncj7vwzmTIBWtO2/ggKZ9aza9+65uh1nHX9v6b81QS8vH64S6AengxMOwKNKrpnCDMEx3MNEQQO8RrAW4KIInhft/f0PMpUASIG5x6R1hLpWveYvZYQE6A1jR3Fe1fdQ+X6FHp1lGl3gZaMLIhCgzsqjc5aE4t1hbsLZP0W/hbL67CWQaUGS1Q2hDOYCKBwS3E2FjIohn4WVms1OQJ1oo3HkZxde/b1bWG59nBHoI7SUegIka71LJGnu+ldoNEhiFz4LIzugfVGEeY26D2QwI8MtTcXYIbhGRoRjRk19zgmukwAJIhNlvC35ngEQoKYZAp/awleA3wHCeaRsbauAswyP2OjvMn65p77BEACfbKGvzXjd4K3mBlYhUJHpEJP3CeABUyD81SpmYwAfG25DpV+ulbmCNTJ8EMZUalYe5kJ0OFbm32oGP7WBCdAJ9NvBShTvc6yArSW90tyFaC2N6QFaI2PGo6Gen5FXoDWfM7s6o07CzVcJ4QAreX95ubZULdtwgjQmv/dmyhNpU7HCSVAx7vBrek1mZo8RkgBWtNo+JKoPzoxiojhby2wAK3phWCNq8GosEZPQgvQiRCSjEQOfkfuUYhHyNCIaGSpeQoBWsvTkAhkqnWKI9B3OBLNIVPwOykF6CDCGDIGv5PmCLRG5sZZkb2GqSfAEqbBObIHv1NGgA4ibFMl+J1yAnQQ4SvVgt8pK0CnughVg98pL8CSKjJUD/0SBFghqwgE/ycIcICoQhD4fRDgJOoyEPpzIMAA+NhhXBBgIqPEIOjzQAAoTepngQD2QAAoDQJAaRAASoMAUBoEgNIgAJQGAaA0CAClQQAoDQJAaRAASoMAUBoEgNL8D1MZeDcoDO8iAAAAAElFTkSuQmCC',
    tag:       'quran-daily',
    renotify:  true,
    vibrate:   [300, 150, 300, 150, 600],
    silent:    false,
    data:      { juzNum, fromSurat, toSurat },
    actions: [
    { action: 'open',    title: 'Abrir app' },
    { action: 'dismiss', title: 'Dispensar'  }
    ]
  });
}

// ── Notification click ─────────────────────
self.addEventListener('notificationclick', e => {
  e.notification.close();
  if (e.action === 'dismiss') return;
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      for (const c of list) { if ('focus' in c) return c.focus(); }
      if (clients.openWindow) return clients.openWindow('./');
    })
  );
});

// ── Push (future server-push support) ──────
self.addEventListener('push', e => {
  const data = e.data ? e.data.json() : {};
  e.waitUntil(
    self.registration.showNotification(data.title || '\uD83D\uDD4C Alcorão', {
      body: data.body || 'Hora da leitura diária!', icon: 'data:image/png;base64,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', tag: 'quran-push'
    })
  );
});
`;
    const blob = new Blob([swCode], { type: 'application/javascript' });
    const swURL = URL.createObjectURL(blob);
    const reg = await navigator.serviceWorker.register(swURL, { scope: './' });
  await navigator.serviceWorker.ready;
  setSWStatus('<i class="fa-solid fa-circle-check"></i>', 'Notificações de sistema ativas (offline)');
    if (S.notifOn && Notification.permission === 'granted') setTimeout(sendAlarm, 600);
  } catch (e) { setSWStatus('<i class="fa-solid fa-triangle-exclamation"></i>', 'Erro SW: ' + e.message) }
}

function setSWStatus(icon, text) {
  const el = document.getElementById('swStatus'), ic = document.getElementById('swStatusIcon');
  if (el) el.textContent = text; if (ic) ic.textContent = icon;
}

function sendAlarm() {
  const ctrl = navigator.serviceWorker && navigator.serviceWorker.controller;
  if (!ctrl) { setTimeout(sendAlarm, 600); return }
  const tj = juzForToday(), idx = Math.max(0, Math.min(tj > 0 ? tj - 1 : 0, 29)), d = DAYS[idx];
  ctrl.postMessage({ type: 'SCHEDULE_ALARM', payload: { timeStr: S.readingTime, juzNum: idx + 1, fromSurat: d.from, toSurat: d.to } });
}

function cancelAlarm() {
  const ctrl = navigator.serviceWorker && navigator.serviceWorker.controller;
  if (ctrl) ctrl.postMessage({ type: 'CANCEL_ALARM' });
}

// ═══════════════════════════════════
// PERMISSION
// ═══════════════════════════════════
async function requestPermission() {
  if (!('Notification' in window)) { showToast('<i class="fa-solid fa-xmark"></i>', 'Não suportado', 'Este browser não suporta notificações.'); return }
  const p = await Notification.requestPermission();
  if (p === 'granted') {
    document.getElementById('permBanner').classList.remove('show');
    updateNotifStatus();
    if (S.notifOn) sendAlarm();
  showToast('<i class="fa-solid fa-bell"></i>', 'Permissão concedida!', 'Lembretes aparecerão na barra do Android.');
  } else {
  showToast('<i class="fa-solid fa-triangle-exclamation"></i>', 'Permissão negada', 'Vá em Configurações › Apps › Alcorão › Notificações.');
  }
}

function checkPermBanner() {
  if (!('Notification' in window)) return;
  document.getElementById('permBanner').classList.toggle('show', S.notifOn && Notification.permission !== 'granted');
}

// ═══════════════════════════════════
// INIT
// ═══════════════════════════════════
async function init() {
  applyTheme(S.darkMode);
  syncUI();
  registerSW();
  if (!S.startDate) {
    document.getElementById('setupDate').value = todayStr();
    document.getElementById('setupOverlay').classList.add('open');
    return;
  }
  renderDays(); updateStats(); updateNotifStatus(); checkPermBanner();
  setTimeout(() => { const c = document.querySelector('.day-card.today'); if (c) c.scrollIntoView({ behavior: 'smooth', block: 'center' }) }, 400);
}

function syncUI() {
  document.getElementById('dateInput').value = S.startDate || todayStr();
  document.getElementById('timeInput').value = S.readingTime;
  document.getElementById('dateInputSettings').value = S.startDate || todayStr();
  document.getElementById('timeInputSettings').value = S.readingTime;
  document.getElementById('notifToggle').checked = S.notifOn;
  document.getElementById('notifSetting').checked = S.notifOn;
  document.getElementById('themeSetting').checked = S.darkMode;
  document.getElementById('startBannerVal').textContent = fmtDate(S.startDate);
  const sub = document.getElementById('settingsDateSub'); if (sub) sub.textContent = S.startDate ? fmtDate(S.startDate) : 'Não definida';
}

// ═══════════════════════════════════
// SETUP
// ═══════════════════════════════════
async function saveSetup() {
  const date = document.getElementById('setupDate').value, time = document.getElementById('setupTime').value;
  if (!date) { showToast('<i class="fa-solid fa-triangle-exclamation"></i>', 'Obrigatório', 'Selecione a data de início.'); return }
  S.startDate = date; S.readingTime = time;
  LS.set('qr_start', date); LS.set('qr_time', time);
  document.getElementById('setupOverlay').classList.remove('open');
  // Ask permission on first run
  if ('Notification' in window && Notification.permission === 'default') await Notification.requestPermission();
  syncUI(); renderDays(); updateStats(); updateNotifStatus(); checkPermBanner();
  showToast('<i class="fa-solid fa-mosque"></i>', 'Tudo pronto!', `Início: ${fmtDate(date)} · Leitura às ${time}`);
}

// ═══════════════════════════════════
// SAVE SETTINGS
// ═══════════════════════════════════
function saveSettings() {
  const date = document.getElementById('dateInput').value, time = document.getElementById('timeInput').value;
  if (!date) { showToast('<i class="fa-solid fa-triangle-exclamation"></i>', 'Data inválida', 'Selecione a data de início.'); return }
  S.startDate = date; S.readingTime = time; LS.set('qr_start', date); LS.set('qr_time', time);
  syncUI(); renderDays(); updateStats(); if (S.notifOn) sendAlarm();
  showToast('<i class="fa-solid fa-floppy-disk"></i>', 'Guardado!', `Início: ${fmtDate(date)} · Hora: ${time}`);
}
function saveDateFromSettings() { const d = document.getElementById('dateInputSettings').value; if (!d) return; S.startDate = d; LS.set('qr_start', d); syncUI(); renderDays(); updateStats(); showToast('<i class="fa-solid fa-calendar-days"></i>', 'Data atualizada', fmtDate(d)) }
function saveTimeFromSettings() { const t = document.getElementById('timeInputSettings').value; S.readingTime = t; LS.set('qr_time', t); syncUI(); updateNotifStatus(); if (S.notifOn) sendAlarm(); showToast('<i class="fa-solid fa-clock"></i>', 'Hora actualizada', `Lembrete às ${t}`) }

// ═══════════════════════════════════
// RENDER
// ═══════════════════════════════════
function renderDays() {
  const list = document.getElementById('daysList'), tj = juzForToday(); list.innerHTML = '';
  DAYS.forEach(d => {
    const isRead = S.read.includes(d.day), isToday = d.day === tj, ds = juzDate(d.day);
    const card = document.createElement('div');
    card.className = `day-card${isRead ? ' read' : ''}${isToday ? ' today' : ''}`;
    card.id = `day-${d.day}`;
    card.innerHTML = `<div class="today-badge">HOJE</div>
      <div class="day-num-wrap"><div class="day-num">${d.day}</div><div class="day-sub">Juz</div></div>
      <div class="day-divider"></div>
      <div class="day-content">
        <div class="day-surat-row"><span class="day-from">${d.from}</span><span class="day-arrow">→</span><span class="day-to">${d.to}</span></div>
        <div class="day-verse">Versículos ${d.fromV} – ${d.toV}</div>
      ${ds ? `<div class="day-date"><i class="fa-solid fa-calendar-days"></i> ${ds}</div>` : ''}
        <div class="day-arabic-row">${d.fromAr} ${d.fromVAr} ← ${d.toAr} ${d.toVAr}</div>
      </div>
  <div class="day-check" onclick="event.stopPropagation();quickToggle(${d.day})">${isRead ? '<i class="fa-solid fa-check"></i>' : ''}</div>`;
    card.addEventListener('click', () => openModal(d.day));
    list.appendChild(card);
  });
}

function updateStats() {
  const c = S.read.length, p = Math.round(c / 30 * 100);
  document.getElementById('progressCircle').style.strokeDashoffset = 414.69 - c / 30 * 414.69;
  document.getElementById('progressNum').textContent = c;
  document.getElementById('progressArabic').textContent = c > 0 ? JUZ_AR[c - 1] : 'جزء';
  document.getElementById('statRead').textContent = c;
  document.getElementById('statRemain').textContent = 30 - c;
  document.getElementById('statPct').textContent = p + '%';
  document.getElementById('statsProgressBar').style.width = p + '%';
  document.getElementById('statsLabel').textContent = `${c} de 30 Juz`;
  document.getElementById('statsPct').textContent = p + '%';
  document.getElementById('startBannerVal').textContent = fmtDate(S.startDate);
  renderGrid();
}

function renderGrid() {
  const g = document.getElementById('statsGrid'), tj = juzForToday(); g.innerHTML = '';
  for (let i = 1; i <= 30; i++) {
    const ir = S.read.includes(i), it = i === tj, c = document.createElement('div');
    c.title = juzDate(i) || `Juz ${i}`;
    c.style.cssText = `aspect-ratio:1;border-radius:8px;display:flex;align-items:center;justify-content:center;font-family:var(--font-serif);font-size:14px;cursor:pointer;transition:all .2s;background:${ir ? 'var(--emerald)' : it ? 'var(--gold)' : 'var(--bg-elevated)'};color:${ir || it ? 'white' : 'var(--text-secondary)'};border:1px solid ${it ? 'var(--gold)' : 'var(--border)'};`;
    c.textContent = i; c.onclick = () => { navTo('home'); setTimeout(() => openModal(i), 300) };
    g.appendChild(c);
  }
}

// ═══════════════════════════════════
// MODAL
// ═══════════════════════════════════
function openModal(n) {
  const d = DAYS[n - 1], ir = S.read.includes(n); S.selectedDay = n;
  document.getElementById('modalJuzNum').textContent = `Juz ${n}`;
  document.getElementById('modalJuzArabic').textContent = JUZ_AR[n - 1];
  document.getElementById('modalTitle').textContent = `${n}º de Ramadhuán`;
  document.getElementById('modalArabic').textContent = `${d.fromAr} ← ${d.toAr}`;
  document.getElementById('modalDate').textContent = juzDate(n) || '(data não definida)';
  document.getElementById('modalFromSurat').textContent = d.from;
  document.getElementById('modalFromArabic').textContent = d.fromAr;
  document.getElementById('modalFromVerse').textContent = d.fromV;
  document.getElementById('modalFromVerseAr').textContent = d.fromVAr;
  document.getElementById('modalToSurat').textContent = d.to;
  document.getElementById('modalToArabic').textContent = d.toAr;
  document.getElementById('modalToVerse').textContent = d.toV;
  document.getElementById('modalToVerseAr').textContent = d.toVAr;
  const btn = document.getElementById('modalMarkBtn');
  btn.innerHTML = ir ? '<i class="fa-solid fa-check"></i> Lido — Desmarcar' : '<i class="fa-solid fa-book"></i> Marcar como Lido';
  btn.className = 'modal-mark-btn' + (ir ? ' done' : '');
  document.getElementById('modalOverlay').classList.add('open');
}
function closeModal() { document.getElementById('modalOverlay').classList.remove('open'); S.selectedDay = null }
function closeModalOnBg(e) { if (e.target === document.getElementById('modalOverlay')) closeModal() }

function toggleDayRead() {
  const d = S.selectedDay; if (!d) return;
  const i = S.read.indexOf(d); if (i >= 0) S.read.splice(i, 1); else S.read.push(d);
  LS.set('qr_read', S.read); updateStats(); renderDays(); closeModal();
  showToast(i >= 0 ? '<i class="fa-solid fa-book"></i>' : '<i class="fa-solid fa-circle-check"></i>', i >= 0 ? 'Desmarcado' : 'Juz Concluído!', i >= 0 ? `Juz ${d} desmarcado.` : `Juz ${d} — ${DAYS[d - 1].from} — Que Allah aceite!`);
}
function quickToggle(n) {
  const i = S.read.indexOf(n); if (i >= 0) S.read.splice(i, 1); else S.read.push(n);
  LS.set('qr_read', S.read); updateStats(); renderDays();
}

// ═══════════════════════════════════
// THEME
// ═══════════════════════════════════
function toggleTheme() { S.darkMode = !S.darkMode; applyTheme(S.darkMode); LS.set('qr_dark', S.darkMode); document.getElementById('themeSetting').checked = S.darkMode }
function toggleThemeFromSettings() { S.darkMode = document.getElementById('themeSetting').checked; applyTheme(S.darkMode); LS.set('qr_dark', S.darkMode) }
function applyTheme(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  const btn = document.getElementById('themeBtn');
  btn.innerHTML = dark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  document.getElementById('themeColorMeta').content = dark ? '#0a1a0fff' : '#f5f0e8';
}

// ═══════════════════════════════════
// NOTIFICATIONS
// ═══════════════════════════════════
async function toggleNotification() {
  S.notifOn = document.getElementById('notifToggle').checked;
  document.getElementById('notifSetting').checked = S.notifOn;
  LS.set('qr_notif', S.notifOn);

  if (S.notifOn) {
    if ('Notification' in window && Notification.permission === 'default') {
      const p = await Notification.requestPermission();
      if (p !== 'granted') {
        S.notifOn = false;
        document.getElementById('notifToggle').checked = false;
        document.getElementById('notifSetting').checked = false;
        LS.set('qr_notif', false);
        updateNotifStatus(); checkPermBanner();
    showToast('<i class="fa-solid fa-triangle-exclamation"></i>', 'Permissão Negada', 'Vá em Configurações › Apps › Alcorão › Notificações.'); return;
      }
    }
    sendAlarm();
  showToast('<i class="fa-solid fa-bell"></i>', 'Notificações Ativadas!', `Lembrete às ${S.readingTime} — aparecerá na barra do Android`);
  } else {
  cancelAlarm();
  showToast('<i class="fa-solid fa-bell-slash"></i>', 'Notificações Desativadas', 'Os lembretes foram desligados.');
  }
  updateNotifStatus(); checkPermBanner();
}

function toggleNotifFromSettings() { document.getElementById('notifToggle').checked = document.getElementById('notifSetting').checked; toggleNotification() }

function updateNotifStatus() {
  const dot = document.getElementById('notifDot'), txt = document.getElementById('notifStatusText');
  const ok = 'Notification' in window && Notification.permission === 'granted';
  if (S.notifOn && ok) { dot.className = 'notif-dot active'; txt.textContent = `Activo — ${S.readingTime}` }
  else if (S.notifOn && !ok) { dot.className = 'notif-dot'; txt.textContent = 'Sem permissão — toque "Ativar" acima' }
  else { dot.className = 'notif-dot'; txt.textContent = 'Notificações desativadas' }
}

// ═══════════════════════════════════
// TOAST
// ═══════════════════════════════════
let toastTmr;
function showToast(icon, title, msg) {
  const ic = document.getElementById('toastIcon');
  ic.innerHTML = icon;
  document.getElementById('toastTitle').textContent = title;
  document.getElementById('toastMsg').textContent = msg;
  const t = document.getElementById('toast'); t.classList.add('show');
  clearTimeout(toastTmr); toastTmr = setTimeout(() => t.classList.remove('show'), 4000);
}

// ═══════════════════════════════════
// NAV
// ═══════════════════════════════════
function navTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`page-${page}`).classList.add('active');
  document.getElementById(`nav-${page}`).classList.add('active');
  if (page === 'stats') updateStats();
}

function resetProgress() {
  if (!confirm('Reiniciar todo o progresso?')) return;
  S.read = []; LS.set('qr_read', []); updateStats(); renderDays();
  showToast('<i class="fa-solid fa-arrows-rotate"></i>', 'Reiniciado', 'Progresso de leitura apagado.');
}

init();
