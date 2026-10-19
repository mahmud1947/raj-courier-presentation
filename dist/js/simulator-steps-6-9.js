/**
 * রাজ কুরিয়ার সিমুলেটর - ধাপ ৬ থেকে ধাপ ৯ (লাস্ট-মাইল ডেলিভারি ➔ ওটিপি ও ক্যাশ ➔ হাব ক্লোজিং ➔ বিকাশ পেআউট)
 */
const simSteps6to9 = [
  // ধাপ ৬: লাস্ট-মাইল ডেলিভারি ও কাস্টমার ওটিপি
  // ==========================================
  {
    step: 6,
    title: 'লাস্ট-মাইল ডেলিভারি ও কাস্টমার ওটিপি যাচাই',
    primaryApp: 'rider',
    riderName: 'রহিম (মিরপুর ডেলিভারি রাইডার)',
    browserUrl: 'https://hub.rajcourier.com/mirpur/delivery-live',
    custody: 'রহিম (মিরপুর ডেলিভারি রাইডার)',
    location: 'বাসা ২৪, রোড ৩, মিরপুর-১০',
    cashStatus: 'আদায় প্রক্রিয়ায় (৳০ ➔ ৳২,০০০)',
    cashNote: 'কাস্টমার ওটিপি ৭৪২৯ ও ক্যাশ প্রস্তুত করছেন',
    merchantPayout: '৳১,৮৯০ (প্রক্রিয়াধীন)',
    statusChip: { text: 'ওটিপি যাচাই', class: 'pending' },
    statusTime: '২০ অক্টো ২০২৬ · ১১:৪০ AM',
    smsText: 'রাইডার আপনার দরজায় উপস্থিত। ওটিপি ৭৪২৯ দিয়ে পার্সেল বুঝে নিন এবং ৳২,০০০ ক্যাশ পরিশোধ করুন।',
    trackStatus: 'রাইডার গ্রাহকের দরজায় উপস্থিত',
    trackEta: 'এখনই ডেলিভারি চলছে',
    trackProgress: 75,
    historyDone: [
      '১৯ অক্টো ০৯:৪১ AM · অর্ডার বুকিং সম্পন্ন (সিলেট শপ)',
      '১৯ অক্টো ১০:১৫ AM · রাইডার করিম কর্তৃক পার্সেল পিকআপ সম্পন্ন',
      '১৯ অক্টো ১১:৩০ AM · সিলেট সেন্ট্রাল হাবে ইনবাউন্ড ও থার্মাল লেবেলিং',
      '১৯ অক্টো ০৮:০০ PM · আন্তঃজেলা লাইন-হোল ট্রাকে পরিবহন',
      '২০ অক্টো ০৪:০০ AM · তেজগাঁও সর্টিং হাবে অটো-সর্ট সম্পন্ন',
      '২০ অক্টো ০৯:৩০ AM · মিরপুর হাবে রাইডার রহিমের রানশিটে বরাদ্দ',
      '২০ অক্টো ১১:৪০ AM · রাইডার রহিম গ্রাহকের ঠিকানায় উপস্থিত'
    ],

    // ১. মার্চেন্ট অ্যাপ স্ক্রিন
    merchantHtml: `
      <div class="m-card">
        <span class="m-badge warning"><i class="fa-solid fa-street-view"></i> গ্রাহকের ঠিকানায় রাইডার</span>
        <div class="m-field-group">
          <span class="m-label">প্রাপক:</span>
          <span class="m-val">তানভীর আহমেদ (মিরপুর-১০)</span>
        </div>
        <div class="m-field-group">
          <span class="m-label">আদায়যোগ্য COD:</span>
          <span class="m-val highlight" style="color:var(--brand-accent);">৳২,০০০</span>
        </div>
        <div class="m-field-group">
          <span class="m-label">রাইডার অবস্থান:</span>
          <span class="m-val">গ্রাহকের দরজায় উপস্থিত</span>
        </div>
    `,

    // ২. রাইডার অ্যাপ স্ক্রিন
    riderHtml: `
      <div class="m-card">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="m-badge warning"><i class="fa-solid fa-person-shelter"></i> কাস্টমারের দরজায় উপস্থিত</span>
          <strong style="color:var(--brand-accent); font-size:14px;">COD: ৳২,০০০</strong>
        </div>
        <div style="margin-top:8px; font-size:12px; line-height:1.6;">
          <div><strong>গ্রাহক:</strong> তানভীর আহমেদ</div>
          <div><strong>ঠিকানা:</strong> বাসা ২৪, রোড ৩, মিরপুর-১০, ঢাকা</div>
        </div>
        <button id="m-action-btn-call" class="m-btn m-btn-call" style="margin-top:8px; padding:6px 12px; font-size:12px;">
          <i class="fa-solid fa-phone-volume"></i> তানভীর আহমেদকে কল দিন (01711-234567)
        </button>
      </div>

      <!-- OTP Input Box -->
      <div class="m-otp-box">
        <div style="font-size:11px; font-weight:800; color:var(--text-muted); text-transform:uppercase;">
          <i class="fa-solid fa-key"></i> কাস্টমার ওটিপি দিন (গ্রাহকের এসএমএস কোড)
        </div>
        <div class="m-otp-inputs">
          <input type="text" class="m-otp-digit" value="7" readonly>
          <input type="text" class="m-otp-digit" value="4" readonly>
          <input type="text" class="m-otp-digit" value="2" readonly>
          <input type="text" class="m-otp-digit" value="9" readonly>
        </div>
        <div style="font-size:11px; color:var(--brand-success); font-weight:700;">
          <i class="fa-solid fa-check"></i> কোড মিলেছে (তানভীরের ফোনে পাঠানো OTP: 7429)
        </div>
      </div>

      <button id="m-action-btn-6" class="m-btn m-btn-success" style="margin-top:8px;">
        <i class="fa-solid fa-shield-halved"></i> ওটিপি যাচাই ও ক্যাশ ৳২,০০০ গ্রহণ করুন
      </button>
    `,

    // ৩. ডেস্কটপ ব্রাউজার স্ক্রিন
    desktopHtml: `
      <div class="d-grid-2">
        <div class="d-panel">
          <div class="d-panel-title"><i class="fa-solid fa-shield-halved"></i> সেন্ট্রাল ওটিপি অথেনটিকেশন সার্ভার</div>
          <table class="d-table">
            <tr><td>পার্সেল ট্র্যাকিং আইডি</td><td><strong>RAJ-DH-89214</strong></td></tr>
            <tr><td>অ্যাসাইনকৃত ওটিপি</td><td><strong style="color:var(--brand-accent); letter-spacing:2px;">7 4 2 9</strong></td></tr>
            <tr><td>এসএমএস ডেলিভারি স্ট্যাটাস</td><td>✅ সফলভাবে ডেলিভার্ড (GP টেলিকম)</td></tr>
            <tr><td>ওটিপি মেয়াদ</td><td>১৫ মিনিট (বাকি আছে ৮ মিনিট)</td></tr>
          </table>
        </div>
        <div class="d-panel">
          <div class="d-panel-title"><i class="fa-solid fa-lock"></i> জাল ডেলিভারি ও প্রতারণা প্রতিরোধ পলিসি</div>
          <div style="font-size:12px; line-height:1.6; color:var(--text-main);">
            <div><strong>১. রাইডার নিজের ইচ্ছেমত "Delivered" করতে পারে না।</strong></div>
            <div>২. গ্রাহক নিজে ওটিপি না দিলে সিস্টেম ডেলিভারি ব্লক করে রাখবে।</div>
            <div>৩. ওটিপি সাবমিট হওয়ার সাথে সাথে স্বয়ংক্রিয়ভাবে রাইডারের ডিজিটাল ক্যাশ লেজারে ৳২,০০০ যুক্ত হয়।</div>
          </div>
        </div>
      </div>
    `
  },

  // ==========================================
  // ধাপ ৭: সফল ডেলিভারি ও ক্যাশ কালেকশন
  // ==========================================
  {
    step: 7,
    title: 'সফল ডেলিভারি ও ক্যাশ কালেকশন',
    primaryApp: 'rider',
    riderName: 'রহিম (মিরপুর ডেলিভারি রাইডার)',
    browserUrl: 'https://hub.rajcourier.com/mirpur/cash-vault',
    custody: 'তানভীর আহমেদ (গ্রাহক - পার্সেল)',
    location: 'মিরপুর-১০, ঢাকা',
    cashStatus: 'সংগৃহীত (৳২,০০০)',
    cashNote: 'ক্যাশ রাইডার রহিমের হাতে/ক্যাশব্যাগে আছে',
    merchantPayout: '৳১,৮৯০ (ক্যাশ ক্লোজিংয়ের অপেক্ষায়)',
    statusChip: { text: 'ডেলিভারি সম্পন্ন', class: 'delivered' },
    statusTime: '২০ অক্টো ২০২৬ · ১১:৪২ AM',
    smsText: 'আপনার পার্সেল সফলভাবে ডেলিভারি হয়েছে। রাজ কুরিয়ার ব্যবহার করার জন্য ধন্যবাদ!',
    trackStatus: 'পার্সেল সফলভাবে ডেলিভার্ড',
    trackEta: 'সম্পন্ন',
    trackProgress: 88,
    historyDone: [
      '১৯ অক্টো ০৯:৪১ AM · অর্ডার বুকিং সম্পন্ন (সিলেট শপ)',
      '১৯ অক্টো ১০:১৫ AM · রাইডার করিম কর্তৃক পার্সেল পিকআপ সম্পন্ন',
      '১৯ অক্টো ১১:৩০ AM · সিলেট সেন্ট্রাল হাবে ইনবাউন্ড ও থার্মাল লেবেলিং',
      '১৯ অক্টো ০৮:০০ PM · আন্তঃজেলা লাইন-হোল ট্রাকে পরিবহন',
      '২০ অক্টো ০৪:০০ AM · তেজগাঁও সর্টিং হাবে অটো-সর্ট সম্পন্ন',
      '২০ অক্টো ০৯:৩০ AM · মিরপুর হাবে রাইডার রহিমের রানশিটে বরাদ্দ',
      '২০ অক্টো ১১:৪০ AM · রাইডার রহিম গ্রাহকের ঠিকানায় উপস্থিত',
      '২০ অক্টো ১১:৪২ AM · ওটিপি ৭৪২৯ যাচাই ও ৳২,০০০ ক্যাশ কালেকশন সম্পন্ন'
    ],

    // ১. মার্চেন্ট অ্যাপ স্ক্রিন
    merchantHtml: `
      <div class="m-card">
        <span class="m-badge success"><i class="fa-solid fa-circle-check"></i> পার্সেল সফলভাবে ডেলিভার্ড!</span>
        <div style="margin-top:6px;">
          <div class="m-field-group">
            <span class="m-label">গ্রাহক:</span>
            <span class="m-val">তানভীর আহমেদ</span>
          </div>
          <div class="m-field-group">
            <span class="m-label">সংগৃহীত ক্যাশ:</span>
            <span class="m-val" style="color:var(--brand-accent); font-weight:800;">৳২,০০০</span>
          </div>
          <div class="m-field-group">
            <span class="m-label">ডেলিভারি সময়:</span>
            <span class="m-val">সকাল ১১:৪২ AM</span>
          </div>
        </div>
    `,

    // ২. রাইডার অ্যাপ স্ক্রিন
    riderHtml: `
      <div class="m-card" style="text-align:center; padding:16px;">
        <div class="m-success-check">
          <i class="fa-solid fa-check"></i>
        </div>
        <strong style="color:var(--brand-success); font-size:15px; display:block; margin-top:8px;">
          ডেলিভারি সফল ও ওটিপি নিশ্চিত!
        </strong>
        <span style="font-size:11px; color:var(--text-muted);">পার্সেল আইডি: RAJ-DH-89214</span>
      </div>

      <div class="m-card">
        <div class="m-field-group">
          <span class="m-label">সংগৃহীত COD:</span>
          <span class="m-val highlight" style="color:var(--brand-accent); font-weight:800; font-size:14px;">৳২,০০০</span>
        </div>
        <div class="m-field-group">
          <span class="m-label">রাইডারের বর্তমান ক্যাশ দায়:</span>
          <span class="m-val" style="color:var(--brand-danger);">৳২,০০০ (হাতে সংরক্ষিত)</span>
        </div>
      </div>

      <button id="m-action-btn-7" class="m-btn m-btn-warning">
        <i class="fa-solid fa-vault"></i> মিরপুর হাবে ক্যাশ ডিপোজিট করুন
      </button>
    `,

    // ৩. ডেস্কটপ ব্রাউজার স্ক্রিন
    desktopHtml: `
      <div class="d-grid-2">
        <div class="d-panel">
          <div class="d-panel-title"><i class="fa-solid fa-vault"></i> মিরপুর হাব - রাইডার লাইভ ক্যাশ ট্র্যাকিং</div>
          <table class="d-table">
            <thead><tr><th>রাইডার</th><th>সংগৃহীত ক্যাশ</th><th>হ্যান্ডওভার স্ট্যাটাস</th></tr></thead>
            <tbody>
              <tr>
                <td>রহিম মিয়া (#RD-DH-42)</td>
                <td><strong style="color:var(--brand-accent);">৳২,০০০</strong></td>
                <td><span class="status-badge warning">⏳ হাবে জমার অপেক্ষায়</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="d-panel">
          <div class="d-panel-title"><i class="fa-solid fa-cash-register"></i> হেড অফিস ক্যাশ কন্ট্রোল ও অডিট</div>
          <div style="font-size:12px; line-height:1.6; color:var(--text-main);">
            <div><strong>মোট কালেকশন লক্ষ্যমাত্রা:</strong> ৳৩৮,৫০০ (আজকের রানশিট)</div>
            <div><strong>সংগৃহীত রিয়েল-টাইম:</strong> ৳২,০০০ (পার্সেল RAJ-DH-89214)</div>
            <div><strong>রাইডার লায়াবিলিটি (দেনার হিসাব):</strong> ৳২,০০০ লাইভ ডেবিট করা হয়েছে</div>
          </div>
        </div>
      </div>
    `
  },

  // ==========================================
  // ধাপ ৮: হাব ক্যাশ ক্লোজিং ও রিকনসিলিয়েশন
  // ==========================================
  {
    step: 8,
    title: 'হাব ক্যাশ ক্লোজিং ও ব্যাংক ডিপোজিট',
    primaryApp: 'rider',
    riderName: 'রহিম (মিরপুর ডেলিভারি রাইডার)',
    browserUrl: 'https://accounts.rajcourier.com/cash-closing',
    custody: 'মিরপুর হাব ক্যাশ ভল্ট',
    location: 'মিরপুর-১০ হাব ক্যাশ কাউন্টার',
    cashStatus: 'হাবে জমা হয়েছে (৳২,০০০)',
    cashNote: 'হাব ক্যাশিয়ার তৌফিক কর্তৃক ভেরিফাইড',
    merchantPayout: '৳১,৮৯০ (বিকাশ ডিজবার্সমেন্ট ব্যাচ সক্রিয়)',
    statusChip: { text: 'ক্যাশ ক্লোজিং', class: 'delivered' },
    statusTime: '২০ অক্টো ২০২৬ · ০২:১৫ PM',
    smsText: 'আপনার পার্সেলের ক্যাশ ৳২,০০০ রাজ কুরিয়ার মিরপুর হাবে জমা হয়েছে। মার্চেন্ট পেআউট প্রসেস চলছে।',
    trackStatus: 'ক্যাশ সংগৃহীত ও হাবে জমা',
    trackEta: 'সম্পন্ন',
    trackProgress: 94,
    historyDone: [
      '১৯ অক্টো ০৯:৪১ AM · অর্ডার বুকিং সম্পন্ন (সিলেট শপ)',
      '১৯ অক্টো ১০:১৫ AM · রাইডার করিম কর্তৃক পার্সেল পিকআপ সম্পন্ন',
      '১৯ অক্টো ১১:৩০ AM · সিলেট সেন্ট্রাল হাবে ইনবাউন্ড ও থার্মাল লেবেলিং',
      '১৯ অক্টো ০৮:০০ PM · আন্তঃজেলা লাইন-হোল ট্রাকে পরিবহন',
      '২০ অক্টো ০৪:০০ AM · তেজগাঁও সর্টিং হাবে অটো-সর্ট সম্পন্ন',
      '২০ অক্টো ০৯:৩০ AM · মিরপুর হাবে রাইডার রহিমের রানশিটে বরাদ্দ',
      '২০ অক্টো ১১:৪০ AM · রাইডার রহিম গ্রাহকের ঠিকানায় উপস্থিত',
      '২০ অক্টো ১১:৪২ AM · ওটিপি ৭৪২৯ যাচাই ও ৳২,০০০ ক্যাশ কালেকশন সম্পন্ন',
      '২০ অক্টো ০২:১৫ PM · মিরপুর হাব ক্যাশিয়ার কাউন্টারে ক্যাশ জমা ও ক্লোজিং সম্পন্ন'
    ],

    // ১. মার্চেন্ট অ্যাপ স্ক্রিন
    merchantHtml: `
      <div class="m-card">
        <span class="m-badge info"><i class="fa-solid fa-building-columns"></i> হাব ক্যাশ ক্লোজিং সম্পন্ন</span>
        <div class="m-field-group">
          <span class="m-label">জমা প্রদানকারী:</span>
          <span class="m-val">রাইডার রহিম মিয়া</span>
        </div>
        <div class="m-field-group">
          <span class="m-label">গ্রহণকারী ক্যাশিয়ার:</span>
          <span class="m-val">তৌফিকুর রহমান (মিরপুর হাব)</span>
        </div>
        <div class="m-field-group">
          <span class="m-label">জমাকৃত ক্যাশ:</span>
          <span class="m-val highlight" style="color:var(--brand-accent);">৳২,০০০ (১০০% রিকনসাইল্ড)</span>
        </div>
    `,

    // ২. রাইডার অ্যাপ স্ক্রিন
    riderHtml: `
      <div class="m-card">
        <span class="m-badge success"><i class="fa-solid fa-file-circle-check"></i> মিরপুর হাব ক্যাশ কাউন্টার রিসিট</span>
        <div style="margin-top:8px; font-size:12px; line-height:1.6;">
          <div><strong>রিসিট নং:</strong> #REC-MIR-98214</div>
          <div><strong>ক্যাশিয়ার:</strong> তৌফিকুর রহমান (#CASH-09)</div>
          <div><strong>জমাকৃত টাকা:</strong> <span style="color:var(--brand-accent); font-weight:800;">৳২,০০০</span></div>
          <div><strong>টাইমস্ট্যাম্প:</strong> ২০ অক্টো · ০২:১৫ PM</div>
        </div>
      </div>

      <div class="m-card" style="background:rgba(5,150,105,0.04); border-color:var(--brand-success);">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:12px; font-weight:700; color:var(--brand-success);">রাইডার বর্তমান ব্যালেন্স:</span>
          <span style="font-size:14px; font-weight:800; color:var(--brand-success);">৳০ (ক্লিয়ার)</span>
        </div>
      </div>

      <button id="m-action-btn-8" class="m-btn m-btn-success">
        <i class="fa-solid fa-arrow-right"></i> হেড অফিস পেআউট ব্যাচে অগ্রসর হোন
      </button>
    `,

    // ৩. ডেস্কটপ ব্রাউজার স্ক্রিন
    desktopHtml: `
      <div class="d-grid-2">
        <div class="d-panel">
          <div class="d-panel-title"><i class="fa-solid fa-cash-register"></i> মিরপুর হাব ক্যাশিয়ার কাউন্টার টার্মিনাল</div>
          <table class="d-table">
            <tr><td>ক্যাশিয়ার</td><td>তৌফিকুর রহমান (#CASH-09)</td></tr>
            <tr><td>রাইডার রহিম থেকে জমা</td><td><strong>৳২,০০০</strong> (নোট স্ক্যানার ভেরিফাইড)</td></tr>
            <tr><td>ব্যাংক সিআইটি (CIT) পিকআপ</td><td>ব্র্যাক ব্যাংক সিকিউর ক্যাশ ভ্যান (৩:৩০ PM)</td></tr>
            <tr><td>অডিট স্ট্যাটাস</td><td><span class="status-badge success">✅ ব্যালেন্স রিকনসাইল্ড (০ অসঙ্গতি)</span></td></tr>
          </table>
        </div>
        <div class="d-panel">
          <div class="d-panel-title"><i class="fa-solid fa-bolt"></i> বিকাশ / ব্যাংক অটো-ডিসবার্সমেন্ট কিউ</div>
          <div style="font-size:12px; line-height:1.6; color:var(--text-main);">
            <div><strong>ব্যাচ আইডি:</strong> #PAY-2026-OCT-884</div>
            <div><strong>মার্চেন্ট:</strong> মাহমুদ ফ্যাশন (বিকাশ মার্চেন্ট: 01711-998877)</div>
            <div><strong>মোট COD:</strong> ৳২,০০০</div>
            <div><strong>কর্তন:</strong> ডেলিভারি ফি ৳১০০ + COD চার্জ (০.৫%) ৳১০ = ৳১১০</div>
            <div><strong>নেট মার্চেন্ট পেআউট:</strong> <strong style="color:var(--brand-success); font-size:14px;">৳১,৮৯০</strong></div>
          </div>
        </div>
      </div>
    `
  },

  // ==========================================
  // ধাপ ৯: মার্চেন্ট অ্যাকাউন্টে ইনস্ট্যান্ট বিকাশ পেআউট
  // ==========================================
  {
    step: 9,
    title: 'মার্চেন্ট অ্যাকাউন্টে বিকাশ ইনস্ট্যান্ট পেআউট',
    primaryApp: 'merchant',
    riderName: 'রহিম / করিম',
    browserUrl: 'https://merchant.rajcourier.com/wallet/statement',
    custody: 'মাহমুদ ফ্যাশন (মার্চেন্ট অ্যাকাউন্ট)',
    location: 'জিন্দাবাজার, সিলেট (মার্চেন্ট ব্যাংক/বিকাশ)',
    cashStatus: 'পরিশোধিত (৳১,৮৯০ বিকাশ ক্রেডিট)',
    cashNote: 'ডেলিভারি ও সিওডি ফি কেটে নেট পেমেন্ট সম্পন্ন',
    merchantPayout: '৳১,৮৯০ (সফলভাবে পেইড)',
    statusChip: { text: 'পেআউট সম্পন্ন', class: 'delivered' },
    statusTime: '২০ অক্টো ২০২৬ · ০২:১৮ PM',
    smsText: 'অভিনন্দন! পার্সেল RAJ-DH-89214 এর নেট পেমেন্ট ৳১,৮৯০ আপনার বিকাশ মার্চেন্ট অ্যাকাউন্টে ক্রেডিট হয়েছে।',
    trackStatus: 'লাইফসাইকেল সফলভাবে সমাপ্ত',
    trackEta: 'সম্পন্ন',
    trackProgress: 100,
    historyDone: [
      '১৯ অক্টো ০৯:৪১ AM · অর্ডার বুকিং সম্পন্ন (সিলেট শপ)',
      '১৯ অক্টো ১০:১৫ AM · রাইডার করিম কর্তৃক পার্সেল পিকআপ সম্পন্ন',
      '১৯ অক্টো ১১:৩০ AM · সিলেট সেন্ট্রাল হাবে ইনবাউন্ড ও থার্মাল লেবেলিং',
      '১৯ অক্টো ০৮:০০ PM · আন্তঃজেলা লাইন-হোল ট্রাকে পরিবহন',
      '২০ অক্টো ০৪:০০ AM · তেজগাঁও সর্টিং হাবে অটো-সর্ট সম্পন্ন',
      '২০ অক্টো ০৯:৩০ AM · মিরপুর হাবে রাইডার রহিমের রানশিটে বরাদ্দ',
      '২০ অক্টো ১১:৪০ AM · রাইডার রহিম গ্রাহকের ঠিকানায় উপস্থিত',
      '২০ অক্টো ১১:৪২ AM · ওটিপি ৭৪২৯ যাচাই ও ৳২,০০০ ক্যাশ কালেকশন সম্পন্ন',
      '২০ অক্টো ০২:১৫ PM · মিরপুর হাব ক্যাশিয়ার কাউন্টারে ক্যাশ ক্লোজিং সম্পন্ন',
      '২০ অক্টো ০২:১৮ PM · মার্চেন্ট বিকাশ একাউন্টে ৳১,৮৯০ তাৎক্ষণিক ট্রান্সফার সফল'
    ],

    // ১. মার্চেন্ট অ্যাপ স্ক্রিন
    merchantHtml: `
      <!-- bKash Instant Payout Card -->
      <div class="m-card" style="border:2px solid #e11d48; background:linear-gradient(135deg, rgba(225,29,72,0.06) 0%, rgba(225,29,72,0.01) 100%);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <span style="font-weight:900; color:#e11d48; font-size:13px;"><i class="fa-solid fa-money-bill-wave"></i> bKash Merchant Payout</span>
          <span class="m-badge success" style="margin:0;">তাৎক্ষণিক ক্রেডিট</span>
        </div>
        <div style="font-size:24px; font-weight:900; color:var(--text-main); margin-bottom:4px;">
          +৳১,৮৯০
        </div>
        <div style="font-size:11px; color:var(--text-muted);">
          TrxID: <strong>BK89320145</strong> · ২০ অক্টো ০২:১৮ PM
        </div>
      </div>

      <div class="m-card">
        <div style="font-size:12px; font-weight:800; margin-bottom:8px; color:var(--brand-primary);">
          <i class="fa-solid fa-receipt"></i> আর্থিক হিসাবের পূর্ণাঙ্গ বিবরণ (Invoicing)
        </div>
        <div class="m-field-group">
          <span class="m-label">গ্রাহক থেকে সংগৃহীত COD:</span>
          <span class="m-val">৳২,০০০</span>
        </div>
        <div class="m-field-group">
          <span class="m-label">ডেলিভারি চার্জ (সিলেট ➔ ঢাকা):</span>
          <span class="m-val" style="color:var(--brand-danger);">-৳১০০</span>
        </div>
        <div class="m-field-group">
          <span class="m-label">COD চার্জ (০.৫%):</span>
          <span class="m-val" style="color:var(--brand-danger);">-৳১০</span>
        </div>
        <div class="m-field-group" style="border-top:1px dashed var(--border-color); padding-top:6px; margin-top:6px;">
          <span class="m-label" style="font-weight:800;">মার্চেন্ট নেট আয়:</span>
          <span class="m-val" style="color:var(--brand-success); font-weight:900; font-size:14px;">৳১,৮৯০</span>
        </div>
      </div>

      <button id="m-action-btn-9" class="m-btn m-btn-primary">
        <i class="fa-solid fa-file-invoice-dollar"></i> ডিজিটাল চালান ও ব্যাংক স্টেটমেন্ট ডাউনলোড
      </button>
    `,

    // ২. রাইডার অ্যাপ স্ক্রিন
    riderHtml: `
      <div class="m-card">
        <span class="m-badge success"><i class="fa-solid fa-award"></i> রাইডার আর্নিং ও বোনাস</span>
        <div style="margin-top:6px; font-size:12px; line-height:1.6;">
          <div><strong>রাইডার:</strong> রহিম মিয়া</div>
          <div><strong>আজকের সফল ডেলিভারি:</strong> ১৮ / ১৮টি (১০০% সাকসেস)</div>
          <div><strong>ডেলিভারি কমিশন অর্জিত:</strong> <strong style="color:var(--brand-success);">+৳৫৪০</strong></div>
          <div><strong>কাস্টমার রেটিং:</strong> ৫.০ ⭐⭐⭐⭐⭐</div>
        </div>
    `,

    // ৩. ডেস্কটপ ব্রাউজার স্ক্রিন
    desktopHtml: `
      <div class="d-grid-2">
        <div class="d-panel">
          <div class="d-panel-title"><i class="fa-solid fa-building-columns"></i> হেড অফিস ফিন্যান্স - মার্চেন্ট ব্যাংক/বিকাশ স্টেটমেন্ট</div>
          <table class="d-table">
            <tr><td>মার্চেন্ট নাম</td><td>মাহমুদ ফ্যাশন (জিন্দাবাজার, সিলেট)</td></tr>
            <tr><td>বিকাশ মার্চেন্ট অ্যাকাউন্ট</td><td>০১৭১১-৯৯৮৮৭৭</td></tr>
            <tr><td>ট্রানজাকশন আইডি (TrxID)</td><td><strong style="color:#e11d48;">BK89320145</strong></td></tr>
            <tr><td>স্ট্যাটাস</td><td><span class="status-badge success">✅ সফলভাবে স্থানান্তরিত (Cleared)</span></td></tr>
            <tr><td>অটো-রিকনসিলিয়েশন</td><td>১০০% ম্যাচড (ERP পোস্ট সম্পন্ন)</td></tr>
          </table>
        </div>
        <div class="d-panel">
          <div class="d-panel-title"><i class="fa-solid fa-circle-check"></i> পার্সেল লাইফসাইকেল অডিট সামারি</div>
          <div style="font-size:12px; line-height:1.6; color:var(--text-main);">
            <div>✅ <strong>বুকিং থেকে পেআউট:</strong> পূর্ণ ডিজিটাল চেইন অফ কাস্টডি সম্পন্ন</div>
            <div>✅ <strong>শূন্য ম্যানুয়াল এন্ট্রি:</strong> প্রতি ধাপে ক্যামেরা ও লেজার বারকোড স্ক্যান</div>
            <div>✅ <strong>শূন্য ক্যাশ গরমিল:</strong> ওটিপি ও হাব ভল্ট ক্লোজিং রিকনসাইল্ড</div>
            <div>✅ <strong>মার্চেন্ট সন্তুষ্টি:</strong> ২৪ ঘন্টার মধ্যে দ্রুততম অটোমেটিক বিকাশ পেআউট</div>
          </div>
        </div>
      </div>
    `
  }
];

