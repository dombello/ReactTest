import logo from './logo.svg';
import React from 'react';
import profileImage from './img/plant.gif'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> My React App</h1>
      <h2> Author: Dom Bello</h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
