import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDom from 'react-dom';
import {Router,BrowserRouter,Route,Switch} from 'react-router-dom'
import createHistory from "history/createBrowserHistory"
import {Tracker} from 'meteor/tracker'

import Signup from '../ui/Signup'
import Dashboard from './../ui/Dashboard'
import NotFound from './../ui/NotFound'
import LogIn from '../ui/LogIn'

const history=createHistory()

const unauthenticatedPages=['/','singup'];
const authenticatedPages=['/dashboard']

const onEnterPublicPage = () =>{
  if(Meteor.userId()){
    history.push('/dashboard')
  }
}
const onEnterPrivatePage = () =>{
  if(!Meteor.userId()){
    history.push('/');
  }
}
export const onAuthChanges =(isAuthenticated)=>{
  const path=history.location;
  const isUnauthenticated=unauthenticatedPages.includes(path);
  const isAuthenticatedPage=authenticatedPages.includes(path);
  if(isAuthenticated==false && !isUnauthenticated && isAuthenticatedPage){
    history.replace('/');
  }else if(isAuthenticated==true && isUnauthenticated && !isAuthenticatedPage){
      history.replace('/dashboard')
  }
}
export const routes= (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={LogIn} onEnter={onEnterPublicPage}/>
      <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
      <Route path="/dashboard"  component={dashboard} onEnter={onEnterPrivatePage}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </Router>
)
