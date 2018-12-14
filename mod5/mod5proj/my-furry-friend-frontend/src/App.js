import React, { Component, Fragment } from 'react';
import AllAnimals from './components/AllAnimals'
import AdoptedAnimals from './components/AdoptedAnimals'
import {Route, Link, Switch} from 'react-router-dom'


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
        firstname: "Michelle",
        lastname: "Kim",
        username: "Admin",
        email: "admin@email.com",
        phone_number: "012-345-6789"
      }
    }
  }

  componentDidMount(){
    fetch(animalsURL)
    .then(resp => resp.json())
    .then(animals =>
      this.setState({
          allAnimals: animals
        })
    )
  }

  adoptAnimal = (animal) => {
    if (this.state.adoptedAnimals.inclues(animal)) {
      return null
    } else {
        this.setState({
          adoptedAnimals: [...this.state.adoptedAnimals, animal]
        })
      }
    }

  handleChange = () => {
    
  }


  render() {
    return (
      <div className="App">

      <h2 className="ui header">
        <img src="https://i.etsystatic.com/14984992/r/il/2120fc/1560256262/il_570xN.1560256262_eaom.jpg" className="ui circular image"/>
        My Furry Friends
        <div className="sub header">
         Your Life long friends
        </div>
      </h2>

      <div className="ui secondary menu">
        <a className="active item">Home</a>
        <a className="item">Adopt</a>
        <a className="item">Resources</a>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
        <input type="text" placeholder="Search..."/>
        <i aria-hidden="true" className="search icon"></i>
        </div>
      </div>
      <a className="item">
        Sign In
      </a>
        </div>
        </div>

    <AllAnimals allAnimals={this.state.allAnimals} user={this.state.user}/>

    <AdoptedAnimals adoptAnimal={this.adoptAnimal}
      adoptedAnimals={this.state.adoptedAnimals} />


    </div>
    );
  }
}

export default App;
