import React from 'react';
import { SPECIAL_MENU } from '../../data/collectionsData';
import { MenuItemCard } from '../MenuItemCard';
import { Sparkles } from 'lucide-react';

export const SpecialMenu = () => {
  return (
    <section id="special-menu" className="section-padding theme-cream" style={{ borderBottom: '1px solid #EBE4D5' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow">
            <Sparkles size={14} style={{ color: 'var(--color-ember)' }} />
            {SPECIAL_MENU.badge}
          </span>
          <h2>{SPECIAL_MENU.title}</h2>
          <p>{SPECIAL_MENU.subtitle}</p>
          <div style={{ marginTop: '0.75rem' }}>
            <span className="concept-badge">Fictional Concept Menu • Signature Series</span>
          </div>
        </div>

        {/* Dishes Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {SPECIAL_MENU.dishes.map((dish) => (
            <MenuItemCard key={dish.id} dish={dish} darkTheme={false} />
          ))}
        </div>
      </div>
    </section>
  );
};
