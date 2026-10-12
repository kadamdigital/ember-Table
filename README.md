# The Ember Table — Restaurant Website Concept

> **"Good Food. Great Company. Unforgettable Nights."**  
> A self-initiated restaurant website and digital dining experience concept created by **Kadam Digital** to demonstrate modern web design, responsive UX, and frontend engineering.

---

## 1. Overview

**The Ember Table** is a portfolio concept designed and engineered by **Kadam Digital**. It showcases how a modern, design-forward dining establishment—such as a fine-casual grill, modern bistro, gastrobar, or cloud kitchen—can deliver a unified digital presence combining editorial hospitality branding, digital food ordering, table reservations, and contactless table-side ordering.

> **Important Notice:** This is an independent portfolio concept developed by Kadam Digital for demonstration and client presentation purposes. It is **not** a commissioned project for an operating restaurant, nor does it represent an actual physical food business.

---

## 2. Features

Every feature documented below is functional and implemented directly within the frontend codebase:

- **Editorial Restaurant Homepage:** Sizzling visual hero section, editorial typography, clear call-to-action hierarchy, brand philosophy ("More Than a Meal"), and ambient dark/cream contrast.
- **Special Menu Collection:** A curated showcase ("Something Special") featuring signature chef creations (*Ember Truffle Mushroom Burger*, *Smoky BBQ Chicken Wings*, *Creamy Tuscan Pasta*, *Fire-Roasted Paneer Tikka*, *Signature Loaded Fries*, *Molten Chocolate Brownie*) with dietary indicators and instant cart actions.
- **Weekend Vibes Collection:** Energetic group dining and weekend social dishes (*Weekend Loaded Nachos*, *Double Smash Burger*, *Peri-Peri Chicken Bucket*, *Paneer Tikka Wrap*, *Cheesy Garlic Bread*, *Chocolate Shake*, *Classic Virgin Mojito*, *Sharing Dessert Platter*) featuring a dedicated "Build Your Weekend Order" CTA.
- **The GOAT (Greatest Of All Time) Menu:** Iconic crowd favourites presented in a high-contrast dark editorial layout with distinctive *"House Favourite"* tags.
- **Interactive Full Menu & Live Search:** Complete categorized menu browser (*Starters*, *Burgers & Sandwiches*, *Indian-Inspired*, *Mains*, *Pasta*, *Pizza & Flatbreads*, *Sides*, *Desserts*, *Beverages*) with real-time text search, dietary filters (*Pure Veg / Non-Veg*), and empty-state fallbacks.
- **Shopping Cart & Quantity Controls:** Slide-over cart drawer with quantity adjustment steppers, item removal, persistent storage across browser reloads via `localStorage`, and live billing calculation (Item subtotal, 5% GST, packaging fees, and delivery fees).
- **Multi-Mode Demo Food Ordering:**
  - **Delivery:** Captures customer name, phone number, street address, and delivery notes.
  - **Takeaway / Pickup:** Captures customer name, phone number, and preferred pickup window.
  - **Dine-In:** Captures guest name, table identifier, and contact details.
  - Generates realistic printable demo receipts with unique reference numbers (`EMB-XXXXX`).
- **QR-Based Table Identification & Dine-In Flow:** Dedicated contactless dine-in flow encoding table identifiers in the URL (e.g. `/menu?table=T05`). When accessed, the interface automatically detects the table, locks the order mode to Dine-In, and displays a persistent table notification bar.
- **Interactive Table QR Generator:** Generates live, scannable QR codes for tables `T01` through `T05` with "Copy Table Link" and "Simulate Scan" triggers.
- **Table Reservation Form:** Booking interface with input validation, prevention of past-date selection, party size selector (1 to 12+), and seating zone preferences (Indoor Hearth, Outdoor Patio, Bar Counter).
- **Group Dining Enquiry:** Dedicated modal form for private events and gatherings of 8 or more guests.
- **WhatsApp Order Handoff:** Generates a structured, pre-formatted order summary for WhatsApp. If the restaurant's WhatsApp phone number is unconfigured, the application presents a safeguard modal with an interactive test tool and copy-to-clipboard functionality rather than opening a broken link.
- **Responsive Mobile Navigation:** Sticky header with active scroll spy, mobile hamburger menu, live item counter badge, and full keyboard focus accessibility.

---

## 3. Technology Stack

