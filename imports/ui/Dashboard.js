import React from 'react';
import {Account} from 'meteor/meteor-base'
import {Meteor} from 'meteor/meteor';
import PrivateHeader from './PrivateHeader'

export default class Link extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillMount() {
    // called once
    if(!Meteor.userId()){
      this.props.history.replace('/')
    }
  }
  render(){
    return (
      <div>
        <PrivateHeader title='Dashboard' history={this.props.history}/>
        <div className="page-content">

        </div>
      </div>
    )
  }
}
