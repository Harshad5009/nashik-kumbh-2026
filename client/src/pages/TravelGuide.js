import React from 'react';
import { FaPlane, FaTrain, FaBus, FaCar } from 'react-icons/fa';

const TravelGuide = () => {
  return (
    <div style={{ padding: '40px 20px', backgroundColor: '#fdf5e6' }}>
      
      {/* 1. Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ color: '#d35400', fontFamily: 'Cinzel, serif', fontSize: '2.5rem' }}>How to Reach Nashik</h1>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          Nashik is well-connected to major Indian cities by Road, Rail, and Air.
        </p>
      </div>

      {/* 2. Transport Options Grid */}
      <div style={styles.grid}>
        
        {/* Card 1: Train */}
        <div style={styles.card}>
          <div style={{...styles.iconBox, backgroundColor: '#e74c3c'}}>
            <FaTrain />
          </div>
          <h3>By Train</h3>
          <p><strong>Nashik Road Station (NK)</strong> is the major railway hub.</p>
          <ul style={styles.list}>
            <li>10 km from Ramkund (Main Ghat).</li>
            <li>Direct trains from Mumbai (Panchvati Exp), Delhi, Kolkata.</li>
            <li>24/7 Auto & Bus service available outside.</li>
          </ul>
        </div>

        {/* Card 2: Bus */}
        <div style={styles.card}>
          <div style={{...styles.iconBox, backgroundColor: '#3498db'}}>
            <FaBus />
          </div>
          <h3>By Bus</h3>
          <p>Two major bus stands serve the city:</p>
          <ul style={styles.list}>
            <li><strong>Thakkar Bazaar (CBS):</strong> For private luxury buses & Mumbai/Pune MSRTC.</li>
            <li><strong>Mahamarg Bus Stand:</strong> For long-distance inter-state buses.</li>
            <li>City Buses (Citinc) run every 15 mins to Trimbakeshwar.</li>
          </ul>
        </div>

        {/* Card 3: Air */}
        <div style={styles.card}>
          <div style={{...styles.iconBox, backgroundColor: '#9b59b6'}}>
            <FaPlane />
          </div>
          <h3>By Air</h3>
          <p><strong>Ozar Airport (ISK)</strong> is 20 km from the city center.</p>
          <ul style={styles.list}>
            <li>Daily flights from Delhi, Hyderabad, Bangalore, Ahmedabad.</li>
            <li>Connecting flights from Mumbai International Airport (CSMIA).</li>
            <li>Taxi services available at arrival.</li>
          </ul>
        </div>

        {/* Card 4: Road */}
        <div style={styles.card}>
          <div style={{...styles.iconBox, backgroundColor: '#f1c40f', color: 'black'}}>
            <FaCar />
          </div>
          <h3>By Road</h3>
          <p>Excellent highway connectivity via NH-160 and Samruddhi Mahamarg.</p>
          <ul style={styles.list}>
            <li><strong>Mumbai:</strong> 165 km (3.5 Hours)</li>
            <li><strong>Pune:</strong> 210 km (4.5 Hours)</li>
            <li><strong>Shirdi:</strong> 85 km (1.5 Hours)</li>
          </ul>
        </div>

      </div>

      {/* 3. Embedded Google Map */}
      <div style={{ marginTop: '60px', textAlign: 'center' }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Navigate to Ramkund (Kumbh Mela Center)</h2>
        <div style={styles.mapContainer}>
          <iframe 
            title="Nashik Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.189285072671!2d73.7868013149156!3d20.000494986564614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb013c7df513%3A0x6d97c55c06511119!2sRamkund%2C%20Panchavati%2C%20Nashik%2C%20Maharashtra%20422003!5e0!3m2!1sen!2sin!4v1675850000000!5m2!1sen!2sin" 
            width="100%" 
            height="400" 
            style={{ border: 0, borderRadius: '15px' }} 
            allowFullScreen="" 
            loading="lazy">
          </iframe>
        </div>
      </div>

    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  card: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s'
  },
  iconBox: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.8rem',
    margin: '0 auto 20px auto'
  },
  list: {
    textAlign: 'left',
    paddingLeft: '20px',
    color: '#666',
    lineHeight: '1.6'
  },
  mapContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    borderRadius: '15px',
    overflow: 'hidden'
  }
};

export default TravelGuide;