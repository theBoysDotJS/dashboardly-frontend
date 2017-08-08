import React, {Component} from 'react';
import { API_HOST } from '../../config';
import {browserHistory as history} from "react-router";

export default class CreateBoard extends Component {
  constructor(props) {
    super();
    this.state = {};
  }


_click=(e)=>{
    e.preventDefault();

    let fetchBoardApi ={
      method:'POST',
      mode: 'corp',
      headers:{
        "Content-Type" : 'application/json'
      },

      body: JSON.stringify({
        "tittle" : this.refs.title.value,
        "description" : this.refs.description.value
      })
    }

    return(
      fetch(`${API_HOST}/boards`, fetchBoardApi)

      .then( data=>{
        history.push('/')
      })
      .catch( error => console.log(error.stack))
    )
  }


  render() {
    return (
      <div>
        <h1>board form</h1>
        <form onSubmit={this._click}>
          <p>Title</p>
          <input type="text" ref="title"/>
          <p>Description</p>
          <input type="text" ref="description"/>
          <button>Create</button>
        </form>
      </div>
    );
  }
}
