import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloMessage from './components/HelloMessage/HelloMessage';
import Timer from './components/Timer/Timer';
import TodoView from './components/Todo/TodoView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloMessage name="Vasia" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Timer/>
        <TodoView/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
