import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title';
import Showblock from './Components/Showblock';
import links from "./links";
import shortid from 'shortid';


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
      indexesToOpen: [
        {
          key: shortid.generate(),
          id: 10
        },
        {
          key: shortid.generate(),
          id: 16
        },
        {
          key: shortid.generate(),
          id: 3
        },
        {
          key: shortid.generate(),
          id: 5
        },
        {
          key: shortid.generate(),
          id: 1
        },
        {
          key: shortid.generate(),
          id: 0
        },
        {
          key: shortid.generate(),
          id: 8
        }    
      ]
    }


    this.generateNewPicIndex = this.generateNewPicIndex.bind(this);
    this.removeLink = this.removeLink.bind(this);

     

  }

  generateNewPicIndex(){

    let x = Math.floor(Math.random() * (this.state.performedLinks.length))
    let arr = this.state.indexesToOpen;
      x = {
        key: shortid.generate(),
        id: x
      }
    arr[arr.length] = x;
    
    this.setState({
      indexesToOpen: arr
    });    
    console.log(this.state.indexesToOpen)


   
  }


  removeLink(id){
    
    let array = this.state.indexesToOpen;

    for(let i = 0; i < array.length; i++){
      if(array[i].key === id){
        array.splice(i, 1);
      }
    }

    this.setState({
      indexesToOpen: array
    })
  

  }


  render() {

    return (
      <div>
        <Title 
          liftUpAddEvent = {this.generateNewPicIndex}
        />
        <Showblock 
           indexesToOpen = {this.state.indexesToOpen}
           performedLinks = {this.state.performedLinks}
           liftUpRemoveEvent = {this.removeLink}
        />
      </div>
    );
  }
}

export default App;
