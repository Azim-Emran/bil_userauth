import React, { useEffect, useState } from 'react';
import './App.css';
import SignUp from './components/signup_component';
import LogIn from './components/login_components';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <LogIn />
      </header>
    </div>
  );
}

export default App;