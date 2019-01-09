import React, { Component } from 'react';
import CommentActions from './actions/CommentActions';
import CommentStore from './stores/CommentStore';
import CommentList from './comments/CommentList';
import CommentForm from './comments/CommentForm';
import './App.css';



function getAppState(){
return{
  //维护内部state即comments。有多少条评论。内容来自store，即commentstore用来存储全部数据。
  comments:CommentStore.getAll()
}
}
class App extends Component {
  constructor(props){
    super(props)
    this.OnStoreChange=this.OnStoreChange.bind(this)
  }
  state=getAppState();
  componentDidMount(){
    //给store添加一个listener
    CommentStore.addChangeListener(this.OnStoreChange)
  }
  componentWillUnmount(){
    CommentStore.removeChangeListener(this.OnStoreChange)
  }
  OnStoreChange(){
   // 拿到状态，
    this.setState(getAppState());
  }
  onSubmit(args){
    CommentActions.create(args.author,args.text)
  }
  render() {
    return (
      <div>
        <h2 className="comment-list-headr">comment</h2>
        <CommentList comments={this.state.comments}></CommentList>
        <CommentForm onSubmit={this.onSubmit}></CommentForm>
      </div>
    );
  }
}

export default App;
