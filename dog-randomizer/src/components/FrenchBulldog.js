import React, { Component } from "react"

class FrenchBulldog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pic: "",
      dogURL: "https://dog.ceo/api/breed/bulldog/images/random"
    }
  }

// dogURL = "https://dog.ceo/api/breed/bulldog/images/random"

funTest = () => {
  this.props.testFun('hello')
}

 getFrench = () => {
   this.props.getDogPic("https://dog.ceo/api/breed/bulldog/images/random")
   console.log(this.state.pic)
 }

//  getNewFrench = () => {
//    this.props.getDogPic(this.state.dogURL)
//  }

  render(){
    return (
      <>
        <center>
      <div> 
      <img onClick= { this.getFrench }
      src= { this.state.pic } style= {{ height: '200px' }}
      alt='french bulldogs' />
      <p onClick= { this.funTest }>hello </p>
      </div>
      </center>
      </>
    )
  }
}


export default FrenchBulldog;