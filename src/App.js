import React from 'react';
import './App.css';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';

function App() {

  const headerName = <h1 className="App-header">Choice Maker App</h1>
  return (
    <div className="App">
      <div>
        <h1>{headerName}</h1>
      </div>

      <FirstPage />
      <SecondPage />
    </div>
  );
}

export default App;
