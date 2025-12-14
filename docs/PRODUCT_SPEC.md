# Product Specification Document: "ConfConnect" (Working Title)

| **Document Version** | 1.0 |
| :--- | :--- |
| **Platform** | Progressive Web App (PWA) |
| **Primary Goal** | Facilitate networking at events by making attendee discovery and contact exchange seamless. |
| **Target Audience** | Event Organizers (Small to Medium events) & Conference Attendees. |

---

## 1. Executive Summary
A mobile-first PWA that allows organizers to create paid networking events and enables attendees to discover peers with similar interests. The core interaction is a "Connect & Swap" mechanic where users exchange digital contact details (Digital Business Cards) rather than using in-app chat.

## 2. Core User Flows

### 2.1 The Organizer (Host)
* **Goal:** Monetize and manage an event with minimal friction from a smartphone.
* **Flow:** Sign Up -> Connect Stripe -> Create Event (Title, Date, Price, Description, Venue) -> Share Event Link.

### 2.2 The Attendee (Networker)
* **Goal:** See who is in the room and collect contacts.
* **Flow:** Click Event Link -> Purchase Ticket -> Create Profile (Tags/Bio) -> Browse Attendees -> Request Connection -> View "Rolodex" of collected contacts.

---

## 3. Functional Requirements

### 3.1 Authentication & Onboarding
* **Email Auth:** Magic Link or OTP (One Time Password) login to reduce password fatigue.
* **Profile Creation:**
    * **Required:** Name, Job Title, Company.
    * **Contact Details (Hidden until connected):** Email, Phone, LinkedIn URL.
    * **Tags:** User selects 3-5 tags from a predefined list (e.g., Developer, Founder, Investor, Marketing, Sales).

### 3.2 Event Management (Organizer Side)
* **Create Event:** Simple form to input event details.
* **Stripe Connect:** Organizer must onboard with Stripe Connect to receive payouts.
* **Attendee List:** Read-only view of who has purchased tickets.
* **Check-in (Optional for MVP):** Simple toggle next to an attendee's name to mark them as "Arrived."

### 3.3 Payments & Ticketing
* **Platform Model:** The app acts as the marketplace.
* **Split Payments:**
    * User pays Total Amount (e.g., $50).
    * Stripe splits the transaction: Platform Fee (e.g., 5% + $1) goes to App Owner; Remaining balance goes to Organizer.
* **Ticket Receipt:** Email confirmation sent via Stripe or SendGrid.

### 3.4 Discovery & Networking (The Core)
* **Attendee Directory:** A scrollable list of all attendees at the specific event.
* **Smart Sorting:** The list is not random. It prioritizes users with matching tags (e.g., if I am "Tech", show me "Investors" or other "Tech" users first).
* **Filtering:** A manual filter dropdown to sort by Job Title or Industry.
* **Search:** Simple text search for Name or Company.

### 3.5 The "Connect & Swap" Mechanic
* **Action:** User A views User B’s profile and clicks "Connect."
* **State:** User B receives a notification (in-app toast or email).
* **Resolution:**
    * **Pending:** User A sees "Request Sent."
    * **Accepted:** User B accepts. Both users’ "Contact Details" (Email/LinkedIn) become visible to each other.
* **My Connections (Rolodex):** A dedicated tab showing a list of all successful connections across all events.

---

## 4. Technical Specifications

### 4.1 Architecture (PWA)
* **Frontend:** React.js / Next.js.
* **PWA Features:**
    * Manifest.json (Home screen installability).
    * Service Workers (Caching static assets for speed).
* **Database:** PostgreSQL (via Supabase or Neon) or Firebase.

### 4.2 UI/UX Design Constraints
* **Mobile First:** All layouts must be designed for 375px width first. Desktop view is secondary.
* **No "App Store" Barriers:** The onboarding must be instant.

### 4.3 Third-Party Integrations
* **Payments:** Stripe Connect (Express accounts).
* **Email:** Resend or SendGrid.

---

## 5. MVP Scope "Anti-Features" (What we are NOT building)
* **In-App Chat:** Too complex for MVP; moving conversation to Email/LinkedIn is the goal.
* **QR Code Scanning:** Users are already in the app; they can just find the person in the list.
* **Complex Ticketing:** No tiered tickets (VIP/Early Bird) for V1. Single price only.
* **Incognito Mode:** Networking requires visibility.