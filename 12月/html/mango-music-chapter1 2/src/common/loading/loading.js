import React, { Component } from 'react'
import loadingImg from './loading.gif';
import './loading.styl'
 class loading extends React.Component {
  render() {
      let displayStyle=this.props.show===true?{display:''}:{display:"none"}
    return (
        <div className="loading-container" style={displayStyle}>
        <div className="loading-wrapper">
        <img src={loadingImg} width="18px" height="18px;" alt="loading"></img>
       
        <div className="loading-title">{this.props.title}</div>
        </div>
      </div>
    )
  }
}
export default loading;