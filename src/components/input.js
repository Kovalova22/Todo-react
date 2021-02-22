import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';

class TodoInput extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const data = {
      id: Math.floor(Math.random() * 100),
      title,
      editing: false,
    };
  };

  render() {
    return (
      <Form>
        <Input placeholder="Add todo" ref={(input) => (this.getTitle = input)} />
        <Button>Add</Button>
      </Form>
    );
  }
}
export default TodoInput;
