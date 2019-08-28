import React, {Component} from 'react'

export default class Todo extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <p>{this.props.tasks}</p>
        )
    }
}