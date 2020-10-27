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
    if(this.state.input == " ") return
    this.state.todosArray.push(this.state.input);
    localStorage.setItem('todos', JSON.stringify(this.state.todosArray))
    this.todomaker(this.state.input)
    this.setState({input: " "})
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
  removeTodo = () => {

  }
  render() {
    return (
      <div className="Body">
        <div className = "header">Todo Tracker</div><br/>
        <form onSubmit={this.handleSubmit}>
          <input
          className = 'inp' 
          type="text" 
          placeholder="Click to enter new todo" 
          value = {this.state.input} 
          onChange={this.handleChange} 
          required></input>
          <button type="submit" className = 'butn'>add</button>
          <button type="button" onClick={this.handleReset} className = 'butn'>reset</button>
        </form>
        <br/>
        <div>
          <div className = "list">
            <strong id="title"></strong>
            <ul id="todolist" ></ul>
          </div>
        </div>
      </div>
    )
  }
}
export default App