import React, { Component } from 'react';






const animalsURL = "http://localhost:3000/animals"
const adoptionsURL = "http://localhost:3000/adoptions"
const usersURL = "http://localhost:3000/users"

class App extends Component {
  constructor(){
    super()
    this.state={
      allAnimals:[],
      adoptedAnimals: [],
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

      </div>
    );
  }
}

export default App;
