import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../App.scss';
import { Button } from 'reactstrap';

class TodoInput extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const data = {
      id: Math.floor(Math.random() * 100),
      title,
      editing: false,
    };
    this.props.dispatch({
      type: 'ADD_TODO',
      data,
    });
    this.getTitle.value = '';
  };

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <input placeholder="Add todo" ref={(input) => (this.getTitle = input)} />
        <Button>Add</Button>
      </form>
    );
  }
}
TodoInput.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
export default connect()(TodoInput);
