import React, { Component } from 'react'
import DogPic from './components/DogPic';
import dogs from './dogArray.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dog: dogs
    }
  }


  render(){
    return (
      <div>
        <center>
      <h1>Dog Randomizer</h1>

      <div style={{display: "inline-block"}}>
      <DogPic 
        dogURL= {this.state.dog.frenchBulldog.url}
        dogName= {this.state.dog.frenchBulldog.name}
      />
       <DogPic 
        dogURL= {this.state.dog.germanShepherd.url}
        dogName= {this.state.dog.germanShepherd.name}
      />
       <DogPic 
        dogURL= {this.state.dog.rottweiler.url}
        dogName= {this.state.dog.rottweiler.name}
      />
      </div>
      <div style={{display: "inline-block"}}>
      <DogPic 
        dogURL= {this.state.dog.goldenRetriever.url}
        dogName= {this.state.dog.goldenRetriever.name}
      />
       <DogPic 
        dogURL= {this.state.dog.samoyed.url}
        dogName= {this.state.dog.samoyed.name}
      />
       <DogPic 
        dogURL= {this.state.dog.husky.url}
        dogName= {this.state.dog.husky.name}
      />
      </div>

      <div style={{display: "inline-block"}}>
      <DogPic 
        dogURL= {this.state.dog.borderCollie.url}
        dogName= {this.state.dog.borderCollie.name}
      />
       <DogPic 
        dogURL= {this.state.dog.pitbull.url}
        dogName= {this.state.dog.pitbull.name}
      />
       <DogPic 
        dogURL= {this.state.dog.mutts.url}
        dogName= {this.state.dog.mutts.name}
      />
      </div>

      </center>
      </div>
    )
  }
}


export default App
