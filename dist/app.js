/**
 * রাজ কুরিয়ার প্রেজেন্টেশন - ৪টি বিজনেস মডেল (B2C, C2C, B2B, Reverse) ও ৩টি আউটকাম (COD, Prepaid, Return)
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
        owner: 'সফটওয়্যার (অটো বারকোড)',
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
  // ২. C2C (Customer to Customer / ব্যক্তি ➔ ব্যক্তি / ফ্রেন্ডস)
  // ==========================================
  c2c: {
    name: 'C2C (ব্যক্তি ➔ ব্যক্তি / ফ্রেন্ডস)',
    characters: '<strong>গল্পের চরিত্র:</strong> মাহমুদ (সিলেট) = বন্ধুকে সিলেটের খাঁটি চা পাতা পাঠাচ্ছেন · তানভীর (ঢাকা মিরপুর) = বন্ধু প্রাপক।',
    policy: '<strong>আর্থিক নীতি:</strong> মাহমুদ ভাই কাউন্টারে আগেই ভাড়া পরিশোধ করতে পারেন (Prepaid) অথবা ঢাকায় বন্ধু তানভীর ডেলিভারির সময় ভাড়া পরিশোধ করতে পারেন (To-Pay/COD)।',
    common: [
      {
        num: '১',
        label: 'কাউন্টার বুকিং',
        icon: 'fa-clipboard-check',
        hint: 'মাহমুদ ভাই (প্রেরক)',
        status: 'মাহমুদ ভাই সিলেট কাউন্টারে এসে বন্ধু তানভীরের জন্য খাঁটি চা পাতা বুক করলেন',
        location: 'সিলেট বন্দর বাজার কাউন্টার',
        owner: 'কাউন্টার অফিসার',
        cash: 'ভাড়া কাউন্টারে অথবা ঢাকায় তানভীর পরিশোধ করবেন',
        evidence: 'রেকর্ড: বুকিং রসিদ + পার্সেল ট্র্যাকিং কোড'
      },
      {
        num: '২',
        label: 'প্যাকিং ও রিসিভ',
        icon: 'fa-box-archive',
        hint: 'কাউন্টার কর্মকর্তা',
        status: 'কর্মকর্তা চা পাতার প্যাকেটটি ওজন মেপে বারকোড স্টিকার লাগালেন',
        location: 'সিলেট কাউন্টার ডেস্ক',
        owner: 'কাউন্টার স্টাফ',
        cash: 'পেমেন্ট মেথড সিস্টেমে এন্ট্রি',
        evidence: 'রেকর্ড: বারকোড ও ওজন স্ক্যান (১ কেজি)'
      },
      {
        num: '৩',
        label: 'সিলেট হাব',
        icon: 'fa-warehouse',
        hint: 'কেন্দ্রীয় হাবে সর্টিং',
        status: 'কাউন্টার থেকে চা পাতার পার্সেলটি সিলেট প্রধান হাবে সর্টিংয়ে এলো',
        location: 'সিলেট কেন্দ্রীয় হাব',
        owner: 'সিলেট হাব ইনচার্জ',
        cash: 'নিরাপদ হেফাজতে',
        evidence: 'রেকর্ড: কাউন্টার টু হাব ট্রান্সফার চালান'
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
          status: 'মাহমুদ ভাই কাউন্টারে এসে তাঁর পাঠানো চা পাতা ফেরত বুঝে নিলেন',
          location: 'সিলেট বন্দর বাজার কাউন্টার',
          owner: 'সিলেট কাউন্টার অফিসার',
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

// ট্যাব সুইচিং (পার্সেল ও টাকা <-> কে কী দেখবেন)
const tabButtons = document.querySelectorAll('.nav-tab-btn');
const panels = {
  journey: document.getElementById('panel-journey'),
  roles: document.getElementById('panel-roles')
};

tabButtons.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.target;

    tabButtons.forEach((btn) => btn.classList.remove('active'));
    tab.classList.add('active');

    Object.keys(panels).forEach((key) => {
      panels[key].classList.toggle('active', key === target);
    });
  });
});

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
