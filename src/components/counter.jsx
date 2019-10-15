import React, { Component } from 'react';

class Counter extends Component {
    
    componentDidUpdate(prevProps, prevState){

    }

    render() { 

        return ( 
        <div className="row">
            <div className="col-1">
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            </div>
            <div className="col">
                <button className="btn btn-secondary btn-sm m-2"
                        onClick={() => this.props.onIncrement(this.props.counter)}
                >
                    +
                </button>
                <button className="btn btn-secondary btn-sm m-2"
                        onClick={() => this.props.onDecrement(this.props.counter)}
                        disabled={ this.props.counter.value === 0? "disabled": ""}
                >
                    -
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"

                >x</button>
            </div>
        </div> 
        );
    } 

    formatCount()
    {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero': value;
    }
    getBadgeClasses()
    {
        let classes = "badge m-3 badge-";
        classes += this.props.counter.value === 0? "warning": "primary";
        return classes;
    }
}
 
export default Counter;