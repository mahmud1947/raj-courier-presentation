# 📦 RAJ Courier — Full-Stack Autonomous AI Agent Implementation Master Specification

> **AI Agent Directive:**  
> This document is a complete, self-contained, machine-actionable specification for building the **RAJ Courier Management System**. Any autonomous AI agent or software engineer can read this file and build the entire production-grade full-stack system from scratch without ambiguity.

---

## 1. System Overview & Core Business Domain

RAJ Courier is a high-performance logistics and courier management platform tailored for nationwide parcel delivery with strict Cash-on-Delivery (COD) financial reconciliation and 100% barcode-driven chain of custody.

### 1.1 Business Models Supported
1. **B2C (Merchant to Customer):** E-commerce merchants book parcels; riders pick up from merchant stores; hub routes to destination hub; delivery rider collects COD cash.
2. **P2P (Person to Person / Counter Booking):** Walk-in customer books parcel at a local hub counter with instant thermal label printing.
3. **B2B (Business to Business):** Bulk carton/shipment movements between commercial entities with line-haul challans.
4. **Reverse Logistics (Return & Exchange):** Return to merchant (RTM) workflows where return charges are automatically adjusted from the merchant's financial ledger.

### 1.2 Core Stakeholder Roles & Access Control (RBAC)
* `SUPER_ADMIN`: Head office management. Full system oversight, nationwide financials, system rates, user role assignment.
* `HUB_MANAGER`: Branch and regional hub in-charges. Inward scanning, line-haul challan creation, assigning parcels to riders, counter booking, daily rider cash closing.
* `RIDER`: Pickup & delivery field agents. Mobile-first interface for accepting parcels, GPS navigation, OTP-verified deliveries, and daily cash holding.
* `MERCHANT`: E-commerce sellers. Web portal for single/bulk parcel booking, live parcel status, financial statement, and payout requests.
* `CUSTOMER`: Public recipient. Public lightweight tracking page with real-time milestones.

---

## 2. Technology Stack & Infrastructure Rules

### 2.1 Canonical Tech Stack
* **Language Ecosystem:** Unified **TypeScript (Node.js v20+ LTS)** across Backend, Frontend, and Mobile.
* **Backend Framework:** **Fastify** (with TypeScript) — chosen for high throughput, low memory footprint, and native schema validation.
* **Database & ORM:** **PostgreSQL** with **Prisma ORM**.
* **In-Memory Cache & Queue:** **Redis (ioredis)** for cache-aside tracking lookups, rate-limiting, and distributed mutexes.
* **Background Jobs:** **BullMQ** (Redis-backed) for SMS, FCM push notifications, and chunked bulk Excel imports.
* **Web Portals (Admin, Hub & Merchant):** **React.js (Vite)** + **Tailwind CSS** + **Shadcn UI** (Radix UI) + **TanStack Query (React Query)**.
* **Mobile App (Rider):** **React Native (Expo SDK 51+)** + **NativeWind (Tailwind CSS)** + **Expo Camera** (barcode scanner) + **Expo Location**.
* **Reverse Proxy / Edge:** **Nginx / Cloudflare** with HTTP/2 and Brotli compression.

