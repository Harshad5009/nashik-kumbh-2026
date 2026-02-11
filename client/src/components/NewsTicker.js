import React from 'react';

const NewsTicker = () => {
  return (
    <div style={styles.container}>
      <div style={styles.label}>🔴 LIVE UPDATES:</div>
      <div style={styles.tickerWrapper}>
        <div style={styles.tickerContent}>
          <span>⚠️ <strong>CROWD ALERT:</strong> Ramkund Ghat capacity at 85%. Please divert to Gauri Patangan.</span>
          <span style={styles.separator}>|</span>
          <span>🚌 <strong>TRANSPORT:</strong> 50 Extra MSRTC Buses deployed from Nashik Road Railway Station.</span>
          <span style={styles.separator}>|</span>
          <span>🌧️ <strong>WEATHER:</strong> Light showers expected at Trimbakeshwar. Carry umbrellas.</span>
          <span style={styles.separator}>|</span>
          <span>👮 <strong>POLICE:</strong> Gate No. 4 is currently closed for VIP movement. Use Gate No. 2.</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#000',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    height: '40px',
    overflow: 'hidden',
    borderBottom: '2px solid #d35400',
    position: 'sticky',
    top: 0,
    zIndex: 2000 // On top of everything
  },
  label: {
    backgroundColor: '#c0392b',
    padding: '0 15px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '0.8rem',
    whiteSpace: 'nowrap',
    zIndex: 10
  },
  tickerWrapper: {
    flex: 1,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    position: 'relative'
  },
  tickerContent: {
    display: 'inline-block',
    paddingLeft: '100%',
    animation: 'marquee 60s linear infinite',
    fontSize: '0.9rem'
  },
  separator: {
    margin: '0 20px',
    color: '#d35400'
  }
};

export default NewsTicker;