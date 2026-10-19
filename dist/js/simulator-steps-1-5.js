/**
 * রাজ কুরিয়ার সিমুলেটর - ধাপ ১ থেকে ধাপ ৫ (বুকিং ➔ পিকআপ ➔ হাব ইনবাউন্ড ➔ হাইওয়ে ➔ সর্টিং)
 */
const simSteps1to5 = [
  // ==========================================
  // ধাপ ১: মার্চেন্ট বুকিং (মার্চেন্ট অ্যাপ)
  // ==========================================
  {
    step: 1,
    title: 'মার্চেন্ট পার্সেল বুকিং',
    primaryApp: 'merchant',
    riderName: 'করিম (পিকআপ রাইডার)',
    browserUrl: 'https://merchant.rajcourier.com/parcels/new',
    custody: 'মাহমুদ শপ (মার্চেন্ট)',
    location: 'জিন্দাবাজার, সিলেট',
    cashStatus: 'আদায় হয়নি (৳০)',
    cashNote: 'টাকা ক্রেতার পকেটে আছে',
    merchantPayout: '৳১,৮৯০ (প্রস্তুত)',
    statusChip: { text: 'বুকিং সম্পন্ন', class: 'pending' },
    statusTime: '১৯ অক্টো ২০২৬ · ০৯:৪১ AM',
    smsText: 'আপনার পার্সেল RAJ-DH-89214 বুকিং করা হয়েছে। পিকআপের পর লাইভ আপডেট দেখতে পারবেন।',
    trackStatus: 'বুকিং সম্পন্ন',
    trackEta: 'আগামীকাল দুপুর ০১:০০',
    trackProgress: 12,
    historyDone: [
      '১৯ অক্টো ০৯:৪১ AM · অর্ডার বুকিং সম্পন্ন (সিলেট শপ)'
    ],

    // ১. মার্চেন্ট অ্যাপ স্ক্রিন
    merchantHtml: `
      <div class="m-card">
        <span class="m-badge primary"><i class="fa-solid fa-shop"></i> মার্চেন্ট স্টোর: মাহমুদ ফ্যাশন</span>
        <div style="font-size:11px; color:var(--text-muted); margin-bottom:8px;">সিলেট জিন্দাবাজার শপ নং ৪</div>
        <div class="m-field-group">
          <span class="m-label">ট্র্যাকিং আইডি:</span>
          <span class="m-val highlight">RAJ-DH-89214</span>
        </div>
        <div class="m-field-group">
          <span class="m-label">প্রাপক:</span>
          <span class="m-val">তানভীর আহমেদ (মিরপুর-১০, ঢাকা)</span>
        </div>
        <div class="m-field-group">
          <span class="m-label">পণ্য ও মূল্য (COD):</span>
          <span class="m-val">২x কটন পাঞ্জাবি · <strong style="color:var(--brand-accent);">৳২,০০০</strong></span>
        </div>
      </div>

      <div class="m-card">
        <div style="font-size:12px; font-weight:800; color:var(--brand-primary); margin-bottom:6px;">
          <i class="fa-solid fa-tags"></i> বারকোড স্টিকার পলিসি নির্বাচন
        </div>
        <div style="font-size:11px; color:var(--text-muted); margin-bottom:10px;">
          আপনার কাছে থার্মাল প্রিন্টার না থাকলে হাবে পার্সেল যাওয়ার পর বিনামূল্যে স্টিকার লাগিয়ে দেওয়া হবে।
        </div>
        
        <div class="sim-label-selector">
          <label class="sim-label-radio-card active">
            <div class="sim-radio-left">
              <input type="radio" name="sim-label-mode-m" value="branch" checked>
              <div class="sim-radio-text">
                <strong>🏢 হাব/ব্রাঞ্চে স্টিকার লাগানো হবে</strong>
                <span>ফ্রি সার্ভিস (৮০% মার্চেন্ট এটি ব্যবহার করেন)</span>
              </div>
            </div>
            <span class="badge-chip success">জনপ্রিয়</span>
          </label>

          <label class="sim-label-radio-card" style="margin-top:6px;">
            <div class="sim-radio-left">
              <input type="radio" name="sim-label-mode-m" value="merchant">
              <div class="sim-radio-text">
                <strong>🖨️ মার্চেন্ট নিজে প্রিন্ট করবেন</strong>
                <span>৪x৬ থার্মাল লেবেল সরাসরি শপ থেকে প্রিন্ট</span>
              </div>
            </div>
          </label>
        </div>
      </div>

      <button id="m-action-btn-1" class="m-btn m-btn-primary">
        <i class="fa-solid fa-motorcycle"></i> রাইডার পিকআপ কল করুন
      </button>
    `,

    // ২. রাইডার অ্যাপ স্ক্রিন
    riderHtml: `
      <div class="m-card">
        <span class="m-badge success"><i class="fa-solid fa-signal"></i> রাইডার অনলাইন - সিলেট জোন</span>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px;">
          <strong style="font-size:13px;">করিম আহমেদ</strong>
          <span style="font-size:11px; color:var(--text-muted);"><i class="fa-solid fa-location-arrow"></i> জিন্দাবাজার পয়েন্ট</span>
        </div>
      </div>

      <div class="m-card" style="border:1.5px dashed var(--brand-primary); background:rgba(37,99,235,0.03);">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
          <i class="fa-solid fa-bell fa-bounce" style="color:var(--brand-primary);"></i>
          <strong style="font-size:12px; color:var(--brand-primary);">নতুন পিকআপ রিকোয়েস্ট আসছে...</strong>
        </div>
        <div style="font-size:11px; line-height:1.5; color:var(--text-main);">
          মার্চেন্ট মাহমুদ ভাই পিকআপ কল করলে এই স্ক্রিনে ইনস্ট্যান্ট নোটিফিকেশন ও ম্যাপ রুট প্রদর্শিত হবে।
        </div>
      </div>

      <div style="text-align:center; padding:15px; color:var(--text-muted); font-size:11px;">
        <i class="fa-solid fa-hourglass-half fa-spin"></i> মার্চেন্ট কনফার্মেশনের অপেক্ষায়...
      </div>
    `,

    // ৩. ডেস্কটপ ব্রাউজার স্ক্রিন
    desktopHtml: `
      <div class="d-grid-2">
        <div class="d-panel">
          <div class="d-panel-title"><i class="fa-solid fa-file-circle-plus"></i> মার্চেন্ট ওয়েব পোর্টাল - নতুন পার্সেল বুকিং</div>
          <table class="d-table">
            <tr><td>অর্ডার আইডি</td><td><strong>RAJ-DH-89214</strong></td></tr>
            <tr><td>মার্চেন্ট</td><td>মাহমুদ ফ্যাশন (জিন্দাবাজার, সিলেট)</td></tr>
            <tr><td>কাস্টমার</td><td>তানভীর আহমেদ (01711-234567)</td></tr>
            <tr><td>ঠিকানা</td><td>বাসা ২৪, রোড ৩, মিরপুর-১০, ঢাকা</td></tr>
            <tr><td>ক্যাশ অন ডেলিভারি (COD)</td><td><strong style="color:var(--brand-accent);">৳২,০০০</strong></td></tr>
            <tr><td>স্টিকার পলিসি</td><td><span class="status-badge warning">🏢 ব্রাঞ্চ প্রিন্ট (ডিফল্ট)</span></td></tr>
          </table>
        </div>
        <div class="d-panel">
          <div class="d-panel-title"><i class="fa-solid fa-route"></i> রুট ও টাইমলাইন হিসাব</div>
          <div style="font-size:12px; line-height:1.8; color:var(--text-main);">
            <div>📍 <strong>পিকআপ হাব:</strong> সিলেট সেন্ট্রাল হাব</div>
            <div>🚚 <strong>লাইন-হোল:</strong> সিলেট ➔ ঢাকা সেন্ট্রাল সর্টিং (তেজগাঁও)</div>
            <div>🎯 <strong>ডেলিভারি হাব:</strong> মিরপুর-১০ লাস্ট-মাইল হাব</div>
            <div>⏱️ <strong>সম্ভাব্য ডেলিভারি:</strong> ২৪ ঘন্টার মধ্যে (নেক্সট ডে)</div>
          </div>
        </div>
      </div>
    `
  },

  // ==========================================
  // ধাপ ২: রাইডার পিকআপ ও লেজার স্ক্যান (রাইডার অ্যাপ)
  // ==========================================
  {
    step: 2,
    title: 'রাইডার পিকআপ ও লেজার স্ক্যান',
    primaryApp: 'rider',
    riderName: 'করিম (পিকআপ রাইডার)',
    browserUrl: 'https://hub.rajcourier.com/sylhet/rider-monitor',
    custody: 'করিম (পিকআপ রাইডার)',
    location: 'জিন্দাবাজার, সিলেট',
    cashStatus: 'আদায় হয়নি (৳০)',
    cashNote: 'রাইডারের ব্যাগে পার্সেল তোলা হয়েছে',
    merchantPayout: '৳১,৮৯০ (অপেক্ষমাণ)',
    statusChip: { text: 'পিকআপ সম্পন্ন', class: 'in-transit' },
    statusTime: '১৯ অক্টো ২০২৬ · ১০:১৫ AM',
    smsText: 'রাজ কুরিয়ার রাইডার আপনার পার্সেল শপ থেকে সংগ্রহ করেছেন (ID: RAJ-DH-89214)।',
    trackStatus: 'রাইডার পিকআপ করেছেন',
    trackEta: 'আগামীকাল দুপুর ০১:০০',
    trackProgress: 24,
    historyDone: [
      '১৯ অক্টো ০৯:৪১ AM · অর্ডার বুকিং সম্পন্ন (সিলেট শপ)',
      '১৯ অক্টো ১০:১৫ AM · রাইডার করিম কর্তৃক পার্সেল পিকআপ সম্পন্ন'
    ],

    // ১. মার্চেন্ট অ্যাপ স্ক্রিন
    merchantHtml: `
      <div class="m-card">
        <span class="m-badge success"><i class="fa-solid fa-circle-check"></i> পিকআপ হ্যান্ডওভার সম্পন্ন</span>
        <div style="margin-top:6px;">
          <div class="m-field-group">
            <span class="m-label">রাইডার:</span>
            <span class="m-val">করিম আহমেদ (01712-345678)</span>
          </div>
          <div class="m-field-group">
            <span class="m-label">যানবাহন:</span>
            <span class="m-val">বাইক (সিলেট মেট্রো-হ-১২৩৪)</span>
          </div>
          <div class="m-field-group">
            <span class="m-label">হ্যান্ডওভার সময়:</span>
            <span class="m-val">সকাল ১০:১৫ AM</span>
          </div>
        </div>
      </div>

      <div class="m-card" style="background:rgba(5,150,105,0.04); border-color:var(--brand-success);">
        <div style="display:flex; align-items:center; gap:8px; font-size:12px; color:var(--brand-success); font-weight:700;">
          <i class="fa-solid fa-shield-halved"></i> ডিজিটাল হেফাজত নিশ্চিত (Chain of Custody)
        </div>
        <div style="font-size:11px; color:var(--text-muted); margin-top:5px; line-height:1.4;">
          রাইডার করিম তার ফোনে বারকোড স্ক্যান সম্পন্ন করেছেন। পার্সেলটির আইনি দায়িত্ব এখন রাজ কুরিয়ারের।
        </div>
      </div>
    `,

    // ২. রাইডার অ্যাপ স্ক্রিন
    riderHtml: `
      <div class="m-card" style="padding:8px 12px; margin-bottom:8px;">
        <span class="m-badge warning"><i class="fa-solid fa-camera"></i> লাইভ বারকোড ক্যামেরা স্ক্যানার</span>
      </div>

      <!-- Animated Camera Scanner Viewfinder -->
      <div class="m-scanner-viewport">
        <div class="scanner-crosshair">
          <div class="scanner-laser"></div>
          <i class="fa-solid fa-barcode" style="font-size:42px; opacity:0.6;"></i>
          <div class="scanner-barcode-dummy">RAJ-DH-89214</div>
        </div>
      </div>

      <div class="m-card" style="margin-top:8px;">
        <div class="m-field-group">
          <span class="m-label">মার্চেন্ট:</span>
          <span class="m-val">মাহমুদ ফ্যাশন, জিন্দাবাজার</span>
        </div>
        <div class="m-field-group">
          <span class="m-label">সংগৃহীত পার্সেল:</span>
          <span class="m-val highlight">RAJ-DH-89214 (১টি)</span>
        </div>
        <div class="m-field-group">
          <span class="m-label">সিওডি ট্যাগ:</span>
          <span class="m-val" style="color:var(--brand-accent); font-weight:800;">৳২,০০০</span>
        </div>
      </div>

      <button id="m-action-btn-2" class="m-btn m-btn-success">
        <i class="fa-solid fa-barcode"></i> স্ক্যান কনফার্ম ও ব্যাগে লোড করুন
      </button>
    `,

    // ৩. ডেস্কটপ ব্রাউজার স্ক্রিন
    desktopHtml: `
      <div class="d-grid-2">
        <div class="d-panel">
          <div class="d-panel-title"><i class="fa-solid fa-satellite-dish"></i> সিলেট হাব - রাইডার পিকআপ ট্র্যাকিং লাইভ</div>
          <table class="d-table">
            <thead>
              <tr><th>রাইডার</th><th>মার্চেন্ট</th><th>পার্সেল আইডি</th><th>অবস্থা</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>করিম আহমেদ</td>
                <td>মাহমুদ ফ্যাশন</td>
                <td><strong style="color:var(--brand-primary);">RAJ-DH-89214</strong></td>
                <td><span class="status-badge success">✅ স্ক্যান সম্পন্ন (ইন-ব্যাগ)</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="d-panel">
          <div class="d-panel-title"><i class="fa-solid fa-shield-halved"></i> ডিজিটাল অডিট ট্রেইল (Custody Stamp)</div>
          <div style="font-size:12px; line-height:1.6; color:var(--text-main);">
            <div><strong>লগ আইডি:</strong> #LOG-SYL-98421</div>
            <div><strong>আগের দায়িত্ব:</strong> মাহমুদ ফ্যাশন (মার্চেন্ট)</div>
            <div><strong>বর্তমান দায়িত্ব:</strong> করিম আহমেদ (রাইডার ID #RD-09)</div>
            <div><strong>টাইমস্ট্যাম্প:</strong> ১৯ অক্টো ২০২৬ · ১০:১৫:২২ AM</div>
            <div style="margin-top:8px; color:var(--brand-success); font-weight:700;">
              <i class="fa-solid fa-check-double"></i> কোনো তথ্য ম্যানুয়ালি টাইপ করার সুযোগ নেই। ১০০% বারকোড নির্ভর।
            </div>
          </div>
        </div>
      </div>
    `
  },

  // ==========================================
  // ধাপ ৩: সিলেট হাব ইনবাউন্ড ও ৪x৬ থার্মাল লেবেল
  // ==========================================
  {
    step: 3,
    title: 'সিলেট হাব ইনবাউন্ড ও থার্মাল লেবেল প্রিন্ট',
    primaryApp: 'merchant',
    riderName: 'করিম (পিকআপ রাইডার)',
    browserUrl: 'https://hub.rajcourier.com/sylhet/inbound-scan',
    custody: 'সিলেট সেন্ট্রাল হাব',
    location: 'কদমতলী হাব, সিলেট',
    cashStatus: 'আদায় হয়নি (৳০)',
    cashNote: 'হাবে ওজন ও বারকোড যাচাই হচ্ছে',
    merchantPayout: '৳১,৮৯০ (অপেক্ষমাণ)',
    statusChip: { text: 'হাবে ইনবাউন্ড', class: 'in-transit' },
    statusTime: '১৯ অক্টো ২০২৬ · ১১:৩০ AM',
    smsText: 'আপনার পার্সেল সিলেট হাবে গ্রহণ করা হয়েছে। হাইওয়ে ট্রাকে লোডিং চলছে।',
    trackStatus: 'সিলেট হাবে গ্রহণ করা হয়েছে',
    trackEta: 'আগামীকাল দুপুর ০১:০০',
    trackProgress: 36,
    historyDone: [
      '১৯ অক্টো ০৯:৪১ AM · অর্ডার বুকিং সম্পন্ন (সিলেট শপ)',
      '১৯ অক্টো ১০:১৫ AM · রাইডার করিম কর্তৃক পার্সেল পিকআপ সম্পন্ন',
      '১৯ অক্টো ১১:৩০ AM · সিলেট সেন্ট্রাল হাবে ইনবাউন্ড রিসিভ ও ওজন যাচাই (১.২ কেজি)'
    ],

    // ১. মার্চেন্ট অ্যাপ স্ক্রিন
    merchantHtml: `
      <div class="m-card">
        <span class="m-badge info"><i class="fa-solid fa-warehouse"></i> সিলেট লোকাল হাবে ইনবাউন্ড</span>
        <div class="m-field-group">
          <span class="m-label">ইনবাউন্ড হাব:</span>
          <span class="m-val">সিলেট সেন্ট্রাল হাব (কদমতলী)</span>
        </div>
        <div class="m-field-group">
          <span class="m-label">পরিমাপকৃত ওজন:</span>
          <span class="m-val">১.২ কেজি (ডিজিটাল স্কেল ভেরিফাইড)</span>
        </div>
        <div class="m-field-group">
          <span class="m-label">স্টিকার স্ট্যাটাস:</span>
          <span class="m-val" style="color:var(--brand-primary); font-weight:800;">🖨️ ৪x৬ থার্মাল লেবেল প্রস্তুত</span>
        </div>
      </div>

      <div class="m-card" style="border:1px dashed var(--brand-accent); background:rgba(245,158,11,0.04);">
        <div style="font-size:12px; font-weight:700; color:var(--brand-accent); margin-bottom:4px;">
          <i class="fa-solid fa-print"></i> ব্রাঞ্চ লেবেলিং পলিসি কার্যকর
        </div>
        <div style="font-size:11px; color:var(--text-muted); line-height:1.4;">
          যেহেতু বুকিংয়ের সময় আপনি "ব্রাঞ্চে প্রিন্ট" নির্বাচন করেছিলেন, তাই হাব অপারেটর হাই-স্পিড থার্মাল প্রিন্টারে বারকোড স্টিকার প্রিন্ট করে পার্সেলে পেস্ট করছেন।
        </div>
      </div>

      <button id="m-action-btn-3" class="m-btn m-btn-warning">
        <i class="fa-solid fa-eye"></i> ৪x৬ থার্মাল স্টিকার প্রিভিউ দেখুন
      </button>
    `,

    // ২. রাইডার অ্যাপ স্ক্রিন
    riderHtml: `
      <div class="m-card">
        <span class="m-badge success"><i class="fa-solid fa-circle-check"></i> সকালের পিকআপ শিফট সম্পন্ন!</span>
        <div style="margin-top:8px; font-size:12px; line-height:1.6;">
          <div><strong>রাইডার:</strong> করিম আহমেদ (#RD-09)</div>
          <div><strong>মোট সংগৃহীত পার্সেল:</strong> ১২টি</div>
          <div><strong>সিলেট হাবে জমা:</strong> ১২টি (১০০% হ্যান্ডওভার সফল)</div>
          <div><strong>গ্রহণকারী হাব অফিসার:</strong> শাকিল হোসেন</div>
        </div>
      </div>

      <div class="m-card" style="background:var(--bg-card-subtle);">
        <div style="font-size:11px; color:var(--text-muted);">
          <i class="fa-solid fa-clock"></i> পরবর্তী শিফট: দুপুর ২:৩০ (বিকেলের পিকআপ ও ড্রপ-অফ)
        </div>
      </div>
    `,

    // ৩. ডেস্কটপ ব্রাউজার স্ক্রিন
    desktopHtml: `
      <div class="d-grid-2">
        <div class="d-panel">
          <div class="d-panel-title"><i class="fa-solid fa-barcode"></i> সিলেট হাব ডেস্কটপ - ইনবাউন্ড ও থার্মাল প্রিন্ট কাউন্টার</div>
          <div style="padding:10px; background:var(--bg-card-subtle); border-radius:6px; margin-bottom:12px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span>পার্সেল: <strong>RAJ-DH-89214</strong></span>
              <span class="status-badge warning">লেবেল পলিসি: ব্রাঞ্চ প্রিন্ট</span>
            </div>
            <div style="font-size:11px; color:var(--text-muted); margin-top:4px;">
              মার্চেন্টের কাছে প্রিন্টার নেই ➔ হাবে ডিজিটাল স্কেলে ওজন ১.২ কেজি পরিমাপের পর ৪x৬ থার্মাল বারকোড প্রিন্ট হচ্ছে।
            </div>
          </div>
          <button id="d-action-btn-3" class="m-btn m-btn-primary" style="width:auto; padding:8px 16px;">
            <i class="fa-solid fa-print"></i> ৪x৬ থার্মাল লেবেল প্রিন্ট করুন (মোডাল প্রিভিউ)
          </button>
        </div>
        <div class="d-panel">
          <div class="d-panel-title"><i class="fa-solid fa-boxes-stacked"></i> ঢাকা লাইন-হোল ব্যাগিং স্ট্যাটাস</div>
          <table class="d-table">
            <tr><td>লাইন-হোল মাস্টার ব্যাগ নং</td><td><strong>BAG-SYL-DH-084</strong></td></tr>
            <tr><td>গন্তব্য হাব</td><td>ঢাকা সেন্ট্রাল সর্টিং হাব (তেজগাঁও)</td></tr>
            <tr><td>ব্যাগে মোট পার্সেল</td><td>৪৫টি (বর্তমান পার্সেল অন্তর্ভুক্ত)</td></tr>
            <tr><td>নিরাপত্তা সিল নং</td><td><span class="status-badge success">SEAL-98741</span></td></tr>
          </table>
        </div>
      </div>
    `
  },

  // ==========================================
  // ধাপ ৪: লাইন-হোল হাইওয়ে ট্রান্সপোর্ট (সিলেট ➔ ঢাকা)
  // ==========================================
  {
    step: 4,
    title: 'লাইন-হোল আন্তঃজেলা হাইওয়ে পরিবহন',
    primaryApp: 'merchant',
    riderName: 'কফিল উদ্দিন (হাইওয়ে ড্রাইভার)',
    browserUrl: 'https://admin.rajcourier.com/linehaul/monitor',
    custody: 'আন্তঃজেলা কাভার্ড ভ্যান (ঢাকা মেট্রো-উ-৮৮৭৬)',
    location: 'ঢাকা-সিলেট মহাসড়ক (ভৈরব ব্রিজ)',
    cashStatus: 'আদায় হয়নি (৳০)',
    cashNote: 'পার্সেল হাইওয়ে ট্রাকে সিলগালা অবস্থায় আছে',
    merchantPayout: '৳১,৮৯০ (অপেক্ষমাণ)',
    statusChip: { text: 'লাইন-হোল পথে', class: 'in-transit' },
    statusTime: '১৯ অক্টো ২০২৬ · ০৮:০০ PM',
    smsText: 'আপনার পার্সেল ঢাকা-সিলেট হাইওয়েতে ট্রানজিটে রয়েছে। জিপিএস মনিটরিং সক্রিয়।',
    trackStatus: 'আন্তঃজেলা মহাসড়কে পথে রয়েছে',
    trackEta: 'আগামীকাল দুপুর ০১:০০',
    trackProgress: 48,
    historyDone: [
      '১৯ অক্টো ০৯:৪১ AM · অর্ডার বুকিং সম্পন্ন (সিলেট শপ)',
      '১৯ অক্টো ১০:১৫ AM · রাইডার করিম কর্তৃক পার্সেল পিকআপ সম্পন্ন',
      '১৯ অক্টো ১১:৩০ AM · সিলেট সেন্ট্রাল হাবে ইনবাউন্ড ও ৪x৬ থার্মাল স্টিকার প্রিন্ট',
      '১৯ অক্টো ০৮:০০ PM · সিলেট থেকে ঢাকার উদ্দেশ্যে হাইওয়ে কাভার্ড ভ্যানে যাত্রা শুরু'
    ],

    // ১. মার্চেন্ট অ্যাপ স্ক্রিন
    merchantHtml: `
      <div class="m-card">
        <span class="m-badge info"><i class="fa-solid fa-truck-fast"></i> আন্তঃজেলা লাইন-হোল পরিবহন</span>
        <div class="m-field-group">
          <span class="m-label">যানবাহন:</span>
          <span class="m-val">কাভার্ড ভ্যান (ঢাকা মেট্রো-উ-৮৮৭৬)</span>
        </div>
        <div class="m-field-group">
          <span class="m-label">রুট:</span>
          <span class="m-val">সিলেট সেন্ট্রাল হাব ➔ ঢাকা তেজগাঁও হাব</span>
        </div>
        <div class="m-field-group">
          <span class="m-label">মাস্টার ব্যাগ আইডি:</span>
          <span class="m-val highlight">BAG-SYL-DH-084</span>
        </div>
      </div>

      <div class="m-card" style="background:rgba(2,132,199,0.04); border-color:#0284c7;">
        <div style="display:flex; align-items:center; gap:8px; font-size:12px; color:#0284c7; font-weight:700;">
          <i class="fa-solid fa-location-crosshairs fa-spin"></i> লাইভ জিপিএস রুট ট্র্যাকিং
        </div>
        <div style="font-size:11px; color:var(--text-muted); margin-top:6px; line-height:1.5;">
          কাভার্ড ভ্যানটি বর্তমানে ভৈরব মেঘনা ব্রিজ অতিক্রম করছে। রাত ০৩:১৫ মিনিটে ঢাকা সেন্ট্রাল সর্টিং হাবে পৌঁছাবে।
        </div>
      </div>
    `,

    // ২. রাইডার অ্যাপ স্ক্রিন
    riderHtml: `
      <div class="m-card">
        <span class="m-badge primary"><i class="fa-solid fa-moon"></i> নাইট স্ট্যান্ডবাই মোড</span>
        <div style="margin-top:6px; font-size:12px; line-height:1.5;">
          <strong>রহিম মিয়া (মিরপুর জোন রাইডার)</strong>
          <div style="font-size:11px; color:var(--text-muted); margin-top:4px;">
            আন্তঃজেলা ট্রাক সিলেট থেকে ঢাকার পথে রয়েছে। তেজগাঁও সেন্ট্রাল সর্টিং শেষ হলে পার্সেলটি কাল সকালে আপনার রানশিটে আসবে।
          </div>
        </div>
      </div>

      <div class="m-card" style="background:var(--bg-card-subtle);">
        <div style="font-size:12px; font-weight:700; margin-bottom:4px;">
          <i class="fa-solid fa-calendar-day"></i> আগামীকালের সম্ভাব্য মিরপুর ডেলিভারি
        </div>
        <div style="font-size:11px; color:var(--text-muted);">
          প্রত্যাশিত পার্সেল সংখ্যা: ১৮টি (সিলেট, চট্টগ্রাম ও খুলনা ইনবাউন্ড)
        </div>
      </div>
    `,

    // ৩. ডেস্কটপ ব্রাউজার স্ক্রিন
    desktopHtml: `
      <div class="d-grid-2">
        <div class="d-panel">
          <div class="d-panel-title"><i class="fa-solid fa-map-location-dot"></i> কেন্দ্রীয় ফ্লিট ম্যানেজমেন্ট - ঢাকা-সিলেট করিডোর</div>
          <table class="d-table">
            <tr><td>গাড়ি নং</td><td><strong>ঢাকা মেট্রো-উ-৮৮৭৬</strong> (১০ টন কাভার্ড ভ্যান)</td></tr>
            <tr><td>ড্রাইভার</td><td>কফিল উদ্দিন (01911-554433)</td></tr>
            <tr><td>বর্তমান গতি ও স্থান</td><td>৬২ কিমি/ঘন্টা · ভৈরব মেঘনা টোলপ্লাজা</td></tr>
            <tr><td>ডিজিটাল লক স্ট্যাটাস</td><td><span class="status-badge success">🔒 ক্যাবিনেট নিরাপদ ও তালাবদ্ধ</span></td></tr>
          </table>
        </div>
        <div class="d-panel">
          <div class="d-panel-title"><i class="fa-solid fa-file-invoice"></i> ডিজিটাল রোড চালান (Highway Manifest)</div>
          <div style="font-size:12px; line-height:1.6; color:var(--text-main);">
            <div><strong>চালান আইডি:</strong> #MF-2026-SYL-091</div>
            <div><strong>মোট ব্যাগ:</strong> ১২টি মাস্টার ব্যাগ</div>
            <div><strong>মোট পার্সেল:</strong> ৩৪০টি | <strong>মোট ঘোষিত COD:</strong> ৳৭,৬৫,০০০</div>
            <div><strong>নিরাপত্তা চেকপয়েন্ট:</strong> হবিগঞ্জ হাব ➔ ব্রাহ্মণবাড়িয়া বাইপাস ➔ নরসিংদী</div>
          </div>
        </div>
      </div>
    `
  },

  // ==========================================
  // ধাপ ৫: ঢাকা সর্টিং ও মিরপুর হাব আউটবাউন্ড
  // ==========================================
  {
    step: 5,
    title: 'ঢাকা সর্টিং ও মিরপুর হাব আউটবাউন্ড',
    primaryApp: 'rider',
    riderName: 'রহিম (মিরপুর ডেলিভারি রাইডার)',
    browserUrl: 'https://hub.rajcourier.com/mirpur/runs-sheet',
    custody: 'রহিম (মিরপুর ডেলিভারি রাইডার)',
    location: 'মিরপুর-১০ হাব, ঢাকা',
    cashStatus: 'আদায় হয়নি (৳০)',
    cashNote: 'ডেলিভারি ম্যানের ব্যাগে তোলা হয়েছে',
    merchantPayout: '৳১,৮৯০ (অপেক্ষমাণ)',
    statusChip: { text: 'আউট ফর ডেলিভারি', class: 'in-transit' },
    statusTime: '২০ অক্টো ২০২৬ · ০৯:৩০ AM',
    smsText: 'আপনার পার্সেল ডেলিভারির জন্য বের হয়েছে। রাইডার: রহিম (01822-987654)। গোপন OTP: 7429',
    trackStatus: 'ডেলিভারির জন্য বের হয়েছে',
    trackEta: 'আজ দুপুর ১২:০০ - ০১:০০',
    trackProgress: 60,
    historyDone: [
      '১৯ অক্টো ০৯:৪১ AM · অর্ডার বুকিং সম্পন্ন (সিলেট শপ)',
      '১৯ অক্টো ১০:১৫ AM · রাইডার করিম কর্তৃক পার্সেল পিকআপ সম্পন্ন',
      '১৯ অক্টো ১১:৩০ AM · সিলেট সেন্ট্রাল হাবে ইনবাউন্ড ও থার্মাল লেবেলিং',
      '১৯ অক্টো ০৮:০০ PM · আন্তঃজেলা লাইন-হোল ট্রাকে পরিবহন',
      '২০ অক্টো ০৪:০০ AM · তেজগাঁও সর্টিং হাবে অটো-সর্ট সম্পন্ন',
      '২০ অক্টো ০৯:৩০ AM · মিরপুর হাবে রাইডার রহিমের রানশিটে আউটবাউন্ড স্ক্যান'
    ],

    // ১. মার্চেন্ট অ্যাপ স্ক্রিন
    merchantHtml: `
      <div class="m-card">
        <span class="m-badge info"><i class="fa-solid fa-motorcycle"></i> পার্সেল ডেলিভারির পথে</span>
        <div class="m-field-group">
          <span class="m-label">ডেলিভারি হাব:</span>
          <span class="m-val">মিরপুর-১০ লাস্ট-মাইল হাব</span>
        </div>
        <div class="m-field-group">
          <span class="m-label">ডেলিভারি রাইডার:</span>
          <span class="m-val">রহিম মিয়া (01822-987654)</span>
        </div>
        <div class="m-field-group">
          <span class="m-label">রানশিট নং:</span>
          <span class="m-val highlight">#MIR-RUN-104</span>
        </div>
      </div>

      <div class="m-card" style="background:rgba(37,99,235,0.04); border-color:var(--brand-primary);">
        <div style="font-size:12px; font-weight:700; color:var(--brand-primary); margin-bottom:4px;">
          <i class="fa-solid fa-bell"></i> কাস্টমার এসএমএস নোটিফিকেশন প্রেরিত
        </div>
        <div style="font-size:11px; color:var(--text-muted); line-height:1.4;">
          ক্রেতা তানভীর আহমেদকে রাইডারের ফোন নম্বর ও ৪ ডিজিটের গোপন ওটিপি এসএমএস পাঠানো হয়েছে।
        </div>
      </div>
    `,

    // ২. রাইডার অ্যাপ স্ক্রিন
    riderHtml: `
      <div class="m-card">
        <span class="m-badge primary"><i class="fa-solid fa-clipboard-list"></i> আজকের ডেলিভারি রানশিট #MIR-RUN-104</span>
        <div style="margin-top:6px; font-size:12px; line-height:1.5;">
          <div><strong>রাইডার:</strong> রহিম মিয়া (মিরপুর জোন)</div>
          <div><strong>মোট পার্সেল:</strong> ১৮টি · <strong>মিরপুর-১০ জোন:</strong> ৫টি</div>
        </div>
      </div>

      <div class="m-card" style="border:1.5px solid var(--brand-primary);">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <strong style="color:var(--brand-primary); font-size:13px;">টাস্ক ১: RAJ-DH-89214</strong>
          <span class="m-badge warning" style="margin:0;">COD ৳২,০০০</span>
        </div>
        <div style="margin-top:8px; font-size:12px; line-height:1.6;">
          <div><strong>প্রাপক:</strong> তানভীর আহমেদ</div>
          <div><strong>ফোন:</strong> 01711-234567</div>
          <div><strong>ঠিকানা:</strong> বাসা ২৪, রোড ৩, মিরপুর-১০</div>
          <div style="color:var(--brand-success); font-weight:700;">
            <i class="fa-solid fa-barcode"></i> মিরপুর হাব আউটবাউন্ড স্ক্যান ভেরিফাইড
          </div>
        </div>
      </div>

      <button id="m-action-btn-5" class="m-btn m-btn-primary">
        <i class="fa-solid fa-location-arrow"></i> ডেলিভারি ট্রিপ শুরু করুন
      </button>
    `,

    // ৩. ডেস্কটপ ব্রাউজার স্ক্রিন
    desktopHtml: `
      <div class="d-grid-2">
        <div class="d-panel">
          <div class="d-panel-title"><i class="fa-solid fa-network-wired"></i> তেজগাঁও অটোমেটেড সর্টিং ও হাব ডিসপ্যাচ</div>
          <table class="d-table">
            <tr><td>সর্টিং হাব ইনবাউন্ড</td><td>২০ অক্টো · ০৪:০০ AM</td></tr>
            <tr><td>অটো-কনভেয়ার লাইন</td><td>লাইন ৩ (মিরপুর ক্লাস্টার)</td></tr>
            <tr><td>মিরপুর ভ্যান ডিসপ্যাচ</td><td>সকাল ০৭:১৫ AM</td></tr>
            <tr><td>মিরপুর হাব রিসিভ</td><td>সকাল ০৮:৩০ AM (ইনচার্জ: তৌফিক)</td></tr>
          </table>
        </div>
        <div class="d-panel">
          <div class="d-panel-title"><i class="fa-solid fa-route"></i> মিরপুর-১০ রানশিট ডিসপ্যাচ লগ</div>
          <div style="font-size:12px; line-height:1.6; color:var(--text-main);">
            <div><strong>রানশিট আইডি:</strong> #MIR-RUN-104</div>
            <div><strong>রাইডার:</strong> রহিম মিয়া (#RD-DH-42)</div>
            <div><strong>পার্সেল বরাদ্দ:</strong> ১৮টি | <strong>মোট সম্ভাব্য COD:</strong> ৳৩৮,৫০০</div>
            <div><strong>আউটবাউন্ড গেটপাস:</strong> সকাল ০৯:৩০ AM (হাব আউটবাউন্ড স্ক্যানার ভেরিফাইড)</div>
          </div>
        </div>
      </div>
    `
  },

];
