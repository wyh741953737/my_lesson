import React,{Component}from 'react';
function A(WrapperedComponent) {
  return class Text extends Component {
    render () {
      return (
        <div>
          <WrapperedComponent />
          <p>AA</p>
        </div>
      )
    }
  }
}
export default A;