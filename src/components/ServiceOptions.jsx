import React from 'react';
import { useCart } from '../context/CartContext';
import { Bike, ShoppingBag, QrCode, Calendar, Users, PhoneCall, ArrowUpRight } from 'lucide-react';

export const ServiceOptions = () => {
  const { setOrderType, setIsCartOpen, setIsGroupDiningOpen } = useCart();

  const handleDelivery = () => {
    setOrderType('delivery');
    const menuEl = document.getElementById('full-menu');
    if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTakeaway = () => {
    setOrderType('takeaway');
    const menuEl = document.getElementById('full-menu');
    if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDineInQR = () => {
    setOrderType('dine-in');
    const qrEl = document.getElementById('qr-ordering');
    if (qrEl) qrEl.scrollIntoView({ behavior: 'smooth' });
  };

  const handleReservation = () => {
    const resEl = document.getElementById('reservations');
    if (resEl) resEl.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      id: 'delivery',
      icon: <Bike size={24} style={{ color: 'var(--color-ember)' }} />,
      title: 'Order Delivery',
      desc: 'Hot, fresh hearth plates brought directly to your doorstep in eco-friendly insulated packaging.',
      actionText: 'Start Delivery Order',
      onClick: handleDelivery
    },
    {
      id: 'takeaway',
      icon: <ShoppingBag size={24} style={{ color: 'var(--color-ember)' }} />,
      title: 'Takeaway / Pickup',
      desc: 'Order ahead from your phone and swing by for a zero-wait pickup straight from the kitchen counter.',
      actionText: 'Schedule Pickup',
      onClick: handleTakeaway
    },
    {
      id: 'dinein-qr',
      icon: <QrCode size={24} style={{ color: 'var(--color-ember)' }} />,
      title: 'Dine-in QR Ordering',
      desc: 'Sitting at a table? Scan your stand QR code to browse, customize, and order instantly from your phone.',
      actionText: 'Explore QR Experience',
      onClick: handleDineInQR
    },
    {
      id: 'reservations',
      icon: <Calendar size={24} style={{ color: 'var(--color-ember)' }} />,
      title: 'Reserve a Table',
      desc: 'Lock in your table for date nights, family lunches, or dinner gatherings with zero wait times.',
      actionText: 'Book Table Now',
      onClick: handleReservation
    },
    {
      id: 'group-dining',
      icon: <Users size={24} style={{ color: 'var(--color-ember)' }} />,
      title: 'Group Dining & Events',
      desc: 'Hosting a birthday party, corporate dinner, or private tasting? Tailored set menus for 8+ guests.',
      actionText: 'Send Group Enquiry',
      onClick: () => setIsGroupDiningOpen(true)
    },
    {
      id: 'contact',
      icon: <PhoneCall size={24} style={{ color: 'var(--color-ember)' }} />,
      title: 'Contact the Restaurant',
      desc: 'Questions about ingredients, private bookings, or custom catering? Reach out directly to our team.',
      actionText: 'Find Location & Hours',
      onClick: handleContact
    }
  ];

  return (
    <section id="services" className="section-padding theme-dark" style={{ backgroundColor: '#1A1916', borderBottom: '1px solid #2B2A24' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="eyebrow">SEAMLESS HOSPITALITY</span>
          <h2 style={{ color: 'var(--color-cream)' }}>Dining Your Way</h2>
          <p style={{ color: 'var(--color-beige)' }}>
            Choose the experience that fits your day: dine-in table ordering, effortless takeaway, delivery, or curated group celebrations.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {services.map((item) => (
            <div
              key={item.id}
              onClick={item.onClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  item.onClick();
                }
              }}
              style={{
                backgroundColor: 'var(--color-charcoal-card)',
                border: '1px solid #2E2D27',
                borderRadius: 'var(--radius-md)',
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              className="service-card"
            >
              <div>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(230, 106, 53, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}
                >
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.28rem', color: 'var(--color-cream)', fontFamily: 'var(--font-serif)', marginBottom: '0.65rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#A09C91', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {item.desc}
                </p>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--color-ember)'
                }}
              >
                <span>{item.actionText}</span>
                <ArrowUpRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
