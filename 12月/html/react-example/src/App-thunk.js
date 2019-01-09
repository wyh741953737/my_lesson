import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { filmAction } from './actions'
import {applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import ReduxLogger from 'redux-logger'
//action由组件触发，组件不应该直接请求数据，但是可以触发redux里的动作。在生命周期里，
class App extends Component{
  componentDidMount(){
    this.props.getFilmData();
  }
  render(){

    return(
      <div>
        <ul>
          {this.props.films.map((film,index)=>{
            return <li key={index}>{film.name}>
            <img src={film.poster} alt={film.name}/>
            </li>
          })}
        </ul>
      </div>
    )
  }
}
const mapStateToProps=(state) =>{
  return {
    films: state.films
  }
}
const mapDispatcheToProps=(dispatch) =>{
  return {
    getFilmData: ()=>{
      dispatch((dispatch) =>{
        filmAction(dispatch);
      });
    }
  }
}

export default connect(mapStateToProps,mapDispatcheToProps)(App);


// import React, {Component} from 'react';
// import axios from 'axios';

// class App extends Component {
//   componentDidMount() {
//     axios.get('https://www.easy-mock.com/mock/5bca9240e6742c1bf8220bbd/kicamp/movies#!method=get')
//     .then((res) => {
//       this.props.store.dispatch({
//         type: 'GET_FILM_DATA',
//         payload: res.data.data.films
//       });
//     })
//   }
  
//   render () {
//     const films = this.props.store.getState().films;
//     console.log(films);
//     return (
//       <div>
//         <ul>
//         {
//           films.map((film, index) => {
//             return (
//               <li key={index}>
//                 <h2>{film.name}</h2>
//                 <img src={film.poster} alt={film.name}/>
//               </li>
//             );
//           })
//         }
//         </ul>
//       </div>
//     )
//   }
// }

// export default App;
