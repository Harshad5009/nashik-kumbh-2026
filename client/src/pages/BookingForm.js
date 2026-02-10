import React, { useState } from 'react';
import '../App.css'; 

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 1,
    roomType: 'Luxury Tent', // Default
    checkIn: '',
    checkOut: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. GET EXISTING BOOKINGS
    const existingBookings = JSON.parse(localStorage.getItem('kumbhBookings')) || [];
    
    // 2. ADD NEW BOOKING
    const newBooking = {
      ...formData,
      id: Date.now(), // Unique ID
      date: new Date().toLocaleDateString(),
      status: 'Confirmed'
    };
    
    existingBookings.push(newBooking);
    
    // 3. SAVE BACK TO LOCAL STORAGE
    localStorage.setItem('kumbhBookings', JSON.stringify(existingBookings));

    alert(`Booking Confirmed for ${formData.name}! \n(Data saved to Admin Panel)`);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      guests: 1,
      roomType: 'Luxury Tent',
      checkIn: '',
      checkOut: ''
    });
  };

  return (
    <div className="form-container" style={{ padding: '50px 20px', backgroundColor: '#fdf5e6', minHeight: '80vh' }}>
      <div style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
        <h2 style={{ textAlign: 'center', color: '#d35400', fontFamily: 'Cinzel, serif' }}>Pilgrim Booking Form</h2>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required style={styles.input} />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required style={styles.input} />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required style={styles.input} />
          
          <select name="roomType" value={formData.roomType} onChange={handleChange} style={styles.input}>
            <option value="Luxury Tent">Luxury Swiss Tent (₹1,500)</option>
            <option value="Hotel Elite">Hotel Panchavati Elite (₹3,000)</option>
            <option value="Ashram Stay">Swami Samarth Ashram (₹500)</option>
          </select>

          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '0.8rem', color: '#666' }}>Check-In</label>
              <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required style={styles.input} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '0.8rem', color: '#666' }}>Check-Out</label>
              <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required style={styles.input} />
            </div>
          </div>

          <button type="submit" style={styles.button}>Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  input: {
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '1rem'
  },
  button: {
    padding: '15px',
    backgroundColor: '#d35400',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px'
  }
};

export default BookingForm;