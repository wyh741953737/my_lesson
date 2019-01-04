import React from 'react'
import ReactDOM from 'react-dom'
import ProtoTypes from 'prop-types'
const Counter=({value,onIncrement,onDecrement,onIncrementAsync,onDecrementAsync})=>(
    <div>
        <button onClick={onIncrementAsync}>1秒后加1</button>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={onDecrementAsync}>1秒后减1</button>
        <hr/>
        <div> Clicked:{value} times</div>
    </div>
)
Counter.protoTypes={
    value:ProtoTypes.number.isRequired,
    onIncrement:ProtoTypes.func.isRequired,
    onDecrement:ProtoTypes.func.isRequired,
    onIncrementAsync:ProtoTypes.func.isRequired
}
export default Counter;