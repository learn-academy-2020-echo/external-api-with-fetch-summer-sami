import React, { Component } from 'react'
import DogPic from './components/DogPic';
import dogs from './dogArray.js';
import dogsArray from './dogArray2.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dog: dogs,
      dogArray : dogsArray
    }
  }

dogMap = (arr) => {

    let dogArray = arr.map(value => {
    })
    return dogArray
  //   {dog.map((value) => (
  //     <DogPic 
  //     dogURL= {value.url}
  //     dogName= {value.name}
  //   />
  // ))}
  }


  render(){
    // const {dog} = this.state.dog 
    // const list = this.state.dogArray.map(value => {
    //   return [value.name, value.url]
    // })
    const list = this.state.dogArray.map(value => {
      return <DogPic dogURL= {value.url} dogName= {value.name}/>
    })

    // const urlList = list.map(value => {
    //   return value[1]
    // })

    // const nameList = list.map(value => {
    //   return value[0]
    // })
    
    return (

      <div>
        <center>
      <h1>Dog Randomizer</h1>
      {/* <div>{console.log(list)}</div>
      <div>{console.log(urlList)}</div>
      <div>{console.log(nameList)}</div> */}

      <div style={{display: "inline-block"}}>

      {/* {list.map(value => 
      <DogPic
        dogURL= {value.url}
        dogName= {value.name}
        />
      )} */}

      {list}

      </div>

      

      {/* <div style={{display: "inline-block"}}>
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
      </div> */}

      </center>
      </div>
    )
  }
}


export default App
