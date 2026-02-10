import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
    const [bookings, setBookings] = useState([]);

    // 1. Fetch bookings
    const fetchBookings = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/bookings');
            setBookings(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    // 2. Delete Booking Function
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to cancel this booking?")) {
            try {
                await axios.delete(`http://localhost:5000/api/bookings/${id}`);
                alert("🗑️ Booking Deleted!");
                fetchBookings(); // Refresh the list instantly
            } catch (error) {
                console.error("Error deleting:", error);
                alert("Failed to delete.");
            }
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', color: '#d35400' }}>📋 Admin Dashboard</h2>
            
            {bookings.length === 0 ? (
                <p style={{ textAlign: 'center' }}>No bookings found yet.</p>
            ) : (
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#fce4ec', color: '#d35400' }}>
                            <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Name</th>
                            <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Phone</th>
                            <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Room</th>
                            <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking._id} style={{ borderBottom: '1px solid #eee' }}>
                                <td style={{ padding: '12px' }}>{booking.name}</td>
                                <td style={{ padding: '12px' }}>{booking.phoneNumber}</td>
                                <td style={{ padding: '12px' }}>{booking.roomType}</td>
                                <td style={{ padding: '12px' }}>
                                    <button 
                                        onClick={() => handleDelete(booking._id)}
                                        style={{ 
                                            backgroundColor: '#ff4444', 
                                            color: 'white', 
                                            padding: '5px 10px', 
                                            border: 'none', 
                                            borderRadius: '4px', 
                                            cursor: 'pointer',
                                            fontSize: '14px'
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AdminPanel;