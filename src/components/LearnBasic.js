import React, {Component } from 'react';

class LearnBasic extends Component{

    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log("called");
    }

    render(){
        return(
          <h1>Hello world </h1>
        )
    }
}


export default LearnBasic