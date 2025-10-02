import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

function Congratulations({ score, onRestart }) {
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  return (
    <div style={{
      backgroundColor: '#1e1e2f',
      color: 'white',
      padding: '40px',
      borderRadius: '12px',
      textAlign: 'center',
      maxWidth: '400px',
      margin: '0 auto',
      boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{ fontSize: '48px', marginBottom: '20px' }}>🎉</div>
      <h2 style={{ marginBottom: '10px' }}>¡Felicidades!</h2>
      <p>Completaste el cuestionario.</p>
      <p>Respondiste correctamente <strong>{score}/10</strong> preguntas.</p>
      <button
        onClick={onRestart}
        style={{
          marginTop: '30px',
          padding: '12px 24px',
          fontSize: '16px',
          borderRadius: '8px',
          border: 'none',
          background: 'linear-gradient(to right, #ff5f9e, #a64bf4)',
          color: 'white',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Jugar nuevamente
      </button>
    </div>
  );
}

export default Congratulations;