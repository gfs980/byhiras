import React from 'react';
import './styles/styles.css'
import { ContextProvider } from './store/store';
import Info from './components/Info.jsx';
import Arena from './components/Arena.jsx';

function App() {
  return (
    <div className="App">
      <h2>BATTLE SIMULATOR</h2>
      <ContextProvider>
        <Info />
        <Arena />
      </ContextProvider>
    </div>
  );
}

export default App;
