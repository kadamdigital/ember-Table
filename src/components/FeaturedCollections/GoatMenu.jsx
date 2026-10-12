import React from 'react';
import { GOAT_MENU } from '../../data/collectionsData';
import { MenuItemCard } from '../MenuItemCard';
import { Flame, Trophy } from 'lucide-react';

export const GoatMenu = () => {
  return (
    <section
      id="goat-menu"
      className="section-padding theme-dark"
      style={{
        backgroundColor: 'var(--color-charcoal)',
        borderBottom: '1px solid #2B2A25',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(230, 106, 53, 0.08) 0%, rgba(23, 23, 21, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(85, 86, 64, 0.15) 0%, rgba(23, 23, 21, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow">
            <Trophy size={14} style={{ color: 'var(--color-ember)' }} />
            {GOAT_MENU.badge}
          </span>
          <h2 style={{ color: 'var(--color-cream)' }}>{GOAT_MENU.title}</h2>
          <p style={{ color: 'var(--color-beige)' }}>{GOAT_MENU.subtitle}</p>
          <div style={{ marginTop: '0.85rem', display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                backgroundColor: 'rgba(230, 106, 53, 0.12)',
                color: 'var(--color-ember)',
                border: '1px solid rgba(230, 106, 53, 0.28)',
                padding: '0.25rem 0.75rem',
                borderRadius: 'var(--radius-xs)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              <Flame size={13} />
              Concept Curation • Greatest Of All Time
            </span>
          </div>
        </div>

        {/* Dishes Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {GOAT_MENU.dishes.map((dish) => (
            <MenuItemCard key={dish.id} dish={dish} darkTheme={true} />
          ))}
        </div>
      </div>
    </section>
  );
};
