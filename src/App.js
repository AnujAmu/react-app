import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <Greet name="Peter"  heroName="Bruce">
        <p>This is children props</p>
      </Greet>
      <Greet name="Parker" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Emma" heroName="Spiderman"/>
      <Welcome />
    </div>
  );
}

export default App;
