SAMUI CONCIERGE — PARTNER BOOKING SYSTEM

START
1. Create .env in this folder:
   TELEGRAM_BOT_TOKEN=YOUR_CURRENT_BOT_TOKEN
   TELEGRAM_CHAT_ID=YOUR_PERSONAL_CHAT_ID
   PORT=3000
2. Run once:
   npm install
3. Start:
   npm start
4. Open http://localhost:3000

TELEGRAM TEST
Log in at /admin-dashboard.html first, then open /api/telegram-status and /api/telegram-test (admin only).
The second endpoint sends a test message. A booking is only saved after Telegram confirms delivery.

PARTNERS
Open http://localhost:3000/admin-dashboard.html
Add your real partners there. Nothing is invented in the partner catalog.
For each partner you can store:
- partner name
- category and service offered
- client-facing photo and description
- internal Telegram
- price-from reference
- commission percentage
- zones
- active/hidden status
- optional custom booking fields

SMART BOOKING FLOWS
Restaurant Booking: date, time, guests, seating, occasion, dietary requirements.
Villa Search: check-in, check-out, guests, bedrooms, budget, villa type.
Boat services: date, departure time, guests, duration, boat/group size, pickup, trip style.
Scooter/Motorbike: start date, duration, bike class, quantity, delivery, helmets, rider notes.
Car Rental: start date, duration, vehicle, quantity, delivery.
Private Van: date, pickup time, passengers, pickup, drop-off, luggage.
Airport Transfer: arrival date/time, flight number, passengers, pickup, destination/villa, luggage.
Private Driver: date, time, duration, passengers, pickup, stops/itinerary.

CUSTOM FIELDS
A partner can define extra fields in the admin form as JSON. Example:
[["table_area","Table area","select",false,["Indoor","Terrace","Beachfront"]]]
Field format: [name,label,type,required,options]
Types supported: text, date, time, number, select.

CLIENT FLOW
The client chooses a service. If matching partners exist, partner cards appear. The client selects one and completes the relevant details. The server sends a structured request to Telegram containing the selected partner and all collected details. The booking is saved only after Telegram accepts the message.


PARTNER REGISTRATION
Public application: http://localhost:3000/partner-apply.html
Private approval dashboard: http://localhost:3000/admin-dashboard.html
Set ADMIN_PASSWORD in .env. Applications remain pending until approved.


SEO BUSINESS PAGES
Approved partners automatically get an indexable page at /business/<business-name>-koh-samui and are included in sitemap.xml.


PARTNER APPROVAL VIA TELEGRAM
Each new partner application is sent to Telegram with all details and OUI / NON buttons.
Replying OUI publishes the partner, NON rejects it. See TELEGRAM-SETUP.txt.

LANGUAGES (FR / TH / EN)
The public site (home, partner pages, partner application, 404) is available in French, Thai and English.
The language is auto-detected from the visitor's browser and can be switched with the FR | TH | EN selector (saved in the browser).
Links: add ?lang=fr, ?lang=th or ?lang=en to force a language. All texts live in public/i18n.js.
Service names/descriptions stay in English in data/services.json (partners and bookings rely on them); translations are applied on screen only.
