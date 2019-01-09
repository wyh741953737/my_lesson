import React ,{Component}from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link,NavLink } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link, Redirect,withRouter} from "react-router-dom";
// const AuthExample=()=>
// <Router>
//     <div>
//         <AuthButton/>
//         <ul>
//             <li>
//                 <Link to="/public">public page</Link>
//             </li>
//             <li>
//                 <Link to="/protected">protected page</Link>
//             </li>
//         </ul>
//         <Route path="/public" component={ Public }/>
//         <Route path="/login" component={ Login } />
//         <PrivateRoute path="/protected" component={ Protected }/>
//     </div>
// </Router>;

// const PrivateRoute=({component:Component,...rest})=>{
//     return <Route {...rest} render={ props=>{
       
//         return fakeAuth.isAuthenticated?<Component/>:<Redirect to={ { pathname:"/login", state:{ from:props.location } } } />
//     } } />
// }
// const AuthButton=withRouter(({history})=>{//从这个地方解构出来
//     return fakeAuth.isAuthenticated?(<div><p>Welcome
//         <button onClick={()=>{
//             fakeAuth.signout(()=>{
//                 // redirect用于render里面的输出,这里不能用redirect
//                 // history.push('/') 

//             })
//         }}></button></p></div>):(<div>you are not ligin</div>)
// })
// const Public = () => <div>public</div>;
// const Protected=()=><div>Protected</div>;
// const fakeAuth={
//     isAuthenticated:false,
//     authenticate(cb){
//         this.isAuthenticated=true;
//         setTimeout(cb,1000);
//     },
//     signout(cb){
//         this.isAuthenticated=false;
//         setTimeout(cb,1000);
//     }
// };
// class Login extends React.Component{
//     state={  redirectToReferrer:false  }
//     login=()=>{
//         // fakeAuth.isAuthenticated=true;
//         fakeAuth.authenticate(()=>{
//             this.setState({
//                 redirectToReferrer:true
//             })
//         })
//     }
//     render(){
//         let { from }=this.props.location.state||{from:{pathname:'/'}};
//         let redirectToReferrer=this.state.redirectToReferrer;
//         if(redirectToReferrer) return <Redirect to={from}></Redirect>
//         return (
//             <div>
//                 <p>you must login to view the page at</p>
//                 <button onClick={ this.login }> Log in </button>
//             </div>
//         );
//     }
// }
// ReactDOM.render(<AuthExample/>,document.getElementById("root"));


export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
      <div className="navlink">
      <NavLink exact activeClassName="active" to="/">主页</NavLink>
      <NavLink activeClassName="active" to="/news">新闻</NavLink>
      <NavLink activeClassName="active" to="/detail">详情</NavLink>
      </div>
      <hr/>
  <Route exact path="/" component={Home}/>
  <Route path="/news" component={News}/>
  <Route path="/detail:tel" component={Detail}/>
  </div>
  </Router>        
      </div>
    );
  }
}
class Home extends Component{
  constructor(props){
    super(props)
    this.state={
      list:["10010","10086","10010"]
    }
  }
render(){
  return(
    <div>
      <h2>This is Home</h2>
      <ul>
        {this.state.list.map((item)=>{
          return <li>
            <Link to={`/detail/${item}`}>{item}</Link>
          </li>
        })}
      </ul>
    </div>
  )
}

}
class Detail extends Component{
  render(){
    return(
      <div>
        <h2>这是详情页</h2>
        <p>{this.props.match.params.tel}</p>
      </div>
    )
  }
}
class News extends Component{
  render(){
    return(
      <div>
        <h2>这是新闻页</h2>
      </div>
    )
  }
}
ReactDOM.render(<App/>,document.getElementById("root"));
