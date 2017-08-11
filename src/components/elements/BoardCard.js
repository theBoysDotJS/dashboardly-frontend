import React, {Component} from 'react';
import { Link } from 'react-router';
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'
import './BoardCard.css';

export default class BoardCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { title, description, id } = this.props
    console.log(localStorage.user, this.props.ownerId, "the stuff")
    return (
	  <div  className="board-card">
	      <Link to={`/boards/${id}`}>
	        <div>
	          <h2>{ title }</h2>
	          <p>{ description }</p>
	        </div>
	      </Link>
		  <div className='buttons '>
	  	  	{+localStorage.user === +this.props.ownerId ? <EditButton type={`board`} id={id} /> : null}
	  	  	{+localStorage.user === +this.props.ownerId ? <DeleteButton fetch={this.props.fetchData} type={`board`} id={id} /> : null}
		  </div>
	  </div>
    );
  }
}
