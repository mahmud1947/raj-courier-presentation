/**
 * রাজ কুরিয়ার লাইভ সিস্টেম সিমুলেটর - স্টেট মেশিন ও ইন্টারঅ্যাকশন কন্ট্রোলার
 */

// =========================================================
// ইন্টারেক্টিভ লাইভ সিস্টেম সিমুলেটর (Simulator State Machine)
// =========================================================

// Web Audio API সাউন্ড সিন্থেসাইজার (লেজার স্ক্যান বিপ, সাকসেস চাইম, ক্লিক)
let audioCtx = null;
let isSimSoundOn = true;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playSimSound(type) {
  if (!isSimSoundOn) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    if (type === 'beep') {
      // লেজার বারকোড স্ক্যানার বিপ (High pitched short pulse)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1400, ctx.currentTime);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.09);
    } else if (type === 'chime') {
      // সাকসেস ওটিপি / বিকাশ পেমেন্ট মিষ্টি চাইম (Arpeggio notes)
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0.1, ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.26);
      });
    } else if (type === 'click') {
      // ইউজার ইন্টারফেস ক্লিক সাউন্ড
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    }
  } catch (e) {
    // Ignore audio errors gracefully
  }
}

// ফ্ল্যাশ টোস্ট নোটিফিকেশন হেল্পার
function showSimToast(message, icon = 'fa-circle-check', duration = 3000) {
  let toast = document.getElementById('sim-floating-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'sim-floating-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #1e293b;
      color: #ffffff;
      padding: 12px 20px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
      font-size: 13px;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 10px;
      z-index: 10000;
      transition: all 0.3s ease;
      transform: translateY(20px);
      opacity: 0;
      border-left: 4px solid #2563eb;
    `;
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid ${icon}" style="color: #60a5fa; font-size: 16px;"></i> <span>${message}</span>`;
  toast.style.transform = 'translateY(0)';
  toast.style.opacity = '1';

  if (toast.hideTimer) clearTimeout(toast.hideTimer);
  toast.hideTimer = setTimeout(() => {
    toast.style.transform = 'translateY(20px)';
    toast.style.opacity = '0';
  }, duration);
}


const simThermalModal = document.getElementById('sim-thermal-modal');
const simCloseThermalBtn = document.getElementById('sim-close-thermal-btn');
const simPrintConfirmBtn = document.getElementById('sim-print-confirm-btn');

// আলাদা আলাদা ফুল অ্যাপস স্টেট ও ইন-অ্যাপ ট্যাব কন্ট্রোলার
let simMerchantCurrentTab = 'home'; // 'home' | 'parcels' | 'wallet' | 'profile'
let simRiderCurrentTab = 'tasks';   // 'tasks' | 'scanner' | 'runsheet' | 'vault'

function switchMerchantAppTab(tabKey) {
  simMerchantCurrentTab = tabKey;
  const navBtns = document.querySelectorAll('#sim-merchant-bottom-nav .app-nav-item');
  navBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mTab === tabKey);
  });

  const appBody = document.getElementById('sim-app-body-merchant');
  if (!appBody) return;

  if (tabKey === 'home') {
    const data = simStepsData[simCurrentStep - 1];
    if (data) {
      appBody.innerHTML = data.merchantHtml;
      bindSimulatorScreenActions(simCurrentStep);
    }
  } else if (typeof merchantFullAppScreens !== 'undefined' && merchantFullAppScreens[tabKey]) {
    appBody.innerHTML = merchantFullAppScreens[tabKey]();
  }
}

function switchRiderAppTab(tabKey) {
  simRiderCurrentTab = tabKey;
  const navBtns = document.querySelectorAll('#sim-rider-bottom-nav .app-nav-item');
  navBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.rTab === tabKey);
  });

  const appBody = document.getElementById('sim-app-body-rider');
  if (!appBody) return;

  if (tabKey === 'tasks') {
    const data = simStepsData[simCurrentStep - 1];
    if (data) {
      appBody.innerHTML = data.riderHtml;
      bindSimulatorScreenActions(simCurrentStep);
    }
  } else if (typeof riderFullAppScreens !== 'undefined' && riderFullAppScreens[tabKey]) {
    appBody.innerHTML = riderFullAppScreens[tabKey]();
  }
}

