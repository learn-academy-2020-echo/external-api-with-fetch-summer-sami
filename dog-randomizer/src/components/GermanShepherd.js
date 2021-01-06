import React, { Component } from "react"

class GermanShepherd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pic: ""
    }
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
      <>
      <center>
      <h3>Shepherd</h3>
      { this.state.pic &&
      <div style= {{ class: "container"}}> 
      <img onClick= { this.getDogOnClick }
      src= { this.state.pic } style= {{ height: '200px', width: "200px"}}
      alt='bulldogs' />
      </div>
  }
      </center>
      </>
    )
  }
}


export default GermanShepherd;