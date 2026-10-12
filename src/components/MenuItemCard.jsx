import React, { useState } from 'react';
import { Plus, Minus, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/helpers';

export const MenuItemCard = ({ dish, darkTheme = false }) => {
  const { addItem, updateQuantity, getItemQuantity } = useCart();
  const quantity = getItemQuantity(dish.id);
  const [justAdded, setJustAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleAdd = () => {
    addItem(dish, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  // Safe fallback image for food
  const fallbackImage = 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80';

  return (
    <article
      className={`dish-card ${darkTheme ? 'card-dark' : 'card-light'}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        border: darkTheme ? '1px solid #2B2A25' : '1px solid #EBE4D5',
        backgroundColor: darkTheme ? 'var(--color-charcoal-card)' : '#FFFFFF',
        transition: 'transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal)',
        height: '100%'
      }}
    >
      {/* Image container */}
      <div style={{ position: 'relative', width: '100%', height: '210px', overflow: 'hidden', backgroundColor: '#201F1B' }}>
        <img
          src={imgError ? fallbackImage : dish.image}
          alt={dish.name}
          onError={() => setImgError(true)}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
          className="dish-card-img"
        />
        
        {/* Floating Badges */}
        <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '6px', alignItems: 'center' }}>
          <span className={`diet-badge ${dish.dietary === 'veg' ? 'veg' : 'non-veg'}`} title={dish.dietary === 'veg' ? 'Vegetarian' : 'Contains Non-Vegetarian'}></span>
          {dish.tag && (
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                padding: '2px 8px',
                borderRadius: '3px',
                backgroundColor: 'rgba(23, 23, 21, 0.85)',
                color: 'var(--color-cream)',
                backdropFilter: 'blur(4px)'
              }}
            >
              {dish.tag}
            </span>
          )}
        </div>

        {dish.goatRank && (
          <span
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              fontSize: '0.75rem',
              fontWeight: 800,
              backgroundColor: 'var(--color-ember)',
              color: '#FFFFFF',
              padding: '2px 8px',
              borderRadius: '3px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
            }}
          >
            {dish.goatRank}
          </span>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <h3
            style={{
              fontSize: '1.15rem',
              fontWeight: 700,
              fontFamily: 'var(--font-serif)',
              lineHeight: 1.25,
              color: darkTheme ? 'var(--color-cream)' : 'var(--color-charcoal)'
            }}
          >
            {dish.name}
          </h3>
          <span
            style={{
              fontSize: '1.1rem',
              fontWeight: 700,
              color: 'var(--color-ember)',
              whiteSpace: 'nowrap',
              fontFamily: 'var(--font-sans)'
            }}
          >
            {formatPrice(dish.price)}
          </span>
        </div>

        <p
          style={{
            fontSize: '0.88rem',
            color: darkTheme ? '#A8A49A' : '#6B685F',
            lineHeight: 1.5,
            marginBottom: '1.25rem',
            flexGrow: 1
          }}
        >
          {dish.description}
        </p>

        {/* Action Button */}
        <div style={{ paddingTop: '0.75rem', borderTop: darkTheme ? '1px solid #282723' : '1px solid #F0EAE1', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: darkTheme ? '#7E7A70' : '#8C887E', fontWeight: 600 }}>
            {dish.dietary === 'veg' ? 'Pure Veg' : 'Non-Veg'}
          </span>

          {quantity > 0 ? (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: 'var(--color-ember)',
                borderRadius: 'var(--radius-sm)',
                padding: '2px 4px',
                color: '#FFFFFF'
              }}
            >
              <button
                type="button"
                onClick={() => updateQuantity(dish.id, quantity - 1)}
                style={{ padding: '4px 8px', color: '#FFFFFF', display: 'flex', alignItems: 'center' }}
                aria-label={`Decrease quantity of ${dish.name}`}
              >
                <Minus size={14} />
              </button>
              <span style={{ padding: '0 8px', fontWeight: 700, fontSize: '0.85rem' }}>{quantity}</span>
              <button
                type="button"
                onClick={() => updateQuantity(dish.id, quantity + 1)}
                style={{ padding: '4px 8px', color: '#FFFFFF', display: 'flex', alignItems: 'center' }}
                aria-label={`Increase quantity of ${dish.name}`}
              >
                <Plus size={14} />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleAdd}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '0.45rem 0.95rem',
                fontSize: '0.82rem',
                fontWeight: 600,
                borderRadius: 'var(--radius-sm)',
                backgroundColor: justAdded ? '#228B22' : 'var(--color-ember)',
                color: '#FFFFFF',
                boxShadow: '0 2px 8px rgba(230, 106, 53, 0.25)',
                transition: 'all 0.2s ease'
              }}
              aria-label={`Add ${dish.name} to order`}
            >
              {justAdded ? (
                <>
                  <Check size={14} />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <Plus size={14} />
                  <span>Add</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