// ইন-অ্যাপ বটম বার ইভেন্ট ইনিশিয়ালাইজেশন
function initInAppNavigation() {
  const merchantTabs = document.querySelectorAll('#sim-merchant-bottom-nav .app-nav-item');
  merchantTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      playSimSound('click');
      switchMerchantAppTab(btn.dataset.mTab);
    });
  });

  const riderTabs = document.querySelectorAll('#sim-rider-bottom-nav .app-nav-item');
  riderTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      playSimSound('click');
      switchRiderAppTab(btn.dataset.rTab);
    });
  });
}

// কন্ট্রোল ও স্টেজ উপাদানসমূহ
const simAutoPlayBtn = document.getElementById('sim-autoplay-btn');
const simPrevBtn = document.getElementById('sim-prev-btn');
const simNextBtn = document.getElementById('sim-next-btn');
const simResetBtn = document.getElementById('sim-reset-btn');
const simSoundBtn = document.getElementById('sim-sound-btn');
const simStepNumText = document.getElementById('sim-step-num-text');

const simModeButtons = document.querySelectorAll('.sim-mode-btn');
const simDeviceButtons = document.querySelectorAll('.sim-device-btn');
const simTimelineItems = document.querySelectorAll('.sim-step-item');
const simStageContainer = document.getElementById('sim-stage-container');

let simCurrentStep = 1;
let simViewMode = 'command';
let simDevice = 'iphone';
let simIsAutoPlaying = false;
let simAutoPlayTimer = null;

