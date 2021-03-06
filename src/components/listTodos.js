import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import EditComponent from './editTodo';
import Todo from './todo';

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

class ListTodos extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => (
          <div key={todo.id}>
            {todo.editing ? <EditComponent todo={todo} key={todo.id} /> : <Todo key={todo.id} todo={todo} />}
          </div>
        ))}
      </div>
    );
  }
}
ListTodos.propTypes = {
  todos: PropTypes.array.isRequired,
};
export default connect(mapStateToProps)(ListTodos);
