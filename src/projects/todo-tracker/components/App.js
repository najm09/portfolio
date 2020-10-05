import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = { input: "", todosArray: [] }
  componentDidMount() {
    const todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
    this.setState({ todosArray: todosArray })
    const storage = JSON.parse(localStorage.getItem('todos'))
    if (storage != null) {
      for (let i = 0; i < storage.length; i++)
        this.todomaker(storage[i])
    }
  }
  todomaker = text => {
    document.getElementById("title").innerHTML = "Todo List"
    const todo = document.createElement('li')
    todo.textContent = text
    document.getElementById("todolist").appendChild(todo)
  }

  handleSubmit = Event => {
    Event.preventDefault()
    this.state.todosArray.push(this.state.input);
    localStorage.setItem('todos', JSON.stringify(this.state.todosArray))
    this.todomaker(this.state.input)
    console.log("todos", localStorage.getItem('todos'))
  }

  handleChange = Event => {
    Event.preventDefault()
    this.setState({ input: Event.target.value })
  }

  handleReset = () => {
    localStorage.clear();
    while (document.getElementById("todolist").firstChild)
      document.getElementById("todolist").removeChild(document.getElementById("todolist").firstChild)
    document.getElementById("title").innerHTML = ""
  }
  render() {
    return (
      <div className="Body">
        <div className = "header">Todo Tracker</div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Click to enter new todo" onChange={this.handleChange} required></input>
          <button type="submit">add</button>
          <button type="button" onClick={this.handleReset}>reset</button>
        </form>
        <div>
          <span>
            <strong id="title"></strong>
            <ul id="todolist" ></ul>
          </span>
        </div>
      </div>
    )
  }
}
export default App