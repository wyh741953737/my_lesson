import React,{Component} from 'react'
import {BrowserRouter as Router,Route,NavLink,Link} from 'react-router-dom'
class Home extends Comment{
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
class App extends Component {
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

export default App;
