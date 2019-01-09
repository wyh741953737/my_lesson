import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Link,Prompt } from 'react-router-dom';

function ParamsExample(){
    return(
        <Router>
      <div>
        <p>
      So it's up to you
      </p>
      <p>
        In modern browsers that support{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL">
          the URL API
        </a>
        , you can instantiate a <code>URLSearchParams</code> object from{" "}
        <code>location.search</code> and use that.
      </p>
      <p>
        In{" "}
        <a href="https://caniuse.com/#feat=url">
          browsers that do not support the URL API (read: IE)
        </a>{" "}
        you can use a 3rd party library such as{" "}
        <a href="https://github.com/sindresorhus/query-string">query-string</a>.
      </p>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to={{ pathname: "/account", search: "?name=netflix" }}>
              Netflix
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/account", search: "?name=zillow-group" }}>
              Zillow Group
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/account", search: "?name=yahoo" }}>
              Yahoo
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/account", search: "?name=modus-create" }}>
              Modus Create
            </Link>
          </li>
        </ul>
        <Route path="/acount" component={Child}/>
        
      </div>
    </Router>


    );
}
function Child({location}){
    return(
        <div>
            {location.search}

        </div>
    )
}

ReactDOM.render ( <ParamsExample />, document.getElementById('root'))