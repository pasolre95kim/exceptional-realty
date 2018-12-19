import React, { Component, Fragment } from 'react';
import { Header, Icon } from 'semantic-ui-react'
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
        phone_number: "012-345-6789",
        id:1
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
    if (this.state.adoptedAnimals.includes(animal)) {
      return null
    } else {

      let data={
        user_id: this.state.user.id,
        animal_id: animal.id
      }
      console.log(data)
      fetch(adoptionsURL, {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({adoption: data})
        })
        .then(resp =>resp.json())
        .then(animal => {
             this.setState({
           adoptedAnimals: [...this.state.adoptedAnimals, animal]
          })
        })
      }
    }

  render() {
    return (
      <div className="App">

      <Header as='h2' icon textAlign='center'>
        <img src="https://i.etsystatic.com/14984992/r/il/2120fc/1560256262/il_570xN.1560256262_eaom.jpg" className="ui circular image"/>
        My Furry Friends
        <Header.Subheader>
         Your Life long friends
        </Header.Subheader>
      </Header>

      <div className="ui secondary menu">
        <a className="active item">Home</a>
        <a className="item">Adopt</a>
        <a className="item">My Adoptions</a>
        <a className="item">Resources</a>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
          <input type="text" placeholder="Search..."/>
          <i aria-hidden="true" className="search icon">
          </i>
          </div>
      </div>
        <a className="item">
          Sign In
        </a>
      </div>
      </div>

      <AdoptedAnimals
        adoptedAnimals={this.state.adoptedAnimals} />

    <AllAnimals
      allAnimals={this.state.allAnimals}
      user={this.state.user}
      adoptAnimal={this.adoptAnimal}/>


    </div>
    );
  }
}

export default App;
