import React, { useState } from "react";

function Question({ data, index, onAnswer, answered }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    if (answered) return;
    setSelected(option);
    const isCorrect = option === data.correct;
    onAnswer(index, isCorrect);
  };

  return (
    <div style={{ backgroundColor: '#1e1e2f', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ color: 'white', marginBottom: '20px' }}>
        ¿A qué país pertenece esta bandera?
      </h2>

      <img
        src={data.flag}
        alt="Bandera"
        style={{ width: '120px', height: '80px', objectFit: 'contain', marginBottom: '20px' }}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        {data.options.map((option, i) => {
          const isSelected = selected === option;
          const isCorrect = option === data.correct;
          const showFeedback = answered && isSelected;
          const showCorrect = answered && isCorrect;

          let backgroundColor = '#2e2e3f';
          if (showFeedback) backgroundColor = isCorrect ? '#4caf50' : '#f44336';
          else if (showCorrect) backgroundColor = '#4caf50';

          return (
            <button
              key={i}
              onClick={() => handleSelect(option)}
              style={{
                backgroundColor,
                color: 'white',
                padding: '12px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '16px',
                cursor: answered ? 'default' : 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {option}
              {showFeedback && !isCorrect && <span>❌</span>}
              {showCorrect && <span>✅</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Question;