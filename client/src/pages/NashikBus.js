import React, { useState } from 'react';
import {  FaSearch, FaMapMarkerAlt, FaClock, FaTicketAlt } from 'react-icons/fa';

const NashikBus = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock Data for Kumbh Mela Special Buses
  const busRoutes = [
    { id: 101, route: "Route 101", from: "Nashik Road Station", to: "Panchvati (Ramkund)", time: "5 Mins", status: "Crowded 🔴", type: "Electric AC" },
    { id: 202, route: "Route 202", from: "CBS Bus Stand", to: "Trimbakeshwar", time: "12 Mins", status: "Seats Available 🟢", type: "Express" },
    { id: 305, route: "Route 305", from: "Aurangabad Naka", to: "Sadhugram (Sector 4)", time: "2 Mins", status: "Standing Only 🟠", type: "Regular" },
    { id: 401, route: "Route 401", from: "Golf Club Ground", to: "Tapovan", time: "8 Mins", status: "Seats Available 🟢", type: "Electric AC" },
    { id: 505, route: "Shuttle A", from: "Parking Lot 1", to: "Ghat Entry Gate", time: "Every 2 Mins", status: "Full 🔴", type: "Free Shuttle" },
    { id: 601, route: "Route 601", from: "Mumbai Naka", to: "Muktidham", time: "15 Mins", status: "Standing Only 🟠", type: "Regular" },
  ];

  const filteredBuses = busRoutes.filter(bus => 
    bus.from.toLowerCase().includes(searchTerm.toLowerCase()) || 
    bus.to.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      
      {/* 1. Header Section */}
      <div style={styles.header}>
        <h1 style={{ fontFamily: 'Cinzel, serif', margin: 0 }}>🚌 NMPML City Bus</h1>
        <p style={{ opacity: 0.9 }}>Official Nashik Mahanagar Parivahan Service</p>
      </div>

      {/* 2. Search Bar */}
      <div style={styles.searchContainer}>
        <div style={styles.searchBox}>
          <FaSearch color="#7f8c8d" />
          <input 
            type="text" 
            placeholder="Where do you want to go? (e.g., Trimbakeshwar)" 
            style={styles.input}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* 3. Bus List Grid */}
      <div style={styles.grid}>
        {filteredBuses.map((bus) => (
          <div key={bus.id} style={styles.card}>
            
            {/* Route Number Badge */}
            <div style={styles.routeBadge}>
              <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{bus.route}</span>
              <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>{bus.type}</span>
            </div>

            {/* Route Details */}
            <div style={{ margin: '15px 0' }}>
              <div style={styles.row}>
                <FaMapMarkerAlt color="#c0392b" /> 
                <strong>{bus.from}</strong> ➝ <strong>{bus.to}</strong>
              </div>
              <div style={styles.row}>
                <FaClock color="#2980b9" /> 
                <span>Next Bus in: <span style={{ color: '#2980b9', fontWeight: 'bold' }}>{bus.time}</span></span>
              </div>
            </div>

            {/* Status & Action */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #eee', paddingTop: '10px' }}>
              <span style={{ 
                fontWeight: 'bold', 
                color: bus.status.includes('Available') ? '#27ae60' : (bus.status.includes('Full') ? '#c0392b' : '#d35400') 
              }}>
                {bus.status}
              </span>
              <button style={styles.bookBtn}>
                <FaTicketAlt /> Book Ticket
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* No Results Fallback */}
      {filteredBuses.length === 0 && (
        <div style={{ textAlign: 'center', marginTop: '50px', color: '#7f8c8d' }}>
          <h3>No buses found for this route.</h3>
          <p>Try searching for "CBS" or "Panchvati".</p>
        </div>
      )}

    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f4f6f8',
    paddingBottom: '40px'
  },
  header: {
    backgroundColor: '#2c3e50', // Dark Blue for Transport
    color: 'white',
    padding: '40px 20px',
    textAlign: 'center',
    marginBottom: '-30px'
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0 20px',
    marginBottom: '30px'
  },
  searchBox: {
    backgroundColor: 'white',
    padding: '15px 20px',
    borderRadius: '50px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    width: '100%',
    maxWidth: '500px',
    zIndex: 10
  },
  input: {
    border: 'none',
    outline: 'none',
    fontSize: '1rem',
    width: '100%',
    color: '#333'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 20px'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '20px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    borderLeft: '5px solid #f1c40f', // Yellow Bus Stripe
    transition: 'transform 0.2s ease',
  },
  routeBadge: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    color: '#2c3e50'
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '8px',
    color: '#555',
    fontSize: '0.95rem'
  },
  bookBtn: {
    backgroundColor: '#2c3e50',
    color: 'white',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '0.9rem'
  }
};

export default NashikBus;