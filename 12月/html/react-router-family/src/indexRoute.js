import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
class Home extends Component{
    render(){
        return(
            <div>
                <h2>Hello</h2>
            </div>
        )
    }
}
export default class indexRoute extends Component {

  render() {
    return (
      <div>
        <Router>
            <div>
            <Link to="/">主页</Link>
            <Link to="new">新闻</Link>
            <Route exact path="/" component={Home}/>
            <Route path="/new" component={New}/>
            </div>
        </Router>
      </div>
    )
  }
}
