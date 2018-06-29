import React, { Component } from 'react';
import Picture from "./Picture";
// import links from "../links";
// import shortid from 'shortid';

class Showblock extends Component {

	constructor(props) {
		super(props);

		this.state = {
			indexesToOpen: this.props.indexesToOpen,
			performedLinks: this.props.performedLinks
		}	

		this.liftUpRemoveEvent = this.liftUpRemoveEvent.bind(this);
	}


	liftUpRemoveEvent(key){

		this.props.liftUpRemoveEvent(key)

	}

	render() {
		
		return(
				<div className='Showblock'>
					{this.state.indexesToOpen.map((elem) =>  
					 
							<Picture 
								key = {elem.key}
								id = {elem.key}
								link = {this.state.performedLinks[elem.id].link}
								liftUpRemoveEvent = {this.liftUpRemoveEvent}
							/>
					)}
						
						
				</div>
			)
	}

};

export default Showblock;