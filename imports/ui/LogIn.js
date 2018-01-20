import React from 'react';
import { dashboard } from 'react-router-dom'
import { Meteor } from 'meteor/meteor'

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      eror: ''
    }
  }
  componentWillMount() {
    // called once
    if(Meteor.userId()){
      this.props.history.replace('/dashboard')
    }
  }

  onSubmit(e){
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    Meteor.loginWithPassword({email},password, (err)=>{
      if(err){
        this.setState({error:err.reason})
      }else{
        this.setState({error:''})
        this.props.history.push('/dashboard')
      }
    })

  }
  render(){
    return (
      <div className="boxed-view">
           <div className="boxed-view__box">
             <h1>Log into shot-Lnk</h1>
             {this.state.error ? <p>{this.state.error}</p> : undefined}

             <form onSubmit={this.onSubmit.bind(this)} className="boxed-view__form">
               <input type="email" ref="email" name="email" placeholder="Email"/>
               <input type="password" ref="password" name="password" placeholder="Password"/>
               <button className="button">Login</button>
             </form>
             <dashboard to="/signup">You dont have account? Sign up</dashboard>
           </div>
      </div>
    )
  }
}