- **Framework:** [React 19](https://react.dev/) (Functional components and Hooks)
- **Build Tool:** [Vite 8](https://vitejs.dev/) (Fast HMR, ES module bundling, Rollup production build)
- **Language:** JavaScript (ES2022+ / JSX)
- **Styling:** Modern CSS3 with CSS custom properties, CSS Grid, Flexbox, and `prefers-reduced-motion` compliance
- **Icons:** [Lucide React](https://lucide.dev/) & custom inline SVGs
- **QR Code Generation:** [qrcode](https://www.npmjs.com/package/qrcode) (Canvas/DataURL QR engine)
- **Deployment Platform:** Optimized for [Vercel](https://vercel.com/) with native SPA routing (`vercel.json`)

---

## 4. Installation and Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0 or higher recommended)
- [npm](https://www.npmjs.com/) (version 9.0 or higher)

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/the-ember-table.git
   cd the-ember-table
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   The application will start at `http://localhost:3000/`.

---

## 5. Production Build & Preview

### Create an optimized production build:
```bash
npm run build
```
This compiles and bundles all assets into the `dist/` directory with code splitting, tree shaking, and CSS minification.

### Preview the production build locally:
```bash
npm run preview
```
Serves the generated `dist/` folder locally to verify production behaviour before deploying.

---

## 6. Configuration & Customization

All restaurant metadata is centralized in [`src/data/config.js`](src/data/config.js) and can optionally be overridden via environment variables:

```javascript
// src/data/config.js
export const RESTAURANT_CONFIG = {
  name: "THE EMBER TABLE",
  tagline: "Good Food. Great Company. Unforgettable Nights.",
  address: "Plot 42, Ember Boulevard, Culinary Arts Quarter, Mumbai 400050 (Concept Location)",
  phone: "+91 98765 43210",
  email: "reservations@theembertable.concept",
  whatsappNumber: "", // Commercial WhatsApp number (e.g. "919876543210")
  hours: {
    weekdays: "Monday – Thursday: 12:00 PM – 11:30 PM",
    weekend: "Friday – Sunday: 12:00 PM – 01:00 AM",
    kitchenClose: "Kitchen closes 45 mins before midnight"
  },
  // Taxes and fees
  gstRate: 0.05,        // 5% GST on dining
  deliveryFee: 49,      // Flat demo delivery fee
  packagingFee: 25      // Packaging charge
};
```

### Environment Variables (.env)
A template is provided in [`.env.example`](.env.example). Copy it to `.env` to customize settings without modifying source files:

```bash
cp .env.example .env
```

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `VITE_WHATSAPP_NUMBER` | Commercial WhatsApp phone number for live order handoff | *(empty — triggers demo fallback)* |
| `VITE_RESTAURANT_PHONE` | Public telephone number displayed across the website | `+91 98765 43210` |
| `VITE_RESTAURANT_EMAIL` | Public inquiries email address | `reservations@theembertable.concept` |

> **Security Note:** All `VITE_` variables are public frontend values exposed to the browser. Do not place secret API keys, database credentials, or private tokens in `.env`.

---

## 7. QR-Code Table Ordering Flow

The application natively supports table identification through URL query parameters:

```
https://your-domain.com/menu?table=T05
```

### How It Works:
1. When a guest scans a physical QR stand, the URL includes their table number (e.g., `table=T05`).
2. The website extracts the table parameter, sets the active table state, and automatically switches the order mode to **Dine-In**.
3. A sticky notification bar confirms: *"You're ordering from Table T05"*.
4. Items added to the cart are tied to that specific table when the guest submits their order.

> **Deployment Guidance for Production Restaurants:**
> Printed physical QR stand codes must encode the restaurant's final production domain (e.g., `https://your-restaurant.com/menu?table=T05`), not a development URL. Always regenerate and test physical QR codes following domain deployment.

---

## 8. Limitations & Backend Integration Roadmap

To provide complete transparency regarding production requirements:

- **Client-Side Simulation:** Order submissions, reservation bookings, and event enquiries are simulated in the browser. In this portfolio edition, orders do not route to physical kitchen display systems (KDS), thermal receipt printers, or external reservation databases.
- **Production Backend Requirements:**
  - **POS / Kitchen Ticket Dispatch:** Connect the checkout handler in `src/components/CheckoutModal.jsx` to a webhook or API (e.g., Petpooja, UrbanPiper, Toast, Square).
  - **Payment Gateway:** Integrate Razorpay, Stripe, or Paytm before checkout confirmation.
  - **Table Reservation Management:** Connect `src/components/ReservationSection.jsx` to a live database or booking API (e.g., OpenTable, SevenRooms) to check real-time table availability.

---

## 9. Project Status & Repository Metadata

- **Concept & Development:** [Kadam Digital](https://github.com/YOUR_USERNAME)
- **Status:** Portfolio Concept Demo
- **License:** MIT License (or custom portfolio rights)

### Suggested GitHub Repository Settings
- **Repository Name:** `the-ember-table`
- **Description:** `Premium restaurant website concept featuring interactive menus, demo ordering, reservations, and QR-based dine-in flows. Built by Kadam Digital.`
- **Topics:** `react`, `vite`, `javascript`, `restaurant-website`, `responsive-design`, `frontend-development`, `portfolio-project`

---

*Crafted with attention to detail by Kadam Digital.*
