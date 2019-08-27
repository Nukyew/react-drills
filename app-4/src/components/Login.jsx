import React, {Component} from 'react'

export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
        }
    }

    textInput(e){
        if (e.target.id === "1"){
            this.setState({
                username: e.target.value
            })
        } else if (e.target.id === "2"){
            this.setState({
                password: e.target.value
            })
        }
    }

    alertLogin(e){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render(){
        return(
            <div>
                <input id="1" onChange={e => this.textInput(e)} placeholder="username"/>
                <input id="2" onChange={e => this.textInput(e)} placeholder="password"/>
                <button onClick={e => this.alertLogin(e)}>login</button>
            </div>
        )
    }
}