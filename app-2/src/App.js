import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      things: ["Honda", "Chevrolet", "Chevy", "Toyota", "Ford"]
    }
  }
  render() {
    let cars = this.state.things.map(function(el, i, arr){
      return <h2 key={i}>{el}</h2>
    })
    console.dir(cars)
    return (
      <div className="App">
        {cars}
      </div>
    );
  }
}

export default App;
