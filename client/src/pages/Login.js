import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // This is a simple hardcoded password for now
        if (password === 'admin2026') { 
            onLogin(true); // Tell App.js that login succeeded
        } else {
            alert('❌ Wrong Password! Access Denied.');
        }
    };

    return (
        <div style={{ maxWidth: '300px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ color: '#d35400' }}>🔒 Admin Login</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="password" 
                    placeholder="Enter Admin Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ padding: '8px', width: '90%', marginBottom: '10px' }}
                />
                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;