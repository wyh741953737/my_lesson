import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      list:[]
    }
    this.addTodo=this.addTodo.bind(this)
    this.delete=this.delete.bind(this)
  }
  addTodo(){
    this.state.list.push(this.refs.todo.value);
    this.setState({
      list:this.state.list,
      })
  }
  delete(index){
    this.state.list.splice(index,1)
    this.setState({
      list:this.state.list
    })
  }
  render() {
        let items=this.state.list.map((item,index)=>{
  return <li key={item}>{item}<button onClick={()=>this.delete(index)}>delete</button></li>
})
    return (
      <div className="App">
      <input type="text" ref="todo"/>
      <button onClick={this.addTodo}>Add</button>
      <ReactCSSTransitionGroup
          transitionName="reactAnmi"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300} >
     <ul>{items}</ul>
     </ReactCSSTransitionGroup>
       </div>
    );
  }
}

export default App;
