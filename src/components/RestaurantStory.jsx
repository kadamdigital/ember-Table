import React from 'react';
import { Flame, Heart, Sparkles, Users } from 'lucide-react';

export const RestaurantStory = () => {
  return (
    <section id="story" className="section-padding theme-cream" style={{ borderBottom: '1px solid #EBE4D5' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Visual Composition with Food Photography */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                position: 'relative'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
                alt="The Ember Table interior dining atmosphere and glowing warmth"
                style={{ width: '100%', height: '440px', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(23,23,21,0.6) 0%, transparent 60%)'
                }}
              />
            </div>

            {/* Overlapping Floating Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '20px',
                backgroundColor: 'var(--color-charcoal)',
                color: 'var(--color-cream)',
                padding: '1.25rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-dark-md)',
                border: '1px solid #383730',
                maxWidth: '240px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Flame size={16} style={{ color: 'var(--color-ember)' }} />
                <span style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-ember)' }}>
                  Living Embers
                </span>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-beige)', lineHeight: 1.4 }}>
                Hardwood charcoal and fragrant spices driving every plate.
              </p>
            </div>
          </div>

          {/* Right Column: Philosophy & Editorial Story */}
          <div>
            <span className="eyebrow">OUR CULINARY ETHOS</span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', marginTop: '0.5rem', marginBottom: '1.5rem', color: 'var(--color-charcoal)' }}>
              More Than a Meal.
            </h2>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#4E4B42', marginBottom: '1.25rem' }}>
              At <strong>The Ember Table</strong>, dining begins around the fire. We believe great food doesn't need to be pretentiously complicated; it needs to be bold, deeply comforting, and prepared with uncompromising respect for ingredients.
            </p>

            <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: '#636056', marginBottom: '2rem' }}>
              From slow-simmered marinades and wood-fired crusts to fiery paneer skewers and decadent molten chocolate, every plate is designed for generous sharing and laughter across the table. Whether you stop by for a quick lunch smash burger or settle in for late-night weekend cocktails, the hearth is always warm.
            </p>

            {/* Core Values Pillars */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(230, 106, 53, 0.12)',
                    color: 'var(--color-ember)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Flame size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-charcoal)', marginBottom: '2px' }}>
                    Flavour Driven
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: '#6A675D', lineHeight: 1.4 }}>
                    Real wood smoke and vibrant spices in every recipe.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(230, 106, 53, 0.12)',
                    color: 'var(--color-ember)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Users size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-charcoal)', marginBottom: '2px' }}>
                    Shared Moments
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: '#6A675D', lineHeight: 1.4 }}>
                    Portions crafted for passing, dipping, and gathering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
