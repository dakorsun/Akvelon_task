import React, { Component } from 'react';
 
class Picture extends Component {

	// constructor(props){

	// 	super(props);

	
	// }

	render() {
		return(
				<div className="Image-holder">
					<img 
					src={this.props.link}
					alt="drifting car"/>
					<div className="closer" />
				</div> 
			)
	}

}

export default Picture;