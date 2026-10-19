/**
 * রাজ কুরিয়ার সিমুলেটর - ব্রাঞ্চ ও হাব ড্যাশবোর্ড মডিউল (Branch / Hub Dashboard)
 * হাব ইনচার্জ ও ব্রাঞ্চ ম্যানেজমেন্টের পূর্ণাঙ্গ রিয়েলটাইম অপারেশনাল স্ক্রিনসমূহ
 */

const branchDashboardScreens = {
  // ১. ব্রাঞ্চ সামগ্রিক ড্যাশবোর্ড (Overview & KPIs)
  overview: function() {
    return `
      <div class="b-branch-dashboard-page">
        <!-- ব্রাঞ্চ হেডার ব্যানার -->
        <div class="b-hub-header-bar">
          <div class="b-hub-title-group">
            <span class="b-hub-code-badge">SYL-01</span>
            <div>
              <div class="b-hub-name"><i class="fa-solid fa-building-user"></i> সিলেট সেন্ট্রাল হাব (মেইন ব্রাঞ্চ)</div>
              <div class="b-hub-sub">জিন্দাবাজার পয়েন্ট, সিলেট · ইনচার্জ: রফিকুল ইসলাম (01711-234567)</div>
            </div>
          </div>
          <div class="b-hub-status-pills">
            <span class="b-pill green"><i class="fa-solid fa-circle-check"></i> হাব অনলাইন · 24/7 লাইভ</span>
            <span class="b-pill blue"><i class="fa-solid fa-satellite-dish"></i> লাইনহল কানেক্টেড</span>
          </div>
        </div>

        <!-- ব্রাঞ্চ ৪টি প্রধান অপারেশনাল মেট্রিকস কার্ড -->
        <div class="b-kpi-grid">
          <div class="b-kpi-card inbound" onclick="switchBranchDashboardTab('inbound')">
            <div class="b-kpi-top">
              <span class="b-kpi-label"><i class="fa-solid fa-arrow-down-left-and-arrow-up-right-to-center"></i> আজকের ইনবাউন্ড</span>
              <span class="b-kpi-badge in">আসবে</span>
            </div>
            <div class="b-kpi-val">৩৮০ টি</div>
            <div class="b-kpi-sub">হাইওয়ে থেকে আসা ট্রাক খালাস ও সর্টিং</div>
          </div>

          <div class="b-kpi-card outbound">
            <div class="b-kpi-top">
              <span class="b-kpi-label"><i class="fa-solid fa-arrow-up-right-from-square"></i> আজকের আউটবাউন্ড</span>
              <span class="b-kpi-badge out">যাবে</span>
            </div>
            <div class="b-kpi-val">৩২০ টি</div>
            <div class="b-kpi-sub">মার্চেন্ট পিকআপ থেকে ঢাকাগামী ট্রাকে লোড</div>
          </div>

          <div class="b-kpi-card riders" onclick="switchBranchDashboardTab('dispatch')">
            <div class="b-kpi-top">
              <span class="b-kpi-label"><i class="fa-solid fa-motorcycle"></i> সক্রিয় রাইডার</span>
              <span class="b-kpi-badge ride">১৬ জন</span>
            </div>
            <div class="b-kpi-val">১৪ ট্রিপে</div>
            <div class="b-kpi-sub">৫ জন পিকআপে · ৯ জন ডেলিভারিতে · ২ জন ফ্রি</div>
          </div>

          <div class="b-kpi-card vault" onclick="switchBranchDashboardTab('vault')">
            <div class="b-kpi-top">
              <span class="b-kpi-label"><i class="fa-solid fa-vault"></i> ক্যাশিয়ার ভল্ট</span>
              <span class="b-kpi-badge cash">COD ক্যাশ</span>
            </div>
            <div class="b-kpi-val gold">৳২,৮৫,৪০০</div>
            <div class="b-kpi-sub">আজকের সংগৃহীত ক্যাশ টাকা হাবে সুরক্ষিত</div>
          </div>
        </div>

        <!-- হাইওয়ে লাইনহল ট্রাক ট্র্যাকার ব্যানার -->
        <div class="b-highway-banner">
          <div class="b-truck-icon"><i class="fa-solid fa-truck-moving"></i></div>
          <div class="b-truck-info">
            <div class="b-truck-title">ঢাকা সেন্ট্রাল সর্টিং হাব ➔ সিলেট হাব লাইনহল ট্রাক (TRK-DH-8801)</div>
            <div class="b-truck-route">রুট: ঢাকা ➔ ভৈরব ➔ ব্রাহ্মণবাড়িয়া ➔ সিলেট হাইওয়ে · ৩৯০টি পার্সেল লোডেড</div>
          </div>
          <div class="b-truck-eta">
            <span class="eta-label">হাবে পৌঁছানোর সম্ভাব্য সময়:</span>
            <strong class="eta-time">১১:১৫ AM (আজকে)</strong>
          </div>
          <button type="button" class="b-btn b-btn-sm" onclick="showSimToast('🚛 ট্রাক জিপিএস ট্র্যাকিং: ঢাকা-সিলেট হাইওয়েতে ৬০ কিমি/ঘণ্টা গতিতে চলমান', 'fa-truck-fast')">
            <i class="fa-solid fa-location-crosshairs"></i> লাইভ ট্র্যাক
          </button>
        </div>

        <!-- দ্রুত ব্রাঞ্চ অ্যাকশন গ্রিড -->
        <div class="b-quick-actions-row">
          <button type="button" class="b-action-tile" onclick="switchBranchDashboardTab('inbound')">
            <i class="fa-solid fa-barcode"></i>
            <span>বারকোড গান দিয়ে পার্সেল রিসিভ</span>
          </button>
          <button type="button" class="b-action-tile" onclick="switchBranchDashboardTab('dispatch')">
            <i class="fa-solid fa-route"></i>
            <span>রাইডার রানশিট তৈরি ও প্রিন্ট</span>
          </button>
          <button type="button" class="b-action-tile" onclick="switchBranchDashboardTab('vault')">
            <i class="fa-solid fa-hand-holding-dollar"></i>
            <span>রাইডারের ক্যাশ টাকা ভল্টে জমা</span>
          </button>
          <button type="button" class="b-action-tile" onclick="switchBranchDashboardTab('returns')">
            <i class="fa-solid fa-boxes-packing"></i>
            <span>হোল্ড ও রিটার্ন পার্সেল হ্যান্ডলিং</span>
          </button>
        </div>
      </div>
    `;
  },

  // ২. ইনবাউন্ড ও বারকোড স্ক্যানার (Inbound / Barcode Gun Scan)
  inbound: function() {
    return `
      <div class="b-branch-dashboard-page">
        <div class="b-subpage-header">
          <div>
            <h3 class="b-subpage-title"><i class="fa-solid fa-barcode"></i> হাব ইনবাউন্ড আনলোড ও লেজার স্ক্যানিং</h3>
            <p class="b-subpage-desc">হাইওয়ে ট্রাক থেকে পার্সেল নামিয়ে হ্যান্ডহেল্ড বারকোড গান দিয়ে এন্ট্রি ও সর্টিং করুন</p>
          </div>
          <button type="button" class="b-btn b-btn-primary" onclick="simulateBarcodeGunBeep()">
            <i class="fa-solid fa-barcode"></i> বারকোড গান স্ক্যান বিপ টেস্ট
          </button>
        </div>

        <!-- স্ক্যানার ইনপুট ও লাইভ স্ট্যাটাস বার -->
        <div class="b-scanner-input-bar">
          <i class="fa-solid fa-barcode b-scanner-ico"></i>
          <input type="text" id="b-barcode-scan-field" class="b-barcode-input" value="RAJ-DH-89214" placeholder="বারকোড গান দিয়ে স্ক্যান করুন অথবা লিখুন..." />
          <button type="button" class="b-btn b-btn-green" onclick="simulateBarcodeGunBeep()">
            <i class="fa-solid fa-check"></i> এন্ট্রি কনফার্ম
          </button>
        </div>

        <!-- লাইভ সর্টিং ও ব্যাচ রিসিভ টেবিল -->
        <div class="b-table-wrap">
          <table class="b-table">
            <thead>
              <tr>
                <th>বারকোড / ট্র্যাকিং</th>
                <th>প্রেরক মার্চেন্ট</th>
                <th>প্রাপক ও ঠিকানা</th>
                <th>COD মূল্য</th>
                <th>ডেলিভারি এরিয়া</th>
                <th>স্ট্যাটাস</th>
              </tr>
            </thead>
            <tbody>
              <tr class="highlight-row">
                <td><strong style="color:var(--brand-primary); font-family:monospace;">RAJ-DH-89214</strong></td>
                <td>মাহমুদ ফ্যাশন (সিলেট)</td>
                <td>তানভীর আহমেদ (মিরপুর ১০, ঢাকা)</td>
                <td><strong>৳২,০০০</strong></td>
                <td><span class="b-area-tag">মিরপুর রুট-৪</span></td>
                <td><span class="b-status-pill success"><i class="fa-solid fa-check"></i> হাবে রিসিভড</span></td>
              </tr>
              <tr>
                <td><strong style="color:var(--brand-primary); font-family:monospace;">RAJ-DH-89190</strong></td>
                <td>ললনা বুটিক (সিলেট)</td>
                <td>সুমাইয়া আক্তার (ধানমন্ডি ২৭, ঢাকা)</td>
                <td><strong>৳১,৪৫০</strong></td>
                <td><span class="b-area-tag">ধানমন্ডি রুট-১</span></td>
                <td><span class="b-status-pill success"><i class="fa-solid fa-check"></i> হাবে রিসিভড</span></td>
              </tr>
              <tr>
                <td><strong style="color:var(--brand-primary); font-family:monospace;">RAJ-DH-89175</strong></td>
                <td>আড়ং সিল্ক শপ</td>
                <td>রফিকুল ইসলাম (উত্তরা সেক্টর ৪)</td>
                <td><strong>৳৩,২০০</strong></td>
                <td><span class="b-area-tag">উত্তরা রুট-৩</span></td>
                <td><span class="b-status-pill success"><i class="fa-solid fa-check"></i> হাবে রিসিভড</span></td>
              </tr>
              <tr>
                <td><strong style="color:var(--brand-primary); font-family:monospace;">RAJ-DH-89140</strong></td>
                <td>সিলেট ড্রাই ফ্রুটস</td>
                <td>নাজমুল হাসান (বাড্ডা)</td>
                <td><strong>৳৮৫০</strong></td>
                <td><span class="b-area-tag">বাড্ডা রুট-২</span></td>
                <td><span class="b-status-pill in-process"><i class="fa-solid fa-spinner fa-spin"></i> সর্টিং চলছে</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // ৩. রাইডার রানশিট ও ডিসপ্যাচ (Runsheet Dispatch)
  dispatch: function() {
    return `
      <div class="b-branch-dashboard-page">
        <div class="b-subpage-header">
          <div>
            <h3 class="b-subpage-title"><i class="fa-solid fa-route"></i> রাইডার রানশিট অ্যাসাইন ও ডিসপ্যাচ</h3>
            <p class="b-subpage-desc">এরিয়া অনুযায়ী পার্সেল ভাগ করে রাইডারদের ব্যাগে বুঝিয়ে দিন এবং রানশিট প্রিন্ট করুন</p>
          </div>
          <button type="button" class="b-btn b-btn-primary" onclick="showSimToast('📋 নতুন রানশিট তৈরি সম্পন্ন ও প্রিন্টারে পাঠানো হয়েছে!', 'fa-print'); playSimSound('chime');">
            <i class="fa-solid fa-plus"></i> নতুন রানশিট তৈরি করুন
          </button>
        </div>

        <div class="b-runsheet-cards-grid">
          <!-- রানশিট ১ -->
          <div class="b-runsheet-card">
            <div class="b-r-header">
              <span class="b-r-code">RS-MIR-20261019-04</span>
              <span class="b-r-status active">🛵 ফিল্ডে চলমান (৭৭%)</span>
            </div>
            <div class="b-r-rider-info">
              <div class="rider-avatar-sm"><i class="fa-solid fa-motorcycle"></i></div>
              <div>
                <strong style="font-size:13px; color:var(--text-main);">রহিম মিয়া</strong>
                <div style="font-size:11px; color:var(--text-muted);">মিরপুর-১০ এরিয়া · মোট ১৮টি পার্সেল (COD ৳২৪,৫০০)</div>
              </div>
            </div>
            <div class="b-r-progress-box">
              <div class="b-r-bar"><div class="b-r-fill" style="width:77%;"></div></div>
              <div class="b-r-label">১৪টি ডেলিভারি সম্পন্ন · ৪টি বাকি</div>
            </div>
            <div class="b-r-actions">
              <button type="button" class="b-btn b-btn-sm" onclick="showSimToast('🖨️ রহিম মিয়ার রানশিট প্রিন্ট প্রিভিউ প্রস্তুত', 'fa-print'); playSimSound('beep');">
                <i class="fa-solid fa-print"></i> রানশিট প্রিন্ট
              </button>
              <button type="button" class="b-btn b-btn-sm" onclick="showSimToast('📞 রাইডার রহিমকে কল দেওয়া হচ্ছে (01711-XXXXXX)...', 'fa-phone'); playSimSound('beep');">
                <i class="fa-solid fa-phone"></i> কল দিন
              </button>
            </div>
          </div>

          <!-- রানশিট ২ -->
          <div class="b-runsheet-card">
            <div class="b-r-header">
              <span class="b-r-code">RS-MIR-20261019-05</span>
              <span class="b-r-status active">🛵 ফিল্ডে চলমান (৮০%)</span>
            </div>
            <div class="b-r-rider-info">
              <div class="rider-avatar-sm"><i class="fa-solid fa-motorcycle"></i></div>
              <div>
                <strong style="font-size:13px; color:var(--text-main);">সুমন দাস</strong>
                <div style="font-size:11px; color:var(--text-muted);">মিরপুর-২ ও স্টেডিয়াম এরিয়া · মোট ১৫টি পার্সেল (COD ৳১৮,৫০০)</div>
              </div>
            </div>
            <div class="b-r-progress-box">
              <div class="b-r-bar"><div class="b-r-fill" style="width:80%;"></div></div>
              <div class="b-r-label">১২টি ডেলিভারি সম্পন্ন · ৩টি বাকি</div>
            </div>
            <div class="b-r-actions">
              <button type="button" class="b-btn b-btn-sm" onclick="showSimToast('🖨️ সুমন দাসের রানশিট প্রিন্ট প্রিভিউ প্রস্তুত', 'fa-print'); playSimSound('beep');">
                <i class="fa-solid fa-print"></i> রানশিট প্রিন্ট
              </button>
              <button type="button" class="b-btn b-btn-sm" onclick="showSimToast('📞 রাইডার সুমনকে কল দেওয়া হচ্ছে...', 'fa-phone'); playSimSound('beep');">
                <i class="fa-solid fa-phone"></i> কল দিন
              </button>
            </div>
          </div>

          <!-- রানশিট ৩ -->
          <div class="b-runsheet-card">
            <div class="b-r-header">
              <span class="b-r-code">RS-MIR-20261019-06</span>
              <span class="b-r-status active">🛵 ফিল্ডে চলমান (৯২%)</span>
            </div>
            <div class="b-r-rider-info">
              <div class="rider-avatar-sm"><i class="fa-solid fa-motorcycle"></i></div>
              <div>
                <strong style="font-size:13px; color:var(--text-main);">আল-আমিন</strong>
                <div style="font-size:11px; color:var(--text-muted);">শেওড়াপাড়া ও কাজীপাড়া · মোট ১২টি পার্সেল (COD ৳১৪,২০০)</div>
              </div>
            </div>
            <div class="b-r-progress-box">
              <div class="b-r-bar"><div class="b-r-fill" style="width:92%;"></div></div>
              <div class="b-r-label">১১টি ডেলিভারি সম্পন্ন · ১টি বাকি</div>
            </div>
            <div class="b-r-actions">
              <button type="button" class="b-btn b-btn-sm" onclick="showSimToast('🖨️ আল-আমিনের রানশিট প্রিন্ট প্রিভিউ প্রস্তুত', 'fa-print'); playSimSound('beep');">
                <i class="fa-solid fa-print"></i> রানশিট প্রিন্ট
              </button>
              <button type="button" class="b-btn b-btn-sm" onclick="showSimToast('📞 রাইডার আল-আমিনকে কল দেওয়া হচ্ছে...', 'fa-phone'); playSimSound('beep');">
                <i class="fa-solid fa-phone"></i> কল দিন
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // ৪. ক্যাশ কাউন্টার ও ভল্ট (Cash Counter & Vault)
  vault: function() {
    return `
      <div class="b-branch-dashboard-page">
        <div class="b-subpage-header">
          <div>
            <h3 class="b-subpage-title"><i class="fa-solid fa-vault"></i> ব্রাঞ্চ ক্যাশিয়ার কাউন্টার ও ভল্ট জমা</h3>
            <p class="b-subpage-desc">রাইডারদের সংগৃহীত ক্যাশ টাকা গ্রহণ করুন, রিসিট দিন এবং ব্যাংকে ট্রান্সফার করুন</p>
          </div>
          <button type="button" class="b-btn b-btn-primary" onclick="simulateBranchBankTransfer()">
            <i class="fa-solid fa-building-columns"></i> হেড অফিসে ব্যাংক ডিপোজিট ভাউচার
          </button>
        </div>

        <!-- ক্যাশ ব্যালেন্স সামারি -->
        <div class="b-vault-summary-card">
          <div>
            <span class="v-sub-label">আজকের ব্রাঞ্চ ভল্টে মোট ক্যাশ টাকা:</span>
            <div class="v-main-amount" id="b-vault-total-display">৳২,৮৫,৪০০.০০</div>
            <div style="font-size:11px; color:#cbd5e1; margin-top:2px;">ক্যাশিয়ার: তানভীর আহমেদ · হাব ক্যাশ ভল্ট লকড & সিকিউরড</div>
          </div>
          <button type="button" class="b-btn b-btn-gold" onclick="simulateBranchBankTransfer()">
            <i class="fa-solid fa-money-bill-transfer"></i> সেন্ট্রাল অ্যাকাউন্টে জমা দিন
          </button>
        </div>

        <!-- রাইডার ক্যাশ হস্তান্তর অডিট টেবিল -->
        <div class="b-table-wrap">
          <table class="b-table">
            <thead>
              <tr>
                <th>রিসিট আইডি</th>
                <th>রাইডারের নাম</th>
                <th>সম্পন্ন ডেলিভারি</th>
                <th>জমা দেওয়া COD ক্যাশ</th>
                <th>ভল্ট স্ট্যাটাস</th>
                <th>অ্যাকশন</th>
              </tr>
            </thead>
            <tbody>
              <tr class="highlight-row">
                <td><strong style="color:var(--brand-primary);">CLR-DH-901</strong></td>
                <td>রহিম মিয়া (মিরপুর-১০)</td>
                <td>১৪টি পার্সেল (RAJ-DH-89214 সহ)</td>
                <td><strong style="color:var(--brand-success);">৳২,০০০.০০</strong></td>
                <td><span class="b-status-pill success"><i class="fa-solid fa-circle-check"></i> ক্যাশিয়ার গ্রহণ করেছেন</span></td>
                <td><button type="button" class="b-btn b-btn-sm" onclick="showSimToast('🧾 ডিজিটাল ক্যাশ ভাউচার প্রিন্ট সম্পন্ন', 'fa-receipt'); playSimSound('beep');"><i class="fa-solid fa-receipt"></i> রিসিট</button></td>
              </tr>
              <tr>
                <td><strong>CLR-DH-902</strong></td>
                <td>সুমন দাস (মিরপুর-২)</td>
                <td>১২টি পার্সেল</td>
                <td><strong style="color:var(--brand-success);">৳১৮,৫০০.০০</strong></td>
                <td><span class="b-status-pill success"><i class="fa-solid fa-circle-check"></i> ক্যাশিয়ার গ্রহণ করেছেন</span></td>
                <td><button type="button" class="b-btn b-btn-sm" onclick="showSimToast('🧾 ভাউচার ডাউনলোড', 'fa-receipt'); playSimSound('beep');"><i class="fa-solid fa-receipt"></i> রিসিট</button></td>
              </tr>
              <tr>
                <td><strong>CLR-DH-903</strong></td>
                <td>আল-আমিন (শেওড়াপাড়া)</td>
                <td>১১টি পার্সেল</td>
                <td><strong style="color:var(--brand-success);">৳১৪,২০০.০০</strong></td>
                <td><span class="b-status-pill success"><i class="fa-solid fa-circle-check"></i> ক্যাশিয়ার গ্রহণ করেছেন</span></td>
                <td><button type="button" class="b-btn b-btn-sm" onclick="showSimToast('🧾 ভাউচার ডাউনলোড', 'fa-receipt'); playSimSound('beep');"><i class="fa-solid fa-receipt"></i> রিসিট</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // ৫. হোল্ড ও রিটার্ন পার্সেল (Hold & Returns)
  returns: function() {
    return `
      <div class="b-branch-dashboard-page">
        <div class="b-subpage-header">
          <div>
            <h3 class="b-subpage-title"><i class="fa-solid fa-boxes-packing"></i> হোল্ড ও রিটার্ন পার্সেল ম্যানেজমেন্ট</h3>
            <p class="b-subpage-desc">কাস্টমার না পেলে ২য় বার রি-অ্যাসাইন করুন অথবা মার্চেন্টে ফেরত পাঠাতে RTO চালান তৈরি করুন</p>
          </div>
          <button type="button" class="b-btn b-btn-primary" onclick="showSimToast('📦 রিটার্ন টু অরিজিন (RTO) চালান তৈরি সম্পন্ন!', 'fa-truck-fast'); playSimSound('chime');">
            <i class="fa-solid fa-file-invoice"></i> রিটার্ন চালান প্রিন্ট
          </button>
        </div>

        <div class="b-table-wrap">
          <table class="b-table">
            <thead>
              <tr>
                <th>পার্সেল আইডি</th>
                <th>প্রাপক কাস্টমার</th>
                <th>ব্যর্থতার কারণ</th>
                <th>চেষ্টা সংখ্যা</th>
                <th>পরবর্তী অ্যাকশন</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong style="color:var(--brand-primary); font-family:monospace;">RAJ-DH-89112</strong></td>
                <td>কামরুল হাসান (গুলশান-২)</td>
                <td><span style="color:#ef4444; font-weight:700;">ফোন রিসিভ করেননি</span></td>
                <td>১ম বার ব্যর্থ</td>
                <td>
                  <button type="button" class="b-btn b-btn-sm" onclick="showSimToast('আগামীকাল পুনরায় ডেলিভারির জন্য শিডিউল করা হয়েছে', 'fa-calendar-check'); playSimSound('beep');">
                    <i class="fa-solid fa-rotate-right"></i> ২য় বার চেষ্টা শিডিউল
                  </button>
                </td>
              </tr>
              <tr>
                <td><strong style="color:var(--brand-primary); font-family:monospace;">RAJ-DH-89045</strong></td>
                <td>সাইদুর রহমান (মিরপুর-১)</td>
                <td><span style="color:#ef4444; font-weight:700;">ঠিকানা অসম্পূর্ণ / ভুল</span></td>
                <td>২য় বার ব্যর্থ</td>
                <td>
                  <button type="button" class="b-btn b-btn-sm" onclick="showSimToast('কাস্টমার কেয়ার তানভীরের সাথে যোগাযোগ করছে', 'fa-headset'); playSimSound('beep');">
                    <i class="fa-solid fa-headset"></i> মার্চেন্ট সাপোর্ট কল
                  </button>
                </td>
              </tr>
              <tr>
                <td><strong style="color:var(--brand-primary); font-family:monospace;">RAJ-DH-88990</strong></td>
                <td>আফরোজা খানম (ধানমন্ডি)</td>
                <td><span style="color:#ef4444; font-weight:700;">পণ্য নিতে অপারগতা (রিজেক্ট)</span></td>
                <td>৩য় বার ব্যর্থ</td>
                <td>
                  <span class="b-status-pill danger"><i class="fa-solid fa-rotate-left"></i> মার্চেন্টে রিটার্ন চূড়ান্ত</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
};

// গ্লোবাল ফাংশনসমূহ
function simulateBarcodeGunBeep() {
  playSimSound('beep');
  const input = document.getElementById('b-barcode-scan-field');
  const code = input ? input.value : 'RAJ-DH-89214';
  showSimToast(`🔫 বারকোড গান স্ক্যান সফল: ${code} হাবে ইনবাউন্ড কনফার্ম হয়েছে!`, 'fa-barcode', 3000);
}

function simulateBranchBankTransfer() {
  playSimSound('chime');
  const amtDisplay = document.getElementById('b-vault-total-display');
  if (amtDisplay) amtDisplay.textContent = '৳০.০০ (ব্যাংক ডিপোজিট সম্পন্ন)';
  showSimToast('🏦 ৳২,৮৫,৪০০ টাকা সেন্ট্রাল ব্যাংক অ্যাকাউন্টে ডিপোজিট সম্পন্ন হয়েছে! চালান নং: BNK-DEP-20261019-01', 'fa-building-columns', 4500);
}
