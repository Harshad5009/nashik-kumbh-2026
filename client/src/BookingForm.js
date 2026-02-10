import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // We will use the default styles for now

const BookingForm = () => {
    // 1. State to hold form data
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        roomType: 'Standard Room',
        guests: 1,
        checkInDate: ''
    });

    // 2. Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 3. Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Stop page from reloading
        try {
            // Send data to Backend
            const response = await axios.post('https://nashik-kumbh-2026.onrender.com/api/bookings', formData);
            alert(`✅ Booking Confirmed for ${response.data.name}!`);
            
            // Reset form
            setFormData({
                name: '',
                phoneNumber: '',
                roomType: 'Standard Room',
                guests: 1,
                checkInDate: ''
            });
        } catch (error) {
            console.error(error);
            alert("❌ Booking Failed. Is the backend server running?");
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ccc' }}>
            <h2>🕉️ Nashik Kumbh Mela Booking</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Full Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Phone Number:</label>
                    <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Room Type:</label>
                    <select name="roomType" value={formData.roomType} onChange={handleChange} style={{ width: '100%', padding: '8px' }}>
                        <option>Standard Room</option>
                        <option>Deluxe Room</option>
                        <option>Kumbh Tent</option>
                        <option>Dormitory</option>
                    </select>
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Guests:</label>
                    <input type="number" name="guests" min="1" max="10" value={formData.guests} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Check-in Date:</label>
                    <input type="date" name="checkInDate" value={formData.checkInDate} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
                </div>

                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#ff9933', color: 'white', border: 'none', cursor: 'pointer' }}>
                    Confirm Booking
                </button>
            </form>
        </div>
    );
};

export default BookingForm;