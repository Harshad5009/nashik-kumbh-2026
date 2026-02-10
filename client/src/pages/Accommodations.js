import React from 'react';
import { Link } from 'react-router-dom';

const Accommodations = () => {
  const hotels = [
    {
      id: 1,
      name: "Kumbh Mela Tent City",
      price: "₹1,500 / Night",
      image: "https://images.unsplash.com/photo-1588392382834-a891154bca4d?auto=format&fit=crop&w=800&q=80", // Tent image
      desc: "Stay right next to the Godavari river in luxury Swiss tents. Includes meals and WiFi."
    },
    {
      id: 2,
      name: "Hotel Panchavati Elite",
      price: "₹3,000 / Night",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80", // Luxury Hotel
      desc: "Premium hotel in the heart of Nashik city. AC rooms with shuttle service to Ghats."
    },
    {
      id: 3,
      name: "Shri Swami Samarth Ashram",
      price: "₹500 / Night",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80", // Simple/Nature
      desc: "Affordable and peaceful stay for pilgrims. Shared dormitory style with clean facilities."
    }
  ];

  return (
    <div style={{ padding: '50px 20px', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ textAlign: 'center', color: '#d35400', marginBottom: '40px' }}>Choose Your Stay</h1>
      
      <div style={styles.container}>
        {hotels.map(hotel => (
          <div key={hotel.id} style={styles.card}>
            <img src={hotel.image} alt={hotel.name} style={styles.image} />
            <div style={styles.info}>
              <h3>{hotel.name}</h3>
              <p style={{ color: '#666', fontSize: '14px' }}>{hotel.desc}</p>
              <h4 style={{ color: '#27ae60' }}>{hotel.price}</h4>
              
              {/* Link to the Booking Form */}
              <Link to="/book-now">
                <button style={styles.button}>Book Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px'
  },
  card: {
    width: '300px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s'
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  },
  info: {
    padding: '20px',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#ff9933',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    fontWeight: 'bold',
    width: '100%'
  }
};

export default Accommodations;