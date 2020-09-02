import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Schedule from './components/Schedule';
import './App.css';

function App() {
  return (
    <div className="App">
    <Schedule />
      <header className="App-header">

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check your schedule
        </a>
      </header>
    </div>
  );
}

export default App;
