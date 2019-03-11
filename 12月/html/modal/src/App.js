import React, { Component } from 'react';
import Modal from './modal/modal.jsx'
import './App.css';
class App extends Component {
  state = {
    visible:false
  }
  showModal=()=>{
    this.setState({
      visible:true
    })
  }
  render() {
    const {visible} = this.state
    return (
      <div className="App">
        <button onClick={this.showModal}>Click here</button>
        <Modal title="自定义标题" visible = {visible} confirm={this.confirm}>自定义内容</Modal>
      </div>
    );
  }
}

export default App;
