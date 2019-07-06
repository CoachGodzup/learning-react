import React from 'react';
import './App.css';
import Static from './component/Static/Static'
import SelfContained from './component/SelfContained/SelfContained'
import Updatable from './component/Updatable/Updatable'
import ConditionalRendering from './component/ConditionalRendering/ConditionalRendering';


function App() {
  
  return (
    <div className="App">
      <h1>Several React components</h1>
      <Static />
      <SelfContained />
      <Updatable />
      <ConditionalRendering />
    </div>
  );
}



export default App;
