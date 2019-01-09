import React, { Component } from 'react'
import ProTypes from 'prop-types'
import {connect} from 'react-redux'
import {createPost} from '../action/postAction'
import Posts from './Posts'
 class PostForm extends Component {
     constructor(props){
        super(props);
        this.state={
            title:'',
            body:''
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
     }
     onChange(e){
        this.setState({
           [e.target.name]:e.target.value
        })
     }
     onSubmit(e){
     e.preventDefault();

     const post={
         title:this.state.title,
         body:this.state.body
     };
     this.props.createPost(post);
     //触发action
     //这个方法触发action
    //  fetch('https://jsonplaceholder.typicode.com/posts',{
    //      method:'POST',
    //      headers:{
    //          'content-type':'application/json'
    //      },
    //      body:JSON.stringify()
    //  })
    //  .then(res=>res.json())
    //  .then(data=>console.log(data))
    }
  render() {
    return (
      <div>
       <form onSubmit={this.onSubmit}>
        <div>
            <label>用户名</label>
             <input type="text" name="title" onChange={this.onChange} value={this.state.title}></input>
        </div>
         <div>
             <label>密码</label>
             <input type="text" name="body"onChange={this.onChange} value={this.state.body}></input>
         </div>
         <button type='submit'>提交</button>
       </form>
      </div>
    )
  }
}
Posts.ProTypes={
    fetchPosts:ProTypes.func.isRequired,
    posts:ProTypes.array.isRequired
}
// cont mapStateToProps=state=>({
//     posts:state.posts.items
// })

export default  connect(null,{createPost})(Posts);