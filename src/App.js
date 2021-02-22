import React, { Component } from 'react';

import './App.css';
import TodoInput from './components/input';

class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const data = {
      title,
      editing: false,
    };
  };
  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <TodoInput />
      </div>
    );
  }
}

export default App;
