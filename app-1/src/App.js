import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state = {
      userInput: ''
    }
  }

  showText(e) {
    this.setState({
      userInput: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <input onChange={e => this.showText(e)}/>
        <div>{this.state.userInput}</div>
      </div>
    );
  }
}

export default App;
