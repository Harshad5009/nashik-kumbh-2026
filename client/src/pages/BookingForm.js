import React, { useState } from 'react';
import { jsPDF } from "jspdf"; // Import the PDF tool
import '../App.css'; 

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 1,
    roomType: 'Luxury Tent',
    checkIn: '',
    checkOut: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- THE MAGIC PDF FUNCTION ---
  const generatePDF = (bookingId) => {
    const doc = new jsPDF();

    // 1. Header (Maroon Background)
    doc.setFillColor(104, 8, 8); // Maroon
    doc.rect(0, 0, 210, 40, 'F'); // Top bar
    
    // 2. Text: Title
    doc.setTextColor(255, 255, 255); // White
    doc.setFontSize(22);
    doc.setFont("times", "bold");
    doc.text("Nashik Kumbh Mela 2026", 105, 20, null, null, "center");
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Official Booking Acknowledgement", 105, 30, null, null, "center");

    // 3. Booking Details
    doc.setTextColor(0, 0, 0); // Black
    doc.setFontSize(14);
    doc.text(`Booking ID: #${bookingId}`, 20, 60);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 140, 60);

    doc.setLineWidth(0.5);
    doc.line(20, 65, 190, 65); // Horizontal line

    // 4. Content
    doc.setFontSize(12);
    doc.text(`Namaste ${formData.name},`, 20, 80);
    doc.text("Your accommodation for the Divine Yatra has been confirmed.", 20, 90);

    // 5. Table of Details
    doc.setDrawColor(0);
    doc.setFillColor(245, 245, 245);
    doc.rect(20, 100, 170, 60, 'F'); // Grey box

    doc.setFont("helvetica", "bold");
    doc.text("Booking Summary:", 25, 110);
    
    doc.setFont("helvetica", "normal");
    doc.text(`• Accommodation: ${formData.roomType}`, 25, 125);
    doc.text(`• Guests: ${formData.guests}`, 25, 135);
    doc.text(`• Check-In: ${formData.checkIn}`, 25, 145);
    doc.text(`• Check-Out: ${formData.checkOut}`, 25, 155);
    doc.text(`• Contact: ${formData.phone}`, 25, 165);

    // 6. Footer / QR Placeholder
    doc.setTextColor(104, 8, 8);
    doc.setFontSize(10);
    doc.text("Please show this receipt at the entry gate.", 105, 180, null, null, "center");
    doc.text("Nashik Municipal Corporation | Smart Kumbh Initiative", 105, 280, null, null, "center");

    // 7. Save
    doc.save(`Kumbh_Receipt_${formData.name}.pdf`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Save to Local Storage (Admin Panel)
    const existingBookings = JSON.parse(localStorage.getItem('kumbhBookings')) || [];
    const bookingId = Math.floor(1000 + Math.random() * 9000); // Random 4-digit ID
    
    const newBooking = {
      ...formData,
      id: bookingId,
      date: new Date().toLocaleDateString(),
      status: 'Confirmed'
    };
    
    existingBookings.push(newBooking);
    localStorage.setItem('kumbhBookings', JSON.stringify(existingBookings));

    // 2. Generate PDF Receipt
    generatePDF(bookingId);

    alert(`Booking Confirmed! \nDownloading your Official Receipt...`);
    
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

          <button type="submit" style={styles.button}>Confirm & Download Receipt</button>
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