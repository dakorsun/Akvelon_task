import React, { Component } from 'react';
import Picture from "./Picture";
// import links from "../links";


class Showblock extends Component {

	// constructor(props) {
	// 	super(props);
 	
	// }


	render() {
		
		let performedLinks = this.props.performedLinks,
			indexesToOpen = this.props.indexesToOpen
			
		let linksToRender = indexesToOpen.map(function(id, i, arr){
				return performedLinks[i];
				}
			)

		console.log(linksToRender);


		return(
				<div className='Showblock'>
					{linksToRender.map((elem) =>  { 
						// console.log(elem);
						return( 

						<Picture 
							link = {elem.link}
							// link = 'https://cdn.allwallpaper.in/wallpapers/1920x1200/7617/mitsubishi-lancer-evolution-cars-drifting-1920x1200-wallpaper.jpg'
						/>
						)
						})}
						
						
				</div>
			)
	}

};
// 
export default Showblock;