import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'reactstrap';

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
      <Form onSubmit={this.handleSubmit}>
        <input placeholder="Add todo" ref={(input) => (this.getTitle = input)} />
        <Button>Add</Button>
      </Form>
    );
  }
}
export default connect()(TodoInput);
