import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
var Store={
    _handlers:[],//
    _flag:false,
    //
    subscribe:function(handler){
        //将handle添加到_handlers
        this._handlers.push(handler);
    },
    //set接受一个value
    set:function(value){
        this._flag=value;
        this._handlers.forEach(handler=>handler(value));
    },
    //getstate,用get拿到状态
    get:function(){
        return this._flag;
    }
}
function Switcher({value,onChange}){
    return (
        <button onClick={e=>onChange(!value)}>
        {value?'login on':'login off'}
        </button>
    )
}
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            //怎样获得value的值。
            value:Store.get()
        }
        //用了这个状态，要把它变成subscribe，要订阅它。
        Store.subscribe((value)=>{
            this.setState({value});
        });
    }
  render() {
    return (
      <div>
        <Switcher value={this.state.value} onChange={Store.set.bind(Store)}/>
      </div>
    )
  }
}
ReactDOM.render(<App/>,document.getElementById('root'))