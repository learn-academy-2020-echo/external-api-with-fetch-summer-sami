import React, { Component } from 'react'
import GermanShepherd from './components/GermanShepherd';
import FrenchBulldog from './components/FrenchBulldog';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pic: ""
    }
  }

  getDogPic = () => {
  fetch('https://dog.ceo/api/breed/bulldog/images/random')
    .then(response => {
      return response.json()
    })
    .then(payload => {
      this.setState({ pic: payload.message})
    })
    //if there is an issue and the promise is rejected, the function will be able to handle the errors. ending each fetch request with a catch is good practice
    .catch(error => {
      console.log(error)
    })
  }
  componentDidMount(){
    this.getDogPic()
  }

  getDogOnClick = () => {
    this.getDogPic()
  }

  render(){
    return (
      <>
      <center>
      <h1>Dog Randomizer</h1>
      

      { this.state.pic &&
      <div> 
      <img onClick= { this.getDogOnClick }
      src= { this.state.pic } style= {{ height: '200px' }}
      alt='bulldogs' />
      </div>
  }
      </center>
      </>
    )
  }
}


export default App
