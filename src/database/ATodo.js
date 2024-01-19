import React, { Component } from 'react';

class ATodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      newTodo: '', 
      isEditing: false,
      editIndex: -1,
    };
  }

  componentDidMount() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.setState({ todos: JSON.parse(storedTodos) });
    }
  }

  handleChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { newTodo, todos, isEditing, editIndex } = this.state;

    if (isEditing && editIndex !== -1) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = newTodo;
      this.setState({ todos: updatedTodos, newTodo: '', isEditing: false, editIndex: -1 });
    } else {
      const updatedTodos = [...todos, newTodo];
      this.setState({ todos: updatedTodos, newTodo: '' });
    }

    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  };

  handleEdit = (todo, index) => {
    this.setState({ newTodo: todo, isEditing: true, editIndex: index });
  };

  handleCancelEdit = () => {
    this.setState({ newTodo: '', isEditing: false, editIndex: -1 });
  };

  DeletetTodo = (index) => {
    const { todos } = this.state;
    const updatedTodos = todos.filter((val, i) => i !== index);
    this.setState({ todos: updatedTodos });
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  render() {
    const { newTodo, todos, isEditing, editIndex } = this.state;

    return (
      <div align='center' style={{ backgroundColor: 'white', width: '20%', margin: 'auto' }}>
        <h1>Todo List</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={newTodo} onChange={this.handleChange} placeholder="Enter your todo" />
          <button type="submit">{isEditing ? 'Save Todo' : 'Add Todo'}</button>
          {isEditing && <button type="button" onClick={this.handleCancelEdit}>Cancel</button>}
        </form>
        <ol>
          {todos.map((todo, index) => (
            <li key={index}>
              {isEditing && editIndex === index ? (
                <div>
                  <input type="text" value={newTodo} onChange={this.handleChange} />
                </div>
              ) : (
                <div>{todo}</div>
              )}
              <button onClick={() => this.DeletetTodo(index)}>Delete</button>
              {!isEditing && <button onClick={() => this.handleEdit(todo, index)}>Edit</button>}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ATodo;