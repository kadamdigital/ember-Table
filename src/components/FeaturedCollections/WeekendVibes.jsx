import React from 'react';
import { WEEKEND_VIBES_MENU } from '../../data/collectionsData';
import { MenuItemCard } from '../MenuItemCard';
import { useCart } from '../../context/CartContext';
import { Utensils, PartyPopper } from 'lucide-react';

export const WeekendVibes = () => {
  const { setIsCartOpen } = useCart();

  const handleBuildOrder = () => {
    // Scroll smoothly to menu and open cart or encourage ordering
    const menuEl = document.getElementById('full-menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="weekend-vibes"
      className="section-padding theme-cream"
      style={{
        backgroundColor: '#F9F5EE',
        borderBottom: '1px solid #EBE4D5',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="eyebrow">
            <PartyPopper size={14} style={{ color: 'var(--color-ember)' }} />
            {WEEKEND_VIBES_MENU.badge}
          </span>
          <h2>{WEEKEND_VIBES_MENU.title}</h2>
          <p>{WEEKEND_VIBES_MENU.subtitle}</p>
          <div style={{ marginTop: '0.75rem', display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span className="concept-badge">Friday Nights • Weekend Gatherings • Sharing Platters</span>
          </div>
        </div>

        {/* Feature Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3rem'
          }}
        >
          {WEEKEND_VIBES_MENU.dishes.map((dish) => (
            <MenuItemCard key={dish.id} dish={dish} darkTheme={false} />
          ))}
        </div>

        {/* Call to action */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2.5rem 1.5rem',
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-md)',
            border: '1px solid #E5DCC9',
            boxShadow: 'var(--shadow-sm)',
            maxWidth: '680px',
            margin: '0 auto'
          }}
        >
          <h3
            style={{
              fontSize: '1.5rem',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-charcoal)',
              marginBottom: '0.5rem'
            }}
          >
            Planning a table for your crew?
          </h3>
          <p
            style={{
              fontSize: '0.95rem',
              color: '#656258',
              marginBottom: '1.5rem',
              maxWidth: '480px'
            }}
          >
            Stack your favourites together for delivery, takeaway, or instant table QR ordering at The Ember Table.
          </p>
          <button
            type="button"
            onClick={handleBuildOrder}
            className="btn btn-primary"
            style={{ fontSize: '0.95rem', padding: '0.85rem 2rem' }}
          >
            <Utensils size={18} />
            <span>Build Your Weekend Order</span>
          </button>
        </div>
      </div>
    </section>
  );
};
