import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
class HelloUser extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:"Eileen"
        }
       
 
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.handleChange= this.handleChange.bind(this);

    }
    handleChange(e){
        this.setState({
            username:e.target.value
        })
        console.log(e.target.value);
    }
    render(){
        return (
          <div>
              Hello{this.state.username}
              <input type="text"
               value={this.state.username} 
               onChange={(e)=>{this.handleChange(e)}}>
              </input>
          </div>  
         
        );

    }
}
ReactDOM.render(<App/>,document.getElementById('root'));




// ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.unregister();
