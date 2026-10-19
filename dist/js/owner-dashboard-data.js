/**
 * রাজ কুরিয়ার সেন্ট্রাল মালিক ও ম্যানেজমেন্ট ড্যাশবোর্ড - ডাটা মডিউল
 * ৬৪ জেলার হাব, ক্যাশ, ব্যাংক, সেন্ডার/রিসিভার পার্সেল ফ্লো, জনবল ও কমপ্লেইন ডাটা
 */

const ownerDashboardData = {
  // জাতীয় সামগ্রিক পরিসংখ্যান (National Overview)
  national: {
    totalVaultCash: 6482450, // ৬৪ ব্রাঞ্চের ভল্টে থাকা মোট ক্যাশ COD
    totalBankBalance: 12850000, // সেন্ট্রাল ও ব্রাঞ্চ ব্যাংক একাউন্ট
    todayTotalParcels: 24850,
    outboundHighwayTotal: 6350, // হাইওয়ে ট্রাকে থাকা পার্সেল (Sender flow)
    inboundHighwayTotal: 5820, // হাইওয়ের পথে বিভিন্ন ব্রাঞ্চে আসা পার্সেল (Receiver flow)
    activeComplaintsTotal: 14,
    totalRiders: 860,
    ridersOnTrip: 540,
    ridersFree: 320,
    monthlyTotalSalaries: 2160000,
    monthlyTotalExpenses: 840000
  },

  // ব্রাঞ্চ ভিত্তিক পূর্ণাঙ্গ ডাটা (Branch Detailed Records)
  branches: [
    {
      id: "SYL-01",
      name: "সিলেট কেন্দ্রীয় হাব",
      district: "সিলেট",
      division: "সিলেট",
      address: "জিন্দাবাজার পয়েন্ট, সিলেট",
      incharge: { name: "রফিকুল ইসলাম", phone: "01711-234567" },
      cashier: { name: "তানভীর আহমেদ", phone: "01712-345678" },
      riders: { total: 16, onPickup: 5, onDelivery: 9, available: 2 },
      financials: {
        vaultCash: 285400,
        bankBalance: 820000,
        expenses: {
          salaries: 145000,
          rent: 35000,
          fuelUtilities: 18000,
          totalMonthly: 198000
        }
      },
      parcels: {
        // ১. ওই ব্রাঞ্চ থেকে যাবে (Sender / Outbound Flow)
        outbound: {
          booked: 320,
          pickupInHand: 120,
          inBranchSorting: 150,
          onHighwayTruck: 420
        },
        // ২. ওই ব্রাঞ্চে আসবে (Receiver / Inbound Flow)
        inbound: {
          comingOnHighway: 380,
          receivedInBranch: 90,
          deliveryInHand: 180,
          deliveredToday: 310,
          returnedOrHold: 15
        }
      },
      complaints: [
        { id: "CMP-01", parcelId: "RAJ-DH-89214", customer: "তানভীর আহমেদ", issue: "মিরপুর ডেলিভারি ঠিকানায় পৌঁছাতে বিলম্ব", severity: "medium", status: "জিপিএস গাইড সক্রিয়" },
        { id: "CMP-02", parcelId: "RAJ-SY-44102", customer: "মাহমুদ ফ্যাশন", issue: "জিন্দাবাজার পিকআপ ট্রিপে ১ ঘণ্টা লেট", severity: "high", status: "বিকল্প রাইডার পাঠানো হয়েছে" }
      ]
    },
    {
      id: "DHK-MIR",
      name: "মিরপুর হাব",
      district: "ঢাকা",
      division: "ঢাকা",
      address: "সেকশন ১০, মিরপুর, ঢাকা",
      incharge: { name: "কবির হোসেন", phone: "01713-112233" },
      cashier: { name: "ফারুক আহমেদ", phone: "01714-223344" },
      riders: { total: 24, onPickup: 8, onDelivery: 14, available: 2 },
      financials: {
        vaultCash: 512000,
        bankBalance: 1450000,
        expenses: {
          salaries: 210000,
          rent: 55000,
          fuelUtilities: 26000,
          totalMonthly: 291000
        }
      },
      parcels: {
        outbound: {
          booked: 540,
          pickupInHand: 210,
          inBranchSorting: 240,
          onHighwayTruck: 680
        },
        inbound: {
          comingOnHighway: 610,
          receivedInBranch: 140,
          deliveryInHand: 320,
          deliveredToday: 510,
          returnedOrHold: 22
        }
      },
      complaints: [
        { id: "CMP-03", parcelId: "RAJ-MR-90112", customer: "নাফিসা আক্তার", issue: "ওটিপি এসএমএস কাস্টমার দেরিতে পেয়েছেন", severity: "low", status: "এসএমএস পুনরায় পাঠানো সম্পন্ন" }
      ]
    },
    {
      id: "CTG-01",
      name: "চট্টগ্রাম আগ্রাবাদ হাব",
      district: "চট্টগ্রাম",
      division: "চট্টগ্রাম",
      address: "বাণিজ্যিক এলাকা, আগ্রাবাদ, চট্টগ্রাম",
      incharge: { name: "মিজানুর রহমান", phone: "01811-445566" },
      cashier: { name: "সাখাওয়াত হোসেন", phone: "01812-556677" },
      riders: { total: 22, onPickup: 7, onDelivery: 13, available: 2 },
      financials: {
        vaultCash: 440000,
        bankBalance: 1200000,
        expenses: {
          salaries: 195000,
          rent: 48000,
          fuelUtilities: 24000,
          totalMonthly: 267000
        }
      },
      parcels: {
        outbound: {
          booked: 480,
          pickupInHand: 180,
          inBranchSorting: 210,
          onHighwayTruck: 590
        },
        inbound: {
          comingOnHighway: 520,
          receivedInBranch: 110,
          deliveryInHand: 280,
          deliveredToday: 460,
          returnedOrHold: 18
        }
      },
      complaints: []
    },
    {
      id: "RAJ-01",
      name: "রাজশাহী সাহেব বাজার হাব",
      district: "রাজশাহী",
      division: "রাজশাহী",
      address: "সাহেব বাজার জিরো পয়েন্ট, রাজশাহী",
      incharge: { name: "কামাল পাশা", phone: "01715-667788" },
      cashier: { name: "জহিরুল হক", phone: "01716-778899" },
      riders: { total: 14, onPickup: 4, onDelivery: 8, available: 2 },
      financials: {
        vaultCash: 215000,
        bankBalance: 680000,
        expenses: {
          salaries: 125000,
          rent: 28000,
          fuelUtilities: 15000,
          totalMonthly: 168000
        }
      },
      parcels: {
        outbound: {
          booked: 260,
          pickupInHand: 90,
          inBranchSorting: 120,
          onHighwayTruck: 340
        },
        inbound: {
          comingOnHighway: 310,
          receivedInBranch: 70,
          deliveryInHand: 150,
          deliveredToday: 260,
          returnedOrHold: 11
        }
      },
      complaints: [
        { id: "CMP-04", parcelId: "RAJ-RJ-33201", customer: "বুটিক ফ্যাশন রাজশাহী", issue: "ক্যাশ অন ডেলিভারি সেটেলমেন্ট অনুসন্ধান", severity: "medium", status: "অ্যাকাউন্টে ভেরিফায়েড" }
      ]
    },
    {
      id: "KHL-01",
      name: "খুলনা দৌলতপুর হাব",
      district: "খুলনা",
      division: "খুলনা",
      address: "দৌলতপুর মেইন রোড, খুলনা",
      incharge: { name: "আনোয়ার হোসেন", phone: "01911-889900" },
      cashier: { name: "নূর নবী", phone: "01912-990011" },
      riders: { total: 15, onPickup: 5, onDelivery: 8, available: 2 },
      financials: {
        vaultCash: 245000,
        bankBalance: 720000,
        expenses: {
          salaries: 130000,
          rent: 30000,
          fuelUtilities: 16000,
          totalMonthly: 176000
        }
      },
      parcels: {
        outbound: {
          booked: 290,
          pickupInHand: 110,
          inBranchSorting: 130,
          onHighwayTruck: 380
        },
        inbound: {
          comingOnHighway: 340,
          receivedInBranch: 85,
          deliveryInHand: 165,
          deliveredToday: 295,
          returnedOrHold: 14
        }
      },
      complaints: []
    },
    {
      id: "BOG-01",
      name: "বগুড়া সাতমাথা হাব",
      district: "বগুড়া",
      division: "রাজশাহী",
      address: "সাতমাথা মোড়, বগুড়া",
      incharge: { name: "মাহবুব আলম", phone: "01721-123456" },
      cashier: { name: "শরিফুল ইসলাম", phone: "01722-234567" },
      riders: { total: 12, onPickup: 4, onDelivery: 7, available: 1 },
      financials: {
        vaultCash: 195000,
        bankBalance: 580000,
        expenses: {
          salaries: 110000,
          rent: 25000,
          fuelUtilities: 14000,
          totalMonthly: 149000
        }
      },
      parcels: {
        outbound: {
          booked: 230,
          pickupInHand: 80,
          inBranchSorting: 105,
          onHighwayTruck: 310
        },
        inbound: {
          comingOnHighway: 280,
          receivedInBranch: 65,
          deliveryInHand: 140,
          deliveredToday: 245,
          returnedOrHold: 9
        }
      },
      complaints: []
    },
    {
      id: "RNG-01",
      name: "রংপুর পায়রা চত্বর হাব",
      district: "রংপুর",
      division: "রংপুর",
      address: "পায়রা চত্বর রোড, রংপুর",
      incharge: { name: "আসাদুজ্জামান", phone: "01731-345678" },
      cashier: { name: "বাপ্পি আহমেদ", phone: "01732-456789" },
      riders: { total: 11, onPickup: 3, onDelivery: 7, available: 1 },
      financials: {
        vaultCash: 175000,
        bankBalance: 520000,
        expenses: {
          salaries: 105000,
          rent: 22000,
          fuelUtilities: 13000,
          totalMonthly: 140000
        }
      },
      parcels: {
        outbound: {
          booked: 210,
          pickupInHand: 70,
          inBranchSorting: 95,
          onHighwayTruck: 270
        },
        inbound: {
          comingOnHighway: 250,
          receivedInBranch: 60,
          deliveryInHand: 125,
          deliveredToday: 220,
          returnedOrHold: 8
        }
      },
      complaints: [
        { id: "CMP-05", parcelId: "RAJ-RN-11490", customer: "নর্থ টেক্সটাইল", issue: "পার্সেল প্যাকেজিং ড্যামেজ রিপোর্ট", severity: "high", status: "ইনভেস্টিগেশন টিম তদন্ত করছে" }
      ]
    },
    {
      id: "BAR-01",
      name: "বরিশাল সদর হাব",
      district: "বরিশাল",
      division: "বরিশাল",
      address: "সদর রোড, চকবাজার, বরিশাল",
      incharge: { name: "মুস্তাফিজুর রহমান", phone: "01741-567890" },
      cashier: { name: "জালাল উদ্দিন", phone: "01742-678901" },
      riders: { total: 10, onPickup: 3, onDelivery: 6, available: 1 },
      financials: {
        vaultCash: 160000,
        bankBalance: 480000,
        expenses: {
          salaries: 95000,
          rent: 20000,
          fuelUtilities: 12000,
          totalMonthly: 127000
        }
      },
      parcels: {
        outbound: {
          booked: 180,
          pickupInHand: 60,
          inBranchSorting: 80,
          onHighwayTruck: 240
        },
        inbound: {
          comingOnHighway: 220,
          receivedInBranch: 50,
          deliveryInHand: 110,
          deliveredToday: 195,
          returnedOrHold: 7
        }
      },
      complaints: []
    },
    {
      id: "COM-01",
      name: "কুমিল্লা কান্দিরপাড় হাব",
      district: "কুমিল্লা",
      division: "চট্টগ্রাম",
      address: "কান্দিরপাড় পয়েন্ট, কুমিল্লা",
      incharge: { name: "নজরুল ইসলাম", phone: "01821-789012" },
      cashier: { name: "আতিকুর রহমান", phone: "01822-890123" },
      riders: { total: 13, onPickup: 4, onDelivery: 8, available: 1 },
      financials: {
        vaultCash: 220000,
        bankBalance: 640000,
        expenses: {
          salaries: 120000,
          rent: 26000,
          fuelUtilities: 15000,
          totalMonthly: 161000
        }
      },
      parcels: {
        outbound: {
          booked: 250,
          pickupInHand: 85,
          inBranchSorting: 115,
          onHighwayTruck: 330
        },
        inbound: {
          comingOnHighway: 290,
          receivedInBranch: 70,
          deliveryInHand: 145,
          deliveredToday: 255,
          returnedOrHold: 10
        }
      },
      complaints: []
    },
    {
      id: "MYM-01",
      name: "ময়মনসিংহ গাঙ্গিনারপাড় হাব",
      district: "ময়মনসিংহ",
      division: "ময়মনসিংহ",
      address: "গাঙ্গিনারপাড় মোড়, ময়মনসিংহ",
      incharge: { name: "সোহেল রানা", phone: "01751-901234" },
      cashier: { name: "আবুল কালাম", phone: "01752-012345" },
      riders: { total: 11, onPickup: 3, onDelivery: 7, available: 1 },
      financials: {
        vaultCash: 180000,
        bankBalance: 510000,
        expenses: {
          salaries: 100000,
          rent: 23000,
          fuelUtilities: 13000,
          totalMonthly: 136000
        }
      },
      parcels: {
        outbound: {
          booked: 200,
          pickupInHand: 65,
          inBranchSorting: 90,
          onHighwayTruck: 260
        },
        inbound: {
          comingOnHighway: 240,
          receivedInBranch: 55,
          deliveryInHand: 120,
          deliveredToday: 210,
          returnedOrHold: 8
        }
      },
      complaints: [
        { id: "CMP-06", parcelId: "RAJ-MY-77210", customer: "ময়মনসিংহ হ্যান্ডিক্রাফটস", issue: "রাইডার পিকআপ স্ক্যান কনফার্মেশন বিলম্ব", severity: "low", status: "সমাধান সম্পন্ন" }
      ]
    },
    {
      id: "DHK-UTT",
      name: "উত্তরা হাব",
      district: "ঢাকা",
      division: "ঢাকা",
      address: "সেক্টর ৭, উত্তরা, ঢাকা",
      incharge: { name: "শাহ আলম", phone: "01761-234567" },
      cashier: { name: "মনসুর আলী", phone: "01762-345678" },
      riders: { total: 20, onPickup: 7, onDelivery: 11, available: 2 },
      financials: {
        vaultCash: 480000,
        bankBalance: 1350000,
        expenses: {
          salaries: 180000,
          rent: 50000,
          fuelUtilities: 24000,
          totalMonthly: 254000
        }
      },
      parcels: {
        outbound: {
          booked: 490,
          pickupInHand: 190,
          inBranchSorting: 220,
          onHighwayTruck: 620
        },
        inbound: {
          comingOnHighway: 560,
          receivedInBranch: 125,
          deliveryInHand: 290,
          deliveredToday: 480,
          returnedOrHold: 19
        }
      },
      complaints: []
    },
    {
      id: "DHK-DHN",
      name: "ধানমন্ডি হাব",
      district: "ঢাকা",
      division: "ঢাকা",
      address: "রোড ২৭, ধানমন্ডি, ঢাকা",
      incharge: { name: "ইকবাল মাহমুদ", phone: "01771-345678" },
      cashier: { name: "সাজ্জাদ হোসেন", phone: "01772-456789" },
      riders: { total: 18, onPickup: 6, onDelivery: 10, available: 2 },
      financials: {
        vaultCash: 420000,
        bankBalance: 1180000,
        expenses: {
          salaries: 165000,
          rent: 52000,
          fuelUtilities: 22000,
          totalMonthly: 239000
        }
      },
      parcels: {
        outbound: {
          booked: 430,
          pickupInHand: 160,
          inBranchSorting: 190,
          onHighwayTruck: 540
        },
        inbound: {
          comingOnHighway: 490,
          receivedInBranch: 105,
          deliveryInHand: 250,
          deliveredToday: 420,
          returnedOrHold: 16
        }
      },
      complaints: [
        { id: "CMP-07", parcelId: "RAJ-DH-12349", customer: "কাজী ফ্যাশন", issue: "ঠিকানা পরিবর্তন রিকোয়েস্ট", severity: "medium", status: "নতুন ঠিকানায় রি-রুট করা হয়েছে" }
      ]
    }
  ]
};
