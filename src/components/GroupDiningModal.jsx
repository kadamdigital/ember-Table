import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { getTodayDateString } from '../utils/helpers';
import { X, Users, CheckCircle, Send, Sparkles } from 'lucide-react';

export const GroupDiningModal = () => {
  const { isGroupDiningOpen, setIsGroupDiningOpen } = useCart();
  const minDate = getTodayDateString();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guestCount: '12',
    date: minDate,
    occasion: 'Birthday Celebration',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!isGroupDiningOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) errs.phone = 'Contact number is required';
    if (!formData.email.trim()) errs.email = 'Email address is required';
    if (!formData.guestCount) errs.guestCount = 'Guest count is required';
    if (!formData.date) errs.date = 'Preferred date is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleClose = () => {
    setIsGroupDiningOpen(false);
    setSubmitted(false);
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '580px' }}>
        {/* Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Users size={20} style={{ color: 'var(--color-ember)' }} />
            <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)' }}>
              Group Dining & Event Enquiry
            </h3>
          </div>
          <button
            type="button"
            onClick={handleClose}
            style={{ color: '#888', padding: '4px' }}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="modal-body">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(34, 139, 34, 0.12)',
                  color: '#228B22',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem auto'
                }}
              >
                <CheckCircle size={32} />
              </div>
              <h4 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>
                Enquiry Sent (Simulation)
              </h4>
              <p style={{ fontSize: '0.92rem', color: '#6A675E', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                Thank you, <strong>{formData.name}</strong>. Our events manager will review your group requirements for <strong>{formData.guestCount} guests</strong> on <strong>{formData.date}</strong>.
              </p>
              <div
                style={{
                  backgroundColor: '#F9F5EE',
                  border: '1px solid #EBE4D5',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.85rem',
                  fontSize: '0.78rem',
                  color: '#827E73',
                  marginBottom: '1.5rem'
                }}
              >
                Demo simulation notice: No physical email or SMS was sent to restaurant staff.
              </div>
              <button type="button" onClick={handleClose} className="btn btn-primary">
                Return to Site
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p style={{ fontSize: '0.88rem', color: '#6E6B62', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                Planning a dinner for 8 or more guests? Our culinary team crafts bespoke sharing menus, wine pairings, and dedicated private seating.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-control"
                    placeholder="e.g. Yash Kadam"
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-control"
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && <span className="form-error">{errors.phone}</span>}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-control"
                    placeholder="yash@example.com"
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label>Number of Guests *</label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="form-control"
                  >
                    <option value="8-12">8 - 12 Guests</option>
                    <option value="12-20">12 - 20 Guests</option>
                    <option value="20-35">20 - 35 Guests</option>
                    <option value="35-50+">35 - 50+ Full Buyout</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label>Preferred Date *</label>
                  <input
                    type="date"
                    min={minDate}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="form-control"
                  />
                  {errors.date && <span className="form-error">{errors.date}</span>}
                </div>

                <div className="form-group">
                  <label>Event Type</label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="form-control"
                  >
                    <option value="Birthday Celebration">Birthday Celebration</option>
                    <option value="Corporate Dinner">Corporate Dinner / Team Social</option>
                    <option value="Anniversary / Family Gathering">Anniversary / Family Gathering</option>
                    <option value="Cocktail & Canapés">Cocktail & Canapés</option>
                    <option value="Other">Other Occasion</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Tell us about your event & dietary requirements</label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Estimated budget, custom menu desires, AV setup needs..."
                  className="form-control"
                ></textarea>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.25rem' }}>
                <button type="button" onClick={handleClose} className="btn btn-secondary" style={{ color: '#444', borderColor: '#ccc' }}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  <Send size={15} />
                  <span>Submit Group Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
