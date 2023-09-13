import React, { useEffect, useState } from 'react';
import './App.css';
import SignUp from './components/signup_component';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <SignUp />
      </header>
    </div>
  );
}

export default App;