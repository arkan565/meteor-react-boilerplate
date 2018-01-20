import { Meteor } from 'meteor/meteor';
import {WebApp} from 'meteor/webapp'
import '../imports/api/users';
Meteor.startup(() => {
  WebApp.connectHandlers.use((req,res,next)=>{
    url=req.url.slice(1);
  })
  });
