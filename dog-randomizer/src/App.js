import React, { Component } from 'react'
import GermanShepherd from './components/GermanShepherd';
import AustralianShepherd from './components/AustralianShepherd';
import FrenchBulldog from './components/FrenchBulldog';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pic: ""
    }
  }


  testFun = (e) => {
    console.log(e)

  }

  getDogPic = (e) => {
  fetch(e)
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
    this.getDogPic("https://dog.ceo/api/breed/bulldog/images/random")
  }

  getDogOnClick = () => {
    this.getDogPic("https://dog.ceo/api/breed/bulldog/images/random")
  }

  render(){
    return (
      <div>
        <center>
      <h1>Dog Randomizer</h1>

      <div style={{display: "inline-block"}}>
      <GermanShepherd />
      <AustralianShepherd />
      <GermanShepherd />
      </div>
      <div style={{display: "inline-block"}}>
      <GermanShepherd />
      <AustralianShepherd />
      <GermanShepherd />
      </div>
      <div style={{display: "inline-block"}}>
      <GermanShepherd />
      <AustralianShepherd />
      <GermanShepherd />
      </div>

      <FrenchBulldog 
      getDogPic={ this.getDogPic} 
      componentDidMount={ this.componentDidMount }
      getDogOnClick={ this.getDogOnClick }
      testFun={ this.testFun}
      />


      {/* { this.state.pic &&
      <div> 
      <img onClick= { this.getDogOnClick }
      src= { this.state.pic } style= {{ height: '200px' }}
      alt='bulldogs' />
      </div>
  } */}
      </center>
      </div>
    )
  }
}


export default App
