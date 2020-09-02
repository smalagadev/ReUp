import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Schedule from './components/Schedule';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <>
      <Dashboard />
      <Schedule />
    </>
  );
}

export default App;
