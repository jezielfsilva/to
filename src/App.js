import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageSignup from './components/createAccount';
import PageLoggin from './components/loggin';

function App() {
  return (
    <div className="App">
      <PageSignup/>
      <PageLoggin/>
    </div>
  );
}

export default App;
