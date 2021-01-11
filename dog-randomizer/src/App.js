import React, { Component } from 'react'
import DogPic from './components/DogPic';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dog: {
        frenchBulldog: {
          url: "https://dog.ceo/api/breed/bulldog/images/random",
          name: "Frenchies"
        },
        germanShepherd: {
          url: "https://dog.ceo/api/breed/germanshepherd/images/random",
          name: "German Shepherds"
        },
        rottweiler: {
          url: "https://dog.ceo/api/breed/rottweiler/images/random",
          name: "Rottweilers"
        },
        goldenRetriever: {
          url: "https://dog.ceo/api/breed/retriever/golden/images/random",
          name: "Golden Retrievers"
        },
        samoyed: {
          url: "https://dog.ceo/api/breed/samoyed/images/random",
          name: "Samoyeds"
        },
        husky: {
          url: "https://dog.ceo/api/breed/husky/images/random",
          name: "Huskies"
        },
        borderCollie: {
          url: "https://dog.ceo/api/breed/collie/border/images/random",
          name: "Border Collies"
        },   
        pitbull: {
          url: "https://dog.ceo/api/breed/pitbull/images/random",
          name: "Pittbulls"
        },     
        mutts: {
          url: "https://dog.ceo/api/breed/mix/images/random",
          name: "Mutts"
        },
      } 
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
