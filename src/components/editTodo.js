import React, { Component } from 'react';
import { connect } from 'react-redux';

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
              style={{ width: '198px', height: '25px' }}
              ref={(input) => (this.getTitle = input)}
              defaultValue={this.props.todo.title}
            />
          </li>
          <button className="article-button-item">Upgrade</button>
          <button
            className="article-button-item"
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
export default connect()(EditComponent);
