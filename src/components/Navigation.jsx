import React from 'react';

function Navigation({ current, setCurrent }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      marginBottom: '30px',
      flexWrap: 'wrap'
    }}>
      {[...Array(10)].map((_, i) => {
        const isActive = current === i;
        return (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              background: isActive
                ? 'linear-gradient(to right, #ff5f9e, #a64bf4)'
                : '#2e2e3f',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '16px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'transform 0.2s',
            }}
          >
            {i + 1}
          </button>
        );
      })}
    </div>
  );
}

export default Navigation;