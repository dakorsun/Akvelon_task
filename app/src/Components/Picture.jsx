import React, { Component } from 'react';
 
class Picture extends Component {

	constructor(props){

		super(props);

		this.state = {
			isCloseButtonOpened: false
		}

		this.trigerCloseButton = this.trigerCloseButton.bind(this);	
		this.clickCloseButton = this.clickCloseButton.bind(this);	
	}

	trigerCloseButton(target){
		console.log('pisun')

		this.state.isCloseButtonOpened ? this.setState({
			isCloseButtonOpened: false
		}) : this.setState({
			isCloseButtonOpened: true		
		});	

	}

	clickCloseButton(target){		
		this.props.liftUpRemoveEvent(this.props.id);
		// console.log(this.props.accessKey)			
	}


	render() {
		return(
				<div 
					className="Image-holder"
					onClick={this.trigerCloseButton}
				>	
					<img 
					src={this.props.link}
					alt="Drifting car"/>
					<div 
						className={this.state.isCloseButtonOpened ? "closer open" : "closer close"} 
						onClick={this.clickCloseButton}
					>Remove</div>
				</div> 
			)
	}

}

export default Picture;