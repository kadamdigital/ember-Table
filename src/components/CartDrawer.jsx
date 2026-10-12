import React from 'react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/helpers';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Bike, Store, QrCode } from 'lucide-react';

export const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    totalItemCount,
    subtotal,
    gstAmount,
    deliveryFee,
    packagingFee,
    finalTotal,
    orderType,
    setOrderType,
    activeTable,
    updateQuantity,
    removeItem,
    clearCart,
    setIsCheckoutOpen
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <>
      {/* Backdrop */}
      <div className="cart-drawer-overlay" onClick={() => setIsCartOpen(false)} />

      {/* Slide-over Drawer */}
      <aside className="cart-drawer" aria-label="Shopping Cart">
        {/* Header */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid #2B2A25',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#1B1B18'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShoppingBag size={20} style={{ color: 'var(--color-ember)' }} />
            <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--color-cream)' }}>
              Your Order
            </h3>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                backgroundColor: 'var(--color-ember)',
                color: '#FFFFFF',
                padding: '2px 8px',
                borderRadius: '10px'
              }}
            >
              {totalItemCount}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            style={{ color: '#A09C91', padding: '6px' }}
            aria-label="Close cart drawer"
          >
            <X size={22} />
          </button>
        </div>

        {/* Order Type Selector Segmented Controls */}
        <div style={{ padding: '1rem 1.5rem', backgroundColor: '#161614', borderBottom: '1px solid #262520' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px' }}>
            <button
              type="button"
              onClick={() => setOrderType('dine-in')}
              style={{
                padding: '0.55rem 0.25rem',
                borderRadius: 'var(--radius-xs)',
                fontSize: '0.76rem',
                fontWeight: 600,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                backgroundColor: orderType === 'dine-in' ? 'var(--color-ember)' : '#23221E',
                color: orderType === 'dine-in' ? '#FFFFFF' : '#A39F93',
                border: orderType === 'dine-in' ? '1px solid var(--color-ember)' : '1px solid #33322B'
              }}
            >
              <QrCode size={14} />
              <span>Dine-In</span>
            </button>

            <button
              type="button"
              onClick={() => setOrderType('delivery')}
              style={{
                padding: '0.55rem 0.25rem',
                borderRadius: 'var(--radius-xs)',
                fontSize: '0.76rem',
                fontWeight: 600,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                backgroundColor: orderType === 'delivery' ? 'var(--color-ember)' : '#23221E',
                color: orderType === 'delivery' ? '#FFFFFF' : '#A39F93',
                border: orderType === 'delivery' ? '1px solid var(--color-ember)' : '1px solid #33322B'
              }}
            >
              <Bike size={14} />
              <span>Delivery</span>
            </button>

            <button
              type="button"
              onClick={() => setOrderType('takeaway')}
              style={{
                padding: '0.55rem 0.25rem',
                borderRadius: 'var(--radius-xs)',
                fontSize: '0.76rem',
                fontWeight: 600,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                backgroundColor: orderType === 'takeaway' ? 'var(--color-ember)' : '#23221E',
                color: orderType === 'takeaway' ? '#FFFFFF' : '#A39F93',
                border: orderType === 'takeaway' ? '1px solid var(--color-ember)' : '1px solid #33322B'
              }}
            >
              <Store size={14} />
              <span>Takeaway</span>
            </button>
          </div>

          {orderType === 'dine-in' && activeTable && (
            <div
              style={{
                marginTop: '0.75rem',
                backgroundColor: 'rgba(230, 106, 53, 0.12)',
                border: '1px solid rgba(230, 106, 53, 0.3)',
                borderRadius: 'var(--radius-xs)',
                padding: '0.45rem 0.75rem',
                fontSize: '0.78rem',
                color: 'var(--color-cream)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>Linked Table: <strong>{activeTable}</strong></span>
              <span style={{ fontSize: '0.7rem', color: 'var(--color-ember)' }}>QR Connected</span>
            </div>
          )}
        </div>

        {/* Cart Items List */}
        <div style={{ flexGrow: 1, overflowY: 'auto', padding: '1.25rem 1.5rem' }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3.5rem 1rem' }}>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  backgroundColor: '#23221E',
                  color: '#706D63',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem auto'
                }}
              >
                <ShoppingBag size={24} />
              </div>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--color-cream)', fontFamily: 'var(--font-serif)', marginBottom: '0.4rem' }}>
                Your cart is empty
              </h4>
              <p style={{ fontSize: '0.86rem', color: '#888478', marginBottom: '1.5rem' }}>
                Explore our signature charcoal plates and add items to begin.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsCartOpen(false);
                  const menuEl = document.getElementById('full-menu');
                  if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-secondary btn-sm"
              >
                Explore Menu
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: '#1E1E1B',
                    border: '1px solid #2B2A25',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.85rem 1rem',
                    display: 'flex',
                    gap: '0.85rem',
                    alignItems: 'center'
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '56px', height: '56px', borderRadius: '4px', objectFit: 'cover', flexShrink: 0 }}
                  />

                  <div style={{ flexGrow: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span className={`diet-badge ${item.dietary === 'veg' ? 'veg' : 'non-veg'}`} style={{ width: '12px', height: '12px' }} />
                      <h4
                        style={{
                          fontSize: '0.92rem',
                          color: 'var(--color-cream)',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        {item.name}
                      </h4>
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-ember)', fontWeight: 600, marginTop: '2px' }}>
                      {formatPrice(item.price)}
                    </div>
                  </div>

                  {/* Quantity Stepper */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#262521',
                        borderRadius: 'var(--radius-xs)',
                        border: '1px solid #383730'
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={{ padding: '4px 6px', color: '#C0BDB4' }}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span style={{ padding: '0 6px', fontSize: '0.82rem', fontWeight: 700, color: '#FFFFFF' }}>
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{ padding: '4px 6px', color: '#C0BDB4' }}
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      style={{ color: '#8A867B', padding: '4px', marginLeft: '2px' }}
                      aria-label="Remove item"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              ))}

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.25rem' }}>
                <button
                  type="button"
                  onClick={clearCart}
                  style={{ fontSize: '0.75rem', color: '#888478', textDecoration: 'underline' }}
                >
                  Clear all items
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Billing Breakdown */}
        {cartItems.length > 0 && (
          <div
            style={{
              padding: '1.25rem 1.5rem',
              borderTop: '1px solid #2B2A25',
              backgroundColor: '#191916'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.25rem', fontSize: '0.84rem', color: '#A09C91' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Item Subtotal</span>
                <span style={{ color: 'var(--color-cream)' }}>{formatPrice(subtotal)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>GST (5%)</span>
                <span style={{ color: 'var(--color-cream)' }}>{formatPrice(gstAmount)}</span>
              </div>
              {orderType === 'delivery' && (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Delivery Partner Fee</span>
                  <span style={{ color: 'var(--color-cream)' }}>{formatPrice(deliveryFee)}</span>
                </div>
              )}
              {(orderType === 'delivery' || orderType === 'takeaway') && (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Eco-Packaging Fee</span>
                  <span style={{ color: 'var(--color-cream)' }}>{formatPrice(packagingFee)}</span>
                </div>
              )}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingTop: '0.6rem',
                  borderTop: '1px solid #2B2A25',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#FFFFFF'
                }}
              >
                <span>Total Amount</span>
                <span style={{ color: 'var(--color-ember)' }}>{formatPrice(finalTotal)}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCheckoutClick}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.9rem', fontSize: '0.95rem' }}
            >
              <span>Proceed to Details</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </aside>
    </>
  );
};
