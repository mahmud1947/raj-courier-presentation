/**
 * রাজ কুরিয়ার প্রেজেন্টেশন - ৪টি বিজনেস মডেল (B2C, P2P, B2B, Reverse) ও ৩টি আউটকাম (COD, Prepaid, Return)
 */

// ৪টি বিজনেস মডেলের পূর্ণাঙ্গ গল্প ও ডাটা (একটি সমন্বিত গল্প জগৎ)
const businessModels = {
  // ==========================================
  // ১. B2C (Business to Customer / মার্চেন্ট ➔ কাস্টমার)
  // ==========================================
  b2c: {
    name: 'B2C (বিজনেস ➔ কাস্টমার)',
    characters: '<strong>গল্পের চরিত্র:</strong> মাহমুদ ভাই = মার্চেন্ট (সিলেট শপ) · তানভীর সাহেব = ক্রেতা (ঢাকা মিরপুর, অনলাইন শার্টের অর্ডার)।',
    policy: '<strong>আর্থিক নীতি:</strong> সফল ডেলিভারিতে কুরিয়ার চার্জ ৳১০০ কেটে মাহমুদ ভাই পাবেন ৳১,৯০০। আর ডেলিভারি ফেইল হলে রিটার্ন চার্জ ৳৬০ মাহমুদ ভাইয়ের ব্যালেন্স থেকে কর্তন হবে।',
    common: [
      {
        num: '১',
        label: 'বুকিং',
        icon: 'fa-clipboard-check',
        hint: 'মাহমুদ ভাই (মার্চেন্ট)',
        status: 'মাহমুদ ভাই মিরপুরের তানভীরের জন্য শার্টের পার্সেল বুক করলেন',
        location: 'মাহমুদ ভাইয়ের শপ (সিলেট)',
        owner: 'সফটওয়্যার',
        cash: '৳০ (টাকা কাস্টমারের পকেটে)',
        evidence: 'রেকর্ড: পার্সেল আইডি তৈরি + ইনভয়েস জেনারেট'
      },
      {
        num: '২',
        label: 'পিকআপ',
        icon: 'fa-box-archive',
        hint: 'সিলেট রাইডার',
        status: 'সিলেটের রাইডার মাহমুদ ভাইয়ের দোকান থেকে শার্টের পার্সেলটি রিসিভ করলেন',
        location: 'সিলেট রাইডারের ব্যাগে',
        owner: 'সিলেট পিকআপ রাইডার',
        cash: '৳০ (আদায় এখনো হয়নি)',
        evidence: 'রেকর্ড: মার্চেন্ট শপে রিসিভিং স্ক্যান'
      },
      {
        num: '৩',
        label: 'সিলেট হাব',
        icon: 'fa-warehouse',
        hint: 'সর্টিং ও চালানে লোড',
        status: 'শার্টের পার্সেলটি সিলেট হাবে এলো এবং ঢাকা চালানে তোলা হলো',
        location: 'সিলেট হাব',
        owner: 'সিলেট হাব ম্যানেজার',
        cash: '৳০ (আদায় এখনো হয়নি)',
        evidence: 'রেকর্ড: ওজন যাচাই + হাইওয়ে চালান প্রস্তুত'
      },
      {
        num: '৪',
        label: 'পরিবহন',
        icon: 'fa-truck-arrow-right',
        hint: 'সিলেট ➔ ঢাকা হাইওয়ে',
        status: 'গাড়িতে করে পার্সেলটি ঢাকা মিরপুরের উদ্দেশ্যে ছুটছে',
        location: 'সিলেট ➔ ঢাকা পরিবহন গাড়ি',
        owner: 'লাইন-হল চালক / টিম',
        cash: '৳০ (আদায় এখনো হয়নি)',
        evidence: 'রেকর্ড: চালান ট্র্যাকিং + হাইওয়ে নিরাপত্তা চেক'
      },
      {
        num: '৫',
        label: 'মিরপুর হাব',
        icon: 'fa-dolly',
        hint: 'মিরপুরে আনলোড',
        status: 'পার্সেলটি ঢাকা পৌঁছে মিরপুর ডেলিভারি হাবে আনলোড হলো',
        location: 'ঢাকা মিরপুর হাব',
        owner: 'মিরপুর হাব ম্যানেজার',
        cash: '৳০ (আদায় এখনো হয়নি)',
        evidence: 'রেকর্ড: চালান আনলোড স্ক্যান + রাইডার অ্যাসাইন'
      },
      {
        num: '৬',
        label: 'ডেলিভারির পথে',
        icon: 'fa-motorcycle',
        hint: 'মিরপুর রাইডার',
        status: 'মিরপুরের রাইডার তানভীর সাহেবের ঠিকানায় শার্টের পার্সেল নিয়ে বের হলেন',
        location: 'মিরপুর রাইডারের ব্যাগে',
        owner: 'মিরপুর ডেলিভারি রাইডার',
        cash: '৳০ (আদায় এখনো হয়নি)',
        evidence: 'রেকর্ড: কাস্টমার তানভীর সাহেবকে SMS নোটিফিকেশন'
      }
    ],
    outcomes: {
      delivered: [
        {
          num: '৭',
          label: 'COD ডেলিভারি',
          icon: 'fa-handshake',
          hint: 'তানভীর (কাস্টমার)',
          status: 'তানভীর সাহেব শার্টের পার্সেল পেয়ে রাইডারকে নগদ ৳২,০০০ দিলেন',
          location: 'কাস্টমার তানভীরের কাছে (মিরপুর)',
          owner: 'মিরপুর ডেলিভারি রাইডার',
          cash: 'রাইডারের হাতে নগদ ৳২,০০০',
          evidence: 'রেকর্ড: কাস্টমার OTP ভেরিফিকেশন + ক্যাশ রিসিট'
        },
        {
          num: '৮',
          label: 'ক্যাশ জমা',
          icon: 'fa-vault',
          hint: 'মিরপুর হাব ভল্ট',
          status: 'রাইডার দিনশেষে মিরপুর অফিসে এসে ৳২,০০০ ক্যাশ জমা দিলেন',
          location: 'কাস্টমার তানভীরের কাছে (মিরপুর)',
          owner: 'মিরপুর হাব ক্যাশিয়ার',
          cash: 'অফিসের ক্যাশে ৳২,০০০ জমা',
          evidence: 'রেকর্ড: রাইডারের ক্যাশ ক্লোজিং ভাউচার'
        },
        {
          num: '৯',
          label: 'মার্চেন্ট পেমেন্ট',
          icon: 'fa-building-columns',
          hint: 'মাহমুদ ভাই (সিলেট)',
          status: 'কুরিয়ার চার্জ ৳১০০ কেটে মাহমুদ ভাই পেলেন ৳১,৯০০',
          location: 'কাস্টমার তানভীরের কাছে (মিরপুর)',
          owner: 'কেন্দ্রীয় হিসাব বিভাগ',
          cash: 'মাহমুদ ভাইয়ের একাউন্টে ৳১,৯০০ (হিসাব শেষ)',
          evidence: 'রেকর্ড: MFS ট্রানজেকশন আইডি + ইনভয়েস ক্লোজড'
        }
      ],
      prepaid: [
        {
          num: '৭',
          label: 'প্রিপেইড ডেলিভারি',
          icon: 'fa-box-open',
          hint: 'তানভীর (কাস্টমার)',
          status: 'তানভীর সাহেব অনলাইনে আগেই দাম পরিশোধ করায় কোনো ক্যাশ ছাড়া শার্ট নিলেন',
          location: 'কাস্টমার তানভীরের কাছে (মিরপুর)',
          owner: 'মিরপুর ডেলিভারি রাইডার',
          cash: '৳০ (আগে পরিশোধিত, কোনো COD নেই)',
          evidence: 'রেকর্ড: কাস্টমার OTP দিয়ে ডেলিভারি কনফার্ম'
        },
        {
          num: '৮',
          label: 'স্ট্যাটাস আপডেট',
          icon: 'fa-circle-check',
          hint: 'মিরপুর হাব',
          status: 'ক্যাশ না থাকায় রাইডার শুধু ডেলিভারি সম্পন্ন হিসেবে আপডেট করলেন',
          location: 'কাস্টমার তানভীরের কাছে (মিরপুর)',
          owner: 'মিরপুর হাব ম্যানেজার',
          cash: '৳০ (ক্যাশ জমার ঝামেলা নেই)',
          evidence: 'রেকর্ড: প্রিপেইড ডেলিভারি কমপ্লিট আপডেট'
        },
        {
          num: '৯',
          label: 'বিলিং সমন্বয়',
          icon: 'fa-file-invoice-dollar',
          hint: 'সার্ভিস চার্জ কাটা',
          status: 'মাহমুদ ভাইয়ের অ্যাকাউন্ট ব্যালেন্স থেকে ৳১০০ কুরিয়ার ফি সমন্বয় হলো',
          location: 'কাস্টমার তানভীরের কাছে (মিরপুর)',
          owner: 'কেন্দ্রীয় হিসাব বিভাগ',
          cash: 'কুরিয়ার চার্জ ৳১০০ মাহমুদ ভাইয়ের ব্যালেন্স থেকে কর্তন',
          evidence: 'রেকর্ড: ডিজিটাল ইনভয়েস ও লেজার আপডেট'
        }
      ],
      returned: [
        {
          num: '৭',
          label: 'ব্যর্থ চেষ্টা',
          icon: 'fa-phone-slash',
          hint: 'কাস্টমার রিসিভ করেননি',
          status: 'তানভীর সাহেব ফোন না ধরায় শার্টের পার্সেল ডেলিভারি হয়নি',
          location: 'মিরপুর রাইডারের কাছে',
          owner: 'মিরপুর রাইডার / কাস্টমার কেয়ার',
          cash: '৳০ (কোনো টাকা আদায় হয়নি)',
          evidence: 'রেকর্ড: ফেইল্ড রিজন (ফোন বন্ধ) + রিটার্ন সিদ্ধান্ত'
        },
        {
          num: '৮',
          label: 'রিটার্ন পরিবহন',
          icon: 'fa-truck-arrow-right fa-flip-horizontal',
          hint: 'ঢাকা ➔ সিলেট ফেরত',
          status: 'পার্সেলটি আবার গাড়িতে করে সিলেটে ফেরত পাঠানো হলো',
          location: 'ঢাকা ➔ সিলেট রিটার্ন গাড়ি',
          owner: 'লাইন-হল পরিবহন টিম',
          cash: '৳০ (পণ্য ফেরত যাচ্ছে)',
          evidence: 'রেকর্ড: রিটার্ন চালান + সিলেটগামী গাড়িতে লোড'
        },
        {
          num: '৯',
          label: 'ফেরত ও চার্জ কর্তন',
          icon: 'fa-rotate-left',
          hint: 'মাহমুদ ভাইয়ের কাছে ফেরত',
          status: 'শার্টটি মাহমুদ ভাইকে ফেরত দিয়ে চার্জ তাঁর বিল থেকে কাটা হলো',
          location: 'মাহমুদ ভাইয়ের শপ (সিলেট)',
          owner: 'সিলেট হাব / রাইডার',
          cash: 'রিটার্ন চার্জ ৳৬০ মাহমুদ ভাইয়ের ব্যালেন্স থেকে কর্তন',
          evidence: 'রেকর্ড: পণ্য ফেরত রসিদ + রিটার্ন চার্জ লেজারে সমন্বয়'
        }
      ]
    }
  },

  // ==========================================
  // ২. P2P (Person to Person / ব্যক্তি ➔ ব্যক্তি)
  // ==========================================
  p2p: {
    name: 'P2P (পারসন টু পারসন / ব্যক্তি ➔ ব্যক্তি)',
    characters: '<strong>গল্পের চরিত্র:</strong> মাহমুদ (সিলেট) = বন্ধুকে সিলেটের খাঁটি চা পাতা পাঠাচ্ছেন · তানভীর (ঢাকা মিরপুর) = বন্ধু প্রাপক।',
    policy: '<strong>আর্থিক নীতি:</strong> মাহমুদ ভাই অনলাইনে আগেই ভাড়া পরিশোধ করতে পারেন (Prepaid) অথবা ঢাকায় বন্ধু তানভীর ডেলিভারির সময় ভাড়া পরিশোধ করতে পারেন (To-Pay/COD)।',
    common: [
      {
        num: '১',
        label: 'অনলাইন বুকিং',
        icon: 'fa-clipboard-check',
        hint: 'মাহমুদ ভাই (প্রেরক)',
        status: 'মাহমুদ ভাই অনলাইনে তাঁর বন্ধুর কাছে পার্সেল পাঠানোর জন্য বুক করলেন',
        location: 'মাহমুদ ভাইয়ের লোকেশন (সিলেট)',
        owner: 'সফটওয়্যার',
        cash: 'ভাড়া অনলাইনে অথবা ঢাকায় তানভীর পরিশোধ করবেন',
        evidence: 'রেকর্ড: অনলাইন বুকিং রিকোয়েস্ট তৈরি + ট্র্যাকিং আইডি'
      },
      {
        num: '২',
        label: 'রাইডার পিকআপ',
        icon: 'fa-motorcycle',
        hint: 'সিলেট রাইডার',
        status: 'রাইডার গিয়ে মাহমুদ ভাইয়ের কাছ থেকে পার্সেল রিসিভ করলেন',
        location: 'রাইডারের কাছে',
        owner: 'সিলেট পিকআপ রাইডার',
        cash: 'পিকআপ নিশ্চিতকরণ',
        evidence: 'রেকর্ড: রাইডার পিকআপ স্ক্যান'
      },
      {
        num: '৩',
        label: 'সিলেট হাব',
        icon: 'fa-warehouse',
        hint: 'কেন্দ্রীয় হাবে সর্টিং',
        status: 'রাইডার পার্সেল রিসিভ করে সিলেট প্রধান হাবে নিয়ে এলেন',
        location: 'সিলেট কেন্দ্রীয় হাব',
        owner: 'সিলেট হাব ইনচার্জ',
        cash: 'নিরাপদ হেফাজতে',
        evidence: 'রেকর্ড: হাব আগমন স্ক্যান ও চালান তৈরি'
      },
      {
        num: '৪',
        label: 'পরিবহন',
        icon: 'fa-truck-arrow-right',
        hint: 'হাইওয়ে ট্রানজিট',
        status: 'রাতের ট্রাকে চা পাতার পার্সেলটি ঢাকা কেন্দ্রীয় হাবের উদ্দেশ্যে রওনা দিল',
        location: 'সিলেট ➔ ঢাকা পরিবহন গাড়ি',
        owner: 'লাইন-হল ড্রাইভার',
        cash: 'কোনো ক্যাশ হ্যান্ডলিং নেই',
        evidence: 'রেকর্ড: ভেহিকেল ট্র্যাকিং ও নিরাপত্তা সিল'
      },
      {
        num: '৫',
        label: 'মিরপুর হাব',
        icon: 'fa-dolly',
        hint: 'মিরপুরে আনলোড',
        status: 'পার্সেলটি ঢাকায় পৌঁছে মিরপুর লোকাল ডেলিভারি হাবে স্ক্যান হলো',
        location: 'ঢাকা মিরপুর হাব',
        owner: 'মিরপুর হাব ম্যানেজার',
        cash: 'ডেলিভারি চালানে এন্ট্রি',
        evidence: 'রেকর্ড: মিরপুর হাবে আগমন স্ক্যান ও রাইডার অ্যাসাইন'
      },
      {
        num: '৬',
        label: 'ডেলিভারির পথে',
        icon: 'fa-motorcycle',
        hint: 'মিরপুর রাইডার',
        status: 'রাইডার বন্ধু তানভীরের বাসার উদ্দেশ্যে চা পাতার পার্সেল নিয়ে বের হলেন',
        location: 'মিরপুর রাইডারের ব্যাগে',
        owner: 'মিরপুর ডেলিভারি রাইডার',
        cash: 'তানভীরকে কল ও এসএমএস পাঠানো হয়েছে',
        evidence: 'রেকর্ড: রাইডার আউট-ফর-ডেলিভারি এন্ট্রি'
      }
    ],
    outcomes: {
      delivered: [
        {
          num: '৭',
          label: 'কন্ডিশন / COD',
          icon: 'fa-handshake',
          hint: 'তানভীর (প্রাপক)',
          status: 'তানভীর চা পাতা গ্রহণ করলেন এবং কুরিয়ার চার্জ ৳১৩০ পরিশোধ করলেন',
          location: 'কাস্টমার তানভীরের কাছে (মিরপুর)',
          owner: 'মিরপুর ডেলিভারি রাইডার',
          cash: 'রাইডারের হাতে সংগৃহীত ভাড়া ৳১৩০',
          evidence: 'রেকর্ড: গ্রাহক OTP + মানি রিসিট'
        },
        {
          num: '৮',
          label: 'ক্যাশ জমা',
          icon: 'fa-vault',
          hint: 'মিরপুর হাব',
          status: 'রাইডার মিরপুর ব্রাঞ্চে এসে আদায়কৃত ৳১৩০ ক্যাশে জমা দিলেন',
          location: 'কাস্টমার তানভীরের কাছে (মিরপুর)',
          owner: 'মিরপুর ব্রাঞ্চ ক্যাশিয়ার',
          cash: 'ব্রাঞ্চ ক্যাশে ৳১৩০ জমা',
          evidence: 'রেকর্ড: দৈনিক ক্যাশ শিট মিলানো'
        },
        {
          num: '৯',
          label: 'ডেলিভারি সম্পন্ন',
          icon: 'fa-circle-check',
          hint: 'মাহমুদ ও তানভীর',
          status: 'মাহমুদ ভাই এসএমএস পেলেন: বন্ধু তানভীর সিলেটের চা পাতা সফলভাবে গ্রহণ করেছেন',
          location: 'কাস্টমার তানভীরের কাছে (মিরপুর)',
          owner: 'কুরিয়ার সিস্টেম',
          cash: 'কুরিয়ার রেভিনিউ ৳১৩০ ক্লোজড',
          evidence: 'রেকর্ড: প্রেরক মাহমুদ ভাইকে সফল ডেলিভারির SMS'
        }
      ],
      prepaid: [
        {
          num: '৭',
          label: 'উপহার হ্যান্ডওভার',
          icon: 'fa-gift',
          hint: 'তানভীর (প্রাপক)',
          status: 'মাহমুদ ভাই আগেই ভাড়া দেওয়ায় তানভীর কোনো চার্জ ছাড়াই চা পাতা নিলেন',
          location: 'কাস্টমার তানভীরের কাছে (মিরপুর)',
          owner: 'মিরপুর ডেলিভারি রাইডার',
          cash: '৳০ (প্রেরক মাহমুদ ভাই আগেই ভাড়া পরিশোধ করেছেন)',
          evidence: 'রেকর্ড: কাস্টমার সাইন / OTP কনফার্মেশন'
        },
        {
          num: '৮',
          label: 'স্ট্যাটাস ক্লোজ',
          icon: 'fa-circle-check',
          hint: 'মিরপুর হাব',
          status: 'রাইডার প্রিপেইড ডেলিভারি সফল হিসেবে সিস্টেমে ক্লোজ করলেন',
          location: 'কাস্টমার তানভীরের কাছে (মিরপুর)',
          owner: 'মিরপুর ডেলিভারি রাইডার',
          cash: '৳০ (কোনো টাকা আদায় বাকি নেই)',
          evidence: 'রেকর্ড: মোবাইল অ্যাপে ডিজিটাল ডেলিভারি প্রমাণ'
        },
        {
          num: '৯',
          label: 'নোটিফিকেশন',
          icon: 'fa-bell',
          hint: 'মাহমুদ ভাই (প্রেরক)',
          status: 'মাহমুদ ভাইকে জানানো হলো তাঁর পাঠানো চা পাতার উপহার বন্ধু নিরাপদে পেয়ে গেছেন',
          location: 'কাস্টমার তানভীরের কাছে (মিরপুর)',
          owner: 'কুরিয়ার সিস্টেম',
          cash: 'হিসাব পূর্বেই সম্পন্ন',
          evidence: 'রেকর্ড: ডেলিভারি কমপ্লিট হিস্ট্রি লক'
        }
      ],
      returned: [
        {
          num: '৭',
          label: 'ঠিকানা অনুপস্থিত',
          icon: 'fa-phone-slash',
          hint: 'প্রাপক পাওয়া যায়নি',
          status: 'তানভীর ঢাকায় না থাকায় বা ফোন বন্ধ থাকায় চা পাতার পার্সেল ডেলিভারি হয়নি',
          location: 'মিরপুর রাইডারের কাছে',
          owner: 'মিরপুর হাব কাস্টমার সাপোর্ট',
          cash: '৳০ (কোনো টাকা আদায় হয়নি)',
          evidence: 'রেকর্ড: ৩ বার কল ব্যর্থতার কল লগ প্রমাণ'
        },
        {
          num: '৮',
          label: 'সিলেটে রিটার্ন',
          icon: 'fa-truck-arrow-right fa-flip-horizontal',
          hint: 'ঢাকা ➔ সিলেট ফেরত',
          status: 'চা পাতার পার্সেলটি ঢাকায় না রেখে আবার সিলেটে ফেরত পাঠানো হলো',
          location: 'ঢাকা ➔ সিলেট রিটার্ন পরিবহন',
          owner: 'পরিবহন টিম',
          cash: 'পণ্য সুরক্ষিতভাবে ফেরত যাচ্ছে',
          evidence: 'রেকর্ড: রিটার্ন পার্সেল চালান'
        },
        {
          num: '৯',
          label: 'মাহমুদ ভাইকে ফেরত',
          icon: 'fa-rotate-left',
          hint: 'মাহমুদ ভাই (প্রেরক)',
          status: 'রাইডার মাহমুদ ভাইয়ের ঠিকানায় গিয়ে তাঁর পার্সেল ফেরত বুঝিয়ে দিলেন',
          location: 'মাহমুদ ভাইয়ের লোকেশন (সিলেট)',
          owner: 'সিলেট রিটার্ন রাইডার',
          cash: 'রিটার্ন নীতি অনুযায়ী হ্যান্ডলিং ফি সমন্বয়',
          evidence: 'রেকর্ড: প্রেরকের স্বাক্ষরে পার্সেল ফেরত প্রদান'
        }
      ]
    }
  },

  // ==========================================
  // ৩. B2B (Business to Business / কারখানা থেকে দোকানের বাল্ক চালান)
  // ==========================================
  b2b: {
    name: 'B2B (বিজনেস to বিজনেস - পাইকারি চালান)',
    characters: '<strong>গল্পের চরিত্র:</strong> মাহমুদ ভাই = সরবরাহকারী (সিলেট গ্রিন টি ফ্যাক্টরি) · মিরপুর শপ = পাইকারি ক্রেতা (১০ কার্টন চা পাতার চালান)।',
    policy: '<strong>আর্থিক নীতি:</strong> বড় পাইকারি চালানে কুরিয়ারের মাধ্যমে কন্ডিশন ক্যাশ (৳৫০,০০০) কালেকশন অথবা কর্পোরেট মান্থলি ক্রেডিট বিলিং।',
    common: [
      {
        num: '১',
        label: 'বাল্ক বুকিং',
        icon: 'fa-clipboard-check',
        hint: 'মাহমুদ ভাই (ফ্যাক্টরি)',
        status: 'মাহমুদ ভাইয়ের ফ্যাক্টরি থেকে মিরপুরের দোকানের জন্য ১০ কার্টন চা পাতার চালান বুক হলো',
        location: 'মাহমুদ ভাইয়ের ফ্যাক্টরি (সিলেট)',
        owner: 'কর্পোরেট একাউন্ট ম্যানেজার',
        cash: 'চালান মূল্য ৳৫০,০০০ (B2B কন্ডিশন)',
        evidence: 'রেকর্ড: বাণিজ্যিক চালান (Invoice) + B2B ওয়েবিল'
      },
      {
        num: '২',
        label: 'পিকআপ ভ্যান',
        icon: 'fa-truck-front',
        hint: 'কার্গো পিকআপ টিম',
        status: 'বড় পিকআপ ভ্যানে করে ১০ কার্টন চা পাতা ফ্যাক্টরি থেকে লোড হলো',
        location: 'কুরিয়ারের কার্গো পিকআপ ভ্যান',
        owner: 'লজিস্টিকস কার্গো টিম',
        cash: 'পণ্য কুরিয়ারের দায়িত্বে',
        evidence: 'রেকর্ড: কার্টন সংখ্যা ও ওজন স্লিপ যাচাই'
      },
      {
        num: '৩',
        label: 'সিলেট লজিস্টিকস হাব',
        icon: 'fa-warehouse',
        hint: 'ভারী কার্গো হাব',
        status: '১০টি কার্টন সিলগালা করে ঢাকার বড় কাভার্ড ভ্যানে লোড হলো',
        location: 'সিলেট সেন্ট্রাল কার্গো হাব',
        owner: 'কার্গো হাব সুপারভাইজার',
        cash: 'নিরাপদ কর্পোরেট ইন্স্যুরেন্সের আওতায়',
        evidence: 'রেকর্ড: মাস্টার চালান + বারকোড ব্যাচ স্ক্যান'
      },
      {
        num: '৪',
        label: 'আন্তঃজেলা কার্গো',
        icon: 'fa-truck-moving',
        hint: 'বড় কাভার্ড ভ্যান',
        status: 'কাভার্ড ভ্যানে করে পাইকারি চা পাতার চালানটি ঢাকা সেন্ট্রাল ডিপোর দিকে ছুটছে',
        location: 'সিলেট ➔ ঢাকা মহাসড়ক',
        owner: 'ভারী পরিবহন ড্রাইভার / এসকর্ট',
        cash: 'কোনো ক্যাশ নেই',
        evidence: 'রেকর্ড: জিপিএস লাইভ ট্র্যাকিং + সিকিউরিটি লক'
      },
      {
        num: '৫',
        label: 'ঢাকা কার্গো ডিপো',
        icon: 'fa-dolly',
        hint: 'মিরপুর জোন বণ্টন',
        status: 'ঢাকা সেন্ট্রাল ডিপো থেকে মিরপুর দোকানের ডেলিভারি কার্গো গাড়িতে ট্রান্সফার হলো',
        location: 'ঢাকা সেন্ট্রাল কার্গো ডিপো',
        owner: 'ঢাকা ডিপো ইনচার্জ',
        cash: 'ডেলিভারি টিমকে অ্যাসাইনড',
        evidence: 'রেকর্ড: ডিপো আনলোডিং রিপোর্ট'
      },
      {
        num: '৬',
        label: 'ডেলিভারি ভ্যান',
        icon: 'fa-truck-fast',
        hint: 'দোকানের পথে',
        status: 'মিরপুরের দোকানে কার্টনগুলো খালাসের জন্য কুরিয়ারের গাড়ি পৌঁছাল',
        location: 'মিরপুরের দোকানের সামনে',
        owner: 'ডেলিভারি কার্গো টিম',
        cash: 'দোকানদারকে উপস্থিত থাকতে বলা হয়েছে',
        evidence: 'রেকর্ড: ডেলিভারি গেটপাস নোটিশ'
      }
    ],
    outcomes: {
      delivered: [
        {
          num: '৭',
          label: 'চালান খালাস ও পেমেন্ট',
          icon: 'fa-file-invoice-dollar',
          hint: 'মিরপুর দোকান ম্যানেজার',
          status: 'দোকানদার ১০ কার্টন চা পাতা বুঝে নিয়ে ৳৫০,০০০ ক্যাশ/চেক দিলেন',
          location: 'মিরপুরের দোকানের কাছে',
          owner: 'ডেলিভারি অফিসার',
          cash: 'কুরিয়ার অফিসারের হাতে ৳৫০,০০০ কন্ডিশন পেমেন্ট',
          evidence: 'রেকর্ড: দোকানের সিলমোহর + সাইনড POD (Proof of Delivery)'
        },
        {
          num: '৮',
          label: 'কর্পোরেট জমা',
          icon: 'fa-vault',
          hint: 'প্রধান কার্যালয় ক্যাশ',
          status: 'বিশাল অংকের পেমেন্ট সরাসরি কুরিয়ারের সেন্ট্রাল ব্যাংক একাউন্টে জমা হলো',
          location: 'মিরপুরের দোকানের কাছে',
          owner: 'কর্পোরেট ট্রেজারি বিভাগ',
          cash: 'কুরিয়ার ব্যাংক একাউন্টে ৳৫০,০০০ জমা',
          evidence: 'রেকর্ড: ব্যাংক ডিপোজিট স্লিপ'
        },
        {
          num: '৯',
          label: 'মাহমুদ ভাইকে পেমেন্ট',
          icon: 'fa-building-columns',
          hint: 'মাহমুদ ভাই (ফ্যাক্টরি)',
          status: 'কুরিয়ার বাল্ক ভাড়া ৳১,৫০০ কেটে মাহমুদ ভাইয়ের ফ্যাক্টরিকে ৳৪৮,৫০০ ট্রান্সফার করল',
          location: 'মিরপুরের দোকানের কাছে',
          owner: 'ফিন্যান্স টিম',
          cash: 'মাহমুদ ভাইয়ের ফ্যাক্টরি পেল ৳৪৮,৫০০ (পাইকারি হিসাব শেষ)',
          evidence: 'রেকর্ড: কর্পোরেট ট্যাক্স চালান ও ফাইনাল স্টেটমেন্ট'
        }
      ],
      prepaid: [
        {
          num: '৭',
          label: 'কন্ট্রাক্ট ডেলিভারি',
          icon: 'fa-check-double',
          hint: 'মিরপুর শপ',
          status: 'চুক্তিমতো কোনো নগদ টাকা ছাড়াই মিরপুরের দোকানে ১০ কার্টন চা পাতা খালাস হলো',
          location: 'মিরপুরের দোকানের কাছে',
          owner: 'দোকানের ওয়্যারহাউস ইনচার্জ',
          cash: '৳০ (মাহমুদ ভাইয়ের মাসিক করপোরেট বিলে সমন্বয় হবে)',
          evidence: 'রেকর্ড: স্বাক্ষরিত বাণিজ্যিক রসিদ (Signed POD)'
        },
        {
          num: '৮',
          label: 'ইনভয়েস লগ',
          icon: 'fa-file-lines',
          hint: 'সেন্ট্রাল বিলিং',
          status: 'চালান খালাসের ডেলিভারি স্লিপটি সেন্ট্রাল বিলিং সফটওয়্যারে রেকর্ড করা হলো',
          location: 'মিরপুরের দোকানের কাছে',
          owner: 'সফটওয়্যার অডিট টিম',
          cash: 'কর্পোরেট ক্রেডিটে যোগ হলো',
          evidence: 'রেকর্ড: ডিজিটাল সাইন আপলোড'
        },
        {
          num: '৯',
          label: 'মাসিক বিল সমন্বয়',
          icon: 'fa-receipt',
          hint: 'মাস শেষে সেটেলমেন্ট',
          status: 'মাস শেষে মাহমুদ ভাইয়ের ফ্যাক্টরির সাথে মোট কার্গো ভাড়ার বিল সমন্বয় হবে',
          location: 'মিরপুরের দোকানের কাছে',
          owner: 'অ্যাকাউন্টিং বিভাগ',
          cash: 'মাসিক ইনভয়েস জেনারেট সম্পন্ন',
          evidence: 'রেকর্ড: মান্থলি কার্গো স্টেটমেন্ট'
        }
      ],
      returned: [
        {
          num: '৭',
          label: 'চালান প্রত্যাখ্যান',
          icon: 'fa-ban',
          hint: 'দোকান ম্যানেজার',
          status: 'প্যাকিং ও স্পেসিফিকেশন অমিল থাকায় মিরপুরের দোকান মাল আনলোড করতে অস্বীকৃতি জানাল',
          location: 'মিরপুরের দোকানের সামনে',
          owner: 'ডেলিভারি টিম / মার্চেন্ট কেয়ার',
          cash: '৳০ (কোনো টাকা আদায় হয়নি)',
          evidence: 'রেকর্ড: রিজেকশন স্লিপ ও অমিলের ছবি আপলোড'
        },
        {
          num: '৮',
          label: 'কার্গো রিটার্ন',
          icon: 'fa-truck-arrow-right fa-flip-horizontal',
          hint: 'ঢাকা ➔ সিলেট ফেরত',
          status: '১০টি কার্টন সিলগালা রেখে সিলেট ফ্যাক্টরির উদ্দেশ্যে ফেরত পাঠানো হলো',
          location: 'ঢাকা ➔ সিলেট মহাসড়ক',
          owner: 'রিভার্স কার্গো পরিবহন',
          cash: 'চালান ফেরত যাচ্ছে',
          evidence: 'রেকর্ড: কার্গো রিটার্ন চালান'
        },
        {
          num: '৯',
          label: 'ফ্যাক্টরিতে খালাস',
          icon: 'fa-rotate-left',
          hint: 'মাহমুদ ভাই (ফ্যাক্টরি)',
          status: 'মাহমুদ ভাই মালামাল ফেরত নিলেন এবং দ্বিগুণ কার্গো ভাড়া ফ্যাক্টরির বিলে যুক্ত হলো',
          location: 'মাহমুদ ভাইয়ের ফ্যাক্টরি (সিলেট)',
          owner: 'সিলেট হাব ইনচার্জ',
          cash: 'রিটার্ন ফ্রেইট চার্জ মাহমুদ ভাইয়ের বিলে সমন্বয়',
          evidence: 'রেকর্ড: পণ্য ফেরত গ্রহণ রসিদ + কার্গো লেজার আপডেট'
        }
      ]
    }
  },

  // ==========================================
  // ৪. Reverse Logistics (রিটার্ন ও সাইজ এক্সচেঞ্জ)
  // ==========================================
  reverse: {
    name: 'Reverse (রিটার্ন ও সাইজ এক্সচেঞ্জ)',
    characters: '<strong>গল্পের চরিত্র:</strong> তানভীর (ঢাকা মিরপুর) = B2C-তে কেনা শার্টের সাইজ না হওয়ায় ফেরত পাঠাচ্ছেন · মাহমুদ ভাই = মার্চেন্ট (সিলেট শপ)।',
    policy: '<strong>আর্থিক নীতি:</strong> কাস্টমার তানভীরের বাসা থেকে শার্ট সংগ্রহ করে সিলেটে মাহমুদ ভাইয়ের দোকানে পৌঁছানো। রিটার্ন চার্জ মাহমুদ ভাই বা তানভীরের সাথে সমন্বয় হয়।',
    common: [
      {
        num: '১',
        label: 'রিটার্ন রিকোয়েস্ট',
        icon: 'fa-headset',
        hint: 'তানভীর (মিরপুর)',
        status: 'তানভীর শার্টের সাইজ ফিট না হওয়ায় অ্যাপে রিটার্ন ও সাইজ বদলের রিকোয়েস্ট দিলেন',
        location: 'তানভীরের বাসা (মিরপুর)',
        owner: 'মাহমুদ ভাইয়ের মার্চেন্ট প্যানেল',
        cash: 'রিটার্ন পিকআপ চার্জ পলিসি অনুযায়ী ধার্য',
        evidence: 'রেকর্ড: রিটার্ন রিকোয়েস্ট আইডি + মূল ইনভয়েস লিংক'
      },
      {
        num: '২',
        label: 'ডোরস্টেপ পিকআপ',
        icon: 'fa-box-archive',
        hint: 'মিরপুর রাইডার',
        status: 'মিরপুরের রাইডার তানভীরের বাসায় গিয়ে শার্টটির কন্ডিশন চেক করে সিল ব্যাগে ভরলেন',
        location: 'মিরপুর রাইডারের ব্যাগে',
        owner: 'মিরপুর রিভার্স রাইডার',
        cash: 'কোনো ক্যাশ লেনদেন নেই',
        evidence: 'রেকর্ড: শার্টের ট্যাগ ও কোয়ালিটি চেক স্ক্যান'
      },
      {
        num: '৩',
        label: 'মিরপুর হাব',
        icon: 'fa-warehouse',
        hint: 'রিভার্স সর্টিং',
        status: 'শার্টের পার্সেলটি মিরপুর হাবে এলো এবং সিলেট ফেরত চালানের ব্যাগে সিল করা হলো',
        location: 'ঢাকা মিরপুর হাব',
        owner: 'মিরপুর হাব ম্যানেজার',
        cash: 'মার্চেন্ট রিটার্ন ট্র্যাকিংয়ে এন্ট্রি',
        evidence: 'রেকর্ড: রিভার্স ব্যাগিং ও বারকোড ট্যাগ'
      },
      {
        num: '৪',
        label: 'সিলেটগামী পরিবহন',
        icon: 'fa-truck-arrow-right fa-flip-horizontal',
        hint: 'ঢাকা ➔ সিলেট হাইওয়ে',
        status: 'পার্সেলটি এবার ঢাকা থেকে সিলেট মহাসড়ক দিয়ে মাহমুদ ভাইয়ের শপের উদ্দেশ্যে ছুটছে',
        location: 'ঢাকা ➔ সিলেট মহাসড়ক',
        owner: 'লাইন-হল পরিবহন টিম',
        cash: 'সুরক্ষিত পরিবহন',
        evidence: 'রেকর্ড: রিভার্স লজিস্টিকস চালান'
      },
      {
        num: '৫',
        label: 'সিলেট হাব',
        icon: 'fa-dolly',
        hint: 'সিলেটে আগমন',
        status: 'সিলেটে পৌঁছে পার্সেলটি মাহমুদ ভাইয়ের শপে ডেলিভারির জন্য রাইডারকে দেওয়া হলো',
        location: 'সিলেট কেন্দ্রীয় হাব',
        owner: 'সিলেট হাব ম্যানেজার',
        cash: 'মাহমুদ ভাইকে হ্যান্ডওভারের অপেক্ষায়',
        evidence: 'রেকর্ড: সিলেট হাব রিসিভিং স্ক্যান'
      },
      {
        num: '৬',
        label: 'শপের উদ্দেশ্যে রওনা',
        icon: 'fa-motorcycle',
        hint: 'সিলেট রাইডার',
        status: 'সিলেটের রাইডার শার্টটি নিয়ে মাহমুদ ভাইয়ের দোকানের উদ্দেশ্যে বের হলেন',
        location: 'সিলেট রাইডারের ব্যাগে',
        owner: 'সিলেট ডেলিভারি রাইডার',
        cash: 'মাহমুদ ভাইকে নোটিফিকেশন পাঠানো হয়েছে',
        evidence: 'রেকর্ড: শপ ডেলিভারি রান-শিট'
      }
    ],
    outcomes: {
      delivered: [
        {
          num: '৭',
          label: 'শার্ট রিসিভ ও চার্জ',
          icon: 'fa-shirt',
          hint: 'মাহমুদ ভাই (সিলেট)',
          status: 'মাহমুদ ভাই শার্টটি চেক করে রিসিভ করলেন এবং রিটার্ন কুরিয়ার চার্জ ৳৭০ রাইডারকে দিলেন',
          location: 'মাহমুদ ভাইয়ের শপ (সিলেট)',
          owner: 'সিলেট ডেলিভারি রাইডার',
          cash: 'মাহমুদ ভাইয়ের কাছ থেকে আদায়কৃত চার্জ ৳৭০',
          evidence: 'রেকর্ড: মাহমুদ ভাইয়ের স্বাক্ষর + রিটার্ন ভাউচার'
        },
        {
          num: '৮',
          label: 'ক্যাশ জমা',
          icon: 'fa-vault',
          hint: 'সিলেট হাব',
          status: 'রাইডার দিনশেষে সিলেট অফিসে এসে রিটার্ন চার্জের ৳৭০ ক্যাশে জমা দিলেন',
          location: 'মাহমুদ ভাইয়ের শপ (সিলেট)',
          owner: 'সিলেট হাব ক্যাশিয়ার',
          cash: 'সিলেট অফিস ক্যাশে ৳৭০ জমা',
          evidence: 'রেকর্ড: রিভার্স লজিস্টিকস ক্যাশ রসিদ'
        },
        {
          num: '৯',
          label: 'রিটার্ন সমাপ্ত ও এক্সচেঞ্জ',
          icon: 'fa-circle-check',
          hint: 'তানভীর ও মাহমুদ ভাই',
          status: 'তানভীর SMS পেলেন: শার্ট সিলেটে পৌঁছেছে, মাহমুদ ভাই নতুন সাইজের শার্ট পাঠাচ্ছেন!',
          location: 'মাহমুদ ভাইয়ের শপ (সিলেট)',
          owner: 'কুরিয়ার সিস্টেম',
          cash: 'রিটার্ন চার্জ ক্লোজড (এক্সচেঞ্জ প্রসেস শুরু)',
          evidence: 'রেকর্ড: রিটার্ন টিকিট সলভড + নতুন সাইজ বুকিং'
        }
      ],
      prepaid: [
        {
          num: '৭',
          label: 'প্রিপেইড রিসিভ',
          icon: 'fa-circle-check',
          hint: 'মাহমুদ ভাই (সিলেট)',
          status: 'মাহমুদ ভাইয়ের ব্যালেন্স থেকে আগেই চার্জ কাটা থাকায় কোনো ক্যাশ ছাড়া শার্ট বুঝলেন',
          location: 'মাহমুদ ভাইয়ের শপ (সিলেট)',
          owner: 'সিলেট ডেলিভারি রাইডার',
          cash: '৳০ (মাহমুদ ভাইয়ের সফটওয়্যার ওয়ালেট থেকে কর্তন)',
          evidence: 'রেকর্ড: ডিজিটাল রিসিভিং কনফার্মেশন'
        },
        {
          num: '৮',
          label: 'লজিস্টিকস ক্লোজ',
          icon: 'fa-circle-check',
          hint: 'সিলেট হাব',
          status: 'রাইডার অ্যাপে আপডেট করলেন যে রিটার্ন শার্ট মাহমুদ ভাইয়ের শপে বুঝিয়ে দেওয়া হয়েছে',
          location: 'মাহমুদ ভাইয়ের শপ (সিলেট)',
          owner: 'সিলেট হাব ম্যানেজার',
          cash: '৳০ (ক্যাশ জমার কোনো ধাপ নেই)',
          evidence: 'রেকর্ড: রিভার্স পিকআপ কমপ্লিট লগ'
        },
        {
          num: '৯',
          label: 'লেজার সমন্বয়',
          icon: 'fa-file-invoice',
          hint: 'মার্চেন্ট অ্যাকাউন্ট',
          status: 'মাহমুদ ভাইয়ের মার্চেন্ট লেজারে ৳৭০ রিটার্ন কুরিয়ার চার্জ সমন্বয়ের স্টেটমেন্ট যুক্ত হলো',
          location: 'মাহমুদ ভাইয়ের শপ (সিলেট)',
          owner: 'ফিন্যান্স বিভাগ',
          cash: 'মার্চেন্ট ব্যালেন্স শিট সমন্বয় সম্পন্ন',
          evidence: 'রেকর্ড: ডিজিটাল ইনভয়েস ও রিটার্ন রিপোর্ট'
        }
      ],
      returned: [
        {
          num: '৭',
          label: 'শার্ট গ্রহণে অস্বীকৃতি',
          icon: 'fa-ban',
          hint: 'শার্টে দাগ / ট্যাগ নষ্ট',
          status: 'তানভীরের পাঠানো শার্টটিতে ব্যবহারের দাগ থাকায় মাহমুদ ভাই তা রিসিভ করতে অস্বীকৃতি জানালেন',
          location: 'মাহমুদ ভাইয়ের শপের সামনে',
          owner: 'সিলেট রাইডার / মার্চেন্ট কেয়ার',
          cash: '৳০ (কোনো সমাধান হয়নি)',
          evidence: 'রেকর্ড: মার্চেন্ট রিজেকশন নোট ও ছবি'
        },
        {
          num: '৮',
          label: 'ঢাকায় পুনরায় ফেরত',
          icon: 'fa-truck-arrow-right',
          hint: 'সিলেট ➔ ঢাকা ফেরত',
          status: 'অমিল থাকা শার্টটি সিলেট হাব থেকে আবার ঢাকার মিরপুরের তানভীরের উদ্দেশ্যে রওনা দিল',
          location: 'সিলেট ➔ ঢাকা মহাসড়ক',
          owner: 'পরিবহন টিম',
          cash: 'কাস্টমারের ঠিকানায় ফেরত ট্রানজিট',
          evidence: 'রেকর্ড: ব্যাক-টু-কাস্টমার রিটার্ন চালান'
        },
        {
          num: '৯',
          label: 'তানভীরকে ফেরত ও নিষ্পত্তি',
          icon: 'fa-rotate-left',
          hint: 'তানভীর (মিরপুর)',
          status: 'শার্টটি পুনরায় তানভীরের কাছে ফেরত দেওয়া হলো এবং ডিসপিউট টিকিট ওপেন করা হলো',
          location: 'তানভীরের বাসা (মিরপুর)',
          owner: 'মিরপুর ডেলিভারি রাইডার',
          cash: 'কাস্টমার কেয়ারের মাধ্যমে চার্জ মীমাংসা',
          evidence: 'রেকর্ড: কাস্টমার সাইন + ডিসপিউট রেজল্যুশন টিকিট'
        }
      ]
    }
  }
};

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

