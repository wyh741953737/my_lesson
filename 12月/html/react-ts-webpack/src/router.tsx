import  * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { App } from './app';
import {About} from './components/About'
import {  MembersPage} from './components/members';
// import {MemberPage} from './components/member'
import { MemberPageContainer } from './components/member/pageContainer';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Route component={App}/>
        <Switch>
          <Route exact path='/' component={About}></Route>
          <Route path="/about" component={About}></Route>
          <Route path='/members' component={MembersPage}></Route>
          <Route path='/member' component={MemberPageContainer}> </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
