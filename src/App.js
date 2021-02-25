import React, { Component } from 'react';

import './App.css';
import TodoInput from './components/input';
import ListTodos from './components/listTodos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <TodoInput />
        <ListTodos />
      </div>
    );
  }
}

export default App;
