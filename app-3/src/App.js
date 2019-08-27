import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state = {
      things: ["garble", "blorp", "bleq", "plorf", "shindingle", "soup"],
      userInput: '',
    }
  }

  takeInput(e, data){
    this.setState({
      userInput: e.target.value
    })
  }

  render() {
    let filteredArr = this.state.things.filter((el, i, arr) => {
      return el.includes(this.state.userInput)
    }).map((el, i, arr) => {
      return <h2 key={i}>{el}</h2>
    })
    return(
      <div className="App">
        <input onChange={e => this.takeInput(e, this.state)}/>
        {filteredArr}
      </div>
    )
  }
}

export default App;