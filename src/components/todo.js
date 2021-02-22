import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todo extends Component {
  render() {
    return (
      <ul>
        <li>{this.props.todo.title}</li>
        <button onClick={() => this.props.dispatch({ type: 'EDIT_TODO', id: this.props.todo.id })}>Edit</button>
      </ul>
    );
  }
}
export default connect()(Todo);
