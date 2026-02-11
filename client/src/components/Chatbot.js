import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaPaperPlane, FaTimes } from 'react-icons/fa';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Namaste! 🙏 I am the Kumbh Mela AI Assistant. Ask me about Toilets, Buses, Food, or Parking.", sender: 'bot' }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    // 1. Add User Message
    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    
    // 2. Process "AI" Response (Keyword Matching)
    setTimeout(() => {
      let botResponse = "I didn't understand that. Try asking about 'Bus', 'Toilet', 'Food', or 'Police'.";
      const lowerInput = input.toLowerCase();

      if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        botResponse = "Hello pilgrim! How can I help you today?";
      } 
      else if (lowerInput.includes('toilet') || lowerInput.includes('bathroom') || lowerInput.includes('washroom')) {
        botResponse = "🚽 Public Toilets are located at: 1. Ramkund Ghat (Near entrance) 2. Sadhugram Sector 4 3. Nashik Road Bus Stand.";
      }
      else if (lowerInput.includes('bus') || lowerInput.includes('train') || lowerInput.includes('travel')) {
        botResponse = "🚌 Buses to Trimbakeshwar leave every 15 mins from CBS Stand. Trains to Mumbai are running on schedule.";
      }
      else if (lowerInput.includes('food') || lowerInput.includes('hungry') || lowerInput.includes('eat')) {
        botResponse = "🍛 Free Community Kitchens (Langars) are open 24/7 at Panchvati and Sadhugram. Pure veg food only.";
      }
      else if (lowerInput.includes('police') || lowerInput.includes('help') || lowerInput.includes('emergency') || lowerInput.includes('lost')) {
        botResponse = "🚨 EMERGENCY: Please click the Red SOS Button on the screen or dial 100 immediately. Police Control Room is near Ramkund.";
      }
      else if (lowerInput.includes('parking')) {
        botResponse = "🅿️ Parking is available at P1 (Golf Club Ground) and P2 (Aurangabad Road). Shuttle buses are available from there.";
      }

      const botMsg = { id: Date.now() + 1, text: botResponse, sender: 'bot' };
      setMessages(prev => [...prev, botMsg]);
    }, 600); // Small delay to feel like "thinking"

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* 1. Floating Toggle Button */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '100px', // Above the SOS button
          right: '30px',
          width: '60px',
          height: '60px',
          backgroundColor: '#2980b9',
          color: 'white',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          cursor: 'pointer',
          zIndex: 2000,
          border: '2px solid white'
        }}
      >
        {isOpen ? <FaTimes size={24} /> : <FaRobot size={28} />}
      </div>

      {/* 2. Chat Window */}
      {isOpen && (
        <div style={styles.chatWindow}>
          
          {/* Header */}
          <div style={styles.header}>
            <h3 style={{ margin: 0, fontSize: '1rem' }}>🤖 Yatra Sahayak (AI)</h3>
            <FaTimes style={{ cursor: 'pointer' }} onClick={() => setIsOpen(false)} />
          </div>

          {/* Messages Area */}
          <div style={styles.messagesContainer}>
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                style={{
                  ...styles.messageBubble,
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  backgroundColor: msg.sender === 'user' ? '#d35400' : '#ecf0f1',
                  color: msg.sender === 'user' ? 'white' : '#2c3e50',
                  borderBottomRightRadius: msg.sender === 'user' ? '0' : '15px',
                  borderBottomLeftRadius: msg.sender === 'bot' ? '0' : '15px',
                }}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div style={styles.inputArea}>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about bus, toilet..."
              style={styles.input}
            />
            <button onClick={handleSend} style={styles.sendBtn}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// Internal CSS for this component
const styles = {
  chatWindow: {
    position: 'fixed',
    bottom: '170px',
    right: '30px',
    width: '320px',
    height: '450px',
    backgroundColor: 'white',
    borderRadius: '15px',
    boxShadow: '0 5px 25px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    zIndex: 2000,
    border: '1px solid #ddd'
  },
  header: {
    backgroundColor: '#2980b9',
    color: 'white',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #1f618d'
  },
  messagesContainer: {
    flex: 1,
    padding: '15px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    backgroundColor: '#f9f9f9'
  },
  messageBubble: {
    maxWidth: '80%',
    padding: '10px 15px',
    borderRadius: '15px',
    fontSize: '0.9rem',
    lineHeight: '1.4',
    boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
  },
  inputArea: {
    padding: '10px',
    borderTop: '1px solid #eee',
    display: 'flex',
    gap: '10px',
    backgroundColor: 'white'
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '20px',
    border: '1px solid #ddd',
    outline: 'none'
  },
  sendBtn: {
    backgroundColor: '#2980b9',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default Chatbot;