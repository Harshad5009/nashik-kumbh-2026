import React from 'react';
import { Link } from 'react-router-dom';
// Ensure you have installed icons: npm install react-icons
import { FaCalendarAlt, FaMapMarkerAlt, FaCampground, FaGopuram } from 'react-icons/fa';
import '../App.css';

const Home = () => {
  return (
    <div>
      {/* 1. HERO SECTION */}
      <div 
        className="hero-gov" 
        style={{ 
          /* We changed .jpg to .png here to match your file! */
          backgroundImage: `linear-gradient(rgba(104, 8, 8, 0.5), rgba(104, 8, 8, 0.7)), url(/images/nashik-hero.png)` 
        }}
      >
        <Link to="/accommodations">
          <button className="plan-btn">Plan Your Yatra</button>
        </Link>
        
        <div style={{marginTop: '20px', fontWeight: 'bold', fontSize: '1.2rem'}}>Countdown to Mahakumbh:</div>
        <div className="countdown-text">
          185 Days : 12 Hours : 30 Minutes
        </div>
      </div>

      {/* 2. THE 4 COLORED CARDS */}
      <div className="cards-container-gov">
        
        {/* Card 1: Orange */}
        <div className="card-gov bg-orange">
          <FaCalendarAlt size={40} style={{marginBottom: '15px'}} />
          <h3>Shahi Snan Dates</h3>
          <p>Aug-Sept 2026. Auspicious bathing days schedule.</p>
          <Link to="/snan-dates">
  <button className="card-btn text-orange">View Schedule</button>
</Link>
        </div>

        {/* Card 2: Blue */}
        <div className="card-gov bg-blue">
          <FaMapMarkerAlt size={40} style={{marginBottom: '15px'}} />
          <h3>How to Reach</h3>
          <p>Air, Train, and Road connectivity guide to Nashik.</p>
          <Link to="/travel">
            <button className="card-btn text-blue">Get Directions</button>
          </Link>
        </div>

        {/* Card 3: Green */}
        <div className="card-gov bg-green">
          <FaCampground size={40} style={{marginBottom: '15px'}} />
          <h3>Accommodation</h3>
          <p>Tent City, Hotels, and Ashram online booking.</p>
          <Link to="/accommodations">
            <button className="card-btn text-green">Book Stay</button>
          </Link>
        </div>

        {/* Card 4: Red */}
        <div className="card-gov bg-red">
          <FaGopuram size={40} style={{marginBottom: '15px'}} />
          <h3>Key Attractions</h3>
          <p>Trimbakeshwar, Panchvati, Muktidham, and more.</p>
          <Link to="/attractions">
            <button className="card-btn text-red">Explore</button>
          </Link>
        </div>
      </div>

      {/* 3. LEGEND SECTION */}
      <div className="legend-section">
        <div className="legend-text">
          <h2>The Legend of Nashik Kumbh</h2>
          <hr style={{width: '100px', border: '2px solid #d35400', margin: '20px 0'}} />
          <p>
            The 'Amrit' drops fell on the Godavari river during the cosmic struggle (Samudra Manthan) 
            between the Gods and Demons. This event transformed Nashik into one of the four holiest 
            cities in India. Every 12 years, millions gather here to bathe in the sacred waters 
            and cleanse their souls.
          </p>
        </div>
        
        {/* IMPORTANT: Now referencing the local file in public/images */}
        <img 
          src="/images/samudra-manthan.jpg" 
          alt="Samudra Manthan Painting" 
          className="legend-img" 
        />
      </div>

      {/* 4. FOOTER */}
      <div style={{backgroundColor: '#1a1a1a', color: 'white', padding: '20px', textAlign: 'center', fontSize: '0.8rem'}}>
        © 2026 Nashik Kumbh Mela Committee. All Rights Reserved. | Government of Maharashtra
      </div>
    </div>
  );
};

export default Home;