### 2.2 Directory Structure
```text
raj-courier/
├── backend/
│   ├── prisma/
│   │   └── schema.prisma           # Canonical database schema & migrations
│   ├── src/
│   │   ├── config/                 # Env vars, database, redis clients
│   │   ├── modules/
│   │   │   ├── auth/               # JWT authentication & RBAC middleware
│   │   │   ├── parcels/            # Parcel lifecycle, status machine, tracking
│   │   │   ├── challans/           # Hub-to-hub line-haul shipments
│   │   │   ├── riders/             # Rider runs, delivery tasks, OTP verification
│   │   │   ├── accounts/           # Double-entry ledger, COD reconciliation, payouts
│   │   │   └── hubs/               # Hub branch management
│   │   ├── queues/                 # BullMQ workers (SMS, push, bulk import)
│   │   ├── server.ts               # Fastify app entrypoint
│   │   └── routes.ts               # Aggregated API route definitions
│   ├── package.json
│   └── tsconfig.json
│
├── frontend-web/                   # Unified Admin, Hub, & Merchant Portal
│   ├── src/
│   │   ├── components/ui/          # Shadcn UI reusable components
│   │   ├── layouts/                # AdminLayout, HubLayout, MerchantLayout
│   │   ├── pages/
│   │   │   ├── admin/              # Super admin dashboard, reports, rates
│   │   │   ├── hub/                # Counter booking, scanning, challans, cash closing
│   │   │   ├── merchant/           # Parcel booking, bulk upload, financial ledger
│   │   │   └── track/              # Public tracking page
│   │   └── api/                    # Axios / TanStack Query client hooks
│   └── package.json
│
└── mobile-rider/                   # React Native Expo app for delivery riders
    ├── app/
    │   ├── (auth)/login.tsx
    │   ├── (tabs)/
    │   │   ├── deliveries.tsx      # Daily assigned delivery run
    │   │   ├── pickups.tsx         # Assigned merchant pickups
    │   │   ├── scan.tsx            # Camera barcode scanner
    │   │   └── profile.tsx         # Daily cash holding & deposit summary
    └── package.json
```

---

## 3. Database Schema Specification (`prisma/schema.prisma`)

The following schema must be implemented verbatim in PostgreSQL:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

enum Role {
  SUPER_ADMIN
  HUB_MANAGER
  RIDER
  MERCHANT
}

enum ParcelStatus {
  BOOKED                 // Created by merchant or counter
  PICKUP_ASSIGNED        // Assigned to pickup rider
  PICKED_UP              // Rider picked up from merchant
  RECEIVED_AT_HUB        // Inward scanned at origin hub
  IN_TRANSIT             // Loaded into highway challan to destination hub
  RECEIVED_AT_DEST_HUB   // Unloaded at destination delivery hub
  OUT_FOR_DELIVERY       // Handed over to delivery rider
  DELIVERED              // Successfully delivered with OTP & COD collected
  DELIVERY_FAILED        // Customer unreachable / rescheduled
  RETURN_TO_HUB          // Returned back to delivery hub
  RETURN_IN_TRANSIT      // Loaded into return challan back to origin hub
  RETURNED_TO_MERCHANT   // Delivered back to original merchant
  CANCELLED
}

enum PaymentStatus {
  UNPAID
  COD_COLLECTED_BY_RIDER
  DEPOSITED_TO_HUB
  SETTLED_TO_MERCHANT
}

enum BusinessModel {
  B2C
  P2P
  B2B
  REVERSE
}

model User {
  id           Int       @id @default(autoincrement())
  name         String
  phone        String    @unique
  email        String?   @unique
  passwordHash String
  role         Role
  isActive     Boolean   @default(true)
  hubId        Int?
  hub          Hub?      @relation(fields: [hubId], references: [id])
  merchant     Merchant?
  createdAt    DateTime  @default(now())
  updatedAt    DateTime  @updatedAt

  createdParcels   Parcel[]       @relation("CreatedByUser")
  riderDeliveries  RiderRunItem[]
  audits           ParcelEvent[]

  @@index([role, isActive])
}

model Hub {
  id          Int      @id @default(autoincrement())
  code        String   @unique // e.g. "DHK-MIRPUR", "SYL-KOTWALI"
  name        String
  district    String
  address     String
  contactPhone String
  createdAt   DateTime @default(now())

  users           User[]
  originParcels   Parcel[]   @relation("OriginHub")
  destParcels     Parcel[]   @relation("DestHub")
  currentParcels  Parcel[]   @relation("CurrentHub")
  outgoingChallans Challan[] @relation("OriginChallanHub")
  incomingChallans Challan[] @relation("DestChallanHub")

  @@index([district])
}

model Merchant {
  id            Int      @id @default(autoincrement())
  userId        Int      @unique
  user          User     @relation(fields: [userId], references: [id])
  businessName  String
  pickupAddress String
  pickupPhone   String
  deliveryRate  Decimal  @default(100.00) @db.Decimal(10, 2)
  returnRate    Decimal  @default(60.00)  @db.Decimal(10, 2)
  codPercentage Decimal  @default(1.00)   @db.Decimal(5, 2) // 1% COD charge
  bankName      String?
  bankAccount   String?
  bkashNumber   String?
  walletBalance Decimal  @default(0.00)   @db.Decimal(12, 2)
  createdAt     DateTime @default(now())

  parcels      Parcel[]
  transactions Transaction[]
}

