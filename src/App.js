import React, { useState } from 'react';
import './App.css';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';

function App() {
  const [showSecondPage, setShowSecondPage] = useState(false);
  const [questions, setQuestions] = useState([]);
  
  return (
    <div className="App">
      <div>
        <h1 className="App-header">Choice Maker App</h1>
      </div>
      {showSecondPage === false ? (
        <FirstPage
          setShowSecondPage={setShowSecondPage}
          questions={questions}
          setQuestions={setQuestions}
        />
      ) : (
        <SecondPage 
          questions={questions}
          setShowSecondPage={setShowSecondPage}
        />
      )}
    </div>
  );
}

export default App;
