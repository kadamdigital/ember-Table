import React from 'react';
import { ArrowDown, Calendar, Flame, Utensils, QrCode } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../data/config';

export const Hero = () => {
  const scrollToMenu = () => {
    const el = document.getElementById('full-menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToReservations = () => {
    const el = document.getElementById('reservations');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - var(--header-height))',
        backgroundColor: 'var(--color-charcoal)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        padding: '3.5rem 0'
      }}
    >
      {/* Background Photography with Warm Ambient Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=85"
          alt="Charcoal grilled steaks and burgers sizzling over glowing embers"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
            filter: 'brightness(0.38) contrast(1.15)'
          }}
        />
        {/* Cinematic Vignette */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 70% 50%, rgba(230, 106, 53, 0.12) 0%, rgba(23, 23, 21, 0.88) 75%)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, var(--color-charcoal) 0%, transparent 40%, rgba(23, 23, 21, 0.6) 100%)'
          }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ maxWidth: '780px' }}>
          {/* Editorial Label */}
          <div style={{ marginBottom: '1.25rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--color-ember)',
                backgroundColor: 'rgba(230, 106, 53, 0.12)',
                border: '1px solid rgba(230, 106, 53, 0.3)',
                padding: '0.35rem 0.95rem',
                borderRadius: 'var(--radius-full)'
              }}
            >
              <Flame size={14} />
              {RESTAURANT_CONFIG.editorialLabel}
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.8rem, 6.5vw, 4.8rem)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-cream)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
              textShadow: '0 4px 20px rgba(0,0,0,0.5)'
            }}
          >
            Come Hungry.
            <br />
            <span style={{ color: 'var(--color-ember)' }}>Leave Happy.</span>
          </h1>

          {/* Supporting Copy */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
              color: 'var(--color-beige)',
              lineHeight: 1.6,
              maxWidth: '600px',
              marginBottom: '2.5rem',
              fontWeight: 400,
              textShadow: '0 2px 8px rgba(0,0,0,0.4)'
            }}
          >
            From signature plates to late-night cravings, discover food worth gathering for.
          </p>

          {/* Dual CTAs */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              alignItems: 'center',
              marginBottom: '3.5rem'
            }}
          >
            <button
              type="button"
              onClick={scrollToMenu}
              className="btn btn-primary btn-lg"
            >
              <Utensils size={18} />
              <span>Explore The Menu</span>
            </button>

            <button
              type="button"
              onClick={scrollToReservations}
              className="btn btn-secondary btn-lg"
            >
              <Calendar size={18} />
              <span>Book Your Table</span>
            </button>
          </div>

          {/* Feature Badges Bar */}
          <div
            style={{
              display: 'flex',
              gap: '1.75rem',
              flexWrap: 'wrap',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.12)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-ember)' }} />
              <span style={{ fontSize: '0.85rem', color: '#D6C8B5', fontWeight: 600 }}>
                Charcoal Embers & Open Hearth
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-ember)' }} />
              <span style={{ fontSize: '0.85rem', color: '#D6C8B5', fontWeight: 600 }}>
                Contactless Dine-In QR Tables
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-ember)' }} />
              <span style={{ fontSize: '0.85rem', color: '#D6C8B5', fontWeight: 600 }}>
                Delivery, Takeaway & Table Booking
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
