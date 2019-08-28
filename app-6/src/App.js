import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo"

class App extends Component {
  constructor(){
    super()

    this.state = {
      tasks: [],
      userInput: ""
    }
  }

  handleUpdate(e){
    this.setState({
      userInput: e.target.value
    })
  }

  addTask(e, thisState){
    this.setState({
      input: "",
      tasks: [...thisState.tasks, thisState.userInput]
    })
  }


  render() {

    let list = this.state.tasks.map((el, i) => {
      return <Todo key={i} tasks={el} />
    })

    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input onChange={e => this.handleUpdate(e)}/>
        <button onClick={e => this.addTask(e, this.state)}>Add</button>
        <hr></hr>
        {list}
      </div>
    );
  }
}

export default App;
