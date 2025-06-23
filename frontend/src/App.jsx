import React from 'react';
import { Send, Paperclip, Hash, Twitter, Linkedin } from 'lucide-react';
import GlassmorphismNav from './GlassmorphismNav';
import './App.css';

function App() {
  return (
    
    <div className="app">
      <GlassmorphismNav />
      <div className="container">
        {/* Main heading */}
        <h1 className="main-heading">
          Soumo is a Developer in<br />
          Kolkata, India
        </h1>

        {/* Reach out button */}
        <button className="reach-out-btn">
          Reach out ↗
        </button>
        
        {/* Currently section */}
        <div className="currently-section">
          <div className="currently-badge">
            CURRENTLY
          </div>
          <p className="current-role">
            Available to work
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;