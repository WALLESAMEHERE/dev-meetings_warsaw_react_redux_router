import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <div>
      	<ul>
	      	<li>
		        <p>Name :{this.props.name}</p>
		        <p>Job: {this.props.job}</p>
		        <p>Age :{this.props.age}</p>
			</li>
		</ul>
      </div>
    );
  }
}

export default List;
