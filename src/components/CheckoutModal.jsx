import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_CONFIG } from '../data/config';
import { formatPrice, generateOrderNumber, generateWhatsAppMessage } from '../utils/helpers';
import { X, Bike, Store, QrCode, MessageSquare, CheckCircle, ArrowRight, AlertCircle, ShoppingBag } from 'lucide-react';

export const CheckoutModal = () => {
  const {
    cartItems,
    isCheckoutOpen,
    setIsCheckoutOpen,
    orderType,
    setOrderType,
    activeTable,
    subtotal,
    gstAmount,
    deliveryFee,
    packagingFee,
    finalTotal,
    clearCart,
    setConfirmedOrder,
    setIsConfirmationOpen,
    setIsWhatsAppFallbackOpen
  } = useCart();

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    instructions: '',
    pickupTime: 'In 25-35 mins',
    tableNumber: activeTable || 'T01'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync tableNumber if activeTable changes
  useEffect(() => {
    if (activeTable) {
      setFormData(prev => ({ ...prev, tableNumber: activeTable }));
    }
  }, [activeTable]);

  if (!isCheckoutOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    
    if (orderType === 'delivery') {
      if (!formData.phone.trim()) errs.phone = 'Phone number is required for delivery.';
      if (!formData.address.trim()) errs.address = 'Full delivery address is required.';
    } else if (orderType === 'takeaway') {
      if (!formData.phone.trim()) errs.phone = 'Phone number is required for pickup notification.';
      if (!formData.pickupTime) errs.pickupTime = 'Select preferred pickup time.';
    } else if (orderType === 'dine-in') {
      if (!formData.tableNumber.trim()) errs.tableNumber = 'Table number is required.';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handlePlaceDemoOrder = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      const orderNumber = generateOrderNumber();
      const orderSummary = {
        orderNumber,
        items: [...cartItems],
        subtotal,
        gstAmount,
        deliveryFee,
        packagingFee,
        total: finalTotal,
        orderType,
        customerInfo: { ...formData },
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
      };

      setConfirmedOrder(orderSummary);
      clearCart();
      setIsSubmitting(false);
      setIsCheckoutOpen(false);
      setIsConfirmationOpen(true);
    }, 600);
  };

  const handleWhatsAppHandoff = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const orderNumber = generateOrderNumber();
    const orderData = {
      orderNumber,
      items: cartItems,
      total: finalTotal,
      orderType,
      customerInfo: formData
    };

    const isConfigured = Boolean(
      RESTAURANT_CONFIG.whatsappNumber &&
      RESTAURANT_CONFIG.whatsappNumber.trim() !== '' &&
      !RESTAURANT_CONFIG.whatsappNumber.includes('0000000000')
    );

    if (!isConfigured) {
      // Trigger the WhatsApp fallback explanation modal
      setIsWhatsAppFallbackOpen(true);
    } else {
      // Open WhatsApp with pre-filled message
      const msg = generateWhatsAppMessage(orderData);
      const url = `https://wa.me/${RESTAURANT_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="modal-overlay" onClick={() => setIsCheckoutOpen(false)}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        {/* Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShoppingBag size={20} style={{ color: 'var(--color-ember)' }} />
            <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)' }}>
              Complete Your Order
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setIsCheckoutOpen(false)}
            style={{ color: '#888', padding: '4px' }}
            aria-label="Close checkout"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="modal-body">
          {/* Order Type Toggle */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#55524A', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Selected Order Mode:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
              <button
                type="button"
                onClick={() => setOrderType('dine-in')}
                style={{
                  padding: '0.65rem 0.5rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  backgroundColor: orderType === 'dine-in' ? 'var(--color-charcoal)' : '#F2ECE1',
                  color: orderType === 'dine-in' ? '#FFFFFF' : 'var(--color-charcoal)',
                  border: orderType === 'dine-in' ? '1px solid var(--color-charcoal)' : '1px solid #DFD5C3'
                }}
              >
                <QrCode size={15} />
                <span>Dine-In</span>
              </button>

              <button
                type="button"
                onClick={() => setOrderType('delivery')}
                style={{
                  padding: '0.65rem 0.5rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  backgroundColor: orderType === 'delivery' ? 'var(--color-charcoal)' : '#F2ECE1',
                  color: orderType === 'delivery' ? '#FFFFFF' : 'var(--color-charcoal)',
                  border: orderType === 'delivery' ? '1px solid var(--color-charcoal)' : '1px solid #DFD5C3'
                }}
              >
                <Bike size={15} />
                <span>Delivery</span>
              </button>

              <button
                type="button"
                onClick={() => setOrderType('takeaway')}
                style={{
                  padding: '0.65rem 0.5rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  backgroundColor: orderType === 'takeaway' ? 'var(--color-charcoal)' : '#F2ECE1',
                  color: orderType === 'takeaway' ? '#FFFFFF' : 'var(--color-charcoal)',
                  border: orderType === 'takeaway' ? '1px solid var(--color-charcoal)' : '1px solid #DFD5C3'
                }}
              >
                <Store size={15} />
                <span>Takeaway</span>
              </button>
            </div>
          </div>

          {/* Dynamic Form based on Order Type */}
          <form onSubmit={handlePlaceDemoOrder}>
            {orderType === 'dine-in' && (
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label>Guest Name *</label>
                    <input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Yash Kadam"
                      className="form-control"
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label>Table Stand Number *</label>
                    <select
                      name="tableNumber"
                      value={formData.tableNumber}
                      onChange={handleChange}
                      className="form-control"
                    >
                      {RESTAURANT_CONFIG.demoTables.map(t => (
                        <option key={t.id} value={t.id}>{t.name} ({t.type})</option>
                      ))}
                    </select>
                    {errors.tableNumber && <span className="form-error">{errors.tableNumber}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label>Mobile Number (Optional for order SMS receipt)</label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="form-control"
                  />
                </div>
              </div>
            )}

            {orderType === 'delivery' && (
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label>Recipient Name *</label>
                    <input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Yash Kadam"
                      className="form-control"
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label>Contact Phone Number *</label>
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="form-control"
                    />
                    {errors.phone && <span className="form-error">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label>Complete Delivery Address *</label>
                  <textarea
                    name="address"
                    rows="2"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Flat/House number, building name, street, locality, landmark"
                    className="form-control"
                  ></textarea>
                  {errors.address && <span className="form-error">{errors.address}</span>}
                </div>

                <div className="form-group">
                  <label>Delivery Instructions (Optional)</label>
                  <input
                    name="instructions"
                    type="text"
                    value={formData.instructions}
                    onChange={handleChange}
                    placeholder="e.g. Leave with security, ring doorbell twice"
                    className="form-control"
                  />
                </div>
              </div>
            )}

            {orderType === 'takeaway' && (
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Yash Kadam"
                      className="form-control"
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label>Mobile Number *</label>
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="form-control"
                    />
                    {errors.phone && <span className="form-error">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label>Preferred Pickup Window *</label>
                  <select
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="In 20-30 mins">As soon as ready (20-30 mins)</option>
                    <option value="In 45 mins">In 45 mins</option>
                    <option value="In 60 mins">In 1 hour</option>
                    <option value="This Evening at 08:00 PM">This Evening at 08:00 PM</option>
                  </select>
                </div>
              </div>
            )}

            {/* Bill Summary Strip */}
            <div
              style={{
                backgroundColor: '#FAF7F0',
                border: '1px solid #EBE3D3',
                borderRadius: 'var(--radius-sm)',
                padding: '1rem',
                marginTop: '1rem',
                marginBottom: '1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <span style={{ fontSize: '0.8rem', color: '#7A766A', textTransform: 'uppercase' }}>
                  {cartItems.length} items to order
                </span>
                <p style={{ fontSize: '0.86rem', color: 'var(--color-charcoal)', fontWeight: 600 }}>
                  Subtotal: {formatPrice(subtotal)} + Taxes/Fees
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.75rem', color: '#7A766A', textTransform: 'uppercase' }}>Final Bill</span>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-ember)' }}>
                  {formatPrice(finalTotal)}
                </div>
              </div>
            </div>

            {/* Simulation Notice */}
            <div
              style={{
                backgroundColor: '#FFF9E6',
                border: '1px solid #F2E3B3',
                borderRadius: 'var(--radius-xs)',
                padding: '0.75rem 1rem',
                fontSize: '0.78rem',
                color: '#7C5C0C',
                lineHeight: 1.45,
                marginBottom: '1.5rem',
                display: 'flex',
                gap: '8px',
                alignItems: 'flex-start'
              }}
            >
              <AlertCircle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Portfolio Simulation:</strong> No payment gateway transaction or actual restaurant kitchen transmission will be made. You will receive a realistic demo order receipt.
              </div>
            </div>

            {/* Action Buttons: Demo Order & WhatsApp Order */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.9rem' }}
              >
                <span>{isSubmitting ? 'Generating Demo Order...' : 'Submit Demo Order'}</span>
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                onClick={handleWhatsAppHandoff}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  transition: 'background-color 0.2s ease'
                }}
              >
                <MessageSquare size={17} />
                <span>Send Order via WhatsApp Handoff</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
