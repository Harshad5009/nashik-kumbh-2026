import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar-gov">
      {/* LEFT: LOGOS */}
      <div className="logo-section">
        {/* IMPORTANT: Now referencing the local file in public/images */}
        <img 
          src="/images/mah-seal.png" 
          alt="Maharashtra Govt Seal" 
          className="gov-logo" 
        />
        <div className="title-text">
          <h1>Nashik Kumbh Mela 2026</h1>
          <p>The Divine Congregation at Godavari</p>
        </div>
      </div>
      
      {/* RIGHT: LINKS */}
      <ul className="nav-links-gov">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/accommodations">Accommodation</Link></li>
        <li><Link to="/bus">City Bus 🚌</Link></li>
        <li><Link to="/admin">Official Login</Link></li>
        <li>
  <Link to="/lost-found" style={{ color: '#ff4d4d', fontWeight: 'bold' }}>
    Lost & Found 📢
  </Link>
</li>
        <li style={{border: '1px solid white', padding: '2px 5px', borderRadius: '4px', cursor: 'pointer'}}>EN/HI</li>
      </ul>
    </nav>
  );
};

export default Navbar;