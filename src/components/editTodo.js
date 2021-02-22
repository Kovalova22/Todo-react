import React, { Component } from 'react';

class EditComponent extends Component {
  handleEdit = (e) => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const data = {
      newTitle,
    };
  };
  render() {
    return (
      <form>
        <ul>
          <li>
            <input
              type="text"
              name="title"
              style={{ width: '198px', height: '25px' }}
              ref={(input) => (this.getTitle = input)}
              defaultValue={this.props.hotdog.title}
            />
          </li>
          <button className="article-button-item">Upgrade</button>
          <button
            className="article-button-item"
            type="button"
            onClick={() => this.props.dispatch({ type: 'DELETE_HOTDOG', id: this.props.hotdog.id })}
          >
            Delete
          </button>
        </ul>
      </form>
    );
  }
}
export default EditComponent;
