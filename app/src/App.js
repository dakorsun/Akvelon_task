import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title';
import Showblock from './Components/Showblock';
import links from "./links";


class App extends Component {
  
  constructor(props){
    super(props);

    let performedLinks = links.map((elem, i) => {
        return {
                  id: i,
                  link: elem.link
                } 
      }
    )

    

    this.state = {
      performedLinks: performedLinks,
      indexesToOpen: [3, 5, 10, 16, 1, 0, 8]
    }

    let array = this.state.performedLinks,
      indexes = this.state.indexesToOpen;

    this.generateNewPicIndex = this.generateNewPicIndex.bind(this);
    this.makeInterimArray = this.makeInterimArray.bind(this);

     

  }

  makeInterimArray(array, indexes){
    let result = array.map((i) => {
      if (!(indexes.indexOf(i.id) + 1)){
        return i;
      }
    })
    return result;
  }

  generateNewPicIndex(array, indexes){

    let interimArray = this.makeInterimArray(array, indexes);
    
    console.log(interimArray);

  

  }


  render() {
    console.log(this.state.performedLinks)

    return (
      <div>
        <Title 
          liftUpAddEvent = {this.generateNewPicIndex()}
        />
        <Showblock 
           indexesToOpen = {this.state.indexesToOpen}
           performedLinks = {this.state.performedLinks}
        />
      </div>
    );
  }
}

export default App;
