import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../App.css';

class EditComponent extends Component {
  handleEdit = (e) => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const data = {
      newTitle,
    };
    this.props.dispatch({ type: 'UPDATE', id: this.props.todo.id, data: data });
  };
  render() {
    return (
      <form onSubmit={this.handleEdit}>
        <ul>
          <li>
            <input
              type="text"
              name="title"
              style={{ height: '40px' }}
              ref={(input) => (this.getTitle = input)}
              defaultValue={this.props.todo.title}
            />
          </li>
          <button className="button-item">Upgrade</button>
          <button
            className="button-item"
            type="button"
            onClick={() => this.props.dispatch({ type: 'DELETE_TODO', id: this.props.todo.id })}
          >
            Delete
          </button>
        </ul>
      </form>
    );
  }
}

EditComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
};
export default connect()(EditComponent);
