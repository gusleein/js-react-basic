import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer/Timer';
import TodoView from './components/Todo/TodoView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <Timer/>
        <br/><br/>
        <TodoView/>
      </header>
    </div>
  );
}

export default App;
