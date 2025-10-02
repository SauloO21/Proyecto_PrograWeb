import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react'
import Quiz from './components/Quiz'

function App() {
  return (
    <div style={{
      backgroundColor: '#04163fff',
      color: 'white',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      boxSizing: 'border-box'
    }}>
     <Quiz />
    </div>
  );
}

export default App
