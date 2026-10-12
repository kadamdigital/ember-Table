import React from 'react';
import { RESTAURANT_CONFIG } from '../data/config';
import { MENU_CATEGORIES } from '../data/menuData';
import { Flame, Heart, ArrowUp } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TwitterIcon } from './SocialIcons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#0F0F0E',
        color: 'var(--color-cream)',
        borderTop: '1px solid #282824',
        paddingTop: '5rem',
        paddingBottom: '2.5rem'
      }}
    >
      <div className="container">
        {/* Main 4-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(230, 106, 53, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-ember)'
                }}
              >
                <Flame size={18} />
              </div>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 800, letterSpacing: '0.04em' }}>
                {RESTAURANT_CONFIG.name}
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#A09C91', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              "{RESTAURANT_CONFIG.tagline}"
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={RESTAURANT_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#1C1B18',
                  border: '1px solid #33322A',
                  color: 'var(--color-cream)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={RESTAURANT_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#1C1B18',
                  border: '1px solid #33322A',
                  color: 'var(--color-cream)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                aria-label="Facebook"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href={RESTAURANT_CONFIG.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#1C1B18',
                  border: '1px solid #33322A',
                  color: 'var(--color-cream)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                aria-label="Twitter"
              >
                <TwitterIcon size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-ember)', marginBottom: '1.25rem', fontWeight: 700 }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: '#B3AFA5' }}>
              <li>
                <button type="button" onClick={() => scrollToSection('home')} style={{ color: 'inherit' }}>Home</button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection('full-menu')} style={{ color: 'inherit' }}>Interactive Menu</button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection('special-menu')} style={{ color: 'inherit' }}>Special Signatures</button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection('weekend-vibes')} style={{ color: 'inherit' }}>Weekend Vibes</button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection('goat-menu')} style={{ color: 'inherit' }}>The GOAT Menu</button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection('qr-ordering')} style={{ color: 'inherit' }}>Dine-In QR Ordering</button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection('reservations')} style={{ color: 'inherit' }}>Table Reservations</button>
              </li>
            </ul>
          </div>

          {/* Col 3: Menu Categories */}
          <div>
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-ember)', marginBottom: '1.25rem', fontWeight: 700 }}>
              Menu Categories
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#B3AFA5' }}>
              {MENU_CATEGORIES.slice(1, 8).map((cat) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection('full-menu')}
                    style={{ color: 'inherit' }}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Visit & Hours */}
          <div>
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-ember)', marginBottom: '1.25rem', fontWeight: 700 }}>
              Visit The Hearth
            </h4>
            <div style={{ fontSize: '0.85rem', color: '#B3AFA5', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <p>{RESTAURANT_CONFIG.address}</p>
              <p>Phone: <strong style={{ color: 'var(--color-cream)' }}>{RESTAURANT_CONFIG.phone}</strong></p>
              <p>Email: <strong style={{ color: 'var(--color-cream)' }}>{RESTAURANT_CONFIG.email}</strong></p>
              <p style={{ marginTop: '0.5rem', color: '#7E7A70', fontSize: '0.78rem' }}>
                {RESTAURANT_CONFIG.hours.weekdays}
                <br />
                {RESTAURANT_CONFIG.hours.weekend}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Disclaimer */}
        <div
          style={{
            borderTop: '1px solid #24231E',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.82rem',
            color: '#8A867A'
          }}
        >
          <div>
            <span>© {new Date().getFullYear()} THE EMBER TABLE. All rights reserved. </span>
            <strong style={{ color: 'var(--color-cream)' }}>{RESTAURANT_CONFIG.attribution}</strong>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ color: '#6A675D' }}>
              Hospitality Digital Experience Concept
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                color: 'var(--color-ember)',
                fontWeight: 600
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
