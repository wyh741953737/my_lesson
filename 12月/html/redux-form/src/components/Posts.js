import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchPosts} from '../action/postAction'
 class Posts extends Component {
    //  constructor(props){
    //      super(props);
    //      this.state={
    //         information:[]
    //      }
    //  }

    
    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(res => res.json())
        // .then(data => this.setState({ information:data}))
        this.props.fetchPosts();
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost)
        }
    }
  render() {
    const postitem=this.props.post.map(post=>(
        <div key={post.id}>
        <h2>{post.id}</h2>
        </div>
    ))
    return (

    <div>{postitem}</div>
    )
  }
}
Posts.propTypes={
    fetchPosts:PropTypes.func.isRequired,
    posts:PropTypes.array.isRequired
}
const mapStateToProps=state=>({
    posts:state.posts.items,
    newPost:state.posts.item
})
export default connect(mapStateToProps,{fetchPosts})(Posts);
