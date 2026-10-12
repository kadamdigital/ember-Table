import React, { useState } from 'react';
import { getTodayDateString, generateReservationRef } from '../utils/helpers';
import { Calendar, Clock, Users, CheckCircle, Sparkles, MapPin, AlertCircle, X } from 'lucide-react';

export const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: getTodayDateString(),
    time: '19:30',
    guests: '2',
    seatingPreference: 'No Preference',
    specialRequests: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const minDate = getTodayDateString();

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a valid contact number.';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please enter a valid phone number (min 8 digits).';
    }
    if (!formData.date) {
      errs.date = 'Please select a reservation date.';
    } else if (formData.date < minDate) {
      errs.date = 'Reservation date cannot be in the past.';
    }
    if (!formData.time) errs.time = 'Please select a dining time.';
    if (!formData.guests) errs.guests = 'Please specify the guest count.';
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
    setIsSubmitting(true);

    // Simulate realistic reservation booking process
    setTimeout(() => {
      const reservationRef = generateReservationRef();
      setConfirmedBooking({
        ...formData,
        reference: reservationRef,
        createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      setIsSubmitting(false);
    }, 600);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleReset = () => {
    setConfirmedBooking(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: getTodayDateString(),
      time: '19:30',
      guests: '2',
      seatingPreference: 'No Preference',
      specialRequests: ''
    });
  };

  return (
    <section id="reservations" className="section-padding theme-cream" style={{ borderBottom: '1px solid #EBE4D5' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow">
            <Calendar size={14} style={{ color: 'var(--color-ember)' }} />
            HOSPITALITY & HOSTING
          </span>
          <h2>Your Table Is Waiting.</h2>
          <p>
            Whether it's an intimate date night, family brunch, or weekend celebration, reserve your spot around our hearth.
          </p>
        </div>

        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid #E5DCC9',
            boxShadow: 'var(--shadow-md)',
            overflow: 'hidden'
          }}
        >
          {confirmedBooking ? (
            /* Confirmation Screen */
            <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
              <div
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(34, 139, 34, 0.12)',
                  color: '#228B22',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto'
                }}
              >
                <CheckCircle size={36} />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <span
                  style={{
                    backgroundColor: 'rgba(230, 106, 53, 0.1)',
                    color: 'var(--color-ember)',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '4px',
                    display: 'inline-block',
                    marginBottom: '0.5rem'
                  }}
                >
                  Demo Reservation Confirmed
                </span>
                <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)' }}>
                  Reservation #{confirmedBooking.reference}
                </h3>
              </div>

              <div
                style={{
                  backgroundColor: '#FAF7F2',
                  border: '1px solid #EBE4D5',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem',
                  maxWidth: '520px',
                  margin: '0 auto 2rem auto',
                  textAlign: 'left'
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#827E73', textTransform: 'uppercase' }}>Guest Name</span>
                    <p style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>{confirmedBooking.name}</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#827E73', textTransform: 'uppercase' }}>Party Size</span>
                    <p style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>{confirmedBooking.guests} Guests</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#827E73', textTransform: 'uppercase' }}>Date</span>
                    <p style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>{confirmedBooking.date}</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#827E73', textTransform: 'uppercase' }}>Time</span>
                    <p style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>{confirmedBooking.time}</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#827E73', textTransform: 'uppercase' }}>Seating</span>
                    <p style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>{confirmedBooking.seatingPreference}</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#827E73', textTransform: 'uppercase' }}>Phone</span>
                    <p style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>{confirmedBooking.phone}</p>
                  </div>
                </div>

                {confirmedBooking.specialRequests && (
                  <div style={{ borderTop: '1px solid #E5DCC9', paddingTop: '0.75rem' }}>
                    <span style={{ fontSize: '0.75rem', color: '#827E73', textTransform: 'uppercase' }}>Special Request</span>
                    <p style={{ fontSize: '0.88rem', color: '#555248' }}>{confirmedBooking.specialRequests}</p>
                  </div>
                )}
              </div>

              {/* Backend Simulation Disclaimer */}
              <div
                style={{
                  backgroundColor: '#FFF8E6',
                  border: '1px solid #F0DEB4',
                  borderRadius: 'var(--radius-sm)',
                  padding: '1rem',
                  maxWidth: '520px',
                  margin: '0 auto 2rem auto',
                  fontSize: '0.8rem',
                  color: '#7A5B0B',
                  lineHeight: 1.5,
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'flex-start',
                  textAlign: 'left'
                }}
              >
                <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong>Demo Portfolio Notice:</strong> This reservation reference is a frontend simulation. In a live production system, table allocations and slot capacities are synced with a live reservations database (such as SevenRooms, OpenTable, or custom PostgreSQL booking engine).
                </span>
              </div>

              <button type="button" onClick={handleReset} className="btn btn-outline-dark">
                Book Another Table
              </button>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} style={{ padding: '2.5rem' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.25rem'
                }}
              >
                {/* Guest Name */}
                <div className="form-group">
                  <label htmlFor="res-name">
                    Full Name <span style={{ color: 'var(--color-ember)' }}>*</span>
                  </label>
                  <input
                    id="res-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Yash Kadam"
                    className="form-control"
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                {/* Contact Phone */}
                <div className="form-group">
                  <label htmlFor="res-phone">
                    Phone Number <span style={{ color: 'var(--color-ember)' }}>*</span>
                  </label>
                  <input
                    id="res-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="form-control"
                  />
                  {errors.phone && <span className="form-error">{errors.phone}</span>}
                </div>

                {/* Email (Optional) */}
                <div className="form-group">
                  <label htmlFor="res-email">
                    Email Address <span style={{ color: '#888', fontWeight: 400 }}>(Optional for booking receipt)</span>
                  </label>
                  <input
                    id="res-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. yash@example.com"
                    className="form-control"
                  />
                </div>

                {/* Date */}
                <div className="form-group">
                  <label htmlFor="res-date">
                    Reservation Date <span style={{ color: 'var(--color-ember)' }}>*</span>
                  </label>
                  <input
                    id="res-date"
                    name="date"
                    type="date"
                    min={minDate}
                    value={formData.date}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {errors.date && <span className="form-error">{errors.date}</span>}
                </div>

                {/* Time */}
                <div className="form-group">
                  <label htmlFor="res-time">
                    Dining Time <span style={{ color: 'var(--color-ember)' }}>*</span>
                  </label>
                  <select
                    id="res-time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="12:00">12:00 PM (Lunch)</option>
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="13:00">01:00 PM (Lunch)</option>
                    <option value="13:30">01:30 PM (Lunch)</option>
                    <option value="14:00">02:00 PM (Lunch)</option>
                    <option value="18:30">06:30 PM (Early Dinner)</option>
                    <option value="19:00">07:00 PM (Dinner)</option>
                    <option value="19:30">07:30 PM (Dinner)</option>
                    <option value="20:00">08:00 PM (Prime Dinner)</option>
                    <option value="20:30">08:30 PM (Prime Dinner)</option>
                    <option value="21:00">09:00 PM (Late Dinner)</option>
                    <option value="21:30">09:30 PM (Late Dinner)</option>
                    <option value="22:00">10:00 PM (Supper)</option>
                  </select>
                  {errors.time && <span className="form-error">{errors.time}</span>}
                </div>

                {/* Guests */}
                <div className="form-group">
                  <label htmlFor="res-guests">
                    Number of Guests <span style={{ color: 'var(--color-ember)' }}>*</span>
                  </label>
                  <select
                    id="res-guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="1">1 Guest (Solo Dining)</option>
                    <option value="2">2 Guests (Table for Two)</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="7">7 Guests</option>
                    <option value="8">8 Guests (Large Table)</option>
                    <option value="9+">9+ Guests (Group Dining Enquiry)</option>
                  </select>
                  {errors.guests && <span className="form-error">{errors.guests}</span>}
                </div>

                {/* Seating Preference */}
                <div className="form-group">
                  <label htmlFor="res-seating">Seating Preference</label>
                  <select
                    id="res-seating"
                    name="seatingPreference"
                    value={formData.seatingPreference}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="No Preference">No Preference (First Available)</option>
                    <option value="Indoor Hearth Room">Indoor Hearth Room (Near Open Fire)</option>
                    <option value="Outdoor Garden Patio">Outdoor Garden Patio (Al Fresco)</option>
                    <option value="High-Top Bar Counter">High-Top Bar Counter</option>
                  </select>
                </div>

                {/* Special Requests */}
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label htmlFor="res-requests">
                    Special Occasions & Dietary Notes <span style={{ color: '#888', fontWeight: 400 }}>(Optional)</span>
                  </label>
                  <textarea
                    id="res-requests"
                    name="specialRequests"
                    rows="2"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    placeholder="e.g. Birthday anniversary, high chair needed, quiet booth..."
                    className="form-control"
                  ></textarea>
                </div>
              </div>

              {/* Action Button & Disclaimer */}
              <div
                style={{
                  marginTop: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  alignItems: 'center'
                }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', maxWidth: '380px' }}
                >
                  {isSubmitting ? 'Reserving Table...' : 'Confirm Table Booking'}
                </button>
                <p style={{ fontSize: '0.78rem', color: '#878377', textAlign: 'center', maxWidth: '520px' }}>
                  Simulated instant demo booking. No credit card or upfront deposit required for standard reservations.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
