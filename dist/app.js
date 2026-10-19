/**
 * রাজ কুরিয়ার প্রেজেন্টেশন - কোর অ্যাপ্লিকেশন কন্ট্রোলার
 * (বিজনেস মডেলস ওয়ার্কফ্লো স্টেপার, প্যানেল ট্যাব নেভিগেশন, ডিকশনারি সার্চ, থিম ও অথ গেট)
 */

// বর্তমান স্টেট
let currentModel = 'b2c';
let currentOutcome = 'delivered';
let currentStepIndex = 5; // ডিফল্ট: ধাপ ৬

// এলিমেন্টস রেফারেন্স
const stepsContainer = document.getElementById('steps-container');
const modelSelect = document.getElementById('model-select');
const scenarioSelect = document.getElementById('scenario-select');
const statusBadge = document.getElementById('status-badge');
const statusText = document.getElementById('status-text');
const valLocation = document.getElementById('val-location');
const valOwner = document.getElementById('val-owner');
const valCash = document.getElementById('val-cash');
const valEvidence = document.getElementById('val-evidence');
const footnoteCharacters = document.getElementById('footnote-characters');
const footnotePolicy = document.getElementById('footnote-policy');

// বাংলা ডিজিট কনভার্টার
const toBanglaDigits = (num) => {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).replace(/[0-9]/g, (d) => bnDigits[d]);
};

// বর্তমান মডেল ও আউটকামের সব ধাপ নেওয়া
function getActiveStages() {
  const modelData = businessModels[currentModel];
  const common = modelData.common;
  const outcomeStages = modelData.outcomes[currentOutcome] || modelData.outcomes.delivered;
  return common.concat(outcomeStages);
}

