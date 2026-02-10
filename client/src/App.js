import React, { useState } from 'react';
import BookingForm from './BookingForm';
import AdminPanel from './AdminPanel';
import Login from './Login'; // Import the new Login component

function App() {
  // 1. State to track if admin is logged in
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', color: '#ff9933' }}>🕉️ Nashik Kumbh Mela 2026</h1>
      
      {/* 2. ALWAYS Show the Booking Form (For Visitors) */}
      <BookingForm />

      <hr style={{ margin: '40px 0', borderTop: '2px dashed #ccc' }} />

      {/* 3. CONDITIONAL RENDERING (The Gatekeeper) */}
      <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
        <h2 style={{ textAlign: 'center', color: '#555' }}>Admin Access</h2>
        
        {/* If NOT logged in, show Login. If YES logged in, show AdminPanel */}
        {!isAdminLoggedIn ? (
          <Login onLogin={setIsAdminLoggedIn} />
        ) : (
          <div>
             <button 
                onClick={() => setIsAdminLoggedIn(false)}
                style={{ backgroundColor: '#555', padding: '5px 15px', marginBottom: '10px', width: 'auto' }}
             >
                Logout
             </button>
             <AdminPanel />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;