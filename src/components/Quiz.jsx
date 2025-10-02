import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Question from './Question';
import Navigation from './Navigation';
import Congratulations from './Congratulations';

function Quiz() {
  const [countries, setCountries] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all?fields=name,flags')
      .then(res => {
        const allCountries = res.data;

        const selected = allCountries
          .filter(c => c.name?.common && c.flags?.png)
          .sort(() => 0.5 - Math.random())
          .slice(0, 10);

        const generated = selected.map(country => {
          const correct = country.name.common;
          const distractors = allCountries
            .map(c => c.name.common)
            .filter(name => name !== correct)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);

          const options = [...distractors, correct].sort(() => 0.5 - Math.random());

          return {
            flag: country.flags.png,
            correct,
            options
          };
        });

        setCountries(selected);
        setQuestions(generated);
      })
      .catch(err => {
        console.error('Error al obtener países:', err.message);
      });
  }, []);

  const handleAnswer = (index, isCorrect) => {
    const updated = [...answers];
    updated[index] = isCorrect;
    setAnswers(updated);

    if (updated.every(ans => ans !== null)) {
      setTimeout(() => setShowResults(true), 1500);
    } else {
      setTimeout(() => {
        setCurrentIndex(prev => Math.min(prev + 1, questions.length - 1));
      }, 1500);
    }
  };

  if (showResults) {
    const score = answers.filter(ans => ans === true).length;
    return <Congratulations score={score} onRestart={() => window.location.reload()} />;
  }

  return (
  <div style={{
    flex: 1,
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
    <Navigation current={currentIndex} setCurrent={setCurrentIndex} />
    {questions.length > 0 && (
      <Question
        data={questions[currentIndex]}
        index={currentIndex}
        onAnswer={handleAnswer}
        answered={answers[currentIndex] !== null}
      />
    )}
  </div>
);

}

export default Quiz;