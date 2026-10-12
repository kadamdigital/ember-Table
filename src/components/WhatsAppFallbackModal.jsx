import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_CONFIG } from '../data/config';
import { generateWhatsAppMessage, generateOrderNumber } from '../utils/helpers';
import { X, MessageSquare, Copy, Check, ExternalLink, HelpCircle } from 'lucide-react';

export const WhatsAppFallbackModal = () => {
  const {
    isWhatsAppFallbackOpen,
    setIsWhatsAppFallbackOpen,
    cartItems,
    finalTotal,
    orderType,
    activeTable
  } = useCart();

  const [testNumber, setTestNumber] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isWhatsAppFallbackOpen) return null;

  // Generate sample message if cart is empty or with current items
  const demoItems = cartItems.length > 0 ? cartItems : [
    { id: 'sample-1', name: 'Ember Truffle Mushroom Burger', price: 399, quantity: 2 },
    { id: 'sample-2', name: 'Molten Chocolate Brownie', price: 199, quantity: 1 }
  ];

  const demoTotal = cartItems.length > 0 ? finalTotal : 997;

  const sampleMessage = generateWhatsAppMessage({
    orderNumber: generateOrderNumber(),
    items: demoItems,
    total: demoTotal,
    orderType: orderType || 'dine-in',
    customerInfo: {
      name: 'Guest Diner',
      phone: '+91 98765 43210',
      tableNumber: activeTable || 'T01',
      address: 'Plot 42, Ember Boulevard'
    }
  });

  const handleCopyMessage = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(sampleMessage);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy message:', err);
    }
  };

  const handleTestWhatsApp = () => {
    const cleanNumber = testNumber.replace(/[^0-9]/g, '');
    if (!cleanNumber) {
      alert('Please enter a valid phone number with country code (e.g. 919876543210).');
      return;
    }
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(sampleMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="modal-overlay" onClick={() => setIsWhatsAppFallbackOpen(false)}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
        {/* Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MessageSquare size={20} style={{ color: '#25D366' }} />
            <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)' }}>
              WhatsApp Ordering Handoff
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setIsWhatsAppFallbackOpen(false)}
            style={{ color: '#888', padding: '4px' }}
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {/* Status Box */}
          <div
            style={{
              backgroundColor: '#FFF9E6',
              border: '1px solid #EEDB9E',
              borderRadius: 'var(--radius-sm)',
              padding: '1rem',
              marginBottom: '1.25rem',
              display: 'flex',
              gap: '10px',
              alignItems: 'flex-start'
            }}
          >
            <HelpCircle size={20} style={{ color: '#A06E0E', flexShrink: 0, marginTop: '2px' }} />
            <div style={{ fontSize: '0.84rem', color: '#684C0C', lineHeight: 1.5 }}>
              <strong>Restaurant WhatsApp Number Unconfigured:</strong> In <code style={{ color: 'var(--color-ember)' }}>src/data/config.js</code>, the restaurant's commercial WhatsApp phone number is currently set to an empty placeholder (<code style={{ color: 'var(--color-ember)' }}>whatsappNumber: ""</code>). Rather than opening a broken WhatsApp link, this safeguard dialog is surfaced.
            </div>
          </div>

          {/* Formatted Message Preview */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
              <label style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#5C584E' }}>
                Prefilled Order Message Preview:
              </label>
              <button
                type="button"
                onClick={handleCopyMessage}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.78rem',
                  color: 'var(--color-ember)',
                  fontWeight: 600
                }}
              >
                {copied ? <Check size={14} style={{ color: '#228B22' }} /> : <Copy size={14} />}
                <span>{copied ? 'Copied!' : 'Copy to Clipboard'}</span>
              </button>
            </div>
            <pre
              style={{
                backgroundColor: '#1C1B18',
                color: '#E6E1D5',
                borderRadius: 'var(--radius-sm)',
                padding: '1rem',
                fontSize: '0.78rem',
                whiteSpace: 'pre-wrap',
                fontFamily: 'monospace',
                maxHeight: '180px',
                overflowY: 'auto',
                lineHeight: 1.5
              }}
            >
              {sampleMessage}
            </pre>
          </div>

          {/* Live Test Playground */}
          <div
            style={{
              backgroundColor: '#F5F0E6',
              borderRadius: 'var(--radius-sm)',
              padding: '1rem',
              border: '1px solid #E5DCC9'
            }}
          >
            <h4 style={{ fontSize: '0.9rem', color: 'var(--color-charcoal)', fontWeight: 700, marginBottom: '0.4rem' }}>
              Test WhatsApp API Handoff
            </h4>
            <p style={{ fontSize: '0.8rem', color: '#6E6B62', marginBottom: '0.75rem' }}>
              Enter any test WhatsApp number with country code (e.g. 919876543210) to verify how WhatsApp opens with this message:
            </p>

            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="text"
                placeholder="e.g. 919876543210"
                value={testNumber}
                onChange={(e) => setTestNumber(e.target.value)}
                className="form-control"
                style={{ fontSize: '0.88rem', padding: '0.55rem 0.85rem' }}
              />
              <button
                type="button"
                onClick={handleTestWhatsApp}
                style={{
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  padding: '0.55rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  whiteSpace: 'nowrap'
                }}
              >
                <ExternalLink size={15} />
                <span>Launch Test</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button
            type="button"
            onClick={() => setIsWhatsAppFallbackOpen(false)}
            className="btn btn-primary btn-sm"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
