/**
 * রাজ কুরিয়ার সেন্ট্রাল মালিক ও ম্যানেজমেন্ট ড্যাশবোর্ড - ইন্টারেক্টিভ কন্ট্রোলার
 */

// Web Audio API সাউন্ড সিন্থেসাইজার
let audioCtx = null;
function playSound(type) {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!audioCtx) audioCtx = new AudioContextClass();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    if (type === 'chime') {
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
        const o = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        o.type = 'triangle';
        o.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.07);
        g.gain.setValueAtTime(0.08, audioCtx.currentTime + idx * 0.07);
        g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + idx * 0.07 + 0.22);
        o.connect(g);
        g.connect(audioCtx.destination);
        o.start(audioCtx.currentTime + idx * 0.07);
        o.stop(audioCtx.currentTime + idx * 0.07 + 0.23);
      });
    } else {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(650, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.06);
    }
  } catch (e) {}
}

// ফ্ল্যাশ টোস্ট হেল্পার
function showExecToast(message, icon = 'fa-circle-check', duration = 3000) {
  let toast = document.getElementById('exec-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'exec-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fa-solid ${icon}" style="color:#f59e0b; font-size:16px;"></i> <span>${message}</span>`;
  toast.className = 'show';
  if (toast.hideTimer) clearTimeout(toast.hideTimer);
  toast.hideTimer = setTimeout(() => {
    toast.className = '';
  }, duration);
}

// সংখ্যাকে বাংলাদেশি কারেন্সি ফরম্যাটে রূপান্তর
function formatBDT(amount) {
  return '৳' + Number(amount).toLocaleString('en-IN');
}

// স্টেট ভেরিয়েবলসমূহ
let currentDivision = 'all';
let currentSearch = '';
let currentSort = 'cash-desc';

// ১. জাতীয় পরিসংখ্যান রেন্ডার
function renderNationalKPIs() {
  const n = ownerDashboardData.national;
  const setEl = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setEl('kpi-val-cash', formatBDT(n.totalVaultCash));
  setEl('kpi-val-bank', formatBDT(n.totalBankBalance));
  setEl('kpi-val-parcels', n.todayTotalParcels.toLocaleString('en-IN') + ' টি');
  setEl('kpi-val-highway', n.outboundHighwayTotal.toLocaleString('en-IN') + ' টি ট্রাকে');
  setEl('kpi-val-complaints', n.activeComplaintsTotal + ' টি সক্রিয়');
  setEl('kpi-val-riders', n.totalRiders + ' জন (' + n.ridersOnTrip + ' ট্রিপে)');
}

// ২. ব্রাঞ্চ কার্ড তৈরি
function generateBranchCardHtml(b) {
  const hasIssues = b.complaints && b.complaints.length > 0;
  const issueHtml = hasIssues 
    ? `<span class="branch-issue-pill alert"><i class="fa-solid fa-triangle-exclamation"></i> ${b.complaints.length}টি কমপ্লেইন</span>`
    : `<span class="branch-issue-pill clean"><i class="fa-solid fa-circle-check"></i> সব স্বাভাবিক</span>`;

  const complaintsListHtml = hasIssues ? `
    <div class="branch-complaints-box">
      <div style="font-weight:700; color:#ef4444; margin-bottom:4px;"><i class="fa-solid fa-bell"></i> জরুরি সমস্যা / কমপ্লেইন:</div>
      ${b.complaints.map(c => `
        <div class="complaint-item">
          <span class="complaint-text"><strong>${c.customer}:</strong> ${c.issue}</span>
          <span class="complaint-status">${c.status}</span>
        </div>
      `).join('')}
    </div>
  ` : '';

  return `
    <article class="branch-card" id="branch-card-${b.id}">
      <!-- Header -->
      <div class="branch-card-header">
        <div>
          <div class="branch-name-wrap">
            <span class="branch-code-badge">${b.id}</span>
            <h3 class="branch-title">${b.name}</h3>
          </div>
          <div class="branch-loc-sub"><i class="fa-solid fa-location-dot"></i> ${b.address} (${b.district} জেলা)</div>
        </div>
        ${issueHtml}
      </div>

      <!-- Financials: Cash, Bank & Expenses -->
      <div class="branch-finance-row">
        <div>
          <span class="fin-col-label"><i class="fa-solid fa-vault"></i> ভল্টে ক্যাশ টাকা (COD)</span>
          <div class="fin-col-val gold">${formatBDT(b.financials.vaultCash)}</div>
        </div>
        <div>
          <span class="fin-col-label"><i class="fa-solid fa-building-columns"></i> ব্রাঞ্চ ব্যাংক ব্যালেন্স</span>
          <div class="fin-col-val blue">${formatBDT(b.financials.bankBalance)}</div>
        </div>
        <div class="fin-expense-sub">
          <span>মাসিক বেতন: <strong>${formatBDT(b.financials.expenses.salaries)}</strong></span>
          <span>ভাড়া ও ইউটিলিটি: <strong>${formatBDT(b.financials.expenses.rent + b.financials.expenses.fuelUtilities)}</strong></span>
          <span>মোট খরচ: <strong style="color:var(--exec-gold);">${formatBDT(b.financials.expenses.totalMonthly)}</strong></span>
        </div>
      </div>

      <!-- THE 2-PART PARCEL FLOW (Sender vs Receiver) -->
      <div class="parcel-flow-container">
        <!-- পার্ট ১: ওই ব্রাঞ্চ থেকে যাবে (Sender / Outbound Flow) -->
        <div class="flow-part-box outbound-box">
          <div class="flow-part-header">
            <span class="flow-title"><i class="fa-solid fa-arrow-up-right-from-square"></i> পার্ট ১: ওই ব্রাঞ্চ থেকে যাবে (প্রেরক ফ্লো)</span>
            <span class="flow-total-badge">আউটবাউন্ড: ${b.parcels.outbound.booked + b.parcels.outbound.onHighwayTruck}টি</span>
          </div>
          <div class="flow-grid">
            <div class="flow-item">
              <span class="flow-item-label">বুকিং হয়েছে</span>
              <div class="flow-item-val">${b.parcels.outbound.booked}</div>
            </div>
            <div class="flow-item">
              <span class="flow-item-label">পিকআপে (রাইডার)</span>
              <div class="flow-item-val" style="color:#a78bfa;">${b.parcels.outbound.pickupInHand}</div>
            </div>
            <div class="flow-item">
              <span class="flow-item-label">ব্রাঞ্চে সর্টিং</span>
              <div class="flow-item-val">${b.parcels.outbound.inBranchSorting}</div>
            </div>
            <div class="flow-item">
              <span class="flow-item-label">হাইওয়ে ট্রাকে</span>
              <div class="flow-item-val" style="color:var(--exec-gold);">${b.parcels.outbound.onHighwayTruck}</div>
            </div>
          </div>
        </div>

        <!-- পার্ট ২: ওই ব্রাঞ্চে আসবে (Receiver / Inbound Flow) -->
        <div class="flow-part-box inbound-box">
          <div class="flow-part-header">
            <span class="flow-title"><i class="fa-solid fa-arrow-down-left-and-arrow-up-right-to-center"></i> পার্ট ২: ওই ব্রাঞ্চে আসবে (প্রাপক ফ্লো)</span>
            <span class="flow-total-badge">ইনবাউন্ড: ${b.parcels.inbound.comingOnHighway + b.parcels.inbound.receivedInBranch + b.parcels.inbound.deliveryInHand}টি</span>
          </div>
          <div class="flow-grid">
            <div class="flow-item">
              <span class="flow-item-label">হাইওয়েতে আসছে</span>
              <div class="flow-item-val" style="color:var(--exec-teal);">${b.parcels.inbound.comingOnHighway}</div>
            </div>
            <div class="flow-item">
              <span class="flow-item-label">ব্রাঞ্চে রিসিভড</span>
              <div class="flow-item-val">${b.parcels.inbound.receivedInBranch}</div>
            </div>
            <div class="flow-item">
              <span class="flow-item-label">ডেলিভারিতে (রাইডার)</span>
              <div class="flow-item-val" style="color:#34d399;">${b.parcels.inbound.deliveryInHand}</div>
            </div>
            <div class="flow-item">
              <span class="flow-item-label">ডেলিভারড / রিটার্ন</span>
              <div class="flow-item-val">${b.parcels.inbound.deliveredToday} <span style="font-size:9px; color:#ef4444;">(${b.parcels.inbound.returnedOrHold})</span></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Staff & Riders Summary -->
      <div class="branch-staff-row">
        <div class="staff-info">
          <i class="fa-solid fa-user-tie" style="color:var(--exec-blue);"></i>
          <span class="staff-name">${b.incharge.name}</span>
          <span class="staff-role">(ইনচার্জ)</span>
          <a href="tel:${b.incharge.phone}" style="color:var(--exec-text-dim); margin-left:4px;" title="কল দিন"><i class="fa-solid fa-phone"></i></a>
        </div>
        <div class="rider-count-pill" title="মোট ${b.riders.total} জন রাইডার (পিকআপে ${b.riders.onPickup}, ডেলিভারিতে ${b.riders.onDelivery})">
          <i class="fa-solid fa-motorcycle"></i>
          <span>রাইডার: ${b.riders.total} জন</span>
        </div>
      </div>

      <!-- Complaints List if any -->
      ${complaintsListHtml}

      <!-- Actions -->
      <div class="branch-card-footer">
        <button type="button" class="branch-action-btn" onclick="openBranchDrilldown('${b.id}')">
          <i class="fa-solid fa-chart-pie"></i> বিস্তারিত রিপোর্ট
        </button>
        <button type="button" class="branch-action-btn" onclick="auditBranchCash('${b.id}')">
          <i class="fa-solid fa-shield-halved"></i> ক্যাশ অডিট
        </button>
        <button type="button" class="branch-action-btn" onclick="callBranchIncharge('${b.incharge.name}', '${b.incharge.phone}')">
          <i class="fa-solid fa-phone-volume"></i> ইনচার্জ কল
        </button>
      </div>
    </article>
  `;
}

// ৩. ফিল্টারিং ও রেন্ডারিং
function renderBranches() {
  const container = document.getElementById('branches-grid-container');
  if (!container) return;

  let list = [...ownerDashboardData.branches];

  // বিভাগ ফিল্টার
  if (currentDivision !== 'all') {
    list = list.filter(b => b.division.toLowerCase() === currentDivision.toLowerCase());
  }

  // সার্চ কুয়েরি
  if (currentSearch.trim() !== '') {
    const q = currentSearch.toLowerCase().trim();
    list = list.filter(b => 
      b.name.toLowerCase().includes(q) ||
      b.id.toLowerCase().includes(q) ||
      b.district.toLowerCase().includes(q) ||
      b.incharge.name.toLowerCase().includes(q)
    );
  }

  // সর্টিং
  if (currentSort === 'cash-desc') {
    list.sort((a, b) => b.financials.vaultCash - a.financials.vaultCash);
  } else if (currentSort === 'parcels-desc') {
    list.sort((a, b) => {
      const totalA = a.parcels.outbound.booked + a.parcels.inbound.deliveryInHand;
      const totalB = b.parcels.outbound.booked + b.parcels.inbound.deliveryInHand;
      return totalB - totalA;
    });
  } else if (currentSort === 'complaints-desc') {
    list.sort((a, b) => (b.complaints ? b.complaints.length : 0) - (a.complaints ? a.complaints.length : 0));
  } else if (currentSort === 'name-asc') {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }

  const countBadge = document.getElementById('branch-count-badge');
  if (countBadge) {
    countBadge.textContent = `মোট ${list.length}টি হাব প্রদর্শিত`;
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--exec-text-dim);">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 32px; margin-bottom: 12px; display: block;"></i>
        <p>কোনো ব্রাঞ্চ পাওয়া যায়নি। অন্য কোনো নাম দিয়ে সার্চ করুন।</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(b => generateBranchCardHtml(b)).join('');
}

// ব্রাঞ্চ অ্যাকশনস
function auditBranchCash(branchId) {
  playSound('chime');
  const branch = ownerDashboardData.branches.find(b => b.id === branchId);
  if (!branch) return;
  showExecToast(`🛡️ ${branch.name}: ভল্ট ক্যাশ ${formatBDT(branch.financials.vaultCash)} ও ব্যাংক ব্যালেন্স যাচাই সফল!`, 'fa-shield-halved', 4000);
}

function callBranchIncharge(name, phone) {
  playSound('click');
  showExecToast(`📞 কল সংযোগ করা হচ্ছে: ${name} (${phone})...`, 'fa-phone-volume', 3500);
}

function openBranchDrilldown(branchId) {
  playSound('click');
  const b = ownerDashboardData.branches.find(item => item.id === branchId);
  if (!b) return;

  const modal = document.getElementById('exec-detail-modal');
  const body = document.getElementById('exec-modal-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="margin-bottom: 18px;">
      <div style="display:flex; align-items:center; justify-content:space-between;">
        <h2 style="font-size:20px; font-weight:800; color:var(--exec-text);">${b.name} (${b.id})</h2>
        <span class="branch-code-badge" style="font-size:13px;">${b.division} বিভাগ</span>
      </div>
      <p style="font-size:12px; color:var(--exec-text-muted);"><i class="fa-solid fa-location-dot"></i> ${b.address}</p>
    </div>

    <!-- ফাইন্যান্স ডিপ-ডাইভ -->
    <div style="background:var(--exec-bg-card-subtle); padding:14px; border-radius:var(--radius-md); margin-bottom:16px; border:1px solid var(--exec-border);">
      <h4 style="font-size:13px; font-weight:800; color:var(--exec-gold); margin-bottom:10px;"><i class="fa-solid fa-vault"></i> আর্থিক হিসাব ও মাসিক বাজেট</h4>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:13px; margin-bottom:10px;">
        <div>হাতে থাকা ক্যাশ (ভল্ট): <strong style="color:var(--exec-gold);">${formatBDT(b.financials.vaultCash)}</strong></div>
        <div>ব্রাঞ্চ ব্যাংক একাউন্ট: <strong style="color:var(--exec-blue);">${formatBDT(b.financials.bankBalance)}</strong></div>
        <div>স্টাফ বেতন (মাসিক): <strong>${formatBDT(b.financials.expenses.salaries)}</strong></div>
        <div>হাব ভাড়া ও বিদ্যুৎ: <strong>${formatBDT(b.financials.expenses.rent)}</strong></div>
        <div>জ্বালানি ও যানবাহন: <strong>${formatBDT(b.financials.expenses.fuelUtilities)}</strong></div>
        <div>সর্বমোট মাসিক পরিচালন ব্যয়: <strong style="color:var(--exec-red);">${formatBDT(b.financials.expenses.totalMonthly)}</strong></div>
      </div>
    </div>

    <!-- জনবল ও রাইডার বিবরণী -->
    <div style="background:var(--exec-bg-card-subtle); padding:14px; border-radius:var(--radius-md); margin-bottom:16px; border:1px solid var(--exec-border);">
      <h4 style="font-size:13px; font-weight:800; color:var(--exec-green); margin-bottom:8px;"><i class="fa-solid fa-users"></i> কর্মকর্তা ও রাইডার জনবল</h4>
      <p style="font-size:12px; margin-bottom:4px;"><strong>হাব ইনচার্জ:</strong> ${b.incharge.name} (${b.incharge.phone})</p>
      <p style="font-size:12px; margin-bottom:8px;"><strong>ক্যাশিয়ার:</strong> ${b.cashier.name} (${b.cashier.phone})</p>
      <div style="font-size:12px; display:flex; gap:12px; flex-wrap:wrap; background:rgba(0,0,0,0.2); padding:8px; border-radius:6px;">
        <span>মোট রাইডার: <strong>${b.riders.total} জন</strong></span>
        <span>মার্চেন্ট পিকআপে: <strong>${b.riders.onPickup} জন</strong></span>
        <span>ডেলিভারি রুটে: <strong>${b.riders.onDelivery} জন</strong></span>
        <span>হাব স্ট্যান্ডবাই: <strong>${b.riders.available} জন</strong></span>
      </div>
    </div>

    <button type="button" class="exec-btn exec-btn-gold" style="width:100%; justify-content:center;" onclick="closeBranchDrilldown()">
      <i class="fa-solid fa-check"></i> সম্পন্ন
    </button>
  `;

  modal.classList.add('active');
}

function closeBranchDrilldown() {
  const modal = document.getElementById('exec-detail-modal');
  if (modal) modal.classList.remove('active');
}

// ঘড়ি আপডেট
function updateClock() {
  const clockEl = document.getElementById('exec-clock');
  if (!clockEl) return;
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  clockEl.textContent = `১৯ অক্টো ২০২৬ · ${timeStr}`;
}

// ইনিট ইভেন্টস
document.addEventListener('DOMContentLoaded', () => {
  // সিকিউরিটি চেক (সেশন অথ বা ডিরেক্ট পাসওয়ার্ড)
  const isAuth = sessionStorage.getItem('raj_auth_pass') === 'RAJ2026';
  const gateModal = document.getElementById('owner-gate-modal');
  if (!isAuth && gateModal) {
    gateModal.style.display = 'flex';
    const form = document.getElementById('owner-gate-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('owner-pass-input');
        if (input && input.value.trim() === 'RAJ2026') {
          sessionStorage.setItem('raj_auth_pass', 'RAJ2026');
          gateModal.style.display = 'none';
          showExecToast('মালিক ড্যাশবোর্ডে স্বাগতম!', 'fa-shield-halved');
        } else {
          alert('ভুল পাসওয়ার্ড! অনুগ্রহ করে সঠিক পাসওয়ার্ড দিন।');
        }
      });
    }
  } else if (gateModal) {
    gateModal.style.display = 'none';
  }

  // থিম টগল
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('light-theme');
      localStorage.setItem('raj_theme', isLight ? 'light' : 'dark');
      themeBtn.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });
    if (localStorage.getItem('raj_theme') === 'light') {
      document.body.classList.add('light-theme');
      themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
  }

  // সার্চ ইনপুট
  const searchInput = document.getElementById('exec-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      renderBranches();
    });
  }

  // বিভাগ ফিল্টার বাটনস
  const divButtons = document.querySelectorAll('.div-tab-btn');
  divButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      divButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDivision = btn.dataset.division;
      playSound('click');
      renderBranches();
    });
  });

  // সর্ট সিলেক্টর
  const sortSelect = document.getElementById('exec-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      playSound('click');
      renderBranches();
    });
  }

  // মোডাল ক্লোজ বাটন
  const modalClose = document.getElementById('exec-modal-close-btn');
  if (modalClose) {
    modalClose.addEventListener('click', closeBranchDrilldown);
  }

  // ঘড়ি শুরু
  updateClock();
  setInterval(updateClock, 1000);

  // রেন্ডার
  renderNationalKPIs();
  renderBranches();
});
