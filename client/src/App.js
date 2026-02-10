import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Navbar from './components/Navbar';

// Import Pages
import Home from './pages/Home';
import Accommodations from './pages/Accommodations'; // The List (Menu)
import BookingForm from './pages/BookingForm';     // The Form (Order Pad)
import AdminPanel from './pages/AdminPanel';
import Login from './pages/Login';

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          {/* 1. Homepage */}
          <Route path="/" element={<Home />} />

          {/* 2. The List of Hotels (Step 1 of the flow) */}
          <Route path="/accommodations" element={<Accommodations />} />

          {/* 3. The Booking Form (Step 2 of the flow) */}
          {/* We renamed this path to "/book-now" so it makes sense */}
          <Route path="/book-now" element={<BookingForm />} />

          {/* 4. Admin Panel */}
          <Route path="/admin" element={
            !isAdminLoggedIn ? (
              <Login onLogin={setIsAdminLoggedIn} />
            ) : (
              <AdminPanel />
            )
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;