import React, { useState } from 'react';
import { Camera, ZoomIn, X } from 'lucide-react';

const GALLERY_PHOTOS = [
  {
    id: 1,
    title: 'The Ember Truffle Burger',
    category: 'Burgers',
    url: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1000&q=80',
    alt: 'Juicy truffle mushroom burger with melted cheese and caramelised onions'
  },
  {
    id: 2,
    title: 'Warm Hearth & Ambiance',
    category: 'Atmosphere',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    alt: 'Warm moody restaurant dining room with rustic timber tables and glowing amber lights'
  },
  {
    id: 3,
    title: 'Fire-Roasted Tandoor Skewers',
    category: 'Grill',
    url: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1000&q=80',
    alt: 'Charred paneer tikka skewers roasted over wood charcoal'
  },
  {
    id: 4,
    title: 'Handmade Tuscan Pasta',
    category: 'Pasta',
    url: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281724?auto=format&fit=crop&w=1000&q=80',
    alt: 'Plate of creamy Tuscan pasta garnished with herbs and fresh parmesan'
  },
  {
    id: 5,
    title: 'Craft Mocktails & Cocktails',
    category: 'Drinks',
    url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80',
    alt: 'Fresh lime and mint virgin mojito with crushed ice and soda bubbles'
  },
  {
    id: 6,
    title: 'Decadent Molten Brownie',
    category: 'Desserts',
    url: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=80',
    alt: 'Warm chocolate brownie topped with melting vanilla bean gelato'
  }
];

export const GallerySection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="gallery" className="section-padding theme-dark" style={{ backgroundColor: '#171715', borderBottom: '1px solid #282823' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="eyebrow">
            <Camera size={14} style={{ color: 'var(--color-ember)' }} />
            VISUAL FLAVOUR
          </span>
          <h2 style={{ color: 'var(--color-cream)' }}>Moments Around the Table</h2>
          <p style={{ color: 'var(--color-beige)' }}>
            A glimpse into the sizzle, the pours, and the late-night laughter at The Ember Table.
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {GALLERY_PHOTOS.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              style={{
                position: 'relative',
                height: '280px',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                cursor: 'pointer',
                backgroundColor: '#201F1B'
              }}
              className="gallery-item"
            >
              <img
                src={photo.url}
                alt={photo.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(23, 23, 21, 0.85) 0%, rgba(23, 23, 21, 0.1) 60%)',
                  opacity: 0.9,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.25rem',
                  transition: 'opacity 0.25s ease'
                }}
              >
                <span style={{ fontSize: '0.72rem', color: 'var(--color-ember)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                  {photo.category}
                </span>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', fontFamily: 'var(--font-serif)' }}>
                    {photo.title}
                  </h4>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(230, 106, 53, 0.85)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF'
                    }}
                  >
                    <ZoomIn size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedPhoto && (
          <div className="modal-overlay" onClick={() => setSelectedPhoto(null)}>
            <div
              style={{
                maxWidth: '850px',
                width: '100%',
                backgroundColor: 'var(--color-charcoal)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                position: 'relative',
                border: '1px solid #383730'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  color: '#FFFFFF',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10
                }}
                aria-label="Close photo preview"
              >
                <X size={20} />
              </button>

              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.alt}
                style={{ width: '100%', maxHeight: '550px', objectFit: 'cover' }}
              />

              <div style={{ padding: '1.25rem 1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-ember)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                    {selectedPhoto.category}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--color-cream)', fontFamily: 'var(--font-serif)' }}>
                    {selectedPhoto.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