model Parcel {
  id              Int           @id @default(autoincrement())
  trackingCode    String        @unique // e.g., "RAJ-2026-987654"
  businessModel   BusinessModel @default(B2C)
  merchantId      Int?
  merchant        Merchant?     @relation(fields: [merchantId], references: [id])
  createdById     Int
  createdBy       User          @relation("CreatedByUser", fields: [createdById], references: [id])

  originHubId     Int
  originHub       Hub           @relation("OriginHub", fields: [originHubId], references: [id])
  destinationHubId Int
  destinationHub  Hub           @relation("DestHub", fields: [destinationHubId], references: [id])
  currentHubId    Int?
  currentHub      Hub?          @relation("CurrentHub", fields: [currentHubId], references: [id])

  // Recipient details
  recipientName   String
  recipientPhone  String
  deliveryAddress String
  recipientCity   String

  // Package specs & Financials
  weightKg        Decimal       @default(1.0) @db.Decimal(5, 2)
  codAmount       Decimal       @default(0.00) @db.Decimal(10, 2)
  deliveryCharge  Decimal       @default(0.00) @db.Decimal(10, 2)
  codCharge       Decimal       @default(0.00) @db.Decimal(10, 2)
  merchantPayable Decimal       @default(0.00) @db.Decimal(10, 2) // codAmount - deliveryCharge - codCharge

  status          ParcelStatus  @default(BOOKED)
  paymentStatus   PaymentStatus @default(UNPAID)
  deliveryOtp     String?       // 4-digit OTP generated before delivery

  createdAt       DateTime      @default(now())
  updatedAt       DateTime      @updatedAt

  events          ParcelEvent[]
  challanItems    ChallanItem[]
  riderRunItems   RiderRunItem[]

  @@index([trackingCode])
  @@index([recipientPhone])
  @@index([status, currentHubId])
  @@index([merchantId, status, createdAt])
}

model ParcelEvent {
  id          Int          @id @default(autoincrement())
  parcelId    Int
  parcel      Parcel       @relation(fields: [parcelId], references: [id])
  actorUserId Int?
  actorUser   User?        @relation(fields: [actorUserId], references: [id])
  status      ParcelStatus
  location    String       // e.g. "Mirpur Hub", "On Van (Dhaka-Sylhet)"
  remarks     String?
  timestamp   DateTime     @default(now())

  @@index([parcelId, timestamp])
}

model Challan {
  id              Int           @id @default(autoincrement())
  challanNumber   String        @unique // e.g. "CHL-2026-00123"
  originHubId     Int
  originHub       Hub           @relation("OriginChallanHub", fields: [originHubId], references: [id])
  destHubId       Int
  destHub         Hub           @relation("DestChallanHub", fields: [destHubId], references: [id])
  driverName      String?
  driverPhone     String?
  vehicleNumber   String?
  status          String        @default("DISPATCHED") // DISPATCHED, RECEIVED
  totalParcels    Int           @default(0)
  dispatchedAt    DateTime      @default(now())
  receivedAt      DateTime?

  items           ChallanItem[]
}

model ChallanItem {
  id        Int     @id @default(autoincrement())
  challanId Int
  challan   Challan @relation(fields: [challanId], references: [id])
  parcelId  Int
  parcel    Parcel  @relation(fields: [parcelId], references: [id])

  @@unique([challanId, parcelId])
}

model RiderRun {
  id          Int            @id @default(autoincrement())
  runNumber   String         @unique // e.g. "RUN-2026-990"
  riderId     Int
  hubId       Int
  type        String         @default("DELIVERY") // PICKUP or DELIVERY
  status      String         @default("OPEN") // OPEN, COMPLETED, CLOSED
  createdAt   DateTime       @default(now())
  closedAt    DateTime?

  items       RiderRunItem[]
}

