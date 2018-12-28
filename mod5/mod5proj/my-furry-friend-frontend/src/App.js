import React, { Component, Fragment } from 'react';
import { Header, Icon } from 'semantic-ui-react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import AllAnimals from './components/AllAnimals'
import Home from './components/Home'
import LogInForm from './components/LogInForm'
import Articles from './components/Articles'
import SignUpForm from './components/SignUpForm'
import AdoptedAnimals from './components/AdoptedAnimals'
import AddAnimalForm from './components/AddAnimalForm'


const animalsURL = "http://localhost:3000/animals"
const adoptionsURL = "http://localhost:3000/adoptions"
const usersURL = "http://localhost:3000/users"
const profileURL = "http://localhost:3000/profile"

class App extends Component {
  constructor(){
    super()
    this.state={
      currentUser: null,
      allAnimals:[],
      adoptedAnimals: [],
      searchTerm: "",
      currentAnimal: "",
      admin: false
    }
  }

//fetching all list of animals
  componentDidMount(){
    fetch(animalsURL)
    .then(resp => resp.json())
    .then(animals =>
      this.setState({
          allAnimals: animals
        })
      )
    this.checkForToken();
  }

//get token & validate setToken
  checkForToken = () => {
    let token = localStorage.getItem("token")
    if (token) {
      fetch(profileURL,
        {headers:
          {Authorization: `Bearer ${token}`}
        })
        .then(res => res.json())
        .then(data => {
          console.log(data.user)
          if(!data.error){
            localStorage.setItem("user", JSON.stringify(data.user));
            this.setState({
              currentUser: data.user,
              adoptedAnimals: data.user.adoptions
            })
          }
        })
      }
    }


  addAnimal = (animal) => {
      this.setState({
        adoptedAnimals: [...this.state.adoptedAnimals, animal]
    })
  }

  deleteAnimal = (newArray) => {
    this.setState({
      adoptedAnimals: newArray
    })
  }

  setCurrentAnimal = (animal) => {
    this.setState({
      currentAnimal: animal
    })
  }

  updateCurrentUser = (user) => {
  this.setState({currentUser: user})
}

  logout = () => {
   localStorage.removeItem(`token`);
   this.setState({ currentUser: null });
 }

  // {JSON.parse(localStorage.getItem("user")).username}

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

        <Link to='/newAnimalForm' className="item">New Animal Form</Link>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
          <input type="text" placeholder="Search..."/>
          <i aria-hidden="true" className="search icon">
          </i>
          </div>
      </div>
      {this.checkForToken ?
        <Link to='/login' className="item">
          Sign In
        </Link> : localStorage.setItem("token", "")}
      </div>
      </div>

    <Switch>

      <Route path='/myadoption' render={() => {
          return <AdoptedAnimals
            adoptedAnimals={this.state.adoptedAnimals}
            deleteAnimal={this.deleteAnimal}
            user={this.state.currentUser}

            />
        }} />

        <Route path='/articles' render={()=> {
            return <Articles
              user={this.state.currentUser}
              />
          }} />

        <Route path='/signup' render={() => {
              return <SignUpForm />
            }} />

        <Route path='/login' render={()=>
            this.state.currentUser ? <Redirect to="/myadoption"/> :
            <LogInForm
                checkForToken={this.checkForToken}
                updateCurrentUser={this.updateCurrentUser}/>
          } />

        <Route path='/newAnimalForm' component={AddAnimalForm} />

        <Route path='/adopt' render={()=> {
          return <AllAnimals
            allAnimals={this.state.allAnimals}
            user={this.state.currentUser}
            adoptAnimal={this.adoptAnimal}
            currentAnimal={this.state.currentAnimal}
            addAnimal={this.addAnimal}/>
          }} />

          <Route path='/' render={() => {
              return <Home
                user={this.state.currentUser}
                />
            }} />

      </Switch>
    </div>
    );
  }
}

export default App;



//if currentUser's admin is true, let the addNewAnimal form visible
// {this.state.currentUser.admin ? : null}