// ৯টি ধাপের পূর্ণাঙ্গ ডেটা মডেল
const simStepsData = [
  // ==========================================
  // ধাপ ১: মার্চেন্ট বুকিং
  // ==========================================
  {
    step: 1,
    title: 'মার্চেন্ট পার্সেল বুকিং',
    mobileRole: 'মার্চেন্ট অ্যাপ',
    mobileUser: 'মাহমুদ ভাই',
    mobileAppTitle: 'RAJ Merchant',
    browserUrl: 'https://merchant.rajcourier.com/parcels/new',
    custody: 'মাহমুদ শপ (মার্চেন্ট)',
    location: 'জিন্দাবাজার, সিলেট',
    cashStatus: 'আদায় হয়নি (৳০)',
    cashNote: 'টাকা ক্রেতার পকেটে আছে',
    merchantPayout: '৳১,৮৮০ (প্রস্তুত)',
    statusChip: { text: 'বুকিং সম্পন্ন', class: 'pending' },
    statusTime: '১৯ অক্টো ২০২৬ · ০৯:৪১ AM',
    smsText: 'আপনার পার্সেল RAJ-DH-89214 বুকিং করা হয়েছে। পিকআপের পর লাইভ আপডেট দেখতে পারবেন।',
    trackStatus: 'বুকিং সম্পন্ন',
    trackEta: 'আগামীকাল বিকেল ৫টা',
    trackProgress: 12,
    historyDone: ['অর্ডার বুকিং প্রস্তুত'],
    
    mobileHtml: `
      <div class="m-card">
        <span class="m-badge primary"><i class="fa-solid fa-plus-circle"></i> নিউ পার্সেল এন্ট্রি</span>
        <div style="font-size: 15px; font-weight: 800; margin-bottom: 8px;">পার্সেল ও প্রাপকের বিবরণ</div>
        
        <div style="display:flex; flex-direction:column; gap:8px; font-size:12px;">
          <div>
            <span style="color:var(--text-muted); font-size:10px; font-weight:700;">প্রাপকের নাম ও ফোন:</span>
            <div style="font-weight:700;">তানভীর আহমেদ · 01711-234567</div>
          </div>
          <div>
            <span style="color:var(--text-muted); font-size:10px; font-weight:700;">ডেলিভারি ঠিকানা:</span>
            <div style="font-weight:600; line-height:1.3;">রোড ৪, ব্লক সি, মিরপুর ১০, ঢাকা</div>
          </div>
          <div style="display:flex; justify-content:space-between; background:var(--bg-card-subtle); padding:6px 10px; border-radius:6px;">
            <div><span style="color:var(--text-muted); font-size:10px;">ওজন:</span> <strong>১.২ কেজি</strong></div>
            <div><span style="color:var(--text-muted); font-size:10px;">আইটেম:</span> <strong>পোশাক</strong></div>
            <div><span style="color:var(--text-muted); font-size:10px;">ক্যাশ (COD):</span> <strong style="color:var(--brand-primary);">৳২,০০০</strong></div>
          </div>
        </div>

        <button type="button" class="m-btn m-btn-primary" id="m-action-btn-1" style="margin-top: 12px;">
          <i class="fa-solid fa-cloud-arrow-up"></i> পার্সেল বুকিং সাবমিট করুন
        </button>
      </div>

      <div class="m-card" style="border-left: 3px solid var(--brand-accent);">
        <div style="font-size: 11px; font-weight: 700; color: var(--brand-accent);">
          <i class="fa-solid fa-bolt"></i> রিয়েল-টাইম সিস্টেম অ্যাকশন:
        </div>
        <p style="font-size: 11px; color: var(--text-muted); margin-top: 4px; line-height:1.4;">
          সাবমিট করার সাথে সাথে Fastify API বারকোড আইডি <strong>RAJ-DH-89214</strong> তৈরি করবে এবং নিকটস্থ সিলেট পিকআপ রাইডারের কাছে টাস্ক নোটিফিকেশন পাঠাবে।
        </p>
      </div>
    `,

    desktopHtml: `
      <div class="d-topbar">
        <div>
          <div class="d-title">মার্চেন্ট ওয়েব পোর্টাল · অর্ডার ম্যানেজমেন্ট</div>
          <div style="font-size: 12px; color: var(--text-muted);">মাহমুদ ফ্যাশন শপ (মার্চেন্ট আইডি: M-77491)</div>
        </div>
        <button class="sim-ctrl-btn" style="background:var(--brand-primary-light); color:var(--brand-primary); border-color:var(--brand-primary);">
          <i class="fa-solid fa-file-csv"></i> বাল্ক এক্সেল/CSV আপলোড
        </button>
      </div>

      <div class="d-stats-grid">
        <div class="d-stat-box">
          <div class="d-stat-lbl">আজকের নতুন বুকিং</div>
          <div class="d-stat-num">১২টি</div>
        </div>
        <div class="d-stat-box">
          <div class="d-stat-lbl">পিকআপ পেন্ডিং</div>
          <div class="d-stat-num" style="color:var(--brand-accent);">৩টি</div>
        </div>
        <div class="d-stat-box">
          <div class="d-stat-lbl">ওয়ালেট বর্তমান ব্যালেন্স</div>
          <div class="d-stat-num" style="color:var(--brand-success);">৳১৮,৪০০</div>
        </div>
      </div>

      <div class="d-table-card">
        <div style="padding:10px 14px; font-weight:700; font-size:13px; border-bottom:1px solid var(--border-color); background:var(--bg-card-subtle);">
          সাম্প্রতিক বুকিং তালিকা (লাইভ সিঙ্ক)
        </div>
        <table class="d-table">
          <thead>
            <tr>
              <th>পার্সেল আইডি</th>
              <th>গ্রাহক</th>
              <th>গন্তব্য</th>
              <th>COD টাকা</th>
              <th>স্ট্যাটাস</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background: rgba(37, 99, 235, 0.05); font-weight: 600;">
              <td><span style="font-family:monospace; color:var(--brand-primary);">RAJ-DH-89214</span></td>
              <td>তানভীর আহমেদ (01711-...)</td>
              <td>মিরপুর ১০, ঢাকা</td>
              <td>৳২,০০০</td>
              <td><span class="sim-status-chip pending">পিকআপ পেন্ডিং</span></td>
            </tr>
            <tr>
              <td><span style="font-family:monospace;">RAJ-SY-88912</span></td>
              <td>সুমাইয়া বেগম</td>
              <td>আম্বরখানা, সিলেট</td>
              <td>৳১,৫০০</td>
              <td><span class="sim-status-chip delivered">ডেলিভারড</span></td>
            </tr>
            <tr>
              <td><span style="font-family:monospace;">RAJ-CT-88901</span></td>
              <td>আরিফুল হক</td>
              <td>জিইসি, চট্টগ্রাম</td>
              <td>৳৩,২০০</td>
              <td><span class="sim-status-chip transit">ট্রানজিট</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  // ==========================================
  // ধাপ ২: পিকআপ রাইডার স্ক্যান
  // ==========================================
  {
    step: 2,
    title: 'পিকআপ রাইডার স্ক্যান',
    mobileRole: 'রাইডার অ্যাপ (পিকআপ)',
    mobileUser: 'করিম (সিলেট রাইডার)',
    mobileAppTitle: 'RAJ Rider Pro',
    browserUrl: 'https://hub.rajcourier.com/sylhet/rider-dispatch',
    custody: 'করিম (পিকআপ রাইডার)',
    location: 'রাইডারের ব্যাগ (জিন্দাবাজার)',
    cashStatus: 'আদায় হয়নি (৳০)',
    cashNote: 'পিকআপ ধাপে কোনো টাকা আদান-প্রদান হয় না',
    merchantPayout: '৳১,৮৮০ (নিশ্চিত)',
    statusChip: { text: 'রাইডার পিকআপ সম্পন্ন', class: 'transit' },
    statusTime: '১৯ অক্টো ২০২৬ · ১০:১৫ AM',
    smsText: 'আপনার পার্সেল RAJ-DH-89214 সিলেট পিকআপ রাইডার রিসিভ করেছেন এবং হাবে নিচ্ছেন।',
    trackStatus: 'রাইডার পিকআপ সম্পন্ন',
    trackEta: 'আগামীকাল বিকেল ৫টা',
    trackProgress: 25,
    historyDone: ['অর্ডার বুকিং প্রস্তুত', 'মার্চেন্ট শপ থেকে পিকআপ সম্পন্ন'],

    mobileHtml: `
      <div class="m-card">
        <span class="m-badge success"><i class="fa-solid fa-motorcycle"></i> পিকআপ টাস্ক #PU-891</span>
        <div style="font-size: 14px; font-weight: 800; margin-bottom: 6px;">মাহমুদ ফ্যাশন শপ (সিলেট)</div>
        <div style="font-size: 11px; color: var(--text-muted); margin-bottom: 10px;">পার্সেল কাউন্ট: ১টি · গন্তব্য: ঢাকা মিরপুর</div>

        <!-- Animated Barcode Laser Scanner Simulation -->
        <div class="m-scanner-viewport" id="sim-laser-viewport">
          <div class="scanner-crosshair">
            <div class="scanner-laser"></div>
            <i class="fa-solid fa-barcode" style="font-size: 40px; opacity: 0.9;"></i>
            <span class="scanner-barcode-dummy">RAJ-DH-89214</span>
          </div>
        </div>

        <button type="button" class="m-btn m-btn-success" id="m-action-btn-2" style="margin-top: 10px;">
          <i class="fa-solid fa-camera"></i> ক্যামেরা বারকোড স্ক্যান করুন
        </button>
      </div>

      <div class="m-card">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:12px; font-weight:700;">পিকআপ ওটিপি/ডিজিটাল সাইন:</span>
          <span class="sim-status-chip delivered">ভেরিফাইড</span>
        </div>
      </div>
    `,

    desktopHtml: `
      <div class="d-topbar">
        <div>
          <div class="d-title">সিলেট হাব কন্ট্রোল প্যানেল · পিকআপ মনিটরিং</div>
          <div style="font-size: 12px; color: var(--text-muted);">হাব কোড: SYL-01 · জিন্দাবাজার জোন</div>
        </div>
        <span class="browser-live-badge"><span class="pulse-dot"></span> জিপিএস লাইভ ট্র্যাকিং সক্রিয়</span>
      </div>

      <div class="d-stats-grid">
        <div class="d-stat-box">
          <div class="d-stat-lbl">অন-ফিল্ড পিকআপ রাইডার</div>
          <div class="d-stat-num">৮ জন</div>
        </div>
        <div class="d-stat-box">
          <div class="d-stat-lbl">আজকের সম্পন্ন পিকআপ</div>
          <div class="d-stat-num" style="color:var(--brand-success);">৬৪টি</div>
        </div>
        <div class="d-stat-box">
          <div class="d-stat-lbl">হাবে আসার পথে</div>
          <div class="d-stat-num" style="color:var(--brand-primary);">১৮টি</div>
        </div>
      </div>

      <div class="d-table-card">
        <div style="padding:10px 14px; font-weight:700; font-size:13px; border-bottom:1px solid var(--border-color); background:var(--bg-card-subtle);">
          রাইডার পিকআপ কাস্টডি লগ (PostgreSQL Audit Event)
        </div>
        <table class="d-table">
          <thead>
            <tr>
              <th>টাইমস্ট্যাম্প</th>
              <th>রাইডার</th>
              <th>মার্চেন্ট</th>
              <th>পার্সেল আইডি</th>
              <th>কাস্টডি স্ট্যাটাস</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background: rgba(16, 185, 129, 0.08); font-weight: 600;">
              <td>১০:১৫:২২ AM</td>
              <td>করিম মিয়া (R-09)</td>
              <td>মাহমুদ ফ্যাশন শপ</td>
              <td><span style="font-family:monospace; color:var(--brand-primary);">RAJ-DH-89214</span></td>
              <td><span class="sim-status-chip delivered">IN_RIDER_BAG</span></td>
            </tr>
            <tr>
              <td>১০:১২:০৫ AM</td>
              <td>সুমন রায় (R-03)</td>
              <td>জালালাবাদ ইলেকট্রনিক্স</td>
              <td>RAJ-SY-88941</td>
              <td>IN_RIDER_BAG</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  // ==========================================
  // ধাপ ৩: হাব ইনবাউন্ড ও থার্মাল লেবেল
  // ==========================================
  {
    step: 3,
    title: 'হাব ইনবাউন্ড ও লেবেল প্রিন্ট',
    mobileRole: 'হাব স্ক্যানার অ্যাপ',
    mobileUser: 'সজল (হাব সুপারভাইজার)',
    mobileAppTitle: 'RAJ Hub Inbound',
    browserUrl: 'https://hub.rajcourier.com/inbound/barcode-scan',
    custody: 'সিলেট হাব ম্যানেজার',
    location: 'সিলেট সেন্ট্রাল হাব (সর্টিং জোন)',
    cashStatus: 'আদায় হয়নি (৳০)',
    cashNote: 'টাকা এখনো কাস্টমারের পকেটে',
    merchantPayout: '৳১,৮৮০ (হিসাব সংরক্ষিত)',
    statusChip: { text: 'সিলেট হাবে ইনবাউন্ড', class: 'transit' },
    statusTime: '১৯ অক্টো ২০২৬ · ১১:৩০ AM',
    smsText: 'আপনার পার্সেল RAJ-DH-89214 সিলেট হাবে সর্টিং সম্পন্ন হয়েছে এবং ঢাকার গাড়ির জন্য প্রস্তুত।',
    trackStatus: 'সিলেট হাবে সর্টিং সম্পন্ন',
    trackEta: 'আগামীকাল দুপুর ২টা',
    trackProgress: 38,
    historyDone: ['অর্ডার বুকিং প্রস্তুত', 'মার্চেন্ট শপ থেকে পিকআপ সম্পন্ন', 'সিলেট হাবে ইনবাউন্ড ও ওজন যাচাই (১.২ কেজি)'],

    mobileHtml: `
      <div class="m-card">
        <span class="m-badge primary"><i class="fa-solid fa-weight-scale"></i> হাব ইনবাউন্ড ও পরিমাপ</span>
        <div style="font-size: 14px; font-weight: 800; margin-bottom: 6px;">পার্সেল: RAJ-DH-89214</div>

        <div style="background:var(--bg-card-subtle); padding:10px; border-radius:8px; margin-bottom:10px;">
          <div style="display:flex; justify-content:space-between; margin-bottom:4px; font-size:12px;">
            <span style="color:var(--text-muted);">ডিজিটাল স্কেল ওজন:</span>
            <strong style="color:var(--brand-success);">১.২০ কেজি (Verified)</strong>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:12px;">
            <span style="color:var(--text-muted);">রাউটিং ট্যাগ:</span>
            <strong style="background:#000; color:#fff; padding:1px 6px; border-radius:4px; font-family:monospace;">DHK-MIR</strong>
          </div>
        </div>

        <button type="button" class="m-btn m-btn-primary" id="m-action-btn-3">
          <i class="fa-solid fa-print"></i> ৪x৬ থার্মাল লেবেল প্রিন্ট করুন
        </button>
      </div>

      <div class="m-card" style="text-align:center; padding:10px;">
        <span style="font-size:11px; color:var(--text-muted);">
          <i class="fa-solid fa-shield-halved"></i> বারকোড স্ক্যান গান ও স্কেলের সাথে অটো-সিঙ্ক সম্পন্ন
        </span>
      </div>
    `,

    desktopHtml: `
      <div class="d-topbar">
        <div>
          <div class="d-title">সিলেট হাব ইনবাউন্ড ওয়ার্কস্টেশন (High-Speed Gun Scanner)</div>
          <div style="font-size: 12px; color: var(--text-muted);">অপারেটর: সজল আহমেদ · ইউএসবি থার্মাল প্রিন্টার সংযুক্ত</div>
        </div>
        <button type="button" class="sim-ctrl-btn sim-btn-play" id="d-action-btn-3">
          <i class="fa-solid fa-print"></i> থার্মাল লেবেল স্টিকার প্রিভিউ
        </button>
      </div>

      <div class="d-stats-grid">
        <div class="d-stat-box">
          <div class="d-stat-lbl">আজকের মোট ইনবাউন্ড</div>
          <div class="d-stat-num">১৪২টি</div>
        </div>
        <div class="d-stat-box">
          <div class="d-stat-lbl">ওজন গরমিল (Dispute)</div>
          <div class="d-stat-num" style="color:var(--brand-success);">০টি</div>
        </div>
        <div class="d-stat-box">
          <div class="d-stat-lbl">ঢাকা চালানের অপেক্ষায়</div>
          <div class="d-stat-num" style="color:var(--brand-accent);">৩৮টি</div>
        </div>
      </div>

      <div class="d-table-card">
        <div style="padding:10px 14px; font-weight:700; font-size:13px; border-bottom:1px solid var(--border-color); background:var(--bg-card-subtle);">
          লেবেল প্রিন্ট কিউ (ZPL / Direct Thermal)
        </div>
        <table class="d-table">
          <thead>
            <tr>
              <th>পার্সেল আইডি</th>
              <th>ওজন</th>
              <th>রাউটিং</th>
              <th>প্রেরক ➔ প্রাপক</th>
              <th>প্রিন্ট স্ট্যাটাস</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background: rgba(37, 99, 235, 0.05); font-weight: 600;">
              <td><span style="font-family:monospace; color:var(--brand-primary);">RAJ-DH-89214</span></td>
              <td>১.২ কেজি</td>
              <td><span style="background:#000; color:#fff; padding:2px 6px; font-size:11px; font-weight:800;">DHK-MIR</span></td>
              <td>মাহমুদ শপ ➔ তানভীর (মিরপুর)</td>
              <td><span class="sim-status-chip delivered">লেবেল মুদ্রিত ✅</span></td>
            </tr>
            <tr>
              <td><span style="font-family:monospace;">RAJ-DH-89215</span></td>
              <td>০.৮ কেজি</td>
              <td>DHK-UTT</td>
              <td>সুরমা হ্যান্ডিক্রাফটস ➔ রাশেদ</td>
              <td><span class="sim-status-chip delivered">লেবেল মুদ্রিত ✅</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  // ==========================================
  // ধাপ ৪: লাইন-হল চালান
  // ==========================================
  {
    step: 4,
    title: 'লাইন-হল চালান (হাইওয়ে)',
    mobileRole: 'ড্রাইভার অ্যাপ (লাইন-হল)',
    mobileUser: 'আলমগীর (চালক)',
    mobileAppTitle: 'RAJ Fleet Tracker',
    browserUrl: 'https://hq.rajcourier.com/fleet/linehaul-manifest',
    custody: 'লাইন-হল চালক ও এস্কর্ট টিম',
    location: 'সিলেট ➔ ঢাকা হাইওয়ে (ভৈরব ব্রিজ অতিক্রম)',
    cashStatus: 'আদায় হয়নি (৳০)',
    cashNote: 'হাইওয়েতে কেবল পার্সেল ট্রানজিট হয়, ক্যাশ নয়',
    merchantPayout: '৳১,৮৮০ (হিসাব সংরক্ষিত)',
    statusChip: { text: 'হাইওয়ে ট্রানজিটে চলমান', class: 'transit' },
    statusTime: '১৯ অক্টো ২০২৬ · ০৪:৩০ PM',
    smsText: 'আপনার পার্সেল RAJ-DH-89214 হাইওয়ে ট্রাকে ঢাকার উদ্দেশ্যে যাত্রা করেছে। লাইভ ট্র্যাকিং চালু আছে।',
    trackStatus: 'হাইওয়ে পরিবহনে চলমান',
    trackEta: 'আগামীকাল দুপুর ১২টা',
    trackProgress: 50,
    historyDone: [
      'অর্ডার বুকিং প্রস্তুত',
      'মার্চেন্ট শপ থেকে পিকআপ সম্পন্ন',
      'সিলেট হাবে ইনবাউন্ড ও লেবেলিং সম্পন্ন',
      'সিলেট ➔ ঢাকা হাইওয়ে চালানে লোড ও সিকিউরিটি সিল সংযুক্ত'
    ],

    mobileHtml: `
      <div class="m-card">
        <span class="m-badge warning"><i class="fa-solid fa-truck"></i> লাইন-হল ট্রিপ #LH-4091</span>
        <div style="font-size: 15px; font-weight: 800; margin-bottom: 6px;">সিলেট হাব ➔ ঢাকা সেন্ট্রাল হাব</div>
        
        <div style="background:var(--bg-card-subtle); padding:10px; border-radius:8px; margin-bottom:10px; font-size:12px;">
          <div style="margin-bottom:4px;"><strong>গাড়ির নম্বর:</strong> ঢাকা মেট্রো-ট ১১-৮৯৩২</div>
          <div style="margin-bottom:4px;"><strong>মোট পার্সেল:</strong> ১৪২টি (মূল্য: ৳৩,৪৮,০০০)</div>
          <div style="color:var(--brand-primary); font-weight:700;"><strong>ডিজিটাল সিকিউরিটি সিল:</strong> #SL-88419 (লকড)</div>
        </div>

        <div style="background:#0f172a; color:#fff; padding:12px; border-radius:8px; text-align:center;">
          <div style="font-size:11px; color:#94a3b8;">লাইভ গতি ও অবস্থান</div>
          <div style="font-size:20px; font-weight:800; color:#38bdf8; margin:4px 0;">৬২ কিমি/ঘণ্টা</div>
          <div style="font-size:11px; color:#cbd5e1;">ভৈরব ব্রিজের কাছাকাছি · পরবর্তী স্টপ: তেজগাঁও হাব</div>
        </div>

        <button type="button" class="m-btn m-btn-primary" id="m-action-btn-4" style="margin-top:10px;">
          <i class="fa-solid fa-location-arrow"></i> লাইভ ট্রিপ স্ট্যাটাস আপডেট
        </button>
      </div>
    `,

    desktopHtml: `
      <div class="d-topbar">
        <div>
          <div class="d-title">সেন্ট্রাল ফ্লিট কন্ট্রোল · হাইওয়ে লাইন-হল চালান ট্র্যাকিং</div>
          <div style="font-size: 12px; color: var(--text-muted);">চালান নম্বর: CH-SYL-DHK-4091 · রুট: ঢাকা-সিলেট জাতীয় মহাসড়ক</div>
        </div>
        <span class="browser-live-badge"><span class="pulse-dot"></span> আইওটি জিপিএস রিসিভিং</span>
      </div>

      <div class="d-stats-grid">
        <div class="d-stat-box">
          <div class="d-stat-lbl">চালানে থাকা পার্সেল</div>
          <div class="d-stat-num">১৪২টি</div>
        </div>
        <div class="d-stat-box">
          <div class="d-stat-lbl">কনসাইনমেন্ট মোট COD ভ্যালু</div>
          <div class="d-stat-num" style="color:var(--brand-primary);">৳৩,৪৮,০০০</div>
        </div>
        <div class="d-stat-box">
          <div class="d-stat-lbl">কনটেইনার সিকিউরিটি সিল</div>
          <div class="d-stat-num" style="color:var(--brand-success);">SL-88419 (OK)</div>
        </div>
      </div>

      <div class="d-table-card">
        <div style="padding:10px 14px; font-weight:700; font-size:13px; border-bottom:1px solid var(--border-color); background:var(--bg-card-subtle);">
          চালানভুক্ত পার্সেল ম্যানিফেস্ট (নিরাপত্তা অডিট কপি)
        </div>
        <table class="d-table">
          <thead>
            <tr>
              <th>ক্রম</th>
              <th>পার্সেল আইডি</th>
              <th>ওজন</th>
              <th>গন্তব্য ব্রাঞ্চ</th>
              <th>ক্যাশ অন ডেলিভারি (COD)</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background: rgba(37, 99, 235, 0.05); font-weight: 600;">
              <td>০১</td>
              <td><span style="font-family:monospace; color:var(--brand-primary);">RAJ-DH-89214</span></td>
              <td>১.২ কেজি</td>
              <td>মিরপুর হাব (DHK-MIR)</td>
              <td>৳২,০০০</td>
            </tr>
            <tr>
              <td>০২</td>
              <td>RAJ-DH-89215</td>
              <td>০.৮ কেজি</td>
              <td>উত্তরা হাব (DHK-UTT)</td>
              <td>৳১,২০০</td>
            </tr>
            <tr>
              <td>০৩</td>
              <td>RAJ-DH-89216</td>
              <td>২.৫ কেজি</td>
              <td>ধানমন্ডি হাব (DHK-DHM)</td>
              <td>৳৪,৫০০</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  // ==========================================
  // ধাপ ৫: ডেস্টিনেশন হাব সর্টিং
  // ==========================================
  {
    step: 5,
    title: 'ডেস্টিনেশন হাব সর্টিং',
    mobileRole: 'হাব ইনবাউন্ড স্ক্যানার',
    mobileUser: 'সজিব (মিরপুর হাব)',
    mobileAppTitle: 'RAJ Hub Mirpur',
    browserUrl: 'https://hub.rajcourier.com/mirpur/inbound',
    custody: 'মিরপুর ব্রাঞ্চ ম্যানেজার',
    location: 'ঢাকা মিরপুর হাব (সেকশন ১০)',
    cashStatus: 'আদায় হয়নি (৳০)',
    cashNote: 'ডেলিভারি রাইডারের ব্যাগে দেওয়ার প্রস্তুতি',
    merchantPayout: '৳১,৮৮০ (হিসাব সংরক্ষিত)',
    statusChip: { text: 'মিরপুর হাবে পৌঁছেছে', class: 'transit' },
    statusTime: '২০ অক্টো ২০২৬ · ০৮:০০ AM',
    smsText: 'আপনার পার্সেল RAJ-DH-89214 মিরপুর হাবে পৌঁছেছে। আজই ডেলিভারি রাইডার আপনার ঠিকানায় যাবে।',
    trackStatus: 'মিরপুর হাবে সর্টিং সম্পন্ন',
    trackEta: 'আজ দুপুর ২টা',
    trackProgress: 65,
    historyDone: [
      'অর্ডার বুকিং প্রস্তুত',
      'মার্চেন্ট শপ থেকে পিকআপ সম্পন্ন',
      'সিলেট হাবে ইনবাউন্ড ও লেবেলিং সম্পন্ন',
      'সিলেট ➔ ঢাকা হাইওয়ে পরিবহন সমাপ্ত',
      'মিরপুর হাবে রিসিভ ও ডেলিভারি রাইডার এসাইন'
    ],

    mobileHtml: `
      <div class="m-card">
        <span class="m-badge primary"><i class="fa-solid fa-building"></i> মিরপুর হাব আনলোডিং</span>
        <div style="font-size: 14px; font-weight: 800; margin-bottom: 6px;">চালান আনলোড ও স্ক্যান রিসিভ</div>
        
        <div style="background:var(--bg-card-subtle); padding:10px; border-radius:8px; margin-bottom:10px; font-size:12px;">
          <div style="margin-bottom:4px;"><strong>পার্সেল:</strong> RAJ-DH-89214</div>
          <div style="margin-bottom:4px;"><strong>গ্রাহক:</strong> তানভীর আহমেদ (মিরপুর ১০)</div>
          <div style="color:var(--brand-success); font-weight:700;"><strong>এসাইনকৃত রাইডার:</strong> রহিম মিয়া (R-MIR-04)</div>
        </div>

        <button type="button" class="m-btn m-btn-primary" id="m-action-btn-5">
          <i class="fa-solid fa-dolly"></i> লাস্ট-মাইল ডেলিভারি ব্যাগে এসাইন করুন
        </button>
      </div>
    `,

    desktopHtml: `
      <div class="d-topbar">
        <div>
          <div class="d-title">ঢাকা মিরপুর হাব · লাস্ট-মাইল রান শিট প্রস্তুতকরণ</div>
          <div style="font-size: 12px; color: var(--text-muted);">ব্রাঞ্চ ম্যানেজার: তানজিল আহমেদ · ডেলিভারি জোন: মিরপুর ১, ২, ১০, ১১</div>
        </div>
        <button class="sim-ctrl-btn" style="background:var(--brand-success-light); color:var(--brand-success); border-color:var(--brand-success);">
          <i class="fa-solid fa-list-check"></i> রানশিট প্রিন্ট
        </button>
      </div>

      <div class="d-stats-grid">
        <div class="d-stat-box">
          <div class="d-stat-lbl">আজকের আগত মোট পার্সেল</div>
          <div class="d-stat-num">৮৪টি</div>
        </div>
        <div class="d-stat-box">
          <div class="d-stat-lbl">ডেলিভারি রাইডার সংখ্যা</div>
          <div class="d-stat-num">৬ জন</div>
        </div>
        <div class="d-stat-box">
          <div class="d-stat-lbl">সম্ভাব্য আদায়যোগ্য COD</div>
          <div class="d-stat-num" style="color:var(--brand-primary);">৳১,৮৫,০০০</div>
        </div>
      </div>

      <div class="d-table-card">
        <div style="padding:10px 14px; font-weight:700; font-size:13px; border-bottom:1px solid var(--border-color); background:var(--bg-card-subtle);">
          রাইডার রহিম মিয়ার ডেলিভারি রানশিট (Runsheet #RS-9921)
        </div>
        <table class="d-table">
          <thead>
            <tr>
              <th>ক্রম</th>
              <th>পার্সেল আইডি</th>
              <th>গ্রাহক ও ঠিকানা</th>
              <th>ক্যাশ COD</th>
              <th>এসাইন স্ট্যাটাস</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background: rgba(37, 99, 235, 0.05); font-weight: 600;">
              <td>০১</td>
              <td><span style="font-family:monospace; color:var(--brand-primary);">RAJ-DH-89214</span></td>
              <td>তানভীর আহমেদ (রোড ৪, ব্লক সি, মিরপুর ১০)</td>
              <td>৳২,০০০</td>
              <td><span class="sim-status-chip transit">ব্যাগে লোডেড</span></td>
            </tr>
            <tr>
              <td>০২</td>
              <td>RAJ-DH-89220</td>
              <td>কামাল হোসেন (মিরপুর ২)</td>
              <td>৳৮৫০</td>
              <td><span class="sim-status-chip transit">ব্যাগে লোডেড</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  // ==========================================
  // ধাপ ৬: লাস্ট-মাইল ডেলিভারি রান
  // ==========================================
  {
    step: 6,
    title: 'লাস্ট-মাইল ডেলিভারি রান',
    mobileRole: 'রাইডার অ্যাপ (ডেলিভারি)',
    mobileUser: 'রহিম (মিরপুর রাইডার)',
    mobileAppTitle: 'RAJ Rider Pro',
    browserUrl: 'https://hub.rajcourier.com/mirpur/riders-live',
    custody: 'রহিম মিয়া (ডেলিভারি রাইডার)',
    location: 'গ্রাহকের দরজায় (রোড ৪, মিরপুর ১০)',
    cashStatus: 'আদায় হয়নি (৳০)',
    cashNote: 'গ্রাহক ওটিপি যাচাই ও ক্যাশ বের করার অপেক্ষায়',
    merchantPayout: '৳১,৮৮০ (হিসাব সংরক্ষিত)',
    statusChip: { text: 'আউট ফর ডেলিভারি', class: 'transit' },
    statusTime: '২০ অক্টো ২০২৬ · ১১:৪৫ AM',
    smsText: 'রাইডার রহিম মিয়া পার্সেল নিয়ে আসছেন (ফোন: 01822-998877)। আপনার ডেলিভারি ওটিপি: 7429।',
    trackStatus: 'ডেলিভারি রাইডার দরজায় উপস্থিত',
    trackEta: 'এখনই ডেলিভারি',
    trackProgress: 80,
    historyDone: [
      'অর্ডার বুকিং প্রস্তুত',
      'মার্চেন্ট শপ থেকে পিকআপ সম্পন্ন',
      'সিলেট হাবে ইনবাউন্ড ও লেবেলিং সম্পন্ন',
      'সিলেট ➔ ঢাকা হাইওয়ে পরিবহন সমাপ্ত',
      'মিরপুর হাবে রিসিভ ও ডেলিভারি রাইডার এসাইন',
      'রাইডার রহিম মিয়া ডেলিভারি নিয়ে গ্রাহকের ঠিকানায় উপস্থিত'
    ],

    mobileHtml: `
      <div class="m-card">
        <span class="m-badge warning"><i class="fa-solid fa-box-open"></i> সক্রিয় ডেলিভারি টাস্ক</span>
        <div style="font-size: 15px; font-weight: 800; margin-bottom: 4px;">তানভীর আহমেদ</div>
        <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 8px;">
          রোড ৪, ব্লক সি, বাসা ১২, মিরপুর ১০, ঢাকা
        </div>

        <div style="background:var(--bg-card-subtle); padding:10px; border-radius:8px; margin-bottom:12px; font-size:12px;">
          <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
            <span>পার্সেল আইডি:</span>
            <strong style="font-family:monospace; color:var(--brand-primary);">RAJ-DH-89214</strong>
          </div>
          <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
            <span>আদায়যোগ্য ক্যাশ (COD):</span>
            <strong style="color:var(--brand-accent); font-size:14px;">৳২,০০০</strong>
          </div>
          <div style="display:flex; justify-content:space-between;">
            <span>নিরাপত্তা নীতি:</span>
            <span style="color:var(--brand-primary); font-weight:700;">OTP বাধ্যতামূলক</span>
          </div>
        </div>

        <button type="button" class="m-btn m-btn-primary" id="m-action-btn-call" style="margin-bottom:8px;">
          <i class="fa-solid fa-phone"></i> গ্রাহককে কল দিন (01711-XXXXXX)
        </button>

        <button type="button" class="m-btn m-btn-success" id="m-action-btn-6">
          <i class="fa-solid fa-key"></i> ওটিপি যাচাই ও ক্যাশ গ্রহণ করুন
        </button>
      </div>
    `,

    desktopHtml: `
      <div class="d-topbar">
        <div>
          <div class="d-title">মিরপুর হাব · লাইভ লাস্ট-মাইল রাইডার ড্যাশবোর্ড</div>
          <div style="font-size: 12px; color: var(--text-muted);">রিয়েল-টাইম জিপিএস ট্র্যাকিং ও ডেলিভারি অগ্রগতি</div>
        </div>
        <span class="browser-live-badge"><span class="pulse-dot"></span> রাইডার রহিম (মিরপুর ১০ এ সক্রিয়)</span>
      </div>

      <div class="d-stats-grid">
        <div class="d-stat-box">
          <div class="d-stat-lbl">রহিমের মোট পার্সেল</div>
          <div class="d-stat-num">১৫টি</div>
        </div>
        <div class="d-stat-box">
          <div class="d-stat-lbl">ডেলিভারি সম্পন্ন</div>
          <div class="d-stat-num" style="color:var(--brand-success);">৭টি</div>
        </div>
        <div class="d-stat-box">
          <div class="d-stat-lbl">রাইডারের ব্যাগে জমা ক্যাশ</div>
          <div class="d-stat-num" style="color:var(--brand-accent);">৳৯,৪০০</div>
        </div>
      </div>

      <div class="d-table-card">
        <div style="padding:10px 14px; font-weight:700; font-size:13px; border-bottom:1px solid var(--border-color); background:var(--bg-card-subtle);">
          অন-স্পট ডেলিভারি ইভেন্ট ট্র্যাকার
        </div>
        <table class="d-table">
          <thead>
            <tr>
              <th>পার্সেল আইডি</th>
              <th>গ্রাহক</th>
              <th>ঠিকানা</th>
              <th>COD ক্যাশ</th>
              <th>লাইভ স্ট্যাটাস</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background: rgba(245, 158, 11, 0.08); font-weight: 600;">
              <td><span style="font-family:monospace; color:var(--brand-primary);">RAJ-DH-89214</span></td>
              <td>তানভীর আহমেদ</td>
              <td>মিরপুর ১০, ব্লক সি</td>
              <td>৳২,০০০</td>
              <td><span class="sim-status-chip pending">দরজায় অবস্থানরত</span></td>
            </tr>
            <tr>
              <td>RAJ-DH-89211</td>
              <td>নাজমুল হুদা</td>
              <td>মিরপুর ১</td>
              <td>৳১,২০০</td>
              <td><span class="sim-status-chip delivered">ডেলিভারড ✅</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  // ==========================================
  // ধাপ ৭: OTP ডেলিভারি ও ক্যাশ গ্রহণ
  // ==========================================
  {
    step: 7,
    title: 'OTP ডেলিভারি ও ক্যাশ গ্রহণ',
    mobileRole: 'রাইডার অ্যাপ (ডেলিভারি)',
    mobileUser: 'রহিম (মিরপুর রাইডার)',
    mobileAppTitle: 'RAJ Rider Pro',
    browserUrl: 'https://hq.rajcourier.com/audit/delivery-events',
    custody: 'তানভীর আহমেদ (গ্রাহক হাতে পেলেন)',
    location: 'মিরপুর ১০, ঢাকা (কাস্টমার ডেলিভার্ড)',
    cashStatus: 'রাইডারের ব্যাগে (৳২,০০০ নগদ)',
    cashNote: 'ক্যাশ আদায় সম্পন্ন · দায়িত্ব রাইডার রহিমের কাঁধে',
    merchantPayout: '৳১,৮৮০ (মার্চেন্ট অ্যাকাউন্টে ক্রেডিট)',
    statusChip: { text: 'সফল ডেলিভারি ও ক্যাশ আদায়', class: 'delivered' },
    statusTime: '২০ অক্টো ২০২৬ · ১১:৫২ AM',
    smsText: 'ধন্যবাদ! আপনার পার্সেল RAJ-DH-89214 সফলভাবে ডেলিভারি হয়েছে এবং ৳২,০০০ ক্যাশ পরিশোধ সম্পন্ন হয়েছে।',
    trackStatus: 'ডেলিভারি সফল ও ক্যাশ পরিশোধিত ✅',
    trackEta: 'সম্পন্ন',
    trackProgress: 92,
    historyDone: [
      'অর্ডার বুকিং প্রস্তুত',
      'মার্চেন্ট শপ থেকে পিকআপ সম্পন্ন',
      'সিলেট হাবে ইনবাউন্ড ও লেবেলিং সম্পন্ন',
      'সিলেট ➔ ঢাকা হাইওয়ে পরিবহন সমাপ্ত',
      'মিরপুর হাবে রিসিভ ও ডেলিভারি রাইডার এসাইন',
      'রাইডার রহিম মিয়া ডেলিভারি নিয়ে গ্রাহকের ঠিকানায় উপস্থিত',
      'গ্রাহক OTP (7429) যাচাই এবং নগদ ৳২,০০০ আদায় সম্পন্ন'
    ],

    mobileHtml: `
      <div class="m-card">
        <div class="m-success-check"><i class="fa-solid fa-check"></i></div>
        <div style="text-align:center; margin-bottom:10px;">
          <div style="font-size:16px; font-weight:800; color:var(--brand-success);">ডেলিভারি ও ক্যাশ আদায় সম্পন্ন!</div>
          <div style="font-size:11px; color:var(--text-muted);">পার্সেল আইডি: RAJ-DH-89214</div>
        </div>

        <!-- Interactive OTP Validation Card -->
        <div class="m-otp-box">
          <div style="font-size:11px; font-weight:700; color:var(--brand-primary); margin-bottom:4px;">
            <i class="fa-solid fa-shield-halved"></i> ভেরিফাইড গ্রাহক OTP:
          </div>
          <div class="m-otp-inputs">
            <input type="text" class="m-otp-digit" value="৭" readonly>
            <input type="text" class="m-otp-digit" value="৪" readonly>
            <input type="text" class="m-otp-digit" value="২" readonly>
            <input type="text" class="m-otp-digit" value="৯" readonly>
          </div>
          <div style="font-size:11px; color:var(--brand-success); font-weight:700;">
            <i class="fa-solid fa-circle-check"></i> OTP কোড ৭৪২৯ শতভাগ মিলেছে
          </div>
        </div>

        <div style="background:var(--brand-success-light); border:1px solid rgba(5,150,105,0.3); border-radius:8px; padding:10px; margin-top:10px; text-align:center;">
          <div style="font-size:11px; color:var(--brand-success); font-weight:700;">নগদ টাকা আদায় (COD):</div>
          <div style="font-size:20px; font-weight:800; color:var(--brand-success);">৳২,০০০ (নগদ গৃহীত)</div>
        </div>

        <button type="button" class="m-btn m-btn-primary" id="m-action-btn-7" style="margin-top:10px;">
          <i class="fa-solid fa-vault"></i> দিন শেষে হাবে ক্যাশ জমা দিতে যান
        </button>
      </div>
    `,

    desktopHtml: `
      <div class="d-topbar">
        <div>
          <div class="d-title">সেন্ট্রাল অডিট ইঞ্জিন · ক্রিপ্টোগ্রাফিক ডেলিভারি লগ (PostgreSQL)</div>
          <div style="font-size: 12px; color: var(--text-muted);">টেবিল: parcel_audit_logs · অপরিবর্তনীয় ট্রেইল</div>
        </div>
        <span class="browser-live-badge"><span class="pulse-dot"></span> ডিজিটাল সিলযুক্ত ইভেন্ট</span>
      </div>

      <div class="d-stats-grid">
        <div class="d-stat-box">
          <div class="d-stat-lbl">ওটিপি ম্যাচ স্ট্যাটাস</div>
          <div class="d-stat-num" style="color:var(--brand-success);">MATCHED (7429)</div>
        </div>
        <div class="d-stat-box">
          <div class="d-stat-lbl">আদায়কৃত নগদ ক্যাশ</div>
          <div class="d-stat-num" style="color:var(--brand-success);">৳২,০০০</div>
        </div>
        <div class="d-stat-box">
          <div class="d-stat-lbl">গ্রাহকের ডিজিটাল স্বাক্ষর</div>
          <div class="d-stat-num" style="color:var(--brand-primary);">SIGNED ✅</div>
        </div>
      </div>

      <div class="d-table-card">
        <div style="padding:10px 14px; font-weight:700; font-size:13px; border-bottom:1px solid var(--border-color); background:var(--bg-card-subtle);">
          PostgreSQL JSONB ইভেন্ট পে-লোড (Event-Driven Record)
        </div>
        <div style="padding:14px; font-family:monospace; font-size:11px; background:#0f172a; color:#38bdf8; border-radius:0 0 8px 8px; line-height:1.5;">
          {<br>
          &nbsp;&nbsp;"event": "PARCEL_DELIVERED_SUCCESS",<br>
          &nbsp;&nbsp;"parcel_id": "RAJ-DH-89214",<br>
          &nbsp;&nbsp;"rider_id": "RIDER-MIR-04 (Rahim)",<br>
          &nbsp;&nbsp;"otp_verified": true,<br>
          &nbsp;&nbsp;"cod_collected": 2000.00,<br>
          &nbsp;&nbsp;"coordinates": { "lat": 23.8069, "lng": 90.3687 },<br>
          &nbsp;&nbsp;"timestamp": "2026-10-20T11:52:14.921Z",<br>
          &nbsp;&nbsp;"financial_impact": "MERCHANT_LEDGER_CREDIT_PENDING"<br>
          }
        </div>
      </div>
    `
  },

  // ==========================================
  // ধাপ ৮: হাবে ক্যাশ ক্লোজিং ও অডিট
  // ==========================================
  {
    step: 8,
    title: 'হাবে ক্যাশ ক্লোজিং ও অডিট',
    mobileRole: 'রাইডার অ্যাপ (ক্যাশ ক্লোজিং)',
    mobileUser: 'রহিম (মিরপুর রাইডার)',
    mobileAppTitle: 'RAJ Rider Pro',
    browserUrl: 'https://accounts.rajcourier.com/reconciliation/hub-cash',
    custody: 'মিরপুর হাব ক্যাশিয়ার (ভল্ট)',
    location: 'মিরপুর হাব ভল্ট / অ্যাকাউন্টস ডেস্ক',
    cashStatus: 'মিরপুর হাব ক্যাশিয়ারের ভল্টে (৳২,০০০ জমা)',
    cashNote: 'রাইডারের দায় শেষ ➔ হাব ক্যাশিয়ারের দায় শুরু',
    merchantPayout: '৳১,৮৮০ (সেটেলমেন্ট অনুমোদিত)',
    statusChip: { text: 'হাবে ক্যাশ ক্লোজিং সম্পন্ন', class: 'delivered' },
    statusTime: '২০ অক্টো ২০২৬ · ০৪:৩০ PM',
    smsText: 'রাইডার রহিমের মাধ্যমে RAJ-DH-89214 এর ৳২,০০০ ক্যাশ মিরপুর হাবে সফলভাবে জমা হয়েছে।',
    trackStatus: 'কুরিয়ার হাবে ক্যাশ অডিট সম্পন্ন',
    trackEta: 'সম্পন্ন',
    trackProgress: 96,
    historyDone: [
      'অর্ডার বুকিং প্রস্তুত',
      'মার্চেন্ট শপ থেকে পিকআপ সম্পন্ন',
      'সিলেট হাবে ইনবাউন্ড ও লেবেলিং সম্পন্ন',
      'সিলেট ➔ ঢাকা হাইওয়ে পরিবহন সমাপ্ত',
      'মিরপুর হাবে রিসিভ ও ডেলিভারি রাইডার এসাইন',
      'গ্রাহক OTP যাচাই ও নগদ ক্যাশ আদায়',
      'রাইডার কর্তৃক হাবে ক্যাশ জমা ও ক্যাশিয়ারের ডিজিটাল ভাউচার গ্রহণ'
    ],

    mobileHtml: `
      <div class="m-card">
        <span class="m-badge success"><i class="fa-solid fa-vault"></i> দিন শেষের ক্যাশ হ্যান্ডওভার</span>
        <div style="font-size: 15px; font-weight: 800; margin-bottom: 4px;">মিরপুর হাব ক্যাশ ডেস্ক</div>
        <div style="font-size: 11px; color: var(--text-muted); margin-bottom: 10px;">রাইডার রহিম মিয়ার হিসাব মিলকরণ</div>

        <div style="background:var(--bg-card-subtle); padding:10px; border-radius:8px; margin-bottom:10px; font-size:12px;">
          <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
            <span>আজকের মোট ডেলিভারি:</span>
            <strong>১৫টি পার্সেল</strong>
          </div>
          <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
            <span>মোট আদায়কৃত ক্যাশ:</span>
            <strong style="color:var(--brand-success);">৳৩১,৫০০</strong>
          </div>
          <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
            <span>RAJ-DH-89214 এর ক্যাশ:</span>
            <strong>৳২,০০০ (পরিশোধিত)</strong>
          </div>
          <div style="display:flex; justify-content:space-between; color:var(--brand-primary); font-weight:700;">
            <span>মানি রিসিট নম্বর:</span>
            <span>CR-2026-9021</span>
          </div>
        </div>

        <button type="button" class="m-btn m-btn-primary" id="m-action-btn-8">
          <i class="fa-solid fa-wallet"></i> হেড অফিস বিকাশ ওয়ালেট সেটেলমেন্টে যান
        </button>
      </div>
    `,

    desktopHtml: `
      <div class="d-topbar">
        <div>
          <div class="d-title">অ্যাকাউন্টস ডিপার্টমেন্ট · ক্যাশ-ইন-ট্রানজিট (CIT) রিকনসিলিয়েশন</div>
          <div style="font-size: 12px; color: var(--text-muted);">মিরপুর হাব ভল্ট অডিট · ক্যাশিয়ার: শামীম রেজা</div>
        </div>
        <span class="sim-status-chip delivered"><i class="fa-solid fa-check-double"></i> ১০০% জিরো ক্যাশ লিকেজ</span>
      </div>

      <div class="d-stats-grid">
        <div class="d-stat-box">
          <div class="d-stat-lbl">সফটওয়্যার নির্ধারিত ক্যাশ</div>
          <div class="d-stat-num">৳৩১,৫০০</div>
        </div>
        <div class="d-stat-box">
          <div class="d-stat-lbl">ভৌত নগদ ক্যাশ জমা</div>
          <div class="d-stat-num" style="color:var(--brand-success);">৳৩১,৫০০</div>
        </div>
        <div class="d-stat-box">
          <div class="d-stat-lbl">পার্থক্য (Discrepancy)</div>
          <div class="d-stat-num" style="color:var(--brand-success);">৳০ (মিলিত)</div>
        </div>
      </div>

      <div class="d-table-card">
        <div style="padding:10px 14px; font-weight:700; font-size:13px; border-bottom:1px solid var(--border-color); background:var(--bg-card-subtle);">
          ব্যাংক ডিপোজিট ও মার্চেন্ট ওয়ালেট ডিসবার্সমেন্ট ব্যাচ
        </div>
        <table class="d-table">
          <thead>
            <tr>
              <th>রাইডার</th>
              <th>পার্সেল কাউন্ট</th>
              <th>আদায়কৃত ক্যাশ</th>
              <th>হাব ডিপোজিট স্ট্যাটাস</th>
              <th>অ্যাকাউন্টস ছাড়পত্র</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background: rgba(16, 185, 129, 0.08); font-weight: 600;">
              <td>রহিম মিয়া (R-MIR-04)</td>
              <td>১৫টি (RAJ-DH-89214 সহ)</td>
              <td>৳৩১,৫০০</td>
              <td>ভল্টে জমা গৃহীত ✅</td>
              <td><span class="sim-status-chip delivered">অনুমোদিত (RELEASED)</span></td>
            </tr>
            <tr>
              <td>সুমন কবির (R-MIR-01)</td>
              <td>১২টি</td>
              <td>৳২৪,০০০</td>
              <td>ভল্টে জমা গৃহীত ✅</td>
              <td><span class="sim-status-chip delivered">অনুমোদিত</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  // ==========================================
  // ধাপ ৯: বিকাশ ওয়ালেট পেমেন্ট
  // ==========================================
  {
    step: 9,
    title: 'বিকাশ ওয়ালেট পেমেন্ট',
    mobileRole: 'মার্চেন্ট অ্যাপ (ওয়ালেট)',
    mobileUser: 'মাহমুদ ভাই',
    mobileAppTitle: 'RAJ Merchant',
    browserUrl: 'https://accounts.rajcourier.com/disbursements/bkash-batch',
    custody: 'মাহমুদ ফ্যাশন শপ (বিকাশ ওয়ালেট)',
    location: 'মার্চেন্টের বিকাশ অ্যাকাউন্ট (01712-XXXXXX)',
    cashStatus: 'মার্চেন্টের বিকাশ ওয়ালেটে তাৎক্ষণিক জমা (৳১,৮৮০)',
    cashNote: 'কুরিয়ার ফি ৳১০০ ও COD কমিশন ৳২০ কেটে নিট অর্থ জমা',
    merchantPayout: '৳১,৮৮০ (সম্পূর্ণ পরিশোধিত 🎉)',
    statusChip: { text: 'বিকাশ পেমেন্ট সম্পন্ন 🎉', class: 'delivered' },
    statusTime: '২০ অক্টো ২০২৬ · ০৫:০০ PM',
    smsText: 'আপনার বিকাশ অ্যাকাউন্ট 01712-XXXXXX এ পার্সেল RAJ-DH-89214 এর নিট ৳১,৮৮০ পাঠানো হয়েছে। TxnID: 9X82KL90।',
    trackStatus: 'মার্চেন্ট পেমেন্ট সম্পন্ন ও ট্রানজেকশন ক্লোজড 🎉',
    trackEta: 'লাইফসাইকেল সফল সমাপ্তি',
    trackProgress: 100,
    historyDone: [
      'অর্ডার বুকিং প্রস্তুত',
      'মার্চেন্ট শপ থেকে পিকআপ সম্পন্ন',
      'সিলেট হাবে ইনবাউন্ড ও লেবেলিং সম্পন্ন',
      'সিলেট ➔ ঢাকা হাইওয়ে পরিবহন সমাপ্ত',
      'মিরপুর হাবে রিসিভ ও ডেলিভারি রাইডার এসাইন',
      'গ্রাহক OTP যাচাই ও নগদ ক্যাশ আদায়',
      'হাবে ক্যাশ ক্লোজিং ও হিসাব মিলকরণ',
      'মার্চেন্টের বিকাশ মার্চেন্ট ওয়ালেটে সরাসরি ৳১,৮৮০ টাকা ট্রান্সফার সম্পন্ন'
    ],

    mobileHtml: `
      <div class="m-card">
        <span class="m-badge success"><i class="fa-solid fa-gift"></i> পেমেন্ট নোটিফিকেশন</span>
        <div style="font-size: 15px; font-weight: 800; color:var(--brand-success); margin-bottom: 4px;">
          🎉 ৳১,৮৮০ আপনার বিকাশে জমা হয়েছে!
        </div>
        <div style="font-size: 11px; color: var(--text-muted); margin-bottom: 10px;">
          পার্সেল RAJ-DH-89214 সফল ডেলিভারি পে-আউট
        </div>

        <!-- Financial Ledger Breakdown Box -->
        <div style="background:var(--bg-card-subtle); border:1px solid var(--border-color); border-radius:8px; padding:10px; margin-bottom:10px; font-size:12px;">
          <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
            <span>গ্রাহক থেকে সংগৃহীত COD:</span>
            <strong style="color:var(--brand-primary);">+ ৳২,০০০</strong>
          </div>
          <div style="display:flex; justify-content:space-between; margin-bottom:4px; color:#ef4444;">
            <span>ডেলিভারি ফি (১.২ কেজি):</span>
            <strong>- ৳১০০</strong>
          </div>
          <div style="display:flex; justify-content:space-between; margin-bottom:6px; color:#ef4444; border-bottom:1px dashed var(--border-color); padding-bottom:6px;">
            <span>ক্যাশ কালেকশন (১% COD ফি):</span>
            <strong>- ৳২০</strong>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:14px; font-weight:800; color:var(--brand-success);">
            <span>মার্চেন্ট নিট পাওনা (Net Amount):</span>
            <span>৳১,৮৮০</span>
          </div>
        </div>

        <div style="background:#e11462; color:#fff; border-radius:8px; padding:8px 12px; font-size:11px; display:flex; justify-content:space-between; align-items:center;">
          <span>bKash B2B Payout Success</span>
          <span style="font-family:monospace; font-weight:700;">TxnID: 9X82KL90</span>
        </div>

        <button type="button" class="m-btn m-btn-primary" id="m-action-btn-9" style="margin-top:10px;">
          <i class="fa-solid fa-file-invoice-dollar"></i> পূর্ণাঙ্গ ডিজিটাল চালান ডাউনলোড
        </button>
      </div>
    `,

    desktopHtml: `
      <div class="d-topbar">
        <div>
          <div class="d-title">সেন্ট্রাল ফিন্যান্স ইঞ্জিন · অটোমেটেড bKash B2B ডিসবার্সমেন্ট</div>
          <div style="font-size: 12px; color: var(--text-muted);">ফাস্টফাই কিউ ইঞ্জিন (BullMQ) · মার্চেন্ট সেটেলমেন্ট ব্যাচ #SET-891</div>
        </div>
        <button class="sim-ctrl-btn" style="background:var(--brand-success-light); color:var(--brand-success); border-color:var(--brand-success);">
          <i class="fa-solid fa-file-excel"></i> অ্যাকাউন্টস এক্সেল এক্সপোর্ট
        </button>
      </div>

      <div class="d-stats-grid">
        <div class="d-stat-box">
          <div class="d-stat-lbl">আজকের মোট মার্চেন্ট পে-আউট</div>
          <div class="d-stat-num">৩৫০ জন</div>
        </div>
        <div class="d-stat-box">
          <div class="d-stat-lbl">বিতরণকৃত মোট অর্থ</div>
          <div class="d-stat-num" style="color:var(--brand-success);">৳৮,৪২,৫০০</div>
        </div>
        <div class="d-stat-box">
          <div class="d-stat-lbl">API ডিসবার্সমেন্ট স্পিড</div>
          <div class="d-stat-num" style="color:var(--brand-primary);">২.৪ সেকেন্ড</div>
        </div>
      </div>

      <div class="d-table-card">
        <div style="padding:10px 14px; font-weight:700; font-size:13px; border-bottom:1px solid var(--border-color); background:var(--bg-card-subtle);">
          ডাবল-এন্ট্রি লেজার ডিসবার্সমেন্ট হিস্ট্রি (General Ledger)
        </div>
        <table class="d-table">
          <thead>
            <tr>
              <th>পার্সেল আইডি</th>
              <th>মার্চেন্ট</th>
              <th>গ্রস COD</th>
              <th>কুরিয়ার চার্জ</th>
              <th>নিট ট্রান্সফার</th>
              <th>বিকাশ ট্রানজেকশন আইডি</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background: rgba(16, 185, 129, 0.08); font-weight: 600;">
              <td><span style="font-family:monospace; color:var(--brand-primary);">RAJ-DH-89214</span></td>
              <td>মাহমুদ ফ্যাশন শপ (01712-...)</td>
              <td>৳২,০০০</td>
              <td>- ৳১২০</td>
              <td><strong style="color:var(--brand-success);">৳১,৮৮০</strong></td>
              <td><span style="font-family:monospace; color:#e11462; font-weight:800;">9X82KL90</span></td>
            </tr>
            <tr>
              <td>RAJ-DH-89211</td>
              <td>সিল্ক বাজার</td>
              <td>৳১,২০০</td>
              <td>- ৳১১২</td>
              <td>৳১,০৮৮</td>
              <td><span style="font-family:monospace; color:#e11462;">9X82KL91</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  }
];

// সিমুলেটরের স্টেট
let simCurrentStep = 1;
let simIsAutoPlaying = false;
let simAutoPlayTimer = null;
let simViewMode = 'command';
let simDevice = 'iphone';

// DOM রেফারেন্স
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

// থার্মাল মোডাল
const simThermalModal = document.getElementById('sim-thermal-modal');
const simCloseThermalBtn = document.getElementById('sim-close-thermal-btn');
const simPrintConfirmBtn = document.getElementById('sim-print-confirm-btn');

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

  // ৪. মোবাইল স্ক্রিন আপডেট
  const mobileRoleBadge = document.getElementById('sim-mobile-role-badge');
  const simAppTitle = document.getElementById('sim-app-title');
  const simAppUser = document.getElementById('sim-app-user');
  const simAppBody = document.getElementById('sim-app-body');

  if (mobileRoleBadge) mobileRoleBadge.textContent = data.mobileRole;
  if (simAppTitle) simAppTitle.textContent = data.mobileAppTitle;
  if (simAppUser) simAppUser.textContent = data.mobileUser;
  if (simAppBody) simAppBody.innerHTML = data.mobileHtml;

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

  // রাইডার কার্ড দৃশ্যমান হবে ধাপ ৬ ও ৭ এ
  if (simTrackRiderCard) {
    simTrackRiderCard.style.display = (stepNum === 6 || stepNum === 7) ? 'flex' : 'none';
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
      showSimToast('পার্সেল বুকিং সফল! বারকোড RAJ-DH-89214 জেনারেট হয়েছে।', 'fa-barcode');
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
    playSimSound('click');
  };
  if (btnStep3M) btnStep3M.addEventListener('click', openThermalModal);
  if (btnStep3D) btnStep3D.addEventListener('click', openThermalModal);

  // ধাপ ৪: ট্রিপ আপডেট
  const btnStep4 = document.getElementById('m-action-btn-4');
  if (btnStep4) {
    btnStep4.addEventListener('click', () => {
      showSimToast('হাইওয়ে ট্র্যাকিং আপডেট: গাড়ি ভৈরব থেকে ঢাকা প্রবেশ করছে।', 'fa-truck');
      setTimeout(() => renderSimulatorStep(5), 700);
    });
  }

  // ধাপ ৫: লাস্ট মাইল ব্যাগে লোড
  const btnStep5 = document.getElementById('m-action-btn-5');
  if (btnStep5) {
    btnStep5.addEventListener('click', () => {
      showSimToast('পার্সেলটি রাইডার রহিমের ব্যাগে এসাইন করা হয়েছে।', 'fa-motorcycle');
      setTimeout(() => renderSimulatorStep(6), 700);
    });
  }

  // ধাপ ৬: কাস্টমারকে কল
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

// ভিউ মোড সুইচিং (কমান্ড সেন্টার / মোবাইল / ডেস্কটপ)
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
  });
});

// ফোন ফ্রেম সুইচিং (iPhone 15 Pro vs Android Samsung/Pixel)
const phoneFrameEl = document.getElementById('sim-phone-frame');
simDeviceButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const device = btn.dataset.device;
    simDeviceButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    if (phoneFrameEl) {
      if (device === 'iphone') {
        phoneFrameEl.className = 'phone-frame iphone-frame';
      } else {
        phoneFrameEl.className = 'phone-frame android-frame';
      }
    }
    simDevice = device;
    playSimSound('click');
    showSimToast(device === 'iphone' ? '🍏 iPhone 15 Pro (iOS Dynamic Island) মোড সক্রিয়' : '🤖 Android (Material Design Punch-Hole) মোড সক্রিয়', device === 'iphone' ? 'fa-apple' : 'fa-android');
  });
});

// ইনিশিয়াল সিমুলেটর রেন্ডারিং
renderSimulatorStep(1, false);



