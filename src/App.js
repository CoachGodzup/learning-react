import React from 'react';
import './App.css';
import Static from './component/Static/Static'
import SelfContained from './component/SelfContained/SelfContained'


function App() {
  return (
    <div className="App">
      <h1>Several React components</h1>
      <Static />
      <SelfContained />
    </div>
  );
}

export default App;
