// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
//  class Comment extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       comments:[
//         {
//           author:"妞妞",
//           time:new Date().getDate(),
//           comment:'跨年夜一个人孤独的敲代码'
//        }
//       ]
//     }
//     this.addComment=this.addComment.bind(this);
//   }
//   addComment(){
//    var commentObj={ 
//       author:this.refs.author.value,
//       time: new Date().getDate(),
//       comment:this.refs.comment.value
//     }
//     this.state.comments.push(commentObj)
//     this.setState({
//       comments:this.state.comments
//     })
//   }
//   formatTime(timestamp) {
//   var  minutes=(new Date()-timestamp)/1000/60;
//   console.log(minutes)
//   minutes=Math.floor(minutes);
//   if(minutes<1){
//     return minutes+'分钟前'
//   }else{
//     return '刚刚'
//   }
 
//   }
//   render() {
//     return (
//       <div className="App">
//         <h2>留言板</h2>
//         <div className="comments">
//         {this.state.comments.map((item,index)=>{
//           return <div key={item.time}>
//             <span className="author">{item.author}</span>
//             <span className="comment">{item.comment}</span>
//             <span className="time">{this.formatTime(item.time)}</span>
//           </div>
//         })}
//         </div>
//         <input type="text" ref="author"/><br/>
//         <textarea ref="comment"></textarea><br/>
//         <button onClick={this.addComment}>发表留言</button>
//       </div>
      
//     )
//   }
// }
// ReactDOM.render(<Comment/>, document.getElementById('root'));







import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

let muiTheme = getMuiTheme({
  fontFamily: 'Microsoft YaHei'
});

class MainWindow extends React.Component {
  state = {
    userName: null,
    password: null,
    open: false
  }
  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.root}>
          <TextField 
            hintText="请输入用户名"
            value={this.state.userName}
            onChange={(event)=>{this.setState({userName:event.target.value})}}
            />
          <TextField 
            hintText="请输入密码"
            type="password"
            value={this.state.password}
            onChange={(event)=>{this.setState({password:event.target.value})}}
            />
            <div style={styles.buttons_container}>
              <RaisedButton label="登录" primary={true} onClick={() => {}}/>
              <RaisedButton label="注册" primary={false} onClick={() => {}}/>

            </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  root: {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
  },
  icon: {
      width: 100,
      height: 100,
      marginBottom: 40
  },
  buttons_container: {
      paddingTop: 30,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
  }
};

ReactDOM.render(<MainWindow />, document.getElementById('root'));

