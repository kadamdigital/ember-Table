import React, { useState } from 'react';
import { RESTAURANT_CONFIG } from '../data/config';
import { useCart } from '../context/CartContext';
import { MapPin, Phone, MessageSquare, Mail, Clock, ExternalLink, Settings2, Check } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TwitterIcon } from './SocialIcons';

export const ContactSection = () => {
  const { setIsWhatsAppFallbackOpen } = useCart();
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (field, text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  const isWhatsAppConfigured = Boolean(
    RESTAURANT_CONFIG.whatsappNumber &&
    RESTAURANT_CONFIG.whatsappNumber.trim() !== '' &&
    !RESTAURANT_CONFIG.whatsappNumber.includes('0000000000')
  );

  return (
    <section id="contact" className="section-padding theme-cream" style={{ borderBottom: '1px solid #EBE4D5' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="eyebrow">LOCATION & COMMERCE</span>
          <h2>Find The Hearth</h2>
          <p>
            Drop by for an evening of warm hospitality, or connect with our restaurant managers for orders, bookings, and catering.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Business Details Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Address */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5DCC9',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(230, 106, 53, 0.1)',
                  color: 'var(--color-ember)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <MapPin size={20} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#827E73' }}>
                  Address (Configurable Placeholder)
                </span>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--color-charcoal)', fontFamily: 'var(--font-serif)', margin: '4px 0' }}>
                  The Ember Table Lounge & Hearth
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#5C584E', lineHeight: 1.5 }}>
                  {RESTAURANT_CONFIG.address}
                </p>
                <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span className="concept-badge">Portfolio Concept Address</span>
                </div>
              </div>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5DCC9',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.25rem'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-ember)', marginBottom: '4px' }}>
                  <Phone size={16} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>Phone</span>
                </div>
                <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-charcoal)' }}>
                  {RESTAURANT_CONFIG.phone}
                </p>
                <button
                  type="button"
                  onClick={() => handleCopy('phone', RESTAURANT_CONFIG.phone)}
                  style={{ fontSize: '0.75rem', color: 'var(--color-ember)', fontWeight: 600, marginTop: '4px' }}
                >
                  {copiedField === 'phone' ? 'Copied!' : 'Copy Phone'}
                </button>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#25D366', marginBottom: '4px' }}>
                  <MessageSquare size={16} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>WhatsApp</span>
                </div>
                <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-charcoal)' }}>
                  {isWhatsAppConfigured ? RESTAURANT_CONFIG.whatsappNumber : 'Not Configured'}
                </p>
                <button
                  type="button"
                  onClick={() => setIsWhatsAppFallbackOpen(true)}
                  style={{ fontSize: '0.75rem', color: 'var(--color-ember)', fontWeight: 600, marginTop: '4px' }}
                >
                  Configure / Test Flow
                </button>
              </div>
            </div>

            {/* Hours */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5DCC9',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(85, 86, 64, 0.12)',
                  color: 'var(--color-olive)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Clock size={20} />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#827E73' }}>
                  Dining Hours
                </span>
                <div style={{ marginTop: '4px', fontSize: '0.9rem', color: 'var(--color-charcoal)', lineHeight: 1.6 }}>
                  <p><strong>Weekdays:</strong> {RESTAURANT_CONFIG.hours.weekdays}</p>
                  <p><strong>Weekend:</strong> {RESTAURANT_CONFIG.hours.weekend}</p>
                  <p style={{ fontSize: '0.8rem', color: '#7E7A70', marginTop: '4px' }}>{RESTAURANT_CONFIG.hours.kitchenClose}</p>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5DCC9',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-charcoal)' }}>
                Follow The Flame:
              </span>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href={RESTAURANT_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#F7F3EB',
                    color: 'var(--color-charcoal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  aria-label="Instagram"
                >
                  <InstagramIcon size={17} />
                </a>
                <a
                  href={RESTAURANT_CONFIG.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#F7F3EB',
                    color: 'var(--color-charcoal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  aria-label="Facebook"
                >
                  <FacebookIcon size={17} />
                </a>
                <a
                  href={RESTAURANT_CONFIG.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#F7F3EB',
                    color: 'var(--color-charcoal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  aria-label="Twitter"
                >
                  <TwitterIcon size={17} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Production Configuration & Map Placeholder Card */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5DCC9',
              borderRadius: 'var(--radius-md)',
              padding: '2rem',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
              <Settings2 size={18} style={{ color: 'var(--color-ember)' }} />
              <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)' }}>
                Restaurant Configuration Profile
              </h3>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#666359', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              All restaurant metadata is stored in a clean, isolated data file (<code style={{ color: 'var(--color-ember)' }}>src/data/config.js</code>). When client restaurants onboarding occurs, the developers simply update the fields below:
            </p>

            {/* Config Blueprint preview */}
            <div
              style={{
                backgroundColor: '#1E1D19',
                color: '#E8DFC8',
                borderRadius: 'var(--radius-sm)',
                padding: '1rem 1.25rem',
                fontSize: '0.8rem',
                fontFamily: 'monospace',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
                overflowX: 'auto'
              }}
            >
              <div>// In src/data/config.js</div>
              <div><span style={{ color: '#E66A35' }}>address:</span> "{RESTAURANT_CONFIG.address}"</div>
              <div><span style={{ color: '#E66A35' }}>phone:</span> "{RESTAURANT_CONFIG.phone}"</div>
              <div><span style={{ color: '#E66A35' }}>whatsappNumber:</span> "{RESTAURANT_CONFIG.whatsappNumber || '(unconfigured)'}"</div>
              <div><span style={{ color: '#E66A35' }}>gstRate:</span> {RESTAURANT_CONFIG.gstRate * 100}%</div>
            </div>

            {/* Map Placeholder Notice */}
            <div
              style={{
                border: '1.5px dashed #D6C8B5',
                borderRadius: 'var(--radius-sm)',
                padding: '2rem 1.5rem',
                textAlign: 'center',
                backgroundColor: '#FAF8F4'
              }}
            >
              <MapPin size={32} style={{ color: '#A39F93', margin: '0 auto 0.75rem auto' }} />
              <h4 style={{ fontSize: '1rem', color: 'var(--color-charcoal)', marginBottom: '0.35rem' }}>
                Interactive Map Placeholder
              </h4>
              <p style={{ fontSize: '0.84rem', color: '#7E7A70', lineHeight: 1.5, maxWidth: '420px', margin: '0 auto' }}>
                Per project specification, interactive Google Maps or OpenStreetMap embeds appear only when a genuine, authenticated physical venue address has been configured.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
