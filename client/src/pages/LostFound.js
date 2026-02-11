import React, { useState, useEffect } from 'react';

const LostFound = () => {
  const [activeTab, setActiveTab] = useState('board'); // 'board' or 'report'
  const [reports, setReports] = useState([]);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    description: '',
    location: '',
    contact: '',
    image: null
  });

  // Load reports from storage on mount
  useEffect(() => {
    const savedReports = JSON.parse(localStorage.getItem('kumbhLostFound')) || [];
    setReports(savedReports);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a fake local URL for the image so it displays instantly
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, image: imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReport = {
      id: Date.now(),
      ...formData,
      status: 'Missing',
      timestamp: new Date().toLocaleString()
    };

    const updatedReports = [newReport, ...reports];
    setReports(updatedReports);
    localStorage.setItem('kumbhLostFound', JSON.stringify(updatedReports));
    
    alert("Report Posted Successfully. Police have been notified.");
    setActiveTab('board'); // Switch back to board
    setFormData({ name: '', age: '', description: '', location: '', contact: '', image: null });
  };

  return (
    <div style={{ backgroundColor: '#f4f6f8', minHeight: '100vh', paddingBottom: '40px' }}>
      
      {/* 1. Header */}
      <div style={styles.header}>
        <h1 style={{ margin: 0, fontFamily: 'Cinzel, serif' }}>Khoya-Paya Portal</h1>
        <p style={{ margin: '5px 0 0 0', opacity: 0.9 }}>Reuniting Families at Kumbh Mela</p>
      </div>

      {/* 2. Toggle Tabs */}
      <div style={styles.tabContainer}>
        <button 
          style={activeTab === 'board' ? styles.activeTab : styles.tab} 
          onClick={() => setActiveTab('board')}
        >
          🔍 View Missing People
        </button>
        <button 
          style={activeTab === 'report' ? styles.activeTab : styles.tab} 
          onClick={() => setActiveTab('report')}
        >
          📢 Report Missing Person
        </button>
      </div>

      {/* 3. CONTENT AREA */}
      <div style={styles.container}>
        
        {/* VIEW BOARD SECTION */}
        {activeTab === 'board' && (
          <div style={styles.grid}>
            {reports.length === 0 ? (
              <div style={{ textAlign: 'center', gridColumn: '1/-1', color: '#7f8c8d', padding: '40px' }}>
                <h3>No active missing reports.</h3>
                <p>Safe Kumbh, Happy Kumbh!</p>
              </div>
            ) : (
              reports.map((person) => (
                <div key={person.id} style={styles.card}>
                  <div style={styles.imagePlaceholder}>
                    {person.image ? (
                      <img src={person.image} alt="Missing" style={styles.image} />
                    ) : (
                      <div style={{ fontSize: '3rem' }}>👤</div>
                    )}
                  </div>
                  <div style={{ padding: '15px' }}>
                    <h3 style={{ margin: '0 0 5px 0', color: '#c0392b' }}>{person.name}</h3>
                    <p style={styles.meta}>Age: {person.age} | Loc: {person.location}</p>
                    <p style={styles.desc}>{person.description}</p>
                    <div style={styles.contactBox}>
                      <small>Contact Family:</small>
                      <strong>{person.contact}</strong>
                    </div>
                    <button style={styles.helpBtn}>I Found Them! 📞</button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* REPORT FORM SECTION */}
        {activeTab === 'report' && (
          <div style={styles.formCard}>
            <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>File a Missing Report</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              
              <div style={styles.uploadBox}>
                <label style={{ cursor: 'pointer', color: '#3498db', fontWeight: 'bold' }}>
                  📷 Upload Photo (Required)
                  <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} required />
                </label>
                {formData.image && <p style={{ color: 'green', fontSize: '0.8rem' }}>Image Selected ✅</p>}
              </div>

              <input type="text" name="name" placeholder="Full Name of Person" value={formData.name} onChange={handleInputChange} style={styles.input} required />
              <div style={{ display: 'flex', gap: '10px' }}>
                <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleInputChange} style={{ ...styles.input, width: '30%' }} required />
                <input type="text" name="location" placeholder="Last Seen Location (e.g. Ramkund)" value={formData.location} onChange={handleInputChange} style={{ ...styles.input, flex: 1 }} required />
              </div>
              <textarea name="description" placeholder="Description (Clothes, Height, Language spoken...)" value={formData.description} onChange={handleInputChange} style={{ ...styles.input, height: '80px' }} required />
              <input type="tel" name="contact" placeholder="Your Contact Number" value={formData.contact} onChange={handleInputChange} style={styles.input} required />

              <button type="submit" style={styles.submitBtn}>🚨 Post Alert Immediately</button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};

// CSS Styles
const styles = {
  header: {
    backgroundColor: '#c0392b', // Urgent Red
    color: 'white',
    padding: '30px 20px',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '-25px'
  },
  tab: {
    padding: '12px 30px',
    border: 'none',
    backgroundColor: 'white',
    color: '#555',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    margin: '0 5px',
    borderRadius: '5px'
  },
  activeTab: {
    padding: '12px 30px',
    border: 'none',
    backgroundColor: '#2c3e50',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    margin: '0 5px',
    borderRadius: '5px',
    transform: 'translateY(-2px)'
  },
  container: {
    maxWidth: '1000px',
    margin: '30px auto',
    padding: '0 20px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    border: '1px solid #eee'
  },
  imagePlaceholder: {
    height: '200px',
    backgroundColor: '#ecf0f1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#bdc3c7'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  meta: {
    fontSize: '0.9rem',
    color: '#7f8c8d',
    marginBottom: '10px'
  },
  desc: {
    fontSize: '0.95rem',
    color: '#34495e',
    marginBottom: '15px',
    lineHeight: '1.4'
  },
  contactBox: {
    backgroundColor: '#fff3e0',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ffe0b2',
    textAlign: 'center',
    marginBottom: '10px',
    color: '#d35400'
  },
  helpBtn: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  formCard: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    maxWidth: '500px',
    margin: '0 auto',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
  },
  input: {
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '1rem'
  },
  uploadBox: {
    border: '2px dashed #3498db',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '5px',
    backgroundColor: '#f0f8ff'
  },
  submitBtn: {
    padding: '15px',
    backgroundColor: '#c0392b',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px'
  }
};

export default LostFound;