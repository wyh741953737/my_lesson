import React,{Component} from 'react';
class Counter extends Component{

    render(){
        const {value,onIncrement, onDecription}=this.props;
        return(
            <div className="root">
                Clicked:{value} times
                {''}
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecription}>-</button>
               
            </div>
        )
    }
}

export default Counter;