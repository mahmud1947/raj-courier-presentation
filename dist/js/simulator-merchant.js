/**
 * রাজ কুরিয়ার সিমুলেটর - ফুল মার্চেন্ট অ্যাপ মডিউল (Street Fast Inspired UI)
 * হোম ড্যাশবোর্ড, পার্সেল ওভারভিউ, ওয়ালেট ও পেমেন্ট মেথডস, প্রোফাইল ও বিজনেস ইনফো
 */

const merchantFullAppScreens = {
  // ১. হোম ড্যাশবোর্ড (Street Fast Home Dashboard - pic_05.jpeg)
  home: function(stepNum) {
    const activeStep = typeof simCurrentStep !== 'undefined' ? simCurrentStep : (stepNum || 1);
    const stepData = (typeof simStepsData !== 'undefined' && simStepsData[activeStep - 1]) ? simStepsData[activeStep - 1] : null;

    let stepLiveHtml = '';
    if (stepData && stepData.merchantHtml) {
      stepLiveHtml = `
        <div class="m-sf-sim-live-box">
          <div class="m-sim-live-header">
            <span class="m-sim-live-tag">
              <span class="m-live-pulse-dot"></span> সিমুলেশন লাইভ অ্যাকশন (ধাপ ${activeStep}/৯)
            </span>
            <span class="m-count-badge green-badge">${stepData.title}</span>
          </div>
          <div class="m-sim-live-content">
            ${stepData.merchantHtml}
          </div>
        </div>
      `;
    }

    return `
      <div class="m-full-app-page m-home-page">
        <!-- Hero Delivery Banner (pic_05.jpeg) -->
        <div class="m-sf-hero-slider">
          <div class="m-hero-content">
            <div class="m-hero-text">
              <span class="m-hero-badge"><i class="fa-solid fa-bolt"></i> ফাস্ট অ্যান্ড সিকিউর</span>
              <div class="m-hero-title">ফাস্ট অ্যান্ড রিলাইয়েবল ডেলিভারি</div>
              <div class="m-hero-desc">সারা বাংলাদেশে নেক্সট ডে ক্যাশ অন ডেলিভারি ও এক্সপ্রেস পার্সেল সার্ভিস</div>
            </div>
            <div class="m-hero-truck-art">
              <i class="fa-solid fa-truck-fast"></i>
            </div>
          </div>
          <div class="m-hero-dots">
            <span class="m-h-dot active"></span>
            <span class="m-h-dot"></span>
            <span class="m-h-dot"></span>
          </div>
        </div>

        <!-- লাইভ সিমুলেশন অ্যাকশন কার্ড -->
        ${stepLiveHtml}

        <!-- ৪টি কুইক অ্যাকশন (pic_05.jpeg) -->
        <div class="m-sf-quick-grid">
          <div class="m-sf-quick-card" onclick="goToSimStepFromParcel(1)" title="নতুন পার্সেল বুকিং">
            <div class="m-q-icon-box green"><i class="fa-solid fa-box-open"></i></div>
            <div>
              <div class="m-q-title">অ্যাড পার্সেল</div>
              <div class="m-q-sub">নতুন বুকিং তৈরি</div>
            </div>
          </div>

          <div class="m-sf-quick-card" onclick="triggerSimPickupRequest()" title="পিকআপ রিকোয়েস্ট">
            <div class="m-q-icon-box amber"><i class="fa-solid fa-truck-ramp-box"></i></div>
            <div>
              <div class="m-q-title">পিকআপ রিকোয়েস্ট</div>
              <div class="m-q-sub">রাইডার কল করুন</div>
            </div>
          </div>

          <div class="m-sf-quick-card" onclick="showSimToast('এক্সপ্রেস ডেলিভারি: ঢাকা ও চট্টগ্রাম সিটিতে ১২ ঘন্টায় ডেলিভারি!', 'fa-bolt')" title="এক্সপ্রেস ডেলিভারি">
            <div class="m-q-icon-box purple"><i class="fa-solid fa-bolt-lightning"></i></div>
            <div>
              <div class="m-q-title">এক্সপ্রেস ডেলিভারি</div>
              <div class="m-q-sub">সুপারফাস্ট সার্ভিস</div>
            </div>
          </div>

          <div class="m-sf-quick-card" onclick="showSimToast('পিক অ্যান্ড ড্রপ: ইন্ট্রা-সিটি সেম ডে ইনস্ট্যান্ট মুভমেন্ট!', 'fa-arrows-split-up-and-left')" title="পিক অ্যান্ড ড্রপ">
            <div class="m-q-icon-box sky"><i class="fa-solid fa-arrows-split-up-and-left"></i></div>
            <div>
              <div class="m-q-title">পিক অ্যান্ড ড্রপ</div>
              <div class="m-q-sub">পয়েন্ট টু পয়েন্ট</div>
            </div>
          </div>
        </div>

        <!-- ৮টি ম্যানেজমেন্ট সার্ভিস গ্রিড (pic_05.jpeg) -->
        <div class="m-sf-sec-header">
          <span class="m-sf-sec-title"><i class="fa-solid fa-layer-group" style="color:var(--brand-primary);"></i> ম্যানেজমেন্ট সার্ভিসসমূহ</span>
          <span style="font-size:10px; color:#94a3b8; cursor:pointer;" onclick="switchMerchantAppTab('parcels')">সব দেখুন &rarr;</span>
        </div>
        <div class="m-sf-grid-8">
          <button type="button" class="m-grid-btn" onclick="switchMerchantAppTab('parcels')" title="পার্সেল তালিকা">
            <div class="m-grid-btn-icon"><i class="fa-solid fa-boxes-stacked"></i></div>
            <span class="m-grid-btn-label">পার্সেল</span>
          </button>

          <button type="button" class="m-grid-btn" onclick="switchMerchantAppTab('parcels')" title="সামারি রিপোর্ট">
            <div class="m-grid-btn-icon"><i class="fa-solid fa-chart-pie"></i></div>
            <span class="m-grid-btn-label">সামারি</span>
          </button>

          <button type="button" class="m-grid-btn" onclick="switchMerchantAppTab('wallet')" title="পেমেন্টস ও লেজার">
            <div class="m-grid-btn-icon"><i class="fa-solid fa-credit-card"></i></div>
            <span class="m-grid-btn-label">পেমেন্টস</span>
          </button>

          <button type="button" class="m-grid-btn" onclick="showSimToast('অ্যাড ব্যালেন্স: বিকাশ বা ব্যাংক দিয়ে প্রিপেইড চার্জ রিচার্জ করুন', 'fa-circle-plus')" title="ব্যালেন্স যোগ">
            <div class="m-grid-btn-icon"><i class="fa-solid fa-circle-plus"></i></div>
            <span class="m-grid-btn-label">অ্যাড ব্যালেন্স</span>
          </button>

          <button type="button" class="m-grid-btn" onclick="filterSimParcelsFromHome('return')" title="লেটেস্ট রিটার্ন">
            <div class="m-grid-btn-icon"><i class="fa-solid fa-rotate-left"></i></div>
            <span class="m-grid-btn-label">লেটেস্ট রিটার্ন</span>
          </button>

          <button type="button" class="m-grid-btn" onclick="showSimToast('ক্যান্সেলেশন রেট: ০.০% (কোনো ক্যান্সেলেশন নেই)', 'fa-ban')" title="ক্যান্সেলেশন">
            <div class="m-grid-btn-icon"><i class="fa-solid fa-ban"></i></div>
            <span class="m-grid-btn-label">ক্যান্সেলেশন</span>
          </button>

          <button type="button" class="m-grid-btn" onclick="showSimToast('ফ্রড চেক: কাস্টমার তানভীর আহমেদের ডেলিভারি সাকসেস স্কোর ৯৮% (নিরাপদ)', 'fa-shield-halved')" title="ফ্রড চেক">
            <div class="m-grid-btn-icon"><i class="fa-solid fa-shield-halved"></i></div>
            <span class="m-grid-btn-label">ফ্রড চেক</span>
          </button>

          <button type="button" class="m-grid-btn" onclick="showSimToast('সাপোর্ট টিকিট: কোনো পেন্ডিং কমপ্লেইন নেই। ২৪/৭ হেল্পলাইন: ১৬৯৯৯', 'fa-headset')" title="টিকেট">
            <div class="m-grid-btn-icon"><i class="fa-solid fa-headset"></i></div>
            <span class="m-grid-btn-label">টিকেট</span>
          </button>
        </div>

        <!-- ৪টি ইউটিলিটি কার্ড (pic_05.jpeg) -->
        <div class="m-sf-grid-4">
          <div class="m-util-card" onclick="showSimToast('লাইভ সাপোর্ট: হেল্পলাইন ১৬৯৯৯ বা চ্যাটে যোগাযোগ করুন', 'fa-comments')">
            <i class="fa-solid fa-comments"></i>
            <span>সাপোর্ট</span>
          </div>
          <div class="m-util-card" onclick="showSimToast('পিকআপ পয়েন্ট: দেশজুড়ে ৬৪ জেলায় ব্রাঞ্চ ও ড্রপ হাব প্রস্তুত', 'fa-location-dot')">
            <i class="fa-solid fa-location-dot"></i>
            <span>পিকআপ পয়েন্ট</span>
          </div>
          <div class="m-util-card" onclick="showSimToast('কভারেজ এরিয়া: বাংলাদেশের ৪৯৫টি উপজেলায় ডোরস্টেপ সার্ভিস', 'fa-map-location-dot')">
            <i class="fa-solid fa-map-location-dot"></i>
            <span>কভারেজ এরিয়া</span>
          </div>
          <div class="m-util-card" onclick="showSimToast('প্রাইসিং চার্ট: লোকাল ৳৭০ · ইন্টার-সিটি জেলা সদর ৳১৩০', 'fa-tag')">
            <i class="fa-solid fa-tag"></i>
            <span>প্রাইসিং</span>
          </div>
        </div>

        <!-- পার্টনার প্যাকেজিং ব্যানার (pic_05.jpeg) -->
        <div class="m-sf-partner-card" onclick="showSimToast('Pixelax Packaging: প্রিমিয়াম পলি ও থার্মাল পেপার অর্ডার গৃহীত হয়েছে!', 'fa-box')">
          <div>
            <span class="m-p-badge">Pixelax Eco Packaging Partner</span>
            <div class="m-p-title">ইকো-ফ্রেন্ডলি প্যাকেজিং সলিউশন</div>
            <div class="m-p-sub">কুরিয়ার ব্যাগ ও বক্স অর্ডার করুন বিশেষ ছাড়ে</div>
          </div>
          <button type="button" class="m-p-btn">অর্ডার করুন</button>
        </div>
      </div>
    `;
  },

  // ২. পার্সেল সামারি ও ওভারভিউ (Street Fast Overview - pic_06.jpeg)
  parcels: function() {
    return `
      <div class="m-full-app-page m-parcels-page">
        <div class="m-page-header">
          <div class="m-page-title"><i class="fa-solid fa-chart-line" style="color:var(--brand-primary);"></i> ওভারভিউ</div>
          <span class="m-count-badge green-badge">লাইভ ডাটা</span>
        </div>

        <!-- ৮টি ওভারভিউ স্ট্যাটাস কার্ড (pic_06.jpeg) -->
        <div class="m-overview-grid-8">
          <div class="m-kpi-card green" onclick="filterSimParcels('delivered')">
            <div class="m-kpi-info">
              <span class="m-kpi-label">ডেলিভারড পার্সেল</span>
              <span class="m-kpi-val">৯</span>
            </div>
            <div class="m-kpi-icon"><i class="fa-solid fa-circle-check"></i></div>
          </div>

          <div class="m-kpi-card amber" onclick="filterSimParcels('transit')">
            <div class="m-kpi-info">
              <span class="m-kpi-label">পেন্ডিং পার্সেল</span>
              <span class="m-kpi-val">২</span>
            </div>
            <div class="m-kpi-icon"><i class="fa-solid fa-clock"></i></div>
          </div>

          <div class="m-kpi-card blue" onclick="filterSimParcels('transit')">
            <div class="m-kpi-info">
              <span class="m-kpi-label">ইন রিভিউ পার্সেল</span>
              <span class="m-kpi-val">১</span>
            </div>
            <div class="m-kpi-icon"><i class="fa-solid fa-magnifying-glass-chart"></i></div>
          </div>

          <div class="m-kpi-card teal" onclick="showSimToast('পার্শিয়াল ডেলিভারড পার্সেল: ০টি', 'fa-box-archive')">
            <div class="m-kpi-info">
              <span class="m-kpi-label">পার্শিয়াল ডেলিভারড</span>
              <span class="m-kpi-val">০</span>
            </div>
            <div class="m-kpi-icon"><i class="fa-solid fa-box-archive"></i></div>
          </div>

          <div class="m-kpi-card purple" onclick="showSimToast('ওয়েটিং অ্যাপ্রুভাল পার্সেল: ১টি', 'fa-hourglass-start')">
            <div class="m-kpi-info">
              <span class="m-kpi-label">ওয়েটিং অ্যাপ্রুভাল</span>
              <span class="m-kpi-val">১</span>
            </div>
            <div class="m-kpi-icon"><i class="fa-solid fa-hourglass-start"></i></div>
          </div>

          <div class="m-kpi-card rose" onclick="filterSimParcels('return')">
            <div class="m-kpi-info">
              <span class="m-kpi-label">ক্যান্সেল্ড পার্সেল (০.০%)</span>
              <span class="m-kpi-val">০</span>
            </div>
            <div class="m-kpi-icon"><i class="fa-solid fa-ban"></i></div>
          </div>

          <div class="m-kpi-card indigo" onclick="filterSimParcels('all')">
            <div class="m-kpi-info">
              <span class="m-kpi-label">অল পার্সেল</span>
              <span class="m-kpi-val">১২</span>
            </div>
            <div class="m-kpi-icon"><i class="fa-solid fa-boxes-stacked"></i></div>
          </div>

          <div class="m-kpi-card cyan" onclick="showSimToast('অ্যামাউন্ট চেঞ্জড পার্সেল: ০টি', 'fa-money-bill-transfer')">
            <div class="m-kpi-info">
              <span class="m-kpi-label">অ্যামাউন্ট চেঞ্জড</span>
              <span class="m-kpi-val">০</span>
            </div>
            <div class="m-kpi-icon"><i class="fa-solid fa-money-bill-transfer"></i></div>
          </div>
        </div>

        <!-- পার্সেল তালিকা সেকশন -->
        <div class="m-sf-sec-header">
          <span class="m-sf-sec-title"><i class="fa-solid fa-boxes-stacked"></i> আমার পার্সেলসমূহ</span>
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
          <!-- পার্সেল ১ (চলমান সিমুলেশন) -->
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

  // ৩. ওয়ালেট ও পেমেন্ট মেথডস (Street Fast Payment Methods - pic_10.jpeg)
  wallet: function() {
    return `
      <div class="m-full-app-page m-wallet-page">
        <div class="m-page-header">
          <div class="m-page-title"><i class="fa-solid fa-wallet" style="color:var(--brand-primary);"></i> পেমেন্ট মেথডস</div>
          <span class="m-count-badge green-badge">অটো পেআউট সক্রিয়</span>
        </div>

        <!-- ওটিপি ভেরিফিকেশন সতর্কতা নোটিশ (pic_10.jpeg) -->
        <div class="m-otp-notice-box">
          <i class="fa-solid fa-shield-halved"></i>
          <span class="m-otp-notice-text">
            যেকোনো পেমেন্ট মেথড যোগ বা এডিটের সময় আপনার রেজিস্টার্ড ফোন নম্বরে SMS OTP ভেরিফিকেশন কোড পাঠানো হবে।
          </span>
        </div>

        <!-- ব্যালেন্স ও পেআউট কার্ড -->
        <div class="m-wallet-balance-card">
          <div class="w-top-label">উত্তোলনযোগ্য ব্যালেন্স</div>
          <div class="w-main-balance" id="m-wallet-avail-amt">৳১৪,৩৪০.০০</div>
          <div class="w-sub-grid">
            <div class="w-sub-item">
              <span class="w-sub-label">পেন্ডিং COD কালেকশন</span>
              <strong class="w-sub-val" style="color:#f59e0b;">৳২,০০০.০০</strong>
            </div>
            <div class="w-sub-item">
              <span class="w-sub-label">আজীবন মোট পেআউট</span>
              <strong class="w-sub-val" style="color:#10b981;">৳১,৮৫,৪০০.০০</strong>
            </div>
          </div>
          <button type="button" class="w-payout-btn" id="m-payout-action-btn" onclick="executeMerchantInstantPayout()">
            <i class="fa-solid fa-paper-plane"></i> ইনস্ট্যান্ট বিকাশ পেআউট নিন
          </button>
        </div>

        <!-- সংরক্ষিত মেথড (Saved Method - pic_10.jpeg) -->
        <div class="m-sf-sec-header" style="margin-top:12px;">
          <span class="m-sf-sec-title"><i class="fa-solid fa-bookmark" style="color:var(--brand-success);"></i> সংরক্ষিত মেথড (Saved Method)</span>
        </div>
        <div class="m-method-card">
          <div class="m-method-left">
            <div class="m-method-icon-box cash"><i class="fa-solid fa-sack-dollar"></i></div>
            <div>
              <div class="m-method-title">ক্যাশ পেমেন্ট (Cash Payment)</div>
              <div class="m-method-sub">হাব বা ক্যাশিয়ার কাউন্টার থেকে নগদ গ্রহণ</div>
            </div>
          </div>
          <span class="m-method-badge">ডিফল্ট</span>
        </div>

        <!-- উপলব্ধ মেথডস (Available Methods - pic_10.jpeg) -->
        <div class="m-sf-sec-header" style="margin-top:14px;">
          <span class="m-sf-sec-title"><i class="fa-solid fa-plus-circle" style="color:var(--brand-primary);"></i> উপলব্ধ মেথডস (ট্যাপ করে যুক্ত করুন)</span>
        </div>

        <!-- ব্যাংক -->
        <div class="m-method-card" onclick="showSimToast('ব্যাংক একাউন্ট: ব্র্যাক ব্যাংক (Mahmud Fashion) যুক্ত রয়েছে', 'fa-building-columns')">
          <div class="m-method-left">
            <div class="m-method-icon-box bank"><i class="fa-solid fa-building-columns"></i></div>
            <div>
              <div class="m-method-title">ব্যাংক (Bank Transfer)</div>
              <div class="m-method-sub">বাণিজ্যিক ব্যাংক EFTN / NPSB ট্রান্সফার</div>
            </div>
          </div>
          <button type="button" class="m-add-method-btn">+ যুক্ত করুন</button>
        </div>

        <!-- বিকাশ -->
        <div class="m-method-card" onclick="showSimToast('বিকাশ মার্চেন্ট ওয়ালেট 01712-987654 যুক্ত রয়েছে', 'fa-wallet')">
          <div class="m-method-left">
            <div class="m-method-icon-box bkash">bKash</div>
            <div>
              <div class="m-method-title">বিকাশ (bKash Wallet)</div>
              <div class="m-method-sub">01712-987654 · ইনস্ট্যান্ট অটো ডিসবার্সমেন্ট</div>
            </div>
          </div>
          <span class="m-method-badge">সংযুক্ত</span>
        </div>

        <!-- রকেট -->
        <div class="m-method-card" onclick="showSimToast('ডাচ-বাংলা রকেট ওয়ালেট যোগ করতে OTP প্রয়োজন', 'fa-rocket')">
          <div class="m-method-left">
            <div class="m-method-icon-box rocket"><i class="fa-solid fa-rocket"></i></div>
            <div>
              <div class="m-method-title">রকেট (DBBL Rocket)</div>
              <div class="m-method-sub">ডাচ-বাংলা ব্যাংক রকেট ওয়ালেট ট্রান্সফার</div>
            </div>
          </div>
          <button type="button" class="m-add-method-btn">+ যুক্ত করুন</button>
        </div>

        <!-- নগদ -->
        <div class="m-method-card" onclick="showSimToast('ডাক বিভাগ নগদ একাউন্ট যোগ করতে OTP প্রয়োজন', 'fa-coins')">
          <div class="m-method-left">
            <div class="m-method-icon-box nagad"><i class="fa-solid fa-coins"></i></div>
            <div>
              <div class="m-method-title">নগদ (Nagad Digital)</div>
              <div class="m-method-sub">বাংলাদেশ ডাক বিভাগ নগদ মোবাইল ওয়ালেট</div>
            </div>
          </div>
          <button type="button" class="m-add-method-btn">+ যুক্ত করুন</button>
        </div>

        <!-- সাম্প্রতিক লেনদেন হিস্ট্রি -->
        <div class="m-sf-sec-header" style="margin-top:16px;">
          <span class="m-sf-sec-title"><i class="fa-solid fa-clock-rotate-left"></i> সাম্প্রতিক পেআউট ইতিহাস</span>
        </div>
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
        </div>

      </div>
    `;
  },

  // ৪. প্রোফাইল ও বিজনেস ইনফো (Street Fast Profile - pic_08.jpeg & pic_09.jpeg)
  profile: function() {
    return `
      <div class="m-full-app-page m-profile-page">
        <!-- ইউজার ইনফো কার্ড (pic_08.jpeg) -->
        <div class="m-sf-user-card">
          <div class="m-sf-avatar-wrap">
            <span>M</span>
            <span class="m-sf-avatar-edit-badge" title="এডিট অ্যাভাটার"><i class="fa-solid fa-camera"></i></span>
          </div>
          <div class="m-sf-user-info">
            <div class="m-sf-user-name">মো: মাহমুদুর রহমান</div>
            <div class="m-sf-user-id-row">
              <span class="m-sf-user-id-text">User ID: SBEE6QJU</span>
              <button type="button" class="m-sf-copy-btn" onclick="copySimMerchantUserId()" title="কপি করুন">
                <i class="fa-regular fa-copy"></i> কপি
              </button>
            </div>
          </div>
        </div>

        <!-- পার্সোনাল ইনফো ও বিজনেস ইনফো সেগমেন্টেড ট্যাবস (pic_08.jpeg & pic_09.jpeg) -->
        <div class="m-sf-seg-tabs">
          <button type="button" class="m-seg-tab-btn active" id="m-btn-seg-personal" onclick="switchSimProfileTab('personal')">
            পার্সোনাল ইনফো
          </button>
          <button type="button" class="m-seg-tab-btn" id="m-btn-seg-business" onclick="switchSimProfileTab('business')">
            বিজনেস ইনফো
          </button>
        </div>

        <!-- ১. পার্সোনাল ইনফো সেকশন (pic_08.jpeg) -->
        <div id="m-profile-personal-sec">
          <div class="m-info-list">
            <div class="m-info-row">
              <span class="m-info-label"><i class="fa-solid fa-user"></i> ওনার নেম</span>
              <span class="m-info-val">Md Mahmudur Rahman</span>
            </div>
            <div class="m-info-row">
              <span class="m-info-label"><i class="fa-solid fa-phone"></i> প্রাইমারি কন্টাক্ট</span>
              <span class="m-info-val">
                01712-987654
                <span class="m-login-badge"><i class="fa-solid fa-check"></i> লগইন অ্যাকাউন্ট</span>
              </span>
            </div>
            <div class="m-info-row">
              <span class="m-info-label"><i class="fa-solid fa-phone-volume"></i> সেকেন্ডারি কন্টাক্ট</span>
              <span class="m-info-val">01890-123456</span>
            </div>
            <div class="m-info-row">
              <span class="m-info-label"><i class="fa-solid fa-envelope"></i> ইমেইল অ্যাড্রেস</span>
              <span class="m-info-val">mahmud.fashion@gmail.com</span>
            </div>
            <div class="m-info-row">
              <span class="m-info-label"><i class="fa-solid fa-id-card"></i> এনআইডি স্ট্যাটাস</span>
              <span class="m-info-val" style="color:var(--brand-success);">
                <i class="fa-solid fa-circle-check"></i> অনুমোদিত (Verified)
              </span>
            </div>
          </div>
        </div>

        <!-- ২. বিজনেস ইনফো সেকশন (pic_09.jpeg) -->
        <div id="m-profile-business-sec" style="display:none;">
          <div class="m-info-list">
            <div class="m-info-row">
              <span class="m-info-label"><i class="fa-solid fa-shop"></i> বিজনেস নেম</span>
              <span class="m-info-val">মাহমুদ ফ্যাশন হাউজ</span>
            </div>
            <div class="m-info-row">
              <span class="m-info-label"><i class="fa-solid fa-phone"></i> প্রাইমারি কন্টাক্ট</span>
              <span class="m-info-val">01712-987654</span>
            </div>
            <div class="m-info-row">
              <span class="m-info-label"><i class="fa-solid fa-location-dot"></i> পিকআপ অ্যাড্রেস</span>
              <span class="m-info-val">শপ ৪, জিন্দাবাজার, সিলেট</span>
            </div>
          </div>

          <!-- পিকআপ মোড সিলেক্টর (pic_09.jpeg) -->
          <div class="m-sf-sec-header" style="margin-top:10px;">
            <span class="m-sf-sec-title"><i class="fa-solid fa-truck-pickup"></i> পিকআপ মোড</span>
          </div>
          <div class="m-pickup-mode-selector">
            <label class="m-mode-radio-card" id="m-mode-card-regular" onclick="setSimPickupMode('regular')">
              <input type="radio" name="m-sim-pickup-mode" value="regular">
              <div class="m-mode-text">
                <span class="m-mode-name">রেগুলার (Regular)</span>
                <span class="m-mode-desc">সকাল ১০টা থেকে দুপুর ২টার সাধারণ পিকআপ</span>
              </div>
            </label>

            <label class="m-mode-radio-card active" id="m-mode-card-express" onclick="setSimPickupMode('express')">
              <input type="radio" name="m-sim-pickup-mode" value="express" checked>
              <div class="m-mode-text">
                <span class="m-mode-name">এক্সপ্রেস (Express)</span>
                <span class="m-mode-desc">রিকোয়েস্ট পাঠানোর ৩০ মিনিটের মধ্যে পিকআপ</span>
              </div>
            </label>
          </div>

          <!-- পেমেন্ট ইনফো মেনু -->
          <div class="m-info-list" style="margin-top:12px;">
            <div class="m-info-row" style="cursor:pointer;" onclick="switchMerchantAppTab('wallet')">
              <span class="m-info-label"><i class="fa-solid fa-credit-card"></i> পেমেন্ট মেথডস</span>
              <span class="m-info-val" style="color:#38bdf8;">ক্যাশ ও বিকাশ &rarr;</span>
            </div>
          </div>
        </div>

        <button type="button" class="sim-btn sim-btn-ghost" style="width:100%; margin-top:12px;" onclick="showSimToast('রাজ কুরিয়ার হেল্পলাইন: 16999 (২৪/৭)', 'fa-phone')">
          <i class="fa-solid fa-phone-volume"></i> হেল্পলাইন ১৬৯৯৯ এ কল দিন
        </button>
      </div>
    `;
  }
};

// =========================================================
// মার্চেন্ট অ্যাপ ইন্টারঅ্যাক্টিভ ফাংশনসমূহ (Street Fast UI Actions)
// =========================================================

// ১. ব্যালেন্স টগল (Street Fast Header Tap for Balance)
let isMerchantBalanceRevealed = false;
let merchantBalanceTimer = null;

function toggleSimMerchantBalance() {
  playSimSound('chime');
  const txt = document.getElementById('m-sf-balance-text');
  const pill = document.getElementById('m-tap-balance-btn');
  if (!txt) return;

  isMerchantBalanceRevealed = !isMerchantBalanceRevealed;
  if (isMerchantBalanceRevealed) {
    txt.textContent = '৳১৪,৩৪০.০০';
    if (pill) pill.style.boxShadow = '0 4px 14px rgba(16, 185, 129, 0.4)';
    clearTimeout(merchantBalanceTimer);
    merchantBalanceTimer = setTimeout(() => {
      if (txt) txt.textContent = 'ব্যালেন্স ট্যাপ করুন';
      if (pill) pill.style.boxShadow = '';
      isMerchantBalanceRevealed = false;
    }, 4500);
  } else {
    txt.textContent = 'ব্যালেন্স ট্যাপ করুন';
    if (pill) pill.style.boxShadow = '';
    clearTimeout(merchantBalanceTimer);
  }
}

// ২. প্রোফাইল সাব-ট্যাব সুইচার (Personal vs Business Info)
function switchSimProfileTab(tabType) {
  playSimSound('click');
  const btnPersonal = document.getElementById('m-btn-seg-personal');
  const btnBusiness = document.getElementById('m-btn-seg-business');
  const secPersonal = document.getElementById('m-profile-personal-sec');
  const secBusiness = document.getElementById('m-profile-business-sec');

  if (tabType === 'personal') {
    if (btnPersonal) btnPersonal.classList.add('active');
    if (btnBusiness) btnBusiness.classList.remove('active');
    if (secPersonal) secPersonal.style.display = 'block';
    if (secBusiness) secBusiness.style.display = 'none';
  } else {
    if (btnPersonal) btnPersonal.classList.remove('active');
    if (btnBusiness) btnBusiness.classList.add('active');
    if (secPersonal) secPersonal.style.display = 'none';
    if (secBusiness) secBusiness.style.display = 'block';
  }
}

// ৩. ইউজার আইডি কপি
function copySimMerchantUserId() {
  playSimSound('beep');
  if (navigator.clipboard) {
    navigator.clipboard.writeText('SBEE6QJU').catch(() => {});
  }
  showSimToast('✅ ইউজার আইডি SBEE6QJU ক্লিপবোর্ডে কপি হয়েছে!', 'fa-copy', 3000);
}

// ৪. পিকআপ মোড সেট (Regular vs Express)
function setSimPickupMode(mode) {
  playSimSound('click');
  const cardReg = document.getElementById('m-mode-card-regular');
  const cardExp = document.getElementById('m-mode-card-express');
  if (mode === 'regular') {
    if (cardReg) cardReg.classList.add('active');
    if (cardExp) cardExp.classList.remove('active');
    showSimToast('পিকআপ মোড: রেগুলার (সকাল ১০টা - দুপুর ২টা) নির্বাচিত', 'fa-clock');
  } else {
    if (cardReg) cardReg.classList.remove('active');
    if (cardExp) cardExp.classList.add('active');
    showSimToast('⚡ পিকআপ মোড: এক্সপ্রেস (৩০ মিনিটে পিকআপ) নির্বাচিত', 'fa-bolt');
  }
}

// ৫. মার্চেন্ট মেনু ড্রয়ার
function showSimMerchantDrawer() {
  playSimSound('click');
  showSimToast('🏪 মার্চেন্ট প্রোফাইল: মাহমুদ ফ্যাশন হাউজ (User ID: SBEE6QJU)', 'fa-bars', 3000);
}

// ৬. হোম থেকে সরাসরি পিকআপ রিকোয়েস্ট
function triggerSimPickupRequest() {
  playSimSound('click');
  showSimToast('🚚 পিকআপ রিকোয়েস্ট সেন্ট্রাল সিলেট হাবে পাঠানো হয়েছে!', 'fa-truck-ramp-box', 3500);
  goToSimStepFromParcel(1);
}

// ৭. হোম থেকে নির্দিষ্ট পার্সেল ফিল্টার
function filterSimParcelsFromHome(type) {
  switchMerchantAppTab('parcels');
  setTimeout(() => {
    filterSimParcels(type);
  }, 100);
}

// ৮. পার্সেল ফিল্টারিং
function filterSimParcels(filterType, element) {
  playSimSound('click');
  const pills = document.querySelectorAll('.m-filter-pill');
  pills.forEach(p => p.classList.remove('active'));
  if (element) {
    element.classList.add('active');
  } else {
    const target = Array.from(pills).find(p => p.getAttribute('onclick') && p.getAttribute('onclick').includes(filterType));
    if (target) target.classList.add('active');
  }

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

// ৯. পার্সেল থেকে ধাপে যাওয়া
function goToSimStepFromParcel(step) {
  playSimSound('click');
  const merchantHomeBtn = document.querySelector('#sim-merchant-bottom-nav [data-m-tab="home"]');
  if (merchantHomeBtn) merchantHomeBtn.click();
  renderSimulatorStep(step);
  showSimToast(`সিমুলেটর ধাপ ${step} এ নিয়ে যাওয়া হয়েছে।`, 'fa-circle-arrow-right');
}

// ১০. ওয়ালেট ইনস্ট্যান্ট বিকাশ পেআউট
function executeMerchantInstantPayout() {
  playSimSound('chime');
  const amtEl = document.getElementById('m-wallet-avail-amt');
  if (amtEl) amtEl.textContent = '৳০.০০';
  showSimToast('💸 ৳১৪,৩৪০ আপনার বিকাশ মার্চেন্ট ওয়ালেট 01712-987654 এ সফলভাবে ট্রান্সফার করা হয়েছে! TrxID: 9KC99BK2', 'fa-wallet', 4000);
}

// গ্লোবালি উইন্ডো অবজেক্টে এক্সপোজ
window.merchantFullAppScreens = merchantFullAppScreens;
window.toggleSimMerchantBalance = toggleSimMerchantBalance;
window.switchSimProfileTab = switchSimProfileTab;
window.copySimMerchantUserId = copySimMerchantUserId;
window.setSimPickupMode = setSimPickupMode;
window.showSimMerchantDrawer = showSimMerchantDrawer;
window.triggerSimPickupRequest = triggerSimPickupRequest;
window.filterSimParcelsFromHome = filterSimParcelsFromHome;
window.filterSimParcels = filterSimParcels;
window.goToSimStepFromParcel = goToSimStepFromParcel;
window.executeMerchantInstantPayout = executeMerchantInstantPayout;
