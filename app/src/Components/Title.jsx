import React, { Component } from 'react';

class Title extends Component {

	constructor(props){
		super(props)

		this.addPicture = this.addPicture.bind(this);

	}

	addPicture(e){
		this.props.liftUpAddEvent;
		console.log('huy');
	}

	render() {
		return (
				<div className='title'>
					<p>Drift pics</p>
					<div 
						className="addBtn"
						onClick={this.addPicture}
					>add</div>
				</div>
			)
	}

};

export default Title