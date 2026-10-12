// Restaurant contact configuration & demo settings

export const RESTAURANT_CONFIG = {
  name: "THE EMBER TABLE",
  tagline: "Good Food. Great Company. Unforgettable Nights.",
  editorialLabel: "GOOD FOOD • GREAT COMPANY",
  
  // Contact details (Configurable placeholders)
  address: "Plot 42, Ember Boulevard, Culinary Arts Quarter, Mumbai 400050 (Concept Location)",
  landmark: "Near Grand Promenade",
  phone: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_RESTAURANT_PHONE) || "+91 98765 43210",
  email: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_RESTAURANT_EMAIL) || "reservations@theembertable.concept",
  
  // WhatsApp Configuration:
  // If set to empty string or default placeholder, triggers the helpful fallback dialog.
  // Can be configured via .env (VITE_WHATSAPP_NUMBER) or by editing this property directly.
  whatsappNumber: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_WHATSAPP_NUMBER) || "", // Default: unconfigured for portfolio demo
  
  hours: {
    weekdays: "Monday – Thursday: 12:00 PM – 11:30 PM",
    weekend: "Friday – Sunday: 12:00 PM – 01:00 AM",
    kitchenClose: "Kitchen closes 45 mins before midnight"
  },

  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com"
  },

  demoTables: [
    { id: "T01", name: "Table T01", type: "Indoor High-top Booth", capacity: "2-4 Guests" },
    { id: "T02", name: "Table T02", type: "Garden Patio Table", capacity: "2-4 Guests" },
    { id: "T03", name: "Table T03", type: "Central Dining Banquette", capacity: "4-6 Guests" },
    { id: "T04", name: "Table T04", type: "Open Kitchen Counter", capacity: "2 Guests" },
    { id: "T05", name: "Table T05", type: "Window Lounge Area", capacity: "6-8 Guests" }
  ],

  // Financial demo parameters
  gstRate: 0.05, // 5% GST on dining
  deliveryFee: 49,
  packagingFee: 25,
  minOrderDelivery: 249,

  attribution: "Website concept by Kadam Digital"
};
