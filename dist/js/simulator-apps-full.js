/**
 * রাজ কুরিয়ার সিমুলেটর - ফুল অ্যাপস মডিউল (Full Merchant & Rider Apps)
 * মার্চেন্ট অ্যাপ ও ডেলিভারি অ্যাপের পূর্ণাঙ্গ স্ক্রিন ও ফিচারসমূহ
 */

const merchantFullAppScreens = {
  // ১. পার্সেল তালিকা ও ম্যানেজমেন্ট
  parcels: function() {
    return `
      <div class="m-full-app-page m-parcels-page">
        <div class="m-page-header">
          <div class="m-page-title"><i class="fa-solid fa-boxes-stacked"></i> আমার পার্সেলসমূহ</div>
          <span class="m-count-badge">মোট ১২টি</span>
        </div>

        <!-- ফিল্টার পিলস -->
        <div class="m-filter-row">
          <button type="button" class="m-filter-pill active" onclick="filterSimParcels('all', this)">সব (১২)</button>
          <button type="button" class="m-filter-pill" onclick="filterSimParcels('transit', this)">চলমান (২)</button>
          <button type="button" class="m-filter-pill" onclick="filterSimParcels('delivered', this)">ডেলিভারড (৯)</button>
          <button type="button" class="m-filter-pill" onclick="filterSimParcels('return', this)">রিটার্ন (১)</button>
        </div>

        <!-- পার্সেল লিস্ট -->
        <div class="m-parcels-list" id="m-parcels-list-container">
          <!-- পার্সেল ১ (সিমুলেশনের চলমান পার্সেল) -->
          <div class="m-parcel-card-full active-transit" onclick="goToSimStepFromParcel(1)">
            <div class="m-card-top">
              <span class="m-parcel-id"><i class="fa-solid fa-barcode"></i> RAJ-DH-89214</span>
              <span class="m-status-tag tag-transit"><i class="fa-solid fa-truck-fast"></i> চলমান</span>
            </div>
            <div class="m-card-body">
              <div class="m-cust-name">তানভীর আহমেদ · মিরপুর ১০, ঢাকা</div>
              <div class="m-prod-desc">বুটিক সিল্ক শাড়ি ও প্রিমিয়াম পাঞ্জাবি (১.২ কেজি)</div>
            </div>
            <div class="m-card-footer">
              <span class="m-cod-val">COD: ৳২,০০০</span>
              <span class="m-date-val">আজ ০৯:৩০ AM</span>
            </div>
          </div>

          <!-- পার্সেল ২ (ডেলিভারড) -->
          <div class="m-parcel-card-full">
            <div class="m-card-top">
              <span class="m-parcel-id"><i class="fa-solid fa-barcode"></i> RAJ-DH-89190</span>
              <span class="m-status-tag tag-delivered"><i class="fa-solid fa-check"></i> ডেলিভারড</span>
            </div>
            <div class="m-card-body">
              <div class="m-cust-name">সুমাইয়া আক্তার · ধানমন্ডি ২৭, ঢাকা</div>
              <div class="m-prod-desc">লেডিস থ্রি-পিস ও হ্যান্ডব্যাগ</div>
            </div>
            <div class="m-card-footer">
              <span class="m-cod-val">COD: ৳১,৪৫০</span>
              <span class="m-date-val">১৯ অক্টো · ক্যাশ পেআউট</span>
            </div>
          </div>

          <!-- পার্সেল ৩ (ডেলিভারড) -->
          <div class="m-parcel-card-full">
            <div class="m-card-top">
              <span class="m-parcel-id"><i class="fa-solid fa-barcode"></i> RAJ-DH-89175</span>
              <span class="m-status-tag tag-delivered"><i class="fa-solid fa-check"></i> ডেলিভারড</span>
            </div>
            <div class="m-card-body">
              <div class="m-cust-name">রফিকুল ইসলাম · সেক্টর ৪, উত্তরা, ঢাকা</div>
              <div class="m-prod-desc">কটন ফেব্রিক শেরওয়ানি স্যুট</div>
            </div>
            <div class="m-card-footer">
              <span class="m-cod-val">COD: ৳৩,২০০</span>
              <span class="m-date-val">১৮ অক্টো · বিকাশ পরিশোধিত</span>
            </div>
          </div>

          <!-- পার্সেল ৪ (রিটার্ন) -->
          <div class="m-parcel-card-full">
            <div class="m-card-top">
              <span class="m-parcel-id"><i class="fa-solid fa-barcode"></i> RAJ-DH-89112</span>
              <span class="m-status-tag tag-returned"><i class="fa-solid fa-rotate-left"></i> রিটার্ন সম্পন্ন</span>
            </div>
            <div class="m-card-body">
              <div class="m-cust-name">কামরুল হাসান · গুলশান ২, ঢাকা</div>
              <div class="m-prod-desc">সাইজ পছন্দ না হওয়ায় কাস্টমার প্রত্যাখ্যান করেছেন</div>
            </div>
            <div class="m-card-footer">
              <span class="m-cod-val" style="color:var(--text-muted); text-decoration: line-through;">COD: ৳১,৭০০</span>
              <span class="m-date-val">১৭ অক্টো · মার্চেন্টে ফেরত</span>
            </div>
          </div>
        </div>

        <button type="button" class="sim-btn sim-btn-primary full-booking-btn" onclick="goToSimStepFromParcel(1)">
          <i class="fa-solid fa-circle-plus"></i> নতুন পার্সেল বুকিং করুন
        </button>
      </div>
    `;
  },

  // ২. ওয়ালেট ও ফিন্যান্স লেজার
  wallet: function() {
    return `
      <div class="m-full-app-page m-wallet-page">
        <div class="m-page-header">
          <div class="m-page-title"><i class="fa-solid fa-wallet"></i> মার্চেন্ট ওয়ালেট</div>
          <span class="m-count-badge green-badge">স্বয়ংক্রিয় পেআউট সক্রিয়</span>
        </div>

        <!-- ব্যালেন্স সারসংক্ষেপ কার্ড -->
        <div class="m-wallet-balance-card">
          <div class="w-top-label">উত্তোলনযোগ্য ব্যালেন্স</div>
          <div class="w-main-balance" id="m-wallet-avail-amt">৳১৪,৩৪০.০০</div>
          <div class="w-sub-grid">
            <div class="w-sub-item">
              <span class="w-sub-label">পেন্ডিং COD কালেকশন</span>
              <strong class="w-sub-val" style="color:#f59e0b;">৳২,০০০.০০</strong>
            </div>
            <div class="w-sub-item">
              <span class="w-sub-label">সর্বমোট আজীবন পেআউট</span>
              <strong class="w-sub-val" style="color:#10b981;">৳১,৮৫,৪০০.০০</strong>
            </div>
          </div>
          <button type="button" class="w-payout-btn" id="m-payout-action-btn" onclick="executeMerchantInstantPayout()">
            <i class="fa-solid fa-paper-plane"></i> ইনস্ট্যান্ট বিকাশ পেআউট নিন
          </button>
        </div>

        <!-- লিঙ্কড পেমেন্ট মেথডস -->
        <div class="m-section-label"><i class="fa-solid fa-credit-card"></i> সংযুক্ত অ্যাকাউন্টসমূহ</div>
        <div class="m-payout-accounts">
          <div class="m-acc-card default-acc">
            <div class="acc-icon-bkash">bKash</div>
            <div class="acc-details">
              <div class="acc-name">বিকাশ মার্চেন্ট ওয়ালেট (ডিফল্ট)</div>
              <div class="acc-num">01712-987654 · ইনস্ট্যান্ট অটো ডিসবার্সমেন্ট</div>
            </div>
            <i class="fa-solid fa-circle-check acc-check"></i>
          </div>

          <div class="m-acc-card">
            <i class="fa-solid fa-building-columns acc-bank-icon"></i>
            <div class="acc-details">
              <div class="acc-name">ব্র্যাক ব্যাংক (BRAC Bank Ltd)</div>
              <div class="acc-num">Mahmud Fashion · A/C 1501204892XXXX</div>
            </div>
          </div>
        </div>

        <!-- সাম্প্রতিক লেনদেন হিস্ট্রি -->
        <div class="m-section-label" style="margin-top:14px;"><i class="fa-solid fa-clock-rotate-left"></i> সাম্প্রতিক পেআউট ইতিহাস</div>
        <div class="m-tx-list">
          <div class="m-tx-item">
            <div class="tx-left">
              <div class="tx-badge success"><i class="fa-solid fa-arrow-down-left"></i></div>
              <div>
                <div class="tx-title">বিকাশ পেআউট (১৮টি পার্সেল)</div>
                <div class="tx-meta">১৮ অক্টোবর · TrxID: 9KC82NM74</div>
              </div>
            </div>
            <div class="tx-amt success">+৳১৮,৭৫০</div>
          </div>

          <div class="m-tx-item">
            <div class="tx-left">
              <div class="tx-badge success"><i class="fa-solid fa-arrow-down-left"></i></div>
              <div>
                <div class="tx-title">ব্যাংক EFTN ট্রান্সফার</div>
                <div class="tx-meta">১৫ অক্টোবর · BRAC Bank Payout</div>
              </div>
            </div>
            <div class="tx-amt success">+৳২৪,১০০</div>
          </div>

          <div class="m-tx-item">
            <div class="tx-left">
              <div class="tx-badge success"><i class="fa-solid fa-arrow-down-left"></i></div>
              <div>
                <div class="tx-title">বিকাশ পেআউট (১২টি পার্সেল)</div>
                <div class="tx-meta">১২ অক্টোবর · TrxID: 8HD33LK19</div>
              </div>
            </div>
            <div class="tx-amt success">+৳১২,৩০০</div>
          </div>
        </div>

      </div>
    `;
  },

  // ৩. প্রোফাইল ও সেটিংস
  profile: function() {
    return `
      <div class="m-full-app-page m-profile-page">
        <!-- প্রোফাইল কার্ড -->
        <div class="m-profile-header-card">
          <div class="m-shop-avatar"><i class="fa-solid fa-shop"></i></div>
          <div class="m-shop-title">মাহমুদ ফ্যাশন হাউজ</div>
          <div class="m-shop-code">মার্চেন্ট আইডি: RAJ-M-4402 · গোল্ড টায়ার</div>
          <span class="m-status-tag tag-delivered" style="margin-top:4px;"><i class="fa-solid fa-circle-check"></i> কেওয়াইসি ভেরিফায়েড</span>
        </div>

        <!-- রেট প্ল্যান কার্ড -->
        <div class="m-section-label"><i class="fa-solid fa-tag"></i> এগ্রিমেন্ট ও রেট চার্ট</div>
        <div class="m-rate-card">
          <div class="r-plan-title">প্রিমিয়াম ই-কমার্স প্ল্যান (A-Tier)</div>
          <div class="r-rate-row">
            <span>ঢাকার ভেতরে ডেলিভারি (১ কেজি):</span>
            <strong>৳৭০</strong>
          </div>
          <div class="r-rate-row">
            <span>ঢাকার বাইরে জেলা সদর (১ কেজি):</span>
            <strong>৳১৩০</strong>
          </div>
          <div class="r-rate-row">
            <span>ক্যাশ অন ডেলিভারি (COD) ফি:</span>
            <strong style="color:var(--brand-success);">০% (অফার চলছে)</strong>
          </div>
          <div class="r-rate-row">
            <span>রিটার্ন চার্জ:</span>
            <strong>৫০% রেগুলার রেট</strong>
          </div>
        </div>

        <!-- শপ তথ্য ও সেটিংস -->
        <div class="m-section-label" style="margin-top:14px;"><i class="fa-solid fa-sliders"></i> শপ সেটিংস</div>
        <div class="m-settings-list">
          <div class="m-setting-item">
            <div class="s-info">
              <div class="s-label">পিকআপ লোকেশন</div>
              <div class="s-val">জিন্দাবাজার, সিলেট (হাব: সিলে-০১)</div>
            </div>
            <i class="fa-solid fa-location-dot s-icon"></i>
          </div>
          <div class="m-setting-item">
            <div class="s-info">
              <div class="s-label">রেজিস্টার্ড ফোন নম্বর</div>
              <div class="s-val">01712-XXXXXX</div>
            </div>
            <i class="fa-solid fa-phone s-icon"></i>
          </div>
          <div class="m-setting-item">
            <div class="s-info">
              <div class="s-label">ডেডিকেটেড একাউন্ট ম্যানেজার</div>
              <div class="s-val">সাজিদ আহমেদ (01713-998877)</div>
            </div>
            <i class="fa-solid fa-headset s-icon"></i>
          </div>
        </div>

        <button type="button" class="sim-btn sim-btn-ghost" style="width:100%; margin-top:14px;" onclick="showSimToast('রাজ কুরিয়ার হেল্পলাইন: 16999 (২৪/৭)', 'fa-phone')">
          <i class="fa-solid fa-phone-volume"></i> হেল্পলাইন ১৬৯৯৯ এ কল দিন
        </button>
      </div>
    `;
  }
};

