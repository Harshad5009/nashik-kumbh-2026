import React from 'react';
import { Link } from 'react-router-dom';

const Attractions = () => {
  const places = [
    {
      id: 1,
      name: "Trimbakeshwar Jyotirlinga",
      desc: "One of the 12 Jyotirlingas of Lord Shiva. The origin of the Godavari river.",
      image: "/images/trimbak.jpg", // Local Image
      distance: "28 km from Nashik"
    },
    {
      id: 2,
      name: "Ramkund (Ganga Ghat)",
      desc: "The holiest spot in Nashik where Lord Rama took a bath. The Kumbh Shahi Snan happens here.",
      image: "/images/ramkund.jpg", // Local Image
      distance: "City Center"
    },
    {
      id: 3,
      name: "Panchvati & Sita Gufa",
      desc: "The place where Lord Rama, Sita, and Laxman stayed during their exile. Features the famous 5 Banyan trees.",
      image: "/images/panchvati.jpg", // Local Image
      distance: "2 km from Bus Stand"
    },
    {
      id: 4,
      name: "Muktidham Mandir",
      desc: "A unique temple complex built with white marble from Rajasthan, housing replicas of 12 Jyotirlingas.",
      image: "/images/muktidham.jpg", // Local Image
      distance: "8 km from City"
    },
    {
      id: 5,
      name: "Anjaneri Hills",
      desc: "The birthplace of Lord Hanuman. A scenic trek with a hilltop temple.",
      image: "/images/anjaneri.jpg", // Local Image
      distance: "20 km from Nashik"
    },
    {
      id: 6,
      name: "Pandavleni Caves",
      desc: "Ancient Buddhist rock-cut caves dating back to the 1st century BC.",
      image: "/images/pandavleni.jpg", // Local Image
      distance: "8 km from City"
    }
  ];

  return (
    <div style={{ backgroundColor: '#fff5e6', minHeight: '100vh', padding: '40px 20px' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ color: '#680808', fontFamily: 'Cinzel, serif', fontSize: '3rem', margin: 0 }}>
          Sacred Destinations
        </h1>
        <p style={{ color: '#d35400', fontSize: '1.2rem', marginTop: '10px' }}>
          Explore the spiritual heritage of Nashik
        </p>
        <hr style={{ width: '100px', border: '2px solid #f4c430', margin: '20px auto' }} />
      </div>

      {/* Grid */}
      <div style={styles.grid}>
        {places.map(place => (
          <div key={place.id} style={styles.card}>
            {/* Image Wrapper for Zoom Effect */}
            <div style={styles.imgWrapper}>
              <img src={place.image} alt={place.name} style={styles.img} />
            </div>
            
            <div style={styles.content}>
              <h2 style={styles.title}>{place.name}</h2>
              <span style={styles.badge}>{place.distance}</span>
              <p style={styles.desc}>{place.desc}</p>
              
              <Link to="/travel">
                <button style={styles.btn}>How to Reach →</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s',
    borderBottom: '4px solid #d35400'
  },
  imgWrapper: {
    height: '200px',
    overflow: 'hidden',
    backgroundColor: '#ddd' // Placeholder color while loading
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s'
  },
  content: {
    padding: '20px'
  },
  title: {
    margin: '0 0 10px 0',
    color: '#2c3e50',
    fontFamily: 'Cinzel, serif',
    fontSize: '1.4rem'
  },
  badge: {
    backgroundColor: '#fdf2e9',
    color: '#d35400',
    padding: '4px 10px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: 'bold'
  },
  desc: {
    color: '#666',
    lineHeight: '1.5',
    margin: '15px 0'
  },
  btn: {
    backgroundColor: 'transparent',
    border: '1px solid #d35400',
    color: '#d35400',
    padding: '8px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    width: '100%',
    transition: 'background 0.3s'
  }
};

export default Attractions;