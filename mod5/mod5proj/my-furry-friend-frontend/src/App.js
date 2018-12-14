import React, { Component, Fragment } from 'react';
import allAnimals from './components/allAnimals'



const animalsURL = "http://localhost:3000/animals"
const adoptionsURL = "http://localhost:3000/adoptions"
const usersURL = "http://localhost:3000/users"

class App extends Component {
  constructor(){
    super()
    this.state={
      allAnimals:[],
      adoptedAnimals: [],
      searchTerm: "",
      user: {
        username: "Admin",
        email: "admin@email.com"
      }
    }
  }

  componentDidMount(){
    fetch(animalsURL)
    .then(resp => resp.json())
    .then(animals =>
    this.setState({
      allAnimals: animals
    }))
  }



  render() {
    return (

      <div className="App">

      <h2 class="ui header">
        <img src="https://i.etsystatic.com/14984992/r/il/2120fc/1560256262/il_570xN.1560256262_eaom.jpg" class="ui circular image"/>
        My Furry Friends
        <div class="sub header">
         Life long friends
        </div>
      </h2>

      <div class="ui secondary menu">
        <a class="active item">Home</a>
        <a class="item">Adopt</a>
        <a class="item">Resources</a>
      <div class="right menu">
        <div class="item">
          <div class="ui icon input">
        <input type="text" placeholder="Search..."/>
        <i aria-hidden="true" class="search icon"></i>
        </div>
      </div>
      <a className="item">
        Sign In
      </a>
        </div>
        </div>

        
        <allAnimals allAnimals={this.state.allAnimals}/>


      </div>
    );
  }
}

export default App;