// ধাপ বাটন তৈরি করা
function buildStepButtons() {
  stepsContainer.innerHTML = '';
  const stages = getActiveStages();

  stages.forEach((step, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    const isCompleted = index < currentStepIndex;
    const isActive = index === currentStepIndex;
    btn.className = `step-card-btn ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
    btn.setAttribute('aria-pressed', String(isActive));
    btn.innerHTML = `
      <div class="step-card-top">
        <div class="step-number">${toBanglaDigits(index + 1)}</div>
        <div class="step-icon"><i class="fa-solid ${step.icon}"></i></div>
        <div class="step-indicator-dot"></div>
      </div>
      <div class="step-card-body">
        <div class="step-title">${step.label}</div>
        <div class="step-hint">${step.hint}</div>
      </div>
    `;

    btn.addEventListener('click', () => {
      currentStepIndex = index;
      renderCurrentStep();
    });

    stepsContainer.appendChild(btn);
  });
}

// ডিটেইলস আপডেট করা
function renderCurrentStep() {
  const stages = getActiveStages();
  const activeStep = stages[currentStepIndex];
  const modelData = businessModels[currentModel];

  // সব বাটনের active ও completed স্টেট আপডেট
  const buttons = stepsContainer.querySelectorAll('.step-card-btn');
  buttons.forEach((btn, idx) => {
    const isActive = idx === currentStepIndex;
    const isCompleted = idx < currentStepIndex;
    btn.classList.toggle('active', isActive);
    btn.classList.toggle('completed', isCompleted);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  // ভ্যালু আপডেট
  statusBadge.textContent = `ধাপ ${toBanglaDigits(currentStepIndex + 1)} / ৯`;
  statusText.textContent = activeStep.status;
  valLocation.textContent = activeStep.location;
  valOwner.textContent = activeStep.owner;
  valCash.textContent = activeStep.cash;
  valEvidence.textContent = activeStep.evidence;

  // ফুটনোট আপডেট
  if (footnoteCharacters) footnoteCharacters.innerHTML = modelData.characters;
  if (footnotePolicy) footnotePolicy.innerHTML = modelData.policy;
}

// ইভেন্ট লিসেনারস
if (modelSelect) {
  modelSelect.addEventListener('change', (e) => {
    currentModel = e.target.value;
    buildStepButtons();
    renderCurrentStep();
  });
}

if (scenarioSelect) {
  scenarioSelect.addEventListener('change', (e) => {
    currentOutcome = e.target.value;
    buildStepButtons();
    renderCurrentStep();
  });
}

// ট্যাব সুইচিং (পার্সেল ও টাকা <-> কে কী দেখবেন <-> টেকনিক্যাল টার্মস)
const tabButtons = document.querySelectorAll('.nav-tab-btn');
const panels = {
  journey: document.getElementById('panel-journey'),
  roles: document.getElementById('panel-roles'),
  terms: document.getElementById('panel-terms'),
  simulator: document.getElementById('panel-simulator')
};

tabButtons.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.target;

    tabButtons.forEach((btn) => btn.classList.remove('active'));
    tab.classList.add('active');

    Object.keys(panels).forEach((key) => {
      if (panels[key]) {
        panels[key].classList.toggle('active', key === target);
      }
    });
  });
});

// =========================================================
// টেকনিক্যাল টার্মস - লাইভ সার্চ ও ফিল্টারিং
// =========================================================
const termsSearchInput = document.getElementById('terms-search-input');
const termsSearchClear = document.getElementById('terms-search-clear');
const termFilterPills = document.querySelectorAll('.term-filter-pill');
const termCards = document.querySelectorAll('.term-card');
const termsNoResults = document.getElementById('terms-no-results');
const termsCounterText = document.getElementById('terms-counter-text');
const termsResetBtn = document.getElementById('terms-reset-btn');

let activeCategory = 'all';

function filterTerms() {
  const query = (termsSearchInput ? termsSearchInput.value : '').trim().toLowerCase();
  let visibleCount = 0;

  if (termsSearchClear) {
    termsSearchClear.style.display = query ? 'block' : 'none';
  }

  termCards.forEach((card) => {
    const cardCategory = card.dataset.category;
    const cardKeywords = (card.dataset.keywords || '').toLowerCase();
    const cardText = card.innerText.toLowerCase();

    const matchesCategory = activeCategory === 'all' || cardCategory === activeCategory;
    const matchesQuery = !query || cardKeywords.includes(query) || cardText.includes(query);

    if (matchesCategory && matchesQuery) {
      card.style.display = '';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  if (termsNoResults) {
    termsNoResults.classList.toggle('visible', visibleCount === 0);
  }

  if (termsCounterText) {
    if (visibleCount === termCards.length) {
      termsCounterText.textContent = `মোট ${visibleCount}টি টার্ম ও প্রযুক্তি প্রদর্শিত`;
    } else {
      termsCounterText.textContent = `${visibleCount}টি টার্ম পাওয়া গেছে`;
    }
  }
}

if (termFilterPills) {
  termFilterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      termFilterPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.dataset.category || 'all';
      filterTerms();
    });
  });
}

if (termsSearchInput) {
  termsSearchInput.addEventListener('input', filterTerms);
}

if (termsSearchClear) {
  termsSearchClear.addEventListener('click', () => {
    termsSearchInput.value = '';
    termsSearchInput.focus();
    filterTerms();
  });
}

if (termsResetBtn) {
  termsResetBtn.addEventListener('click', () => {
    if (termsSearchInput) termsSearchInput.value = '';
    activeCategory = 'all';
    termFilterPills.forEach((p) => {
      p.classList.toggle('active', p.dataset.category === 'all');
    });
    filterTerms();
  });
}

// থিম টগল (Dark Mode / Light Mode)
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.className = 'fa-solid fa-sun';
    localStorage.setItem('raj_courier_theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
    themeIcon.className = 'fa-solid fa-moon';
    localStorage.setItem('raj_courier_theme', 'light');
  }
}

// সেভ করা থিম লোড
const savedTheme = localStorage.getItem('raj_courier_theme');
if (savedTheme === 'dark') {
  applyTheme('dark');
} else if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  applyTheme('dark');
}

themeToggleBtn.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  applyTheme(isDark ? 'light' : 'dark');
});

// ইনিশিয়ালাইজ
buildStepButtons();
renderCurrentStep();

// =========================================================
// সিকিউরিটি গেট / পাসওয়ার্ড প্রটেকশন (পাসওয়ার্ড: RAJ2026)
// =========================================================
const AUTH_PASSWORD = 'RAJ2026';
const authModal = document.getElementById('auth-gate-modal');
const authForm = document.getElementById('auth-form');
const authInput = document.getElementById('auth-pass-input');
const authError = document.getElementById('auth-error-msg');
const togglePassBtn = document.getElementById('toggle-pass-visibility');
const lockAppBtn = document.getElementById('lock-app-btn');
const authCard = authModal ? authModal.querySelector('.auth-gate-card') : null;

function unlockPresentation() {
  if (authModal) {
    authModal.classList.add('unlocked');
    sessionStorage.setItem('raj_courier_auth_state', 'unlocked');
  }
}

function lockPresentation() {
  if (authModal) {
    authModal.classList.remove('unlocked');
    sessionStorage.removeItem('raj_courier_auth_state');
    if (authInput) {
      authInput.value = '';
      setTimeout(() => authInput.focus(), 200);
    }
    if (authError) authError.style.display = 'none';
  }
}

// সেশন চেক
if (sessionStorage.getItem('raj_courier_auth_state') === 'unlocked') {
  unlockPresentation();
} else {
  if (authInput) setTimeout(() => authInput.focus(), 300);
}

// ফর্ম সাবমিট
if (authForm) {
  authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const entered = (authInput.value || '').trim();
    if (entered.toUpperCase() === AUTH_PASSWORD) {
      if (authError) authError.style.display = 'none';
      unlockPresentation();
    } else {
      if (authError) authError.style.display = 'flex';
      if (authCard) {
        authCard.classList.remove('shake');
        void authCard.offsetWidth; // trigger reflow
        authCard.classList.add('shake');
      }
      authInput.select();
    }
  });
}

// পাসওয়ার্ড শো/হাইড
if (togglePassBtn && authInput) {
  togglePassBtn.addEventListener('click', () => {
    const isPass = authInput.type === 'password';
    authInput.type = isPass ? 'text' : 'password';
    const icon = togglePassBtn.querySelector('i');
    if (icon) {
      icon.className = isPass ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
    }
  });
}

// স্ক্রিন লক বাটন
if (lockAppBtn) {
  lockAppBtn.addEventListener('click', () => {
    lockPresentation();
  });
}

