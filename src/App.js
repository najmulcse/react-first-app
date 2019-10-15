import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link,Redirect} from 'react-router-dom'
import MenuBar from './components/MenuBar'
import LeftSideMenu from './components/LeftSideMenu'
import LearnBasic from './components/LearnBasic'
import 'bootstrap/dist/css/bootstrap.css';
import Movies from './components/movies';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {

    constructor()
    {
        super();
    }
    state = { 
        counters : [
            { id: 1, value: 5},
            { id: 2, value:0 },
            { id:3, value: 0}
        ]
     }

     componentDidMount()
     {
         console.log("mounted");
     }
     handleDelete = (counterId) => {
         const counters = this.state.counters.filter(c => c.id !=counterId);
         this.setState({counters});
     };

     handleIncrement = (counter) => {
         const counters = [...this.state.counters];
         const index = counters.indexOf(counter);
         counters[index] = { ...counter };
         counters[index].value++;
         this.setState({ counters });
     };

     handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value--;
        this.setState({ counters });
     };

     handleReset = () => {
         const counters = this.state.counters.map( c => {
             c.value = 0 ;
             return c;
         });
         this.setState({counters})    
     };

    render() {
        console.log("app- Rendered");
        return (
           <React.Fragment>
            <NavBar totalCounters={ this.state.counters.filter(c => c.value >0).length }/>
            <main className="containter">
                <Counters
                    counters = { this.state.counters }
                    onReset={ this.handleReset }
                    onIncrement={ this.handleIncrement }
                    onDecrement = { this.handleDecrement}
                    onDelete={ this.handleDelete }
                />
            </main>
           </React.Fragment>
        )
    }
}
export default App;