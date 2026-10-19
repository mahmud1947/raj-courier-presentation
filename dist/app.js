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

// ৯টি ধাপের পূর্ণাঙ্গ ডেটা মডেল (আলাদা আলাদা মার্চেন্ট ও রাইডার অ্যাপ)
const simStepsData = [
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

  // ==========================================
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
      </div>

      <div class="m-card" style="background:rgba(245,158,11,0.04); border-color:var(--brand-accent);">
        <div style="font-size:12px; font-weight:700; color:var(--brand-accent); margin-bottom:4px;">
          <i class="fa-solid fa-shield-keyhole"></i> সিকিউর ওটিপি ভেরিফিকেশন সক্রিয়
        </div>
        <div style="font-size:11px; color:var(--text-muted); line-height:1.4;">
          গ্রাহকের মোবাইলে পাঠানো গোপন ওটিপি রাইডার অ্যাপে ইনপুট দিয়ে যাচাই ছাড়া পার্সেল হস্তান্তর করা সম্ভব নয়।
        </div>
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
      </div>

      <div class="m-card" style="background:rgba(5,150,105,0.04); border-color:var(--brand-success);">
        <div style="font-size:12px; font-weight:700; color:var(--brand-success); margin-bottom:4px;">
          <i class="fa-solid fa-wallet"></i> আপনার প্রাপ্য টাকা: ৳১,৮৯০
        </div>
        <div style="font-size:11px; color:var(--text-muted); line-height:1.4;">
          রাইডার মিরপুর হাবে ক্যাশ জমা দিলে সাথে সাথে আপনার বিকাশ অ্যাকাউন্টে অটোমেটিক পেমেন্ট পৌঁছে যাবে।
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
        <div style="margin-top:6px; font-size:11px; color:var(--text-muted);">
          <i class="fa-solid fa-triangle-exclamation" style="color:var(--brand-accent);"></i> এই ক্যাশ টাকা মিরপুর হাবে ক্যাশিয়ারকে জমা না দেওয়া পর্যন্ত রাইডারের অ্যাকাউন্টে দায় হিসেবে থাকবে।
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
      </div>

      <div class="m-card" style="border:1px dashed var(--brand-success); background:rgba(5,150,105,0.04);">
        <div style="font-size:12px; font-weight:700; color:var(--brand-success); margin-bottom:4px;">
          <i class="fa-solid fa-bolt"></i> অটোমেটিক পেমেন্ট রিলিজ হচ্ছে...
        </div>
        <div style="font-size:11px; color:var(--text-muted); line-height:1.4;">
          হেড অফিস ফিন্যান্স গেটওয়ে থেকে মাহমুদ ফ্যাশনের বিকাশ মার্চেন্ট অ্যাকাউন্টে ৳১,৮৯০ সরাসরি ট্রান্সফার হচ্ছে।
        </div>
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
        <div style="font-size:11px; color:var(--text-muted); margin-top:4px;">
          ✅ আপনার কোনো ক্যাশ দেনা নেই। আজকের শিফটের আর্থিক দায়িত্ব সফলভাবে ক্লোজ হয়েছে।
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
      </div>

      <div class="m-card" style="background:rgba(5,150,105,0.04); border-color:var(--brand-success);">
        <div style="font-size:12px; font-weight:700; color:var(--brand-success); margin-bottom:4px;">
          <i class="fa-solid fa-circle-check"></i> সম্পূর্ণ লাইফসাইকেল সম্পন্ন
        </div>
        <div style="font-size:11px; color:var(--text-muted); line-height:1.4;">
          পার্সেল হ্যান্ডওভার, কাস্টমার ওটিপি ও হাব ক্যাশ ক্লোজিং নির্ভুলভাবে সমাপ্ত হয়েছে।
        </div>
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

// থার্মাল মোডাল
const simThermalModal = document.getElementById('sim-thermal-modal');
const simCloseThermalBtn = document.getElementById('sim-close-thermal-btn');
const simPrintConfirmBtn = document.getElementById('sim-print-confirm-btn');

// ডুয়েল অ্যাপ সুইচিং লজিক
let simActiveMobileApp = 'merchant'; // 'merchant' | 'rider'
let userManuallySelectedApp = false;

function switchMobileApp(appType, isUserManual = false) {
  simActiveMobileApp = appType;
  if (isUserManual) userManuallySelectedApp = true;

  const btnMerchant = document.getElementById('sim-btn-tab-merchant');
  const btnRider = document.getElementById('sim-btn-tab-rider');
  const wrapperMerchant = document.getElementById('sim-phone-wrapper-merchant');
  const wrapperRider = document.getElementById('sim-phone-wrapper-rider');

  if (btnMerchant) btnMerchant.classList.toggle('active', appType === 'merchant');
  if (btnRider) btnRider.classList.toggle('active', appType === 'rider');

  // ৪-ইন-১ কমান্ড সেন্টারে শুধু সক্রিয় ফোন দেখানো হয়
  // ডুয়েল মোবাইল ভিউতে CSS দিয়ে উভয় ফোন পাশাপাশি দেখানো হয়
  if (simViewMode !== 'mobile') {
    if (wrapperMerchant) wrapperMerchant.classList.toggle('active', appType === 'merchant');
    if (wrapperRider) wrapperRider.classList.toggle('active', appType === 'rider');
  }
}

// অ্যাপ সুইচিং ট্যাব বাটন ক্লিক
const btnTabMerchant = document.getElementById('sim-btn-tab-merchant');
const btnTabRider = document.getElementById('sim-btn-tab-rider');
if (btnTabMerchant) {
  btnTabMerchant.addEventListener('click', () => {
    switchMobileApp('merchant', true);
    playSimSound('click');
  });
}
if (btnTabRider) {
  btnTabRider.addEventListener('click', () => {
    switchMobileApp('rider', true);
    playSimSound('click');
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

  // ৪. ডুয়েল মোবাইল স্ক্রিন আপডেট (মার্চেন্ট ও রাইডার উভয়ের স্ক্রিন আপডেট)
  const simAppBodyMerchant = document.getElementById('sim-app-body-merchant');
  const simAppBodyRider = document.getElementById('sim-app-body-rider');
  const simRiderNameTag = document.getElementById('sim-rider-name-tag');

  if (simAppBodyMerchant) simAppBodyMerchant.innerHTML = data.merchantHtml;
  if (simAppBodyRider) simAppBodyRider.innerHTML = data.riderHtml;
  if (simRiderNameTag && data.riderName) simRiderNameTag.textContent = data.riderName;

  // যদি ব্যবহারকারী নিজে ট্যাপ করে না থাকেন, তবে সংশ্লিষ্ট ধাপের প্রধান অ্যাপে অটো সুইচ করুন
  if (!userManuallySelectedApp && data.primaryApp) {
    switchMobileApp(data.primaryApp, false);
  }

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

// ভিউ মোড সুইচিং (কমান্ড সেন্টার / ডুয়েল মোবাইল / ডেস্কটপ)
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

    // মোড পরিবর্তনের পর ফোনের দৃশ্যমানতা আপডেট
    if (mode === 'mobile') {
      showSimToast('📱 ডুয়েল মোবাইল ভিউ: মার্চেন্ট ও রাইডার অ্যাপ পাশাপাশি প্রদর্শিত!', 'fa-mobile-screen');
    } else {
      switchMobileApp(simActiveMobileApp, false);
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

// ইনিশিয়াল সিমুলেটর রেন্ডারিং
renderSimulatorStep(1, false);
