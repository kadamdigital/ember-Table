import React, { useState, useEffect } from 'react';
import { RESTAURANT_CONFIG } from '../data/config';
import { generateQRCodeDataUrl, getTableOrderUrl } from '../utils/qrGenerator';
import { useCart } from '../context/CartContext';
import { QrCode, Smartphone, Utensils, CheckCircle2, Copy, ExternalLink, Info, Check } from 'lucide-react';

export const QRTableOrdering = () => {
  const [selectedTable, setSelectedTable] = useState(RESTAURANT_CONFIG.demoTables[0].id);
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const { setTableAndMode, activeTable } = useCart();

  const currentUrl = getTableOrderUrl(selectedTable);

  useEffect(() => {
    let isMounted = true;
    generateQRCodeDataUrl(currentUrl).then((url) => {
      if (isMounted && url) {
        setQrDataUrl(url);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [currentUrl]);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(currentUrl);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = currentUrl;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL', err);
    }
  };

  const handlePreviewTable = () => {
    setTableAndMode(selectedTable);
    const menuEl = document.getElementById('full-menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeTableInfo = RESTAURANT_CONFIG.demoTables.find(t => t.id === selectedTable);

  return (
    <section
      id="qr-ordering"
      className="section-padding theme-dark"
      style={{
        backgroundColor: '#141412',
        borderBottom: '1px solid #282823',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow">
            <QrCode size={14} style={{ color: 'var(--color-ember)' }} />
            DIGITAL DINE-IN SUITE
          </span>
          <h2 style={{ color: 'var(--color-cream)' }}>Scan. Order. Enjoy.</h2>
          <p style={{ color: 'var(--color-beige)' }}>
            Elevate dine-in hospitality with contactless digital menus. Guests scan their table stand, browse rich imagery, and send order tickets without waiting for physical menus.
          </p>
        </div>

        {/* 4-Step Explanation Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            marginBottom: '4rem'
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--color-charcoal-card)',
              border: '1px solid #2A2A25',
              padding: '1.5rem',
              borderRadius: 'var(--radius-md)'
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'rgba(230, 106, 53, 0.12)',
                color: 'var(--color-ember)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                marginBottom: '1rem'
              }}
            >
              1
            </div>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--color-cream)', marginBottom: '0.4rem' }}>Scan at Table</h4>
            <p style={{ fontSize: '0.85rem', color: '#9E9B90', lineHeight: 1.5 }}>
              Guests scan the QR code located on their wooden table stand using their smartphone camera.
            </p>
          </div>

          <div
            style={{
              backgroundColor: 'var(--color-charcoal-card)',
              border: '1px solid #2A2A25',
              padding: '1.5rem',
              borderRadius: 'var(--radius-md)'
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'rgba(230, 106, 53, 0.12)',
                color: 'var(--color-ember)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                marginBottom: '1rem'
              }}
            >
              2
            </div>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--color-cream)', marginBottom: '0.4rem' }}>Browse Menu</h4>
            <p style={{ fontSize: '0.85rem', color: '#9E9B90', lineHeight: 1.5 }}>
              The menu loads instantly in their browser with high-res food photography, pricing, and allergen filters.
            </p>
          </div>

          <div
            style={{
              backgroundColor: 'var(--color-charcoal-card)',
              border: '1px solid #2A2A25',
              padding: '1.5rem',
              borderRadius: 'var(--radius-md)'
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'rgba(230, 106, 53, 0.12)',
                color: 'var(--color-ember)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                marginBottom: '1rem'
              }}
            >
              3
            </div>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--color-cream)', marginBottom: '0.4rem' }}>Add to Cart</h4>
            <p style={{ fontSize: '0.85rem', color: '#9E9B90', lineHeight: 1.5 }}>
              Guests customize their selection and build their order together directly in their mobile browser.
            </p>
          </div>

          <div
            style={{
              backgroundColor: 'var(--color-charcoal-card)',
              border: '1px solid #2A2A25',
              padding: '1.5rem',
              borderRadius: 'var(--radius-md)'
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'rgba(230, 106, 53, 0.12)',
                color: 'var(--color-ember)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                marginBottom: '1rem'
              }}
            >
              4
            </div>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--color-cream)', marginBottom: '0.4rem' }}>Submit for Table</h4>
            <p style={{ fontSize: '0.85rem', color: '#9E9B90', lineHeight: 1.5 }}>
              Orders are tied seamlessly to their table identifier, creating a smooth, error-free kitchen handoff.
            </p>
          </div>
        </div>

        {/* Interactive QR Demo Playground */}
        <div
          style={{
            backgroundColor: 'var(--color-charcoal-card)',
            border: '1px solid #33322A',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
            boxShadow: 'var(--shadow-dark-md)'
          }}
        >
          {/* Left Column: Interactive Table Selector & Link Controls */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
              <span className="concept-badge">Interactive Live Demo</span>
              {activeTable && (
                <span
                  style={{
                    backgroundColor: '#1E7E34',
                    color: '#FFFFFF',
                    padding: '2px 8px',
                    borderRadius: '3px',
                    fontSize: '0.72rem',
                    fontWeight: 700
                  }}
                >
                  Current Active Table: {activeTable}
                </span>
              )}
            </div>

            <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', color: 'var(--color-cream)', marginBottom: '0.75rem' }}>
              Test Live QR Table Generator
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-beige)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
              Select a demo table below to see its dynamically generated QR code. Each code embeds a dedicated deep link encoding the specific table number.
            </p>

            {/* Table Selector Pills */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#A8A49A', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Select Table Stand:
              </label>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                {RESTAURANT_CONFIG.demoTables.map((table) => {
                  const isSelected = selectedTable === table.id;
                  return (
                    <button
                      key={table.id}
                      type="button"
                      onClick={() => setSelectedTable(table.id)}
                      style={{
                        padding: '0.6rem 1.1rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        backgroundColor: isSelected ? 'var(--color-ember)' : '#252420',
                        color: isSelected ? '#FFFFFF' : '#D6C8B5',
                        border: isSelected ? '1px solid var(--color-ember)' : '1px solid #383730',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {table.name}
                    </button>
                  );
                })}
              </div>
              {activeTableInfo && (
                <div style={{ marginTop: '0.75rem', fontSize: '0.82rem', color: '#A09C90' }}>
                  <strong>{activeTableInfo.name}</strong>: {activeTableInfo.type} ({activeTableInfo.capacity})
                </div>
              )}
            </div>

            {/* Encoded URL Box */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#8E8B81', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Encoded Live URL:
              </label>
              <div
                style={{
                  backgroundColor: '#121210',
                  border: '1px solid #2B2A24',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.75rem 1rem',
                  fontSize: '0.82rem',
                  fontFamily: 'monospace',
                  color: 'var(--color-cream)',
                  wordBreak: 'break-all'
                }}
              >
                {currentUrl}
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={handleCopy}
                className="btn btn-secondary btn-sm"
                style={{ padding: '0.6rem 1.1rem' }}
              >
                {copied ? <Check size={16} style={{ color: '#228B22' }} /> : <Copy size={16} />}
                <span>{copied ? 'Link Copied!' : 'Copy Table Link'}</span>
              </button>

              <button
                type="button"
                onClick={handlePreviewTable}
                className="btn btn-primary btn-sm"
                style={{ padding: '0.6rem 1.1rem' }}
              >
                <ExternalLink size={16} />
                <span>Simulate Scan on This Device ({selectedTable})</span>
              </button>
            </div>
          </div>

          {/* Right Column: Physical Table Stand Preview */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Wooden Stand Aesthetic */}
            <div
              style={{
                background: 'linear-gradient(145deg, #2A241F, #1F1B16)',
                border: '2px solid #4A3E33',
                borderRadius: '16px',
                padding: '2rem 1.75rem 2.25rem 1.75rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                textAlign: 'center',
                maxWidth: '300px',
                width: '100%',
                position: 'relative'
              }}
            >
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#D6C8B5', fontWeight: 700, marginBottom: '0.25rem' }}>
                THE EMBER TABLE
              </div>
              <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: '#FFFFFF', fontWeight: 700, marginBottom: '1.25rem' }}>
                {selectedTable}
              </div>

              {/* QR Image */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '12px',
                  borderRadius: '10px',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.4)',
                  display: 'inline-block',
                  margin: '0 auto 1.25rem auto'
                }}
              >
                {qrDataUrl ? (
                  <img
                    src={qrDataUrl}
                    alt={`QR Code for Table ${selectedTable}`}
                    style={{ width: '180px', height: '180px', display: 'block' }}
                  />
                ) : (
                  <div style={{ width: '180px', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
                    Generating QR...
                  </div>
                )}
              </div>

              <div style={{ fontSize: '0.8rem', color: '#F5F0E8', fontWeight: 600, marginBottom: '0.25rem' }}>
                Scan to Order
              </div>
              <div style={{ fontSize: '0.72rem', color: '#9E9588' }}>
                Point phone camera at code
              </div>
            </div>
          </div>
        </div>

        {/* Integration Notes & Clear Disclaimers */}
        <div
          style={{
            marginTop: '2.5rem',
            padding: '1.25rem 1.5rem',
            backgroundColor: 'rgba(32, 30, 23, 0.7)',
            border: '1px solid #3A3626',
            borderRadius: 'var(--radius-sm)',
            display: 'flex',
            gap: '1rem',
            alignItems: 'flex-start'
          }}
        >
          <Info size={20} style={{ color: 'var(--color-ember)', flexShrink: 0, marginTop: '2px' }} />
          <div style={{ fontSize: '0.82rem', color: '#BDB7A6', lineHeight: 1.55 }}>
            <strong style={{ color: 'var(--color-cream)' }}>Hospitality Deployment Notice:</strong> In a production restaurant deployment, printed physical QR table plaques must encode your production domain (e.g. <code style={{ color: 'var(--color-ember)' }}>https://your-restaurant.com/menu?table=T05</code>). In this portfolio demonstration, orders are simulated client-side and do not route to physical kitchen display systems (KDS) or thermal ticket printers without backend integration.
          </div>
        </div>
      </div>
    </section>
  );
};
