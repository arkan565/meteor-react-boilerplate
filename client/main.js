import {Meteor} from 'meteor/meteor';
import ReactDom from 'react-dom';
import {Tracker} from 'meteor/tracker'
import {Session} from 'meteor/session'

import {routes,onAuthChanges} from '../imports/routes/routes'
//tracker
Tracker.autorun(()=>{
  const isAuthenticated = !!Meteor.userId();
  onAuthChanges(isAuthenticated);

})
Meteor.startup(()=>{
  	  ReactDom.render(routes,document.getElementById("app"))
})
