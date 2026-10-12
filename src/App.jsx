import React, { useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpecialMenu } from './components/FeaturedCollections/SpecialMenu';
import { WeekendVibes } from './components/FeaturedCollections/WeekendVibes';
import { GoatMenu } from './components/FeaturedCollections/GoatMenu';
import { MenuBrowser } from './components/MenuBrowser';
import { QRTableOrdering } from './components/QRTableOrdering';
import { ReservationSection } from './components/ReservationSection';
import { ServiceOptions } from './components/ServiceOptions';
import { RestaurantStory } from './components/RestaurantStory';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { WhatsAppFallbackModal } from './components/WhatsAppFallbackModal';
import { GroupDiningModal } from './components/GroupDiningModal';
import { Sparkles } from 'lucide-react';

function RestaurantApp() {
  // Handle /menu route pattern
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.pathname.includes('/menu')) {
      const el = document.getElementById('full-menu');
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 300);
      }
    }
  }, []);

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Portfolio Demo Notice Top Bar */}
      <div className="demo-disclaimer-banner">
        <Sparkles size={13} style={{ color: 'var(--color-ember)' }} />
        <span>
          <strong>Kadam Digital Portfolio Concept:</strong> The Ember Table Digital Hospitality Experience • Client-side demo ordering & reservations
        </span>
      </div>

      {/* Main Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main id="main-content" style={{ flexGrow: 1 }}>
        <Hero />
        <SpecialMenu />
        <WeekendVibes />
        <GoatMenu />
        <MenuBrowser />
        <QRTableOrdering />
        <ReservationSection />
        <ServiceOptions />
        <RestaurantStory />
        <GallerySection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Drawers & Modals */}
      <CartDrawer />
      <CheckoutModal />
      <OrderConfirmationModal />
      <WhatsAppFallbackModal />
      <GroupDiningModal />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <RestaurantApp />
    </CartProvider>
  );
}
