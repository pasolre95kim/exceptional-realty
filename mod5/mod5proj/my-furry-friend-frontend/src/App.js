import React, { Component, Fragment } from 'react';
import { Header, Icon } from 'semantic-ui-react'
import AllAnimals from './components/AllAnimals'
import Home from './components/Home'
import LogInForm from './components/LogInForm'
import Articles from './components/Articles'
import SignUpForm from './components/SignUpForm'
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
      currentAnimal: "",
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
        <Link to='/' className="item">Home</Link>
        <Link to='/adopt' className="item">Adopt</Link>
        <Link to='/myadoption' className="item">My Adoptions</Link>
        <Link to='/articles' className="item">Resources</Link>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
          <input type="text" placeholder="Search..."/>
          <i aria-hidden="true" className="search icon">
          </i>
          </div>
      </div>
        <Link to='/login' className="item">
          Sign In
        </Link>
      </div>
      </div>

    <Switch>

      <Route path='/myadoption' render={() => {
          return <AdoptedAnimals
            adoptedAnimals={this.state.adoptedAnimals} />
        }} />

        <Route path='/articles' render={()=> {
            return <Articles />
          }} />

          <Route path='/signup' render={() => {
              return <SignUpForm />
            }} />
            
        <Route path='/login' render={()=> {
            return <LogInForm />
          }} />


        <Route path='/adopt' render={()=> {
          return <AllAnimals
            allAnimals={this.state.allAnimals}
            user={this.state.user}
            adoptAnimal={this.adoptAnimal}/>
          }} />

          <Route path='/' render={() => {
              return <Home />
            }} />
      </Switch>
    </div>
    );
  }
}

export default App;
