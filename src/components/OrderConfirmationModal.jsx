import React from 'react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/helpers';
import { CheckCircle2, X, Printer, ArrowLeft, QrCode, Bike, Store, ShieldCheck } from 'lucide-react';

export const OrderConfirmationModal = () => {
  const { isConfirmationOpen, setIsConfirmationOpen, confirmedOrder } = useCart();

  if (!isConfirmationOpen || !confirmedOrder) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleClose = () => {
    setIsConfirmationOpen(false);
  };

  const {
    orderNumber,
    items,
    subtotal,
    gstAmount,
    deliveryFee,
    packagingFee,
    total,
    orderType,
    customerInfo,
    timestamp,
    date
  } = confirmedOrder;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '620px' }}>
        {/* Header */}
        <div className="modal-header" style={{ backgroundColor: '#FAF7F2' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="concept-badge">Portfolio Concept Demo</span>
            </div>
            <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginTop: '4px' }}>
              Order Receipt #{orderNumber}
            </h3>
          </div>
          <button
            type="button"
            onClick={handleClose}
            style={{ color: '#888', padding: '4px' }}
            aria-label="Close receipt"
          >
            <X size={20} />
          </button>
        </div>

        {/* Receipt Body */}
        <div className="modal-body" style={{ padding: '1.75rem' }}>
          {/* Success Banner */}
          <div
            style={{
              backgroundColor: 'rgba(34, 139, 34, 0.08)',
              border: '1px solid rgba(34, 139, 34, 0.25)',
              borderRadius: 'var(--radius-sm)',
              padding: '1rem',
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}
          >
            <CheckCircle2 size={28} style={{ color: '#228B22', flexShrink: 0 }} />
            <div>
              <h4 style={{ fontSize: '1rem', color: '#1B6B1B', fontWeight: 700 }}>
                Demo Order Placed Successfully
              </h4>
              <p style={{ fontSize: '0.82rem', color: '#3A703A', lineHeight: 1.4 }}>
                Your client-side order simulation is confirmed. No charges have occurred.
              </p>
            </div>
          </div>

          {/* Order Details Grid */}
          <div
            style={{
              backgroundColor: '#FAF7F2',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid #EBE4D5',
              padding: '1.25rem',
              marginBottom: '1.5rem',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.85rem',
              fontSize: '0.86rem'
            }}
          >
            <div>
              <span style={{ fontSize: '0.72rem', color: '#7E7A70', textTransform: 'uppercase' }}>Service Mode</span>
              <p style={{ fontWeight: 700, color: 'var(--color-charcoal)', textTransform: 'uppercase' }}>
                {orderType === 'dine-in' ? `Dine-In (${customerInfo.tableNumber})` : orderType}
              </p>
            </div>

            <div>
              <span style={{ fontSize: '0.72rem', color: '#7E7A70', textTransform: 'uppercase' }}>Date & Time</span>
              <p style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>{date} at {timestamp}</p>
            </div>

            <div>
              <span style={{ fontSize: '0.72rem', color: '#7E7A70', textTransform: 'uppercase' }}>Customer Name</span>
              <p style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>{customerInfo.name}</p>
            </div>

            {customerInfo.phone && (
              <div>
                <span style={{ fontSize: '0.72rem', color: '#7E7A70', textTransform: 'uppercase' }}>Phone</span>
                <p style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>{customerInfo.phone}</p>
              </div>
            )}

            {orderType === 'delivery' && (
              <div style={{ gridColumn: '1 / -1', borderTop: '1px solid #E5DCC9', paddingTop: '0.6rem' }}>
                <span style={{ fontSize: '0.72rem', color: '#7E7A70', textTransform: 'uppercase' }}>Delivery Destination</span>
                <p style={{ fontWeight: 500, color: 'var(--color-charcoal)' }}>{customerInfo.address}</p>
                {customerInfo.instructions && (
                  <p style={{ fontSize: '0.78rem', color: '#6A675E', marginTop: '2px' }}>
                    Note: {customerInfo.instructions}
                  </p>
                )}
              </div>
            )}

            {orderType === 'takeaway' && (
              <div style={{ gridColumn: '1 / -1', borderTop: '1px solid #E5DCC9', paddingTop: '0.6rem' }}>
                <span style={{ fontSize: '0.72rem', color: '#7E7A70', textTransform: 'uppercase' }}>Pickup Window</span>
                <p style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>{customerInfo.pickupTime}</p>
              </div>
            )}
          </div>

          {/* Itemized List */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '0.9rem', color: '#5C584E', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.75rem', fontWeight: 700 }}>
              Ordered Items
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid #ECE5D8',
                    fontSize: '0.9rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className={`diet-badge ${item.dietary === 'veg' ? 'veg' : 'non-veg'}`} style={{ width: '12px', height: '12px' }} />
                    <span style={{ color: 'var(--color-charcoal)', fontWeight: 600 }}>{item.name}</span>
                    <span style={{ color: '#888', fontSize: '0.82rem' }}>x{item.quantity}</span>
                  </div>
                  <span style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bill Breakdown */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
              fontSize: '0.86rem',
              color: '#656257',
              marginBottom: '1.5rem',
              paddingTop: '0.5rem',
              borderTop: '1px solid #E0D6C3'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>GST (5%)</span>
              <span>{formatPrice(gstAmount)}</span>
            </div>
            {deliveryFee > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Delivery Fee</span>
                <span>{formatPrice(deliveryFee)}</span>
              </div>
            )}
            {packagingFee > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Packaging Fee</span>
                <span>{formatPrice(packagingFee)}</span>
              </div>
            )}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '0.6rem',
                borderTop: '1px solid #D6CBB8',
                fontSize: '1.15rem',
                fontWeight: 700,
                color: 'var(--color-charcoal)'
              }}
            >
              <span>Total Simulated Bill</span>
              <span style={{ color: 'var(--color-ember)' }}>{formatPrice(total)}</span>
            </div>
          </div>

          {/* Portfolio Transparency Statement */}
          <div
            style={{
              backgroundColor: '#F5EFE4',
              borderRadius: 'var(--radius-sm)',
              padding: '0.85rem 1rem',
              fontSize: '0.78rem',
              color: '#6D695D',
              lineHeight: 1.5,
              marginBottom: '1.75rem'
            }}
          >
            <strong>Hospitality Portfolio Architecture:</strong> In production deployments, this checkout triggers a webhook to an ERP/POS system (e.g. Petpooja, UrbanPiper, Toast) and routes delivery tasks to courier logistics APIs (e.g. Dunzo, Shadowfax).
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={handlePrint}
              className="btn btn-outline-dark btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <Printer size={15} />
              <span>Print Slip</span>
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="btn btn-primary btn-sm"
            >
              Back to Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
