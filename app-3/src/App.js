import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {
  constructor(){
    super()

    this.state={
      list: ['jambalaya', 'pizza', 'popcorn', 'potato', 'chips', 'burritos', 'vegetable massala (loser food)', 'ice cream', 'trip tip', 'new york steak'],
      filter: ''
    }
  }

  handleChange(e){
    this.setState({
      filter: e.target.value
    })
  }

  render(){

    /* let list = this.state.list.map((element, index) => {
      return <li key={index}>{element}</li>
    }) */

    let list = this.state.list.filter(element => {
      if(element.includes(this.state.filter)){
        return true
      }
    }).map((element, index) => {
      return <li key={index}>{element}</li>
    })

    return(
      <div className="App">
        <input onChange={e => this.handleChange(e)} />
        {list}
      </div>
    )
  }
}

/* class App extends Component {
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

export default App; */