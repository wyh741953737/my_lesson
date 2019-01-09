import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Beer from './Beer';
import Single from './Single';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router,Route} from 'react-router-dom';
ReactDOM.render(
<Router>
<div>
    <Route exact path='/' component={Beer}></Route>
    <Route path='/search/:searchTerm' component={Beer}></Route>
    <Route path='/beer/:beerId/:beerSlug' component={Single}></Route>
</div>
</Router>
, document.getElementById('root'));

serviceWorker.unregister();
