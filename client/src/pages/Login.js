import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // HARDCODED CREDENTIALS FOR DEMO
    if (username === 'admin' && password === 'admin123') {
      onLogin(true); // Tell App.js that we are logged in
    } else {
      setError('Invalid Official Credentials');
    }
  };

  return (
    <div style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2c3e50' }}>
      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '10px', width: '300px', textAlign: 'center' }}>
        <h2 style={{ color: '#d35400', marginBottom: '20px' }}>Official Login</h2>
        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '20px' }}>Nashik Municipal Corporation</p>
        
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            style={styles.input}
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            style={styles.input}
          />
          
          {error && <p style={{ color: 'red', fontSize: '0.8rem' }}>{error}</p>}
          
          <button type="submit" style={styles.button}>Access Dashboard</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '10px',
    backgroundColor: '#d35400',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};

export default Login;