const riderFullAppScreens = {
  // ১. লেজার ক্যামেরা বারকোড স্ক্যানার
  scanner: function() {
    return `
      <div class="r-full-app-page r-scanner-page">
        <div class="r-page-header">
          <div class="r-page-title"><i class="fa-solid fa-barcode"></i> লাইভ বারকোড স্ক্যানার</div>
          <span class="r-count-badge">AI Laser 60fps</span>
        </div>

        <!-- ক্যামেরা ভিউফাইন্ডার সিমুলেশন -->
        <div class="r-camera-viewfinder" id="r-camera-box">
          <div class="laser-beam-line"></div>
          <div class="viewfinder-corner top-left"></div>
          <div class="viewfinder-corner top-right"></div>
          <div class="viewfinder-corner bottom-left"></div>
          <div class="viewfinder-corner bottom-right"></div>

          <div class="viewfinder-center-target">
            <i class="fa-solid fa-expand"></i>
            <span>বারকোড/QR কোড ফ্রেমের মধ্যে রাখুন</span>
          </div>

          <div class="scanner-detect-banner" id="r-scan-detect-banner">
            <i class="fa-solid fa-circle-check"></i> টার্গেট পার্সেল: RAJ-DH-89214
          </div>
        </div>

        <!-- কন্ট্রোল বাটনসমূহ -->
        <div class="r-scanner-actions">
          <button type="button" class="r-scan-trigger-btn" id="r-trigger-scan-btn" onclick="triggerRiderBarcodeScanSound()">
            <i class="fa-solid fa-barcode"></i> স্ক্যান বিপ টেস্ট করুন
          </button>
          
          <div class="r-scan-options-row">
            <button type="button" class="r-sub-action-btn" onclick="toggleRiderFlashlight(this)">
              <i class="fa-solid fa-bolt"></i> ফ্ল্যাশলাইট অন
            </button>
            <button type="button" class="r-sub-action-btn" onclick="showSimToast('ক্যামেরা রেজোলিউশন: HD 1080p অটো-ফোকাস', 'fa-camera')">
              <i class="fa-solid fa-camera-rotate"></i> ক্যামেরা ফ্লিপ
            </button>
          </div>
        </div>

        <!-- ম্যানুয়াল বারকোড এন্ট্রি -->
        <div class="r-manual-box">
          <div class="m-box-label">অথবা বারকোড নম্বর লিখুন:</div>
          <div class="m-input-row">
            <input type="text" class="m-barcode-input" id="r-manual-code-input" value="RAJ-DH-89214" placeholder="RAJ-DH-XXXXX" />
            <button type="button" class="m-submit-code-btn" onclick="triggerRiderBarcodeScanSound()">
              <i class="fa-solid fa-check"></i>
            </button>
          </div>
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

// গ্লোবাল ইন্টারঅ্যাকশন হেল্পার্স
function filterSimParcels(filterType, element) {
  playSimSound('click');
  const pills = document.querySelectorAll('.m-filter-pill');
  pills.forEach(p => p.classList.remove('active'));
  if (element) element.classList.add('active');

  const cards = document.querySelectorAll('.m-parcel-card-full');
  cards.forEach(card => {
    if (filterType === 'all') {
      card.style.display = 'block';
    } else if (filterType === 'transit') {
      card.style.display = card.classList.contains('active-transit') ? 'block' : 'none';
    } else if (filterType === 'delivered') {
      card.style.display = card.querySelector('.tag-delivered') ? 'block' : 'none';
    } else if (filterType === 'return') {
      card.style.display = card.querySelector('.tag-returned') ? 'block' : 'none';
    }
  });
}

function goToSimStepFromParcel(step) {
  playSimSound('click');
  const merchantHomeBtn = document.querySelector('#sim-merchant-bottom-nav [data-m-tab="home"]');
  if (merchantHomeBtn) merchantHomeBtn.click();
  renderSimulatorStep(step);
  showSimToast(`সিমুলেটর ধাপ ${step} এ নিয়ে যাওয়া হয়েছে।`, 'fa-circle-arrow-right');
}

function executeMerchantInstantPayout() {
  playSimSound('chime');
  const amtEl = document.getElementById('m-wallet-avail-amt');
  if (amtEl) amtEl.textContent = '৳০.০০';
  showSimToast('💸 ৳১৪,৩৪০ আপনার বিকাশ মার্চেন্ট ওয়ালেট 01712-987654 এ সফলভাবে ট্রান্সফার করা হয়েছে! TrxID: 9KC99BK2', 'fa-wallet', 4000);
}

function triggerRiderBarcodeScanSound() {
  playSimSound('beep');
  const banner = document.getElementById('r-scan-detect-banner');
  if (banner) {
    banner.style.background = '#059669';
    banner.innerHTML = '<i class="fa-solid fa-circle-check"></i> ✅ বারকোড RAJ-DH-89214 সফলভাবে স্ক্যান হয়েছে!';
    setTimeout(() => {
      banner.style.background = 'rgba(0,0,0,0.7)';
      banner.innerHTML = '<i class="fa-solid fa-circle-check"></i> টার্গেট পার্সেল: RAJ-DH-89214';
    }, 2000);
  }
  showSimToast('লেজার স্ক্যান সফল: RAJ-DH-89214', 'fa-barcode');
}

function toggleRiderFlashlight(btn) {
  playSimSound('click');
  const box = document.getElementById('r-camera-box');
  if (box) {
    const isOn = box.classList.toggle('flashlight-on');
    if (btn) btn.innerHTML = isOn ? '<i class="fa-solid fa-bolt-slash"></i> ফ্ল্যাশলাইট অফ' : '<i class="fa-solid fa-bolt"></i> ফ্ল্যাশলাইট অন';
    showSimToast(isOn ? '💡 ফ্ল্যাশলাইট চালু হয়েছে' : 'ফ্ল্যাশলাইট বন্ধ করা হয়েছে', 'fa-bolt');
  }
}

function executeRiderVaultHandover() {
  playSimSound('chime');
  const cashEl = document.getElementById('r-vault-cash-amt');
  if (cashEl) cashEl.textContent = '৳০.০০ (ক্লিয়ার্ড)';
  showSimToast('✅ হাব ক্যাশিয়ার ৳২,০০০ ক্যাশ গ্রহণ করেছেন ও ডিজিটাল রিসিট প্রদান করেছেন!', 'fa-receipt', 3500);
}
