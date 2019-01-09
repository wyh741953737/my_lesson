import React, { Component } from 'react'
import ReactDom from 'react-dom'
import {Provider } from './context'
import Header from './Header.jsx'
 class App extends Component {
  render() {
    return (
     <Provider value={{title:'React'}}>
         <Header/>
     </Provider>
    )
  }
}
ReactDom.render(<App/>,document.getElementById('root'));

export default App;