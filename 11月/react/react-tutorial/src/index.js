import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import "./index.css";
// import Table from  "./Table.js";


// class App extends Component {
//   // jsx 最终还要是编译成js的 class 
//   render () {
//     return (
      // <div className="App container">
       
      //   <h1>Hello, React!</h1>
      //   <Table />
      // </div>
      class MyForm extends Component{
        // getInitialState(){
        //   return{
        //     username:'',
        //     gender:'',
        //     checked:true
        //   }
        // }
        //   handleChange(name,e){
        //     var newstate={};
        //     newstate[name]=name==="checked"?e.target.checked:e.target.value;
        //     this.setState(newstate);
        //   }
        //   submitHandle(e){
        //     e.preventDefault();
        //     var is=this.state.checked?'是':'不是';
        //     var gender=this.state.gender==='man'?'帅哥':'美女';
        //     alert(this.state.username+is+gender+'.');
        //   }
        render(){
        return(
          <form onSubmit={this.submitHandle}>
             <label name="username">请输入姓名：</label>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange.bind(this,"username")}></input>
            <br/>
            <label name="checkbox" >是或者否</label>
            <input type="checkbox" name="checked" value={this.state.checked}onChange={this.handleChange.bind(this,"checked")}></input>
            <br/>
            <label name="gender">请选择：</label>
            <select name="gender" value={this.state.gender}onChange={this.handleChange.bind(this,"gender")}>
              <option value="man">帅哥</option>
              <option value="woman">美女</option>
              <br/>
              <button type="submit">提交</button>
              </select> 
                <div>aa</div>
            </form>
          
         
        )
      }
    }
ReactDOM.render(<MyForm/>, document.getElementById('root'));