model RiderRunItem {
  id         Int      @id @default(autoincrement())
  runId      Int
  run        RiderRun @relation(fields: [runId], references: [id])
  parcelId   Int
  parcel     Parcel   @relation(fields: [parcelId], references: [id])
  riderId    Int
  rider      User     @relation(fields: [riderId], references: [id])
  status     String   @default("ASSIGNED") // ASSIGNED, COMPLETED, FAILED
  collectedCash Decimal @default(0.00) @db.Decimal(10, 2)
  completedAt DateTime?

  @@unique([runId, parcelId])
}

model Transaction {
  id          Int      @id @default(autoincrement())
  merchantId  Int?
  merchant    Merchant? @relation(fields: [merchantId], references: [id])
  type        String   // COD_CREDIT, DELIVERY_FEE_DEBIT, PAYOUT_DEBIT, RETURN_FEE_DEBIT
  amount      Decimal  @db.Decimal(12, 2)
  balanceAfter Decimal @db.Decimal(12, 2)
  reference   String?  // Parcel Tracking Code or Payout Request ID
  remarks     String?
  createdAt   DateTime @default(now())

  @@index([merchantId, createdAt])
}
```

---

## 4. Parcel State Machine & Validation Engine

Any status update must strictly adhere to the following transitions:

```
[ BOOKED ]
    │
    ▼
[ PICKUP_ASSIGNED ] ──► [ PICKED_UP ]
                              │
                              ▼
                    [ RECEIVED_AT_HUB ]
                              │
                              ▼
                        [ IN_TRANSIT ] (Highway Challan)
                              │
                              ▼
                  [ RECEIVED_AT_DEST_HUB ]
                              │
                              ▼
                    [ OUT_FOR_DELIVERY ]
                              │
             ┌────────────────┴────────────────┐
             ▼                                 ▼
       [ DELIVERED ]                  [ DELIVERY_FAILED ]
       (OTP Validated,                        │
       COD collected)                         ▼
                                      [ RETURN_TO_HUB ]
                                              │
                                              ▼
                                    [ RETURN_IN_TRANSIT ]
                                              │
                                              ▼
                                  [ RETURNED_TO_MERCHANT ]
