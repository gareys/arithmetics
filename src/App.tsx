import React from 'react';
import './App.css';
import { ArithmeticProvider } from './contexts/ArithmeticContext';
import { ArithmeticDisplay } from './ArithmeticDisplay';
import { ArithmeticControlsProvider } from './contexts/ArithmeticControlsContext';
import { ArithmeticControls } from './ArithmeticControls';

export function App() {
  return (
    <ArithmeticControlsProvider>
      <ArithmeticProvider>
        <div className="App">
          <div id="App-header">
            <ArithmeticControls />
          </div>
          <div id="App-content">
            <ArithmeticDisplay />
          </div>
        </div>
      </ArithmeticProvider>
    </ArithmeticControlsProvider>
  );
}

export default App;
