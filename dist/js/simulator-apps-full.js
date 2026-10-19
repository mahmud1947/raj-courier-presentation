/**
 * রাজ কুরিয়ার সিমুলেটর - ডেলিভারি ম্যান / রাইডার অ্যাপ মডিউল (Full Rider Pro App)
 * রানশিট, ট্রিপ হিস্ট্রি, ক্যাশ ভল্ট ও ফিল্ড অপারেশন (নো-স্ক্যান পলিসি: স্ক্যানিং কেবল ব্রাঞ্চ হাবে হবে)
 */

const riderFullAppScreens = {
  // ১. ডেলিভারি হিস্ট্রি ও সম্পন্ন ট্রিপ লগ
  history: function() {
    return `
      <div class="r-full-app-page r-history-page">
        <div class="r-page-header">
          <div>
            <div class="r-page-title"><i class="fa-solid fa-clock-rotate-left"></i> ট্রিপ হিস্ট্রি</div>
            <div class="r-sub-text">আজকের সফল ডেলিভারি ও রুট লগ</div>
          </div>
          <span class="r-count-badge green-badge">১৪টি সম্পন্ন</span>
        </div>

        <div class="r-history-stats-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:12px;">
          <div style="background:#f1f5f9; padding:10px; border-radius:10px; border:1px solid #e2e8f0; text-align:center;">
            <div style="font-size:11px; color:#64748b; font-weight:600;">সফল ডেলিভারি রেট</div>
            <div style="font-size:18px; font-weight:800; color:#059669; margin-top:2px;">৯৬.৫%</div>
          </div>
          <div style="background:#f1f5f9; padding:10px; border-radius:10px; border:1px solid #e2e8f0; text-align:center;">
            <div style="font-size:11px; color:#64748b; font-weight:600;">অন-টাইম রেটিং</div>
            <div style="font-size:18px; font-weight:800; color:#0284c7; margin-top:2px;">৪.৯ ⭐ (৫৮)</div>
          </div>
        </div>

        <!-- ট্রিপ লগ তালিকা -->
        <div class="r-stops-list">
          <div class="r-stop-item done">
            <div class="r-stop-num"><i class="fa-solid fa-check"></i></div>
            <div class="r-stop-info">
              <div class="r-stop-cust">কবির হোসেন · ৳১,৫০০ (নগদ আদায়)</div>
              <div class="r-stop-addr"><i class="fa-solid fa-location-dot"></i> পশ্চিম কাজীপাড়া, মিরপুর · ১০:১৫ AM</div>
              <div class="r-stop-status status-done">সফল ডেলিভারি (OTP ভেরিফাইড)</div>
            </div>
          </div>

          <div class="r-stop-item done">
            <div class="r-stop-num"><i class="fa-solid fa-check"></i></div>
            <div class="r-stop-info">
              <div class="r-stop-cust">ফারহানা হক · ৳১,২০০ (বিকাশ পেইড)</div>
              <div class="r-stop-addr"><i class="fa-solid fa-location-dot"></i> ব্লক ডি, মিরপুর ১২ · ০৯:৪৫ AM</div>
              <div class="r-stop-status status-done">সফল ডেলিভারি (প্রিপেইড)</div>
            </div>
          </div>

          <div class="r-stop-item done">
            <div class="r-stop-num"><i class="fa-solid fa-check"></i></div>
            <div class="r-stop-info">
              <div class="r-stop-cust">সুমন খান · ৳৮৫০ (নগদ আদায়)</div>
              <div class="r-stop-addr"><i class="fa-solid fa-location-dot"></i> দক্ষিণ মনিপুর, মিরপুর · ০৯:২০ AM</div>
              <div class="r-stop-status status-done">সফল ডেলিভারি (OTP ভেরিফাইড)</div>
            </div>
          </div>
        </div>

        <div style="margin-top:12px; padding:10px; border-radius:8px; background:#eff6ff; border:1px dashed #93c5fd; font-size:11px; color:#1e40af; line-height:1.5;">
          <i class="fa-solid fa-shield-halved" style="margin-right:4px; color:#2563eb;"></i>
          <strong>নো-স্ক্যান পলিসি:</strong> মার্চেন্ট বা রাইডারের কোনো বারকোড স্ক্যান করতে হয় না। ব্রাঞ্চ হাবে অপারেটর সেন্ট্রাল বারকোড স্ক্যানার গান দিয়ে ইনবাউন্ড ও প্রসেস করেন।
        </div>
      </div>
    `;
  },

  // ২. মিরপুর রুট রানশিট
  runsheet: function() {
    return `
      <div class="r-full-app-page r-runsheet-page">
        <div class="r-page-header">
          <div>
            <div class="r-page-title"><i class="fa-solid fa-route"></i> আজকের রানশিট</div>
            <div class="r-sub-text">RS-MIR-20261019-04 · মিরপুর হাব</div>
          </div>
          <span class="r-count-badge green-badge">১৪/১৮ সম্পন্ন</span>
        </div>

        <!-- প্রগ্রেস বার -->
        <div class="r-runsheet-progress-wrap">
          <div class="r-progress-labels">
            <span>ডেলিভারি সম্পন্ন: ৭৭%</span>
            <span>বাকি: ৪টি পার্সেল</span>
          </div>
          <div class="r-progress-bar">
            <div class="r-progress-fill" style="width: 77%;"></div>
          </div>
        </div>

        <!-- ডেলিভারি স্টপ তালিকা -->
        <div class="r-stops-list">
          <!-- স্টপ ১ (সিমুলেশন পার্সেল) -->
          <div class="r-stop-item active-current" onclick="goToSimStepFromParcel(6)">
            <div class="r-stop-num">১৫</div>
            <div class="r-stop-info">
              <div class="r-stop-cust">তানভীর আহমেদ (COD: ৳২,০০০)</div>
              <div class="r-stop-addr"><i class="fa-solid fa-location-dot"></i> রোড ৪, ব্লক সি, মিরপুর ১০</div>
              <div class="r-stop-status status-now"><i class="fa-solid fa-motorcycle"></i> চলতি ডেলিভারি স্টপ</div>
            </div>
            <a href="tel:01711234567" class="r-stop-call-btn" onclick="event.stopPropagation(); showSimToast('📞 তানভীর আহমেদকে কল দেওয়া হচ্ছে (01711-234567)...', 'fa-phone'); playSimSound('beep');"><i class="fa-solid fa-phone"></i></a>
          </div>

          <!-- স্টপ ২ (পেন্ডিং) -->
          <div class="r-stop-item pending">
            <div class="r-stop-num">১৬</div>
            <div class="r-stop-info">
              <div class="r-stop-cust">নাফিসা তাবাসসুম (COD: ৳৯৫০)</div>
              <div class="r-stop-addr"><i class="fa-solid fa-location-dot"></i> পূর্ব শেওড়াপাড়া, মিরপুর</div>
              <div class="r-stop-status status-pending">পরবর্তী স্টপ</div>
            </div>
            <button type="button" class="r-stop-call-btn" onclick="showSimToast('📞 নাফিসা তাবাসসুমকে কল দেওয়া হচ্ছে...', 'fa-phone'); playSimSound('beep');"><i class="fa-solid fa-phone"></i></button>
          </div>

          <!-- স্টপ ৩ (পেন্ডিং) -->
          <div class="r-stop-item pending">
            <div class="r-stop-num">১৭</div>
            <div class="r-stop-info">
              <div class="r-stop-cust">সাব্বির আহমেদ (COD: ৳১,২০০)</div>
              <div class="r-stop-addr"><i class="fa-solid fa-location-dot"></i> ব্লক ডি, মিরপুর ২, স্টেডিয়াম সংলগ্ন</div>
              <div class="r-stop-status status-pending">পেন্ডিং</div>
            </div>
            <button type="button" class="r-stop-call-btn" onclick="showSimToast('📞 সাব্বির আহমেদকে কল দেওয়া হচ্ছে...', 'fa-phone'); playSimSound('beep');"><i class="fa-solid fa-phone"></i></button>
          </div>

          <!-- স্টপ ৪ (সম্পন্ন) -->
          <div class="r-stop-item done">
            <div class="r-stop-num"><i class="fa-solid fa-check"></i></div>
            <div class="r-stop-info">
              <div class="r-stop-cust">কবির হোসেন (COD: ৳১,৫০০)</div>
              <div class="r-stop-addr"><i class="fa-solid fa-location-dot"></i> পশ্চিম কাজীপাড়া, মিরপুর</div>
              <div class="r-stop-status status-done">সফল ডেলিভারি (১০:১৫ AM)</div>
            </div>
          </div>
        </div>

        <button type="button" class="sim-btn sim-btn-primary" style="width:100%; margin-top:10px; background:#059669;" onclick="showSimToast('🗺️ গুগল ম্যাপসে অপ্টিমাইজড জিপিএস রুট খোলা হয়েছে!', 'fa-map-location-dot')">
          <i class="fa-solid fa-map-location-dot"></i> গুগল ম্যাপস জিপিএস নেভিগেশন
        </button>
      </div>
    `;
  },

  // ৩. ক্যাশ ভল্ট ও আর্নিং
  vault: function() {
    return `
      <div class="r-full-app-page r-vault-page">
        <div class="r-page-header">
          <div class="r-page-title"><i class="fa-solid fa-vault"></i> ক্যাশ ভল্ট ও দৈনিক আয়</div>
          <span class="r-count-badge green-badge">হাবে জমা পেন্ডিং</span>
        </div>

        <!-- ভল্ট কার্ড -->
        <div class="r-vault-balance-card">
          <div class="v-label">হাতে থাকা ক্যাশ টাকা (COD Collection)</div>
          <div class="v-amt" id="r-vault-cash-amt">৳২,০০০.০০</div>
          <div class="v-sub">আজকের মোট ১৪টি ডেলিভারি থেকে সংগৃহীত টাকা</div>

          <div class="v-earning-grid">
            <div class="v-earn-col">
              <span class="e-label">আজকের কমিশন আয়</span>
              <strong class="e-val" style="color:#10b981;">৳৮৫০.০০</strong>
            </div>
            <div class="v-earn-col">
              <span class="e-label">রাইডার পারফরম্যান্স</span>
              <strong class="e-val" style="color:#f59e0b;">৪.৯ ⭐ (৫৭)</strong>
            </div>
          </div>
        </div>

        <!-- হাব ক্যাশিয়ার কিউআর কোড কার্ড -->
        <div class="r-hub-deposit-box">
          <div class="d-box-title"><i class="fa-solid fa-qrcode"></i> হাব ক্যাশিয়ার ক্লিয়ারেন্স QR</div>
          <p class="d-box-sub">হাবে ফিরে ক্যাশিয়ারকে এই QR কোডটি স্ক্যান করতে দিন অথবা ক্যাশ হস্তান্তর বাটন চাপুন:</p>

          <div class="r-qr-code-display">
            <div class="qr-mock-box">
              <i class="fa-solid fa-qrcode" style="font-size: 68px; color: #1e293b;"></i>
              <span class="qr-label">RIDER-CLEAR-DH04</span>
            </div>
          </div>

          <button type="button" class="sim-btn sim-btn-primary" style="width:100%; background:#059669;" onclick="executeRiderVaultHandover()">
            <i class="fa-solid fa-hand-holding-dollar"></i> ক্যাশিয়ারকে ক্যাশ বুঝিয়ে দিন
          </button>
        </div>

      </div>
    `;
  }
};
// গ্লোবাল রাইডার ইন্টারঅ্যাকশন হেল্পার্স
function executeRiderVaultHandover() {
  playSimSound('chime');
  const cashEl = document.getElementById('r-vault-cash-amt');
  if (cashEl) cashEl.textContent = '৳০.০০ (ক্লিয়ার্ড)';
  showSimToast('✅ হাব ক্যাশিয়ার ৳২,০০০ ক্যাশ গ্রহণ করেছেন ও ডিজিটাল রিসিট প্রদান করেছেন!', 'fa-receipt', 3500);
}

