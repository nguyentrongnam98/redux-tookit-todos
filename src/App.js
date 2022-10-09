import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Navbar from './components/Navbar';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Todo/>
    </div>
  );
}

export default App;
