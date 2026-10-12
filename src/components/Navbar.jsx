import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Menu, X, Flame, QrCode, Phone, Calendar } from 'lucide-react';

export const Navbar = () => {
  const { totalItemCount, setIsCartOpen, activeTable, clearActiveTable } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = ['home', 'special-menu', 'weekend-vibes', 'goat-menu', 'full-menu', 'qr-ordering', 'reservations', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'full-menu', label: 'Menu' },
    { id: 'special-menu', label: 'Special Menu' },
    { id: 'weekend-vibes', label: 'Weekend Vibes' },
    { id: 'goat-menu', label: 'GOAT Menu' },
    { id: 'qr-ordering', label: 'Dine-In QR' },
    { id: 'reservations', label: 'Reservations' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Table Active Sticky Bar (When ?table=T05 is active) */}
      {activeTable && (
        <aside className="table-active-bar" aria-label="Table order notice">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem' }}>
            <QrCode size={18} />
            <span>You're ordering from <strong className="table-tag">{activeTable}</strong></span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              type="button"
              onClick={() => scrollToSection('full-menu')}
              style={{
                fontSize: '0.78rem',
                textDecoration: 'underline',
                fontWeight: 600,
                color: '#FFFFFF'
              }}
            >
              Browse Table Menu
            </button>
            <button
              type="button"
              onClick={clearActiveTable}
              style={{
                fontSize: '0.72rem',
                backgroundColor: 'rgba(0,0,0,0.25)',
                color: '#FFFFFF',
                padding: '2px 8px',
                borderRadius: '3px'
              }}
              title="Disconnect table session"
            >
              Exit Table Mode
            </button>
          </div>
        </aside>
      )}

      {/* Main Navbar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: 'var(--header-height)',
          backgroundColor: isScrolled ? 'rgba(23, 23, 21, 0.96)' : 'var(--color-charcoal)',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(230, 106, 53, 0.2)' : '1px solid rgba(255, 255, 255, 0.08)',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          {/* Brand Logo Wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none'
            }}
          >
            {/* Minimal Ember flame spark */}
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                backgroundColor: 'rgba(230, 106, 53, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-ember)'
              }}
            >
              <Flame size={20} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  color: 'var(--color-cream)',
                  lineHeight: 1
                }}
              >
                THE EMBER TABLE
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--color-ember)',
                  marginTop: '3px'
                }}
              >
                HEARTH & BAR
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1.4rem'
            }}
            className="desktop-nav"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 500,
                    color: isActive ? 'var(--color-ember)' : 'var(--color-beige)',
                    position: 'relative',
                    padding: '6px 0',
                    transition: 'color var(--transition-fast)'
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--color-ember)',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Cart & Order Now CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            {/* Live Cart Button */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: 'var(--color-cream)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                transition: 'all 0.2s ease'
              }}
              aria-label={`View cart with ${totalItemCount} items`}
            >
              <ShoppingBag size={19} />
              {totalItemCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-6px',
                    right: '-6px',
                    backgroundColor: 'var(--color-ember)',
                    color: '#FFFFFF',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 6px rgba(230, 106, 53, 0.5)'
                  }}
                >
                  {totalItemCount}
                </span>
              )}
            </button>

            {/* "Order Now" Button */}
            <button
              type="button"
              onClick={() => scrollToSection('full-menu')}
              className="btn btn-primary btn-sm"
              style={{ display: 'none' }}
              id="header-order-btn"
            >
              Order Now
            </button>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: 'var(--color-cream)',
                border: '1px solid rgba(255, 255, 255, 0.12)'
              }}
              className="mobile-menu-toggle"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              position: 'fixed',
              top: 'var(--header-height)',
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(23, 23, 21, 0.98)',
              backdropFilter: 'blur(12px)',
              padding: '2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              overflowY: 'auto',
              zIndex: 49
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                style={{
                  fontSize: '1.2rem',
                  fontFamily: 'var(--font-serif)',
                  color: activeSection === link.id ? 'var(--color-ember)' : 'var(--color-cream)',
                  textAlign: 'left',
                  padding: '0.6rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.06)'
                }}
              >
                {link.label}
              </button>
            ))}

            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToSection('reservations');
                }}
                className="btn btn-secondary"
                style={{ width: '100%' }}
              >
                <Calendar size={16} />
                <span>Book a Table</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToSection('full-menu');
                }}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <Flame size={16} />
                <span>Order Now</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Media query styling for responsive nav */}
      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          #header-order-btn {
            display: inline-flex !important;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
