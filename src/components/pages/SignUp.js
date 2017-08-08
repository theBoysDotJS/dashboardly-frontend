import React, {Component} from 'react';
import './SignUp.css';
import { API_HOST } from '../../config';
import {browserHistory as history} from "react-router";



export default class SignUp extends Component {
	constructor(props) {
		super();
		this.state = {};
	}
  _handleSignup = (e) => {
    e.preventDefault();
    //console.log(this.refs.email.value)
    let fetchConfig = {
      method: 'POST',
      mode: 'cors',
      headers: {
             "Content-Type" : 'application/json'
           },
      body: JSON.stringify({
            "email" : this.refs.email.value,
            "password" : this.refs.password.value
     })
   }
   return (
     fetch(`${API_HOST}/auth/users`, fetchConfig)
     .then( function(res) {
       history.push('/login')
     })
     .catch( error => console.log(error.stack))
   )
  }
  render() {
    return (
      <div>
        <h1>Title</h1>
        <form onSubmit={this._handleSignup}>
          <input type="text" ref="email"/>
          <input type="password" ref="password" />
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}