// ধাপ রেন্ডারিং ফাংশন
function renderSimulatorStep(stepNum, shouldPlaySound = true) {
  if (stepNum < 1) stepNum = 1;
  if (stepNum > 9) stepNum = 9;
  simCurrentStep = stepNum;

  const data = simStepsData[stepNum - 1];
  if (!data) return;

  if (shouldPlaySound) {
    if (stepNum === 2) {
      playSimSound('beep');
    } else if (stepNum === 7 || stepNum === 9) {
      playSimSound('chime');
    } else {
      playSimSound('click');
    }
  }

  // ১. কন্ট্রোল বার আপডেট
  if (simStepNumText) simStepNumText.textContent = stepNum;

  // ২. টাইমলাইন আইটেম আপডেট
  simTimelineItems.forEach((item) => {
    const itemStep = parseInt(item.dataset.step, 10);
    item.classList.remove('active', 'completed');
    if (itemStep === stepNum) {
      item.classList.add('active');
    } else if (itemStep < stepNum) {
      item.classList.add('completed');
    }
  });

  // ৩. লাইভ লেজার ও কাস্টডি বার আপডেট
  const custodyVal = document.getElementById('sim-custody-val');
  const custodyLoc = document.getElementById('sim-custody-loc');
  const cashStatus = document.getElementById('sim-cash-status');
  const cashNote = document.getElementById('sim-cash-note');
  const merchantPayout = document.getElementById('sim-merchant-payout');
  const processStatus = document.getElementById('sim-process-status');
  const processTime = document.getElementById('sim-process-time');

  if (custodyVal) custodyVal.textContent = data.custody;
  if (custodyLoc) custodyLoc.textContent = data.location;
  if (cashStatus) cashStatus.textContent = data.cashStatus;
  if (cashNote) cashNote.textContent = data.cashNote;
  if (merchantPayout) merchantPayout.textContent = data.merchantPayout;
  if (processTime) processTime.textContent = data.statusTime;
  if (processStatus) {
    processStatus.innerHTML = `<span class="sim-status-chip ${data.statusChip.class}">${data.statusChip.text}</span>`;
  }

  // ৪. আলাদা আলাদা মার্চেন্ট ও রাইডার স্ক্রিন আপডেট
  const simAppBodyMerchant = document.getElementById('sim-app-body-merchant');
  const simAppBodyRider = document.getElementById('sim-app-body-rider');
  const simRiderNameTag = document.getElementById('sim-rider-name-tag');

  // ধাপ পরিবর্তনের সাথে সাথে উভয় ফোনেই স্টেপ ভিউ (হোম / টাস্ক) সক্রিয় করুন
  simMerchantCurrentTab = 'home';
  simRiderCurrentTab = 'tasks';

  const mTabs = document.querySelectorAll('#sim-merchant-bottom-nav .app-nav-item');
  mTabs.forEach(btn => btn.classList.toggle('active', btn.dataset.mTab === 'home'));

  const rTabs = document.querySelectorAll('#sim-rider-bottom-nav .app-nav-item');
  rTabs.forEach(btn => btn.classList.toggle('active', btn.dataset.rTab === 'tasks'));

  if (simAppBodyMerchant) simAppBodyMerchant.innerHTML = data.merchantHtml;
  if (simAppBodyRider) simAppBodyRider.innerHTML = data.riderHtml;
  if (simRiderNameTag && data.riderName) simRiderNameTag.textContent = data.riderName;

  // ৫. ডেস্কটপ ব্রাউজার স্ক্রিন আপডেট
  const simBrowserUrl = document.getElementById('sim-browser-url');
  const simBrowserBody = document.getElementById('sim-browser-body');
  const simDesktopRoleBadge = document.getElementById('sim-desktop-role-badge');

  if (simBrowserUrl) simBrowserUrl.textContent = data.browserUrl;
  if (simBrowserBody) simBrowserBody.innerHTML = data.desktopHtml;
  if (simDesktopRoleBadge) {
    simDesktopRoleBadge.textContent = stepNum === 1 ? 'মার্চেন্ট ওয়েব' : (stepNum === 8 || stepNum === 9 ? 'অ্যাকাউন্টস ও ফিন্যান্স' : 'হাব কন্ট্রোল');
  }

  // ৬. ট্র্যাকিং ও এসএমএস কার্ড আপডেট
  const simSmsText = document.getElementById('sim-sms-text');
  const simTrackProgressFill = document.getElementById('sim-track-progress-fill');
  const simTrackStepTitle = document.getElementById('sim-track-step-title');
  const simTrackEta = document.getElementById('sim-track-eta');
  const simTrackHistoryList = document.getElementById('sim-track-history-list');
  const simTrackRiderCard = document.getElementById('sim-track-rider-card');
  const simTrackOtpCard = document.getElementById('sim-track-otp-card');

  if (simSmsText) simSmsText.textContent = data.smsText;
  if (simTrackProgressFill) simTrackProgressFill.style.width = `${data.trackProgress}%`;
  if (simTrackStepTitle) simTrackStepTitle.textContent = data.trackStatus;
  if (simTrackEta) simTrackEta.textContent = `সম্ভাব্য সময়: ${data.trackEta}`;

  if (simTrackHistoryList) {
    simTrackHistoryList.innerHTML = data.historyDone.map((item, idx) => `
      <div class="t-history-item ${idx === data.historyDone.length - 1 ? 'current' : 'done'}">
        <span class="t-history-dot"></span>
        <div class="t-history-text">
          <div class="t-history-title">${item}</div>
        </div>
      </div>
    `).join('');
  }

  // রাইডার কার্ড দৃশ্যমান হবে ধাপ ৫, ৬ ও ৭ এ
  if (simTrackRiderCard) {
    simTrackRiderCard.style.display = (stepNum >= 5 && stepNum <= 7) ? 'flex' : 'none';
  }

  // ওটিপি কার্ড হাইলাইট হবে ধাপ ৬ ও ৭ এ
  if (simTrackOtpCard) {
    if (stepNum >= 7) {
      simTrackOtpCard.style.borderColor = 'var(--brand-success)';
      simTrackOtpCard.style.background = 'var(--brand-success-light)';
      const header = simTrackOtpCard.querySelector('.otp-card-header');
      if (header) {
        header.innerHTML = '<i class="fa-solid fa-circle-check"></i> ওটিপি যাচাইকৃত ও ডেলিভারি সফল';
        header.style.color = 'var(--brand-success)';
      }
    } else {
      simTrackOtpCard.style.borderColor = 'var(--brand-accent)';
      simTrackOtpCard.style.background = 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.03) 100%)';
      const header = simTrackOtpCard.querySelector('.otp-card-header');
      if (header) {
        header.innerHTML = '<i class="fa-solid fa-key"></i> গোপন ডেলিভারি OTP কোড';
        header.style.color = 'var(--brand-accent)';
      }
    }
  }

  // ইন্টারঅ্যাক্টিভ ইন-স্ক্রিন বাটনগুলোর ইভেন্ট বাইন্ডিং
  bindSimulatorScreenActions(stepNum);
}

