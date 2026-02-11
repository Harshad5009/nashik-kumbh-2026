import React, { useState, useEffect } from 'react';

const CrowdStatus = () => {
  // Initial Data for Major Ghats
  const [locations, setLocations] = useState([
    { id: 1, name: "Ramkund Ghat", level: 85, status: "Crowded 🔴" },
    { id: 2, name: "Sita Gufa", level: 60, status: "Moderate 🟠" },
    { id: 3, name: "Laxman Jhula", level: 30, status: "Low 🟢" },
    { id: 4, name: "Trimbakeshwar", level: 92, status: "Very High 🔴" }
  ]);

  // Simulate "Live" updates every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLocations(prevLocations => prevLocations.map(loc => {
        // Randomly fluctuate the crowd level by -5 to +5
        let change = Math.floor(Math.random() * 11) - 5; 
        let newLevel = Math.max(0, Math.min(100, loc.level + change));
        
        let newStatus = "Low 🟢";
        if (newLevel > 40) newStatus = "Moderate 🟠";
        if (newLevel > 75) newStatus = "Crowded 🔴";
        if (newLevel > 90) newStatus = "Very High 🔴";

        return { ...loc, level: newLevel, status: newStatus };
      }));
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.widgetContainer}>
      <h3 style={styles.header}>
        <span className="blink">●</span> Live Crowd Dashboard
      </h3>
      <div style={styles.grid}>
        {locations.map(loc => (
          <div key={loc.id} style={styles.card}>
            <div style={styles.row}>
              <strong>{loc.name}</strong>
              <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{loc.level}%</span>
            </div>
            
            {/* Progress Bar Background */}
            <div style={styles.progressBarBg}>
              {/* Dynamic Progress Bar */}
              <div style={{
                ...styles.progressBarFill,
                width: `${loc.level}%`,
                backgroundColor: loc.level > 75 ? '#e74c3c' : (loc.level > 40 ? '#f39c12' : '#27ae60')
              }}></div>
            </div>
            
            <small style={{ color: '#555', marginTop: '5px', display: 'block' }}>
              Status: {loc.status}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

// CSS Styles
const styles = {
  widgetContainer: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
    maxWidth: '800px',
    margin: '40px auto',
    border: '1px solid #eee'
  },
  header: {
    margin: '0 0 20px 0',
    color: '#2c3e50',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px'
  },
  card: {
    padding: '15px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    borderLeft: '4px solid #3498db'
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px'
  },
  progressBarBg: {
    height: '8px',
    backgroundColor: '#e0e0e0',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  progressBarFill: {
    height: '100%',
    borderRadius: '4px',
    transition: 'width 1s ease-in-out, background-color 1s ease'
  }
};

export default CrowdStatus;