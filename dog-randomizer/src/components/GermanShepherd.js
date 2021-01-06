import React, { Component } from "react"

class GermanShepherd extends Component {


  render(){
    return (
      <>
    <center>
      { this.state.pic &&
      <div> 
      <img onClick= { this.getDogOnClick }
      src= { this.state.pic } style= {{ height: '200px' }}
      alt='german shepherds' />
      </div>
  }
      </center>
      </>
    )
  }
}


export default GermanShepherd;