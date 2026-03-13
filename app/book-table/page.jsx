'use client';

import { useState } from 'react';

export default function BookTablePage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        occasion: '',
        notes: ''
    });
    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
    }

    if (submitted) {
        return (
            <div className="page-container">
                <div className="page-header">
                    <h1 className="page-title">Reservation Confirmed!</h1>
                    <p className="page-subtitle">Thank you, {formData.name}</p>
                </div>
                <div className="content-card confirmation-card">
                    <p>Your table for <strong>{formData.guests} guests</strong> has been reserved.</p>
                    <p><strong>Date:</strong> {formData.date}</p>
                    <p><strong>Time:</strong> {formData.time}</p>
                    {formData.occasion && <p><strong>Occasion:</strong> {formData.occasion}</p>}
                    <p className="confirmation-note">
                        A confirmation email will be sent to <strong>{formData.email}</strong>.
                        For changes or cancellations, please call us at (555) 123-4567.
                    </p>
                    <button className="btn-primary" onClick={() => setSubmitted(false)}>
                        Make Another Reservation
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">Book a Table</h1>
                <p className="page-subtitle">Reserve your dining experience with us</p>
            </div>

            <div className="content-card form-card">
                <form onSubmit={handleSubmit} className="reservation-form">
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="(555) 123-4567"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="guests">Number of Guests</label>
                            <select id="guests" name="guests" value={formData.guests} onChange={handleChange}>
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                                    <option key={n} value={n}>
                                        {n} {n === 1 ? 'Guest' : 'Guests'}
                                    </option>
                                ))}
                                <option value="9+">9+ (Large Party)</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                required
                                value={formData.date}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="time">Preferred Time</label>
                            <select id="time" name="time" required value={formData.time} onChange={handleChange}>
                                <option value="">Select a time</option>
                                <option value="11:00 AM">11:00 AM</option>
                                <option value="11:30 AM">11:30 AM</option>
                                <option value="12:00 PM">12:00 PM</option>
                                <option value="12:30 PM">12:30 PM</option>
                                <option value="1:00 PM">1:00 PM</option>
                                <option value="1:30 PM">1:30 PM</option>
                                <option value="5:00 PM">5:00 PM</option>
                                <option value="5:30 PM">5:30 PM</option>
                                <option value="6:00 PM">6:00 PM</option>
                                <option value="6:30 PM">6:30 PM</option>
                                <option value="7:00 PM">7:00 PM</option>
                                <option value="7:30 PM">7:30 PM</option>
                                <option value="8:00 PM">8:00 PM</option>
                                <option value="8:30 PM">8:30 PM</option>
                                <option value="9:00 PM">9:00 PM</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="occasion">Special Occasion (Optional)</label>
                        <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
                            <option value="">None</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="Date Night">Date Night</option>
                            <option value="Business Dinner">Business Dinner</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="notes">Additional Notes (Optional)</label>
                        <textarea
                            id="notes"
                            name="notes"
                            rows={3}
                            value={formData.notes}
                            onChange={handleChange}
                            placeholder="Dietary restrictions, seating preferences, etc."
                        />
                    </div>
                    <button type="submit" className="btn-primary btn-full">
                        Reserve Table
                    </button>
                </form>
            </div>
        </div>
    );
}
