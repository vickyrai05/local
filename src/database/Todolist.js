import React from 'react';

class Todolist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      newTodo: '',
      isEditing: false,
      editIndex: -1,
    };

    this.changeText = this.changeText.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    const data = localStorage.getItem('todos');
    this.setState({ todos: JSON.parse(data) });
  }

  changeText = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { newTodo, todos, isEditing, editIndex } = this.state;

    if (newTodo.trim() !== '') {
      if (isEditing) {
        const updatedTodos = todos.map((todo, index) =>
          index === editIndex ? newTodo : todo
        );
        this.setState({
          todos: updatedTodos,
          newTodo: '',
          isEditing: false,
          editIndex: -1,
        });
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
      } else {
        const updatedTodos = [...todos, newTodo];
        this.setState({ todos: updatedTodos, newTodo: '' });
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
      }
    }
  };

  handleDelete = (index) => {
    const { todos } = this.state;
    const updatedTodos = todos.filter((_, i) => i !== index);
    this.setState({ todos: updatedTodos });
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  handleEdit = (todo, index) => {
    this.setState({ newTodo: todo, editIndex: index, isEditing: true });
  };

  render() {
    const { newTodo, todos, isEditing, editIndex } = this.state;

    return (
      <div align="center">
        <h1>TODO LIST</h1>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Enter Value"
            value={newTodo}
            onChange={this.changeText}
          />
          <button type="submit">
            {isEditing ? 'UPDATE TODO' : 'ADD TODO'}
          </button>
        </form>

        <ol>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => this.handleDelete(index)}>Delete</button>
              <button onClick={() => this.handleEdit(todo, index)}>Edit</button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Todolist;