```

### Financial Rules at State Transition:
* **Upon `DELIVERED`:**
  * If COD > 0: `paymentStatus = COD_COLLECTED_BY_RIDER`.
  * Calculate `merchantPayable = codAmount - deliveryCharge - codCharge`.
  * Credit `merchantPayable` to Merchant wallet ledger upon Hub Cash Deposit.
* **Upon `RETURNED_TO_MERCHANT`:**
  * Debit `returnRate` (৳৬০.০০) from Merchant wallet ledger.

---

## 5. Core API Endpoints Contract (Fastify)

### 5.1 Authentication (`/api/v1/auth`)
* `POST /login` -> `{ phone, password }` -> Returns `{ token, user: { id, name, role, hubId } }`
* `POST /merchant/register` -> Merchant self-signup.

### 5.2 Parcel Management (`/api/v1/parcels`)
* `POST /` -> Book single parcel (Merchant/Counter). Generates unique tracking code `RAJ-YYYY-XXXXXX`.
* `POST /bulk-import` -> Uploads Excel `.xlsx`. Queues job to BullMQ stream.
* `GET /:trackingCode` -> Detailed parcel info (Protected).
* `GET /track/:trackingCode` -> **Public Tracking Endpoint** (No Auth required).
  * **Rule:** Must check `redis.get("track:" + trackingCode)`. Cache TTL = 300s. Invalidate cache on any state mutation.

### 5.3 Hub Operations (`/api/v1/hub`)
* `POST /inward-scan` -> `{ trackingCode, currentHubId }` -> Transitions parcel to `RECEIVED_AT_HUB` and logs event.
* `POST /challans` -> Create line-haul challan `{ originHubId, destHubId, parcelIds[] }`.
* `POST /challans/:id/receive` -> Bulk unloads parcels at destination hub.
* `POST /assign-rider` -> Creates `RiderRun` and attaches list of parcels.
* `POST /cash-closing` -> Reconciles collected cash from a rider.

### 5.4 Rider Operations (`/api/v1/rider`)
* `GET /my-run` -> Retrieves today's active pickup & delivery tasks.
* `POST /send-otp/:parcelId` -> Dispatches 4-digit SMS OTP to recipient.
* `POST /confirm-delivery` -> `{ parcelId, otp, collectedAmount }`. Transitions to `DELIVERED`.
* `POST /mark-failed` -> `{ parcelId, reason }`. Transitions to `DELIVERY_FAILED`.

---

## 6. Zero-Lag High Concurrency Engineering Directives

When building this system, the AI Agent must strictly apply these performance patterns:

1. **Composite Indexing:** The Prisma schema must include composite indexes on frequently filtered fields (`[merchantId, status, createdAt]` and `[status, currentHubId]`).
2. **Asynchronous Background Processing (BullMQ):**
   * SMS notifications to customers (via Greenweb or BulkSMS BD) must never block the API thread.
   * Excel bulk imports (>1,000 parcels) must be chunked into batches of 100 and inserted inside a transaction.
3. **Cluster Runtime Setup:**
   * Node.js must be configured with PM2 Cluster Mode (`instances: "max"`) or multiple Docker replicas.
4. **Idempotency & Double Submit Prevention:**
   * Critical payment and delivery confirmation endpoints must use a Redis Mutex Lock (`SET lock:parcel:{id} "1" EX 5 NX`) to prevent double-tap submissions from mobile riders.

---

## 7. Phased Implementation Guide for Autonomous Agent Execution

Any AI Agent building this project should execute these 6 phases in strict order:

### Phase 1: Core Database & Migrations
1. Initialize `backend` directory with `package.json`, `typescript`, `@prisma/client`, `prisma`, and `fastify`.
2. Save the complete `schema.prisma` provided in Section 3.
3. Execute `npx prisma db push` or `prisma migrate dev` against PostgreSQL.
4. Seed initial database records: 1 `SUPER_ADMIN`, 2 `Hub`s ("Dhaka Mirpur", "Sylhet Kotwali"), and 1 test `Merchant`.

### Phase 2: Core Fastify API & State Machine
1. Implement JWT authentication plugin with role-based route guards (`role: ["SUPER_ADMIN", "HUB_MANAGER", ...]`).
2. Build the Parcel State Transition Service with strict validation and event audit logging.
3. Setup `ioredis` client and wrap the public tracking endpoint `/api/v1/parcels/track/:code` with the Cache-Aside pattern.

### Phase 3: Hub & Admin Web Dashboard (React + Tailwind + Shadcn UI)
1. Initialize `frontend-web` using Vite + React + TypeScript + Tailwind CSS.
2. Install Lucide React, Axios, and TanStack Query.
3. Implement 3 core screens:
   * **Counter Booking Screen:** Form with real-time delivery fee calculation and 3-inch thermal barcode label printing preview.
   * **Inward / Scan Screen:** Fast keyboard-friendly barcode scanner input field that calls `/inward-scan` on Enter key.
   * **Challan Dispatch & Rider Assignment:** Checkbox list of parcels to bundle into highway challans or rider delivery runs.

### Phase 4: Rider Mobile App (React Native / Expo)
1. Initialize `mobile-rider` using Expo with NativeWind.
2. Build Login screen and store JWT in `expo-secure-store`.
3. Implement `deliveries.tsx` task list with "Call Customer" (`Linking.openURL('tel:...')`) and "Navigate" buttons.
4. Implement OTP delivery confirmation modal with instant COD cash collection confirmation.

### Phase 5: Merchant Portal & Bulk Excel Import
1. Build Merchant Dashboard with financial wallet cards (Total Balance, Pending COD, Completed Deliveries).
2. Implement drag-and-drop Excel `.xlsx` parcel booking upload using `xlsx` parser.
3. Provide downloadable PDF statements for weekly merchant payouts.

### Phase 6: BullMQ Workers & Production Hardening
1. Configure BullMQ worker process for `sms-queue` and `push-queue`.
2. Configure rate limiting plugin (`@fastify/rate-limit`) on public endpoints.
3. Create production deployment configurations: `pm2.config.js` and `nginx.conf`.

---
*Autonomous System Specification verified for production implementation.*
