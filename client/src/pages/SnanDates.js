import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarCheck, FaMapMarkerAlt } from 'react-icons/fa';

const SnanDates = () => {
  // Official Dates (Placeholder based on 2026 projections)
  const snanEvents = [
    {
      id: 1,
      date: "August 14, 2026",
      day: "Friday",
      title: "Flag Hoisting (Dhwajarohan)",
      desc: "The official start of the Kumbh Mela. The sacred flag is hoisted at Ramkund.",
      type: "ceremony"
    },
    {
      id: 2,
      date: "August 29, 2026",
      day: "Saturday",
      title: "First Shahi Snan (Shravan Purnima)",
      desc: "The first major Royal Bath. Sadhus and Akharas take the holy dip first.",
      type: "major" // Special highlighting
    },
    {
      id: 3,
      date: "September 13, 2026",
      day: "Sunday",
      title: "Second Shahi Snan (Bhadrapad Amavasya)",
      desc: "The most auspicious day. Millions gather for the main bathing ritual.",
      type: "major"
    },
    {
      id: 4,
      date: "September 18, 2026",
      day: "Friday",
      title: "Third Shahi Snan (Rishi Panchami)",
      desc: "The final Royal Bath concluding the major rituals of the Kumbh.",
      type: "major"
    }
  ];

  return (
    <div style={{ backgroundColor: '#fff5e6', minHeight: '100vh', paddingBottom: '50px' }}>
      
      {/* 1. COMPACT HERO SECTION */}
      <div style={styles.heroSmall}>
        <h1 style={{ margin: 0, fontFamily: 'Cinzel, serif', fontSize: '2.5rem' }}>Shahi Snan Schedule</h1>
        <p style={{ marginTop: '10px', opacity: 0.9 }}>Mark these dates for the Holy Dip</p>
      </div>

      {/* 2. TIMELINE CONTAINER */}
      <div style={styles.timelineContainer}>
        {snanEvents.map((event) => (
          <div key={event.id} style={event.type === 'major' ? styles.cardMajor : styles.cardNormal}>
            
            {/* Date Badge */}
            <div style={styles.dateBadge}>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{event.date.split(' ')[1].replace(',', '')}</span>
              <span style={{ textTransform: 'uppercase', fontSize: '0.8rem' }}>{event.date.split(' ')[0]}</span>
            </div>

            {/* Event Details */}
            <div style={styles.content}>
              <h3 style={{ color: event.type === 'major' ? '#d35400' : '#2c3e50', margin: '0 0 10px 0' }}>
                {event.title}
              </h3>
              <p style={{ margin: 0, color: '#555', fontSize: '0.95rem' }}>{event.desc}</p>
              
              {/* Info Tags */}
              <div style={styles.tags}>
                <span style={styles.tag}><FaCalendarCheck /> {event.day}</span>
                <span style={styles.tag}><FaMapMarkerAlt /> Ramkund, Nashik</span>
              </div>
            </div>

            {/* Action Button */}
            <button style={styles.remindBtn}>Set Reminder 🔔</button>
          </div>
        ))}
      </div>

      {/* 3. CTA */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <p>Planning to visit?</p>
        <Link to="/accommodations">
          <button style={styles.bookBtn}>Book Accommodation Early</button>
        </Link>
      </div>

    </div>
  );
};

// Internal Styles
const styles = {
  heroSmall: {
    backgroundColor: '#680808', // Matches Govt Maroon
    color: 'white',
    padding: '40px 20px',
    textAlign: 'center',
    borderBottom: '4px solid #f4c430'
  },
  timelineContainer: {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  cardNormal: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    borderLeft: '5px solid #bdc3c7',
    flexWrap: 'wrap',
    gap: '20px'
  },
  cardMajor: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fffcf5',
    padding: '25px', // Slightly bigger
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(211, 84, 0, 0.2)',
    borderLeft: '5px solid #d35400', // Saffron Border
    border: '1px solid #ffdcb3',
    flexWrap: 'wrap',
    gap: '20px'
  },
  dateBadge: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4c430',
    color: '#680808',
    padding: '10px',
    borderRadius: '8px',
    minWidth: '70px',
    height: '70px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
  },
  content: {
    flex: 1,
    minWidth: '200px'
  },
  tags: {
    display: 'flex',
    gap: '15px',
    marginTop: '10px',
    fontSize: '0.85rem',
    color: '#7f8c8d'
  },
  tag: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px'
  },
  remindBtn: {
    backgroundColor: 'transparent',
    border: '1px solid #d35400',
    color: '#d35400',
    padding: '8px 15px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '0.8rem'
  },
  bookBtn: {
    backgroundColor: '#d35400',
    color: 'white',
    border: 'none',
    padding: '12px 30px',
    fontSize: '1.1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
  }
};

export default SnanDates;