// ইন-স্ক্রিন বাটন বাইন্ডিং
function bindSimulatorScreenActions(stepNum) {
  // ধাপ ১: বুকিং সাবমিট
  const btnStep1 = document.getElementById('m-action-btn-1');
  if (btnStep1) {
    btnStep1.addEventListener('click', () => {
      showSimToast('পার্সেল বুকিং সফল! রাইডার করিমকে পিকআপ নোটিফিকেশন পাঠানো হয়েছে।', 'fa-barcode');
      setTimeout(() => renderSimulatorStep(2), 600);
    });
  }

  // ধাপ ২: রাইডার লেজার স্ক্যান
  const btnStep2 = document.getElementById('m-action-btn-2');
  if (btnStep2) {
    btnStep2.addEventListener('click', () => {
      playSimSound('beep');
      showSimToast('বারকোড লেজার স্ক্যান সফল! পার্সেল ব্যাগে লোড হয়েছে।', 'fa-barcode');
      setTimeout(() => renderSimulatorStep(3), 800);
    });
  }

  // ধাপ ৩: থার্মাল লেবেল প্রিন্ট
  const btnStep3M = document.getElementById('m-action-btn-3');
  const btnStep3D = document.getElementById('d-action-btn-3');
  const openThermalModal = () => {
    if (simThermalModal) simThermalModal.classList.add('active');
  };
  if (btnStep3M) btnStep3M.addEventListener('click', openThermalModal);
  if (btnStep3D) btnStep3D.addEventListener('click', openThermalModal);

  // ধাপ ৫: ডেলিভারি ট্রিপ শুরু
  const btnStep5 = document.getElementById('m-action-btn-5');
  if (btnStep5) {
    btnStep5.addEventListener('click', () => {
      showSimToast('🛵 রাইডার রহিম ডেলিভারির উদ্দেশ্যে যাত্রা শুরু করেছেন...', 'fa-motorcycle');
      setTimeout(() => renderSimulatorStep(6), 700);
    });
  }

  // ধাপ ৬: কাস্টমারকে কল ও ওটিপি
  const btnCall = document.getElementById('m-action-btn-call');
  const btnCustCall = document.getElementById('sim-cust-call-btn');
  const callCustomer = () => {
    showSimToast('📞 তানভীর আহমেদকে কল দেওয়া হচ্ছে (01711-234567)...', 'fa-phone-volume');
    playSimSound('beep');
  };
  if (btnCall) btnCall.addEventListener('click', callCustomer);
  if (btnCustCall) btnCustCall.addEventListener('click', callCustomer);

  const btnStep6 = document.getElementById('m-action-btn-6');
  if (btnStep6) {
    btnStep6.addEventListener('click', () => {
      renderSimulatorStep(7);
    });
  }

  // ধাপ ৭: ওটিপি ও ক্যাশ ডেলিভারি
  const btnStep7 = document.getElementById('m-action-btn-7');
  if (btnStep7) {
    btnStep7.addEventListener('click', () => {
      showSimToast('ক্যাশ টাকা নিয়ে রাইডার হাবে ডিপোজিট করছেন।', 'fa-vault');
      setTimeout(() => renderSimulatorStep(8), 600);
    });
  }

  // ধাপ ৮: ক্যাশ ক্লোজিং
  const btnStep8 = document.getElementById('m-action-btn-8');
  if (btnStep8) {
    btnStep8.addEventListener('click', () => {
      showSimToast('হেড অফিস অ্যাকাউন্টস থেকে মার্চেন্ট পেমেন্ট ব্যাচ রান হচ্ছে...', 'fa-wallet');
      setTimeout(() => renderSimulatorStep(9), 700);
    });
  }

  // ধাপ ৯: ডিজিটাল চালান
  const btnStep9 = document.getElementById('m-action-btn-9');
  if (btnStep9) {
    btnStep9.addEventListener('click', () => {
      showSimToast('🧾 মার্চেন্ট ডিজিটাল ইনভয়েস ও ব্যাংক স্টেটমেন্ট প্রস্তুত!', 'fa-file-invoice');
      playSimSound('chime');
    });
  }
}

// থার্মাল মোডাল অ্যাকশনস
if (simCloseThermalBtn && simThermalModal) {
  simCloseThermalBtn.addEventListener('click', () => {
    simThermalModal.classList.remove('active');
  });
}

if (simPrintConfirmBtn && simThermalModal) {
  simPrintConfirmBtn.addEventListener('click', () => {
    playSimSound('beep');
    simThermalModal.classList.remove('active');
    showSimToast('🖨️ ৪x৬ থার্মাল লেবেল সফলভাবে প্রিন্ট হয়েছে ও পার্সেলে লাগানো হয়েছে!', 'fa-print');
    setTimeout(() => renderSimulatorStep(4), 800);
  });
}

// নেভিগেশন ও প্লেব্যাক কন্ট্রোলস
if (simNextBtn) {
  simNextBtn.addEventListener('click', () => {
    if (simCurrentStep < 9) {
      renderSimulatorStep(simCurrentStep + 1);
    } else {
      renderSimulatorStep(1);
    }
  });
}

if (simPrevBtn) {
  simPrevBtn.addEventListener('click', () => {
    if (simCurrentStep > 1) {
      renderSimulatorStep(simCurrentStep - 1);
    }
  });
}

if (simResetBtn) {
  simResetBtn.addEventListener('click', () => {
    stopSimAutoPlay();
    userManuallySelectedApp = false;
    renderSimulatorStep(1);
    showSimToast('সিমুলেটর ধাপ ১ (বুকিং) এ রিসেট করা হয়েছে।', 'fa-rotate-left');
  });
}

// সাউন্ড টগল
if (simSoundBtn) {
  simSoundBtn.addEventListener('click', () => {
    isSimSoundOn = !isSimSoundOn;
    simSoundBtn.classList.toggle('active', isSimSoundOn);
    const icon = simSoundBtn.querySelector('i');
    if (icon) {
      icon.className = isSimSoundOn ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
    }
    showSimToast(isSimSoundOn ? '🔊 সাউন্ড ইফেক্ট অন' : '🔇 সাউন্ড মিউট', isSimSoundOn ? 'fa-volume-high' : 'fa-volume-xmark');
  });
}

// অটো-প্লে ডেমো
function startSimAutoPlay() {
  simIsAutoPlaying = true;
  if (simAutoPlayBtn) {
    simAutoPlayBtn.classList.add('playing');
    simAutoPlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i> <span>পজ করুন</span>';
  }
  showSimToast('▶️ অটো-প্লে ডেমো শুরু হয়েছে (প্রতি ৩.৫ সেকেন্ডে অটো-স্টেপ)...', 'fa-play');

  simAutoPlayTimer = setInterval(() => {
    if (simCurrentStep < 9) {
      renderSimulatorStep(simCurrentStep + 1);
    } else {
      renderSimulatorStep(1);
    }
  }, 3800);
}

function stopSimAutoPlay() {
  simIsAutoPlaying = false;
  if (simAutoPlayTimer) {
    clearInterval(simAutoPlayTimer);
    simAutoPlayTimer = null;
  }
  if (simAutoPlayBtn) {
    simAutoPlayBtn.classList.remove('playing');
    simAutoPlayBtn.innerHTML = '<i class="fa-solid fa-play"></i> <span>অটো-প্লে ডেমো</span>';
  }
}

if (simAutoPlayBtn) {
  simAutoPlayBtn.addEventListener('click', () => {
    if (simIsAutoPlaying) {
      stopSimAutoPlay();
      showSimToast('⏸️ অটো-প্লে পজ করা হয়েছে।', 'fa-pause');
    } else {
      startSimAutoPlay();
    }
  });
}

// টাইমলাইন আইটেম ক্লিক
simTimelineItems.forEach((item) => {
  item.addEventListener('click', () => {
    stopSimAutoPlay();
    const targetStep = parseInt(item.dataset.step, 10);
    renderSimulatorStep(targetStep);
  });
});

// ভিউ মোড সুইচিং (কমান্ড সেন্টার / ডুয়েল মোবাইল / মার্চেন্ট ফুল / রাইডার ফুল / ডেস্কটপ)
simModeButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const mode = btn.dataset.mode;
    simModeButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    if (simStageContainer) {
      simStageContainer.className = `sim-stage-container view-${mode}`;
    }
    simViewMode = mode;
    playSimSound('click');

    if (mode === 'command') {
      showSimToast('🎛️ ৪টি আলাদা স্ক্রিন ভিউ: মার্চেন্ট ফোন + রাইডার ফোন + ডেস্কটপ + কাস্টমার ট্র্যাকিং!', 'fa-table-columns');
    } else if (mode === 'mobile') {
      showSimToast('📱 ডুয়েল মোবাইল ভিউ: মার্চেন্ট ও রাইডার অ্যাপ পাশাপাশি প্রদর্শিত!', 'fa-mobile-screen');
    } else if (mode === 'merchant-full') {
      showSimToast('🏪 মার্চেন্ট ফুল অ্যাপ ফোকাস মোড সক্রিয়! নিচের ট্যাবগুলো (পার্সেল, ওয়ালেট, প্রোফাইল) এক্সপ্লোর করুন।', 'fa-shop');
    } else if (mode === 'rider-full') {
      showSimToast('🛵 রাইডার ফুল অ্যাপ ফোকাস মোড সক্রিয়! নিচের ট্যাবগুলো (স্ক্যানার, রানশিট, ভল্ট) এক্সপ্লোর করুন।', 'fa-motorcycle');
    } else if (mode === 'desktop') {
      showSimToast('💻 ডেস্কটপ পোর্টাল ভিউ সক্রিয়!', 'fa-desktop');
    }
  });
});

// ফোন ফ্রেম সুইচিং (iPhone 15 Pro vs Android Samsung/Pixel) - উভয় ফোনের জন্য
const phoneFrames = [
  document.getElementById('sim-phone-frame-merchant'),
  document.getElementById('sim-phone-frame-rider')
];

simDeviceButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const device = btn.dataset.device;
    simDeviceButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    phoneFrames.forEach((frame) => {
      if (!frame) return;
      const isRider = frame.classList.contains('rider-frame');
      if (device === 'iphone') {
        frame.className = isRider ? 'phone-frame iphone-frame rider-frame' : 'phone-frame iphone-frame';
      } else {
        frame.className = isRider ? 'phone-frame android-frame rider-frame' : 'phone-frame android-frame';
      }
    });

    simDevice = device;
    playSimSound('click');
    showSimToast(
      device === 'iphone' ? '🍏 iPhone 15 Pro (iOS Dynamic Island) মোড সক্রিয়' : '🤖 Android (Material Design Punch-Hole) মোড সক্রিয়',
      device === 'iphone' ? 'fa-apple' : 'fa-android'
    );
  });
});

// ইন-অ্যাপ বটম বার ইভেন্ট ইনিশিয়ালাইজেশন
initInAppNavigation();

// ইনিশিয়াল সিমুলেটর রেন্ডারিং
renderSimulatorStep(1, false);

