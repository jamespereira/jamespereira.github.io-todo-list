import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import TodoList from './TodoList';
import SubmitForm from './SubmitForm';
import Base from './Base';

class App extends Component {
  state = {
    tasks: []
  }

  componentDidMount() {
    this.ref = Base.syncState('tasks', {
      context: this,
      state: 'tasks',
      asArray: true
    });
  }

  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({tasks : newArr});
  }

  handleSubmit = (task) => {
    this.setState({tasks : [...this.state.tasks, task]});
  }

  render() {
    return (
      <div className="wrapper">
        <div className="card frame">
          <Header numTodos={this.state.tasks.length} />
          <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
          <SubmitForm onFormSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default App;