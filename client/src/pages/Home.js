import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt, FaCampground, FaGopuram } from 'react-icons/fa';
import '../App.css';

// The list of images
const heroImages = [
  "/images/nashik-hero.png",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg"
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Preload images to prevent flickering
    heroImages.forEach((img) => {
      const i = new Image();
      i.src = img;
    });

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {/* 1. HERO SECTION - FIXED IMAGE SCALING */}
      <div 
        className="hero-gov" 
        style={{ 
          // 1. Set the background image
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${heroImages[currentImageIndex]})`,
          
          // 2. FORCE the image to cover the screen properly
          backgroundSize: 'cover',       // Ensures image fills the box
          backgroundPosition: 'center',  // Centers the image
          backgroundRepeat: 'no-repeat', // Prevents tiling
          
          // 3. Smooth fade effect
          transition: 'background-image 1s ease-in-out',
          
          // 4. Ensure it takes full width
          width: '100%'
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
        <div className="card-gov bg-orange">
          <FaCalendarAlt size={40} style={{marginBottom: '15px'}} />
          <h3>Shahi Snan Dates</h3>
          <p>Aug-Sept 2026. Auspicious bathing days schedule.</p>
          <Link to="/snan-dates">
            <button className="card-btn text-orange">View Schedule</button>
          </Link>
        </div>

        <div className="card-gov bg-blue">
          <FaMapMarkerAlt size={40} style={{marginBottom: '15px'}} />
          <h3>How to Reach</h3>
          <p>Air, Train, and Road connectivity guide to Nashik.</p>
          <Link to="/travel">
            <button className="card-btn text-blue">Get Directions</button>
          </Link>
        </div>

        <div className="card-gov bg-green">
          <FaCampground size={40} style={{marginBottom: '15px'}} />
          <h3>Accommodation</h3>
          <p>Tent City, Hotels, and Ashram online booking.</p>
          <Link to="/accommodations">
            <button className="card-btn text-green">Book Stay</button>
          </Link>
        </div>

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