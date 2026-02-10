import React, { useEffect, useState } from 'react';
import { FaUser, FaCheckCircle, FaTrash } from 'react-icons/fa';

const AdminPanel = () => {
  const [bookings, setBookings] = useState([]);

  // Load data when page opens
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('kumbhBookings')) || [];
    setBookings(data);
  }, []);

  const deleteBooking = (id) => {
    const updated = bookings.filter(b => b.id !== id);
    setBookings(updated);
    localStorage.setItem('kumbhBookings', JSON.stringify(updated));
  };

  return (
    <div style={{ padding: '40px', backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h1 style={{ color: '#2c3e50', margin: 0 }}>NMC Admin Dashboard</h1>
          <p style={{ color: '#7f8c8d', margin: '5px 0 0 0' }}>Manage Pilgrim Accommodations</p>
        </div>
        <div style={{ backgroundColor: '#27ae60', color: 'white', padding: '10px 20px', borderRadius: '5px' }}>
          <strong>Total Bookings: {bookings.length}</strong>
        </div>
      </div>

      {/* Table Card */}
      <div style={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ backgroundColor: '#ecf0f1' }}>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Pilgrim Name</th>
              <th style={styles.th}>Room Type</th>
              <th style={styles.th}>Check-In</th>
              <th style={styles.th}>Phone</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan="7" style={{ padding: '40px', textAlign: 'center', color: '#999' }}>No bookings found.</td>
              </tr>
            ) : (
              bookings.map((b) => (
                <tr key={b.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={styles.td}>#{b.id.toString().slice(-4)}</td>
                  <td style={styles.td}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ backgroundColor: '#d35400', padding: '8px', borderRadius: '50%', color: 'white' }}><FaUser /></div>
                      {b.name}
                    </div>
                  </td>
                  <td style={styles.td}><span style={styles.badge}>{b.roomType}</span></td>
                  <td style={styles.td}>{b.checkIn}</td>
                  <td style={styles.td}>{b.phone}</td>
                  <td style={styles.td}>
                    <span style={{ color: '#27ae60', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <FaCheckCircle /> {b.status}
                    </span>
                  </td>
                  <td style={styles.td}>
                    <button onClick={() => deleteBooking(b.id)} style={styles.deleteBtn}><FaTrash /></button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  th: {
    padding: '15px',
    textAlign: 'left',
    color: '#7f8c8d',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  td: {
    padding: '15px',
    color: '#2c3e50',
    fontSize: '0.95rem'
  },
  badge: {
    backgroundColor: '#fff3e0',
    color: '#d35400',
    padding: '5px 10px',
    borderRadius: '15px',
    fontSize: '0.85rem',
    fontWeight: 'bold'
  },
  deleteBtn: {
    backgroundColor: '#fee',
    color: '#c0392b',
    border: 'none',
    padding: '8px',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default AdminPanel;