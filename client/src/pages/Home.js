import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt, FaCampground, FaGopuram } from 'react-icons/fa';
import '../App.css';
import CrowdStatus from '../components/CrowdStatus';

// The list of images for the slideshow
const heroImages = [
  "/images/nashik-hero.png",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg"
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cycle through images every 4 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {/* 1. HERO SECTION WITH SMOOTH CROSS-FADE */}
      <div className="hero-gov" style={{ position: 'relative', overflow: 'hidden' }}>
        
        {/* BACKGROUND LAYER: Render ALL images, but only show the current one */}
        {heroImages.map((img, index) => (
          <div 
            key={index}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              
              // THE MAGIC: Fade in/out based on active index
              opacity: currentImageIndex === index ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out', // 1.5s smooth fade
              zIndex: 0
            }}
          />
        ))}

        {/* CONTENT LAYER: Sits on top of the images */}
        <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <Link to="/accommodations">
            <button className="plan-btn">Plan Your Yatra</button>
          </Link>
          
          <div style={{marginTop: '20px', fontWeight: 'bold', fontSize: '1.2rem'}}>Countdown to Mahakumbh:</div>
          <div className="countdown-text">
            185 Days : 12 Hours : 30 Minutes
          </div>
        </div>
      </div>

      {/* 2. LIVE CROWD DASHBOARD */}
      <div style={{ 
        maxWidth: '900px', 
        margin: '-60px auto 40px auto', 
        position: 'relative', 
        zIndex: 10,
        padding: '0 20px'
      }}>
        <CrowdStatus />
      </div>

      {/* 3. THE 4 COLORED CARDS */}
      <div className="cards-container-gov" style={{ marginTop: '0' }}>
        
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

      {/* 4. LEGEND SECTION */}
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
        
        <img 
          src="/images/samudra-manthan.jpg" 
          alt="Samudra Manthan Painting" 
          className="legend-img" 
        />
      </div>

      {/* FLOATING EMERGENCY ACTION BUTTON */}
      <Link to="/lost-found">
        <div style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          backgroundColor: '#c0392b',
          color: 'white',
          padding: '15px 25px',
          borderRadius: '50px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          zIndex: 1000,
          cursor: 'pointer',
          border: '2px solid white'
        }}>
          🚨 Report Missing
        </div>
      </Link>

      {/* 5. FOOTER */}
      <div style={{backgroundColor: '#1a1a1a', color: 'white', padding: '20px', textAlign: 'center', fontSize: '0.8rem'}}>
        © 2026 Nashik Kumbh Mela Committee. All Rights Reserved. | Government of Maharashtra
      </div>
    </div>
  );
};

export default Home;