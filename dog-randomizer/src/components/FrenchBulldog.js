import React, { Component } from "react"

class FrenchBulldog extends Component {

dogURL = "https://dog.ceo/api/breed/bulldog/images/random"

  render(){
    return (
      <>
        <center>
      { this.state.pic &&
      <div> 
      <img onClick= { this.getDogOnClick }
      src= { this.state.pic } style= {{ height: '200px' }}
      alt='french bulldogs' />
      </div>
        }
      </center>
      </>
    )
  }
}


export default FrenchBulldog;