import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from './component/Image'

class App extends Component {
  constructor(){
    super()
    this.state = {
      image: 'https://http.cat/509'
    }
  }
  render() {
    return (
      <div className="App">
        <Image image={this.state.image}/>
      </div>
    );
  }
}

export default App;
