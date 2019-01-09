import React, { Component,PropTypes } from 'react'

export default class CommentForm extends Component {
    static PropTypes={
        onSubmit:PropTypes.func.isRequired
    }
    state={
        author:'',
        text:'',
        error:''
    }
    onSubmit(e){
        e.preventDefault();
        if(!this.state.author){
            this.setState({
                error:'user name is required'
            })
        }else if(!this.state.text){
            this.setState({
                error:'Comment is required'
            })
        }else{
            this.props.onSubmit({
                author:this.state.author,
                text:this.state.text
            })
            this.setState({
                author:'',
                text:''
            })
        }
    }
  render() {
    return (
        <form className="comment-form" onSubmit={this.onSubmit}>
        <div>
            <label>Your name:</label>
            <input type="text" value={this.state.author} onChange={e=>this.setState({
                author:e.target.value,
                error:''
            })}></input>
             <label>Your comment:</label>
            <textarea value={this.state.text} onChange={e=>this.setState({
                text:e.target.value,
                error:''
            })}></textarea>
        </div>
        {this.state.error && <div className="error-msg">{this.state.error}</div>}
        <div className="buttons"><button>Submit</button></div>
        </form>
    )
  }
}
