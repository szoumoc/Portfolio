import React, { useState } from 'react';

const GlassmorphismNav = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const navItems = ['Home', 'About', 'Projects', 'CV'];

  const navStyles = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: '1000',
    padding: '2rem'
  };

  const containerStyles = {
    maxWidth: '40rem',
    margin: '0 auto',
  };

  const glassContainerStyles = {
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '1rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    padding: '1rem 1.5rem'
  };

  const navListStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
    listStyle: 'none',
    margin: '0',
    padding: '0'
  };

  const getButtonStyles = (isActive) => ({
    position: 'relative',
    padding: '0.5rem 1.5rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    background: isActive ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
    color: isActive ? 'white' : 'rgba(255, 255, 255, 0.7)',
    border: isActive ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
    borderRadius: '0.75rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: isActive ? 'blur(8px)' : 'none',
    WebkitBackdropFilter: isActive ? 'blur(8px)' : 'none'
  });

  return (
    <nav style={navStyles}>
      <div style={containerStyles}>
        <div style={glassContainerStyles}>
          <ul style={navListStyles}>
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => setActiveItem(item)}
                  style={getButtonStyles(activeItem === item)}
                  onMouseEnter={(e) => {
                    if (activeItem !== item) {
                      e.target.style.color = 'white';
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeItem !== item) {
                      e.target.style.color = 'rgba(255, 255, 255, 0.7)';
                      e.target.style.background = 'transparent';
                    }
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default GlassmorphismNav;