import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../App.css';

class Todo extends Component {
  render() {
    return (
      <ul>
        <li>{this.props.todo.title}</li>
        <li>
          <button onClick={() => this.props.dispatch({ type: 'EDIT_TODO', id: this.props.todo.id })}>Edit</button>
        </li>
      </ul>
    );
  }
}
Todo.propTypes = {
  dispatch: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
};
export default connect()(Todo);
