import React, { Component } from 'react';
import './App.css';
import VenueList from './components/VenueList'
import HomePage from './components/HomePage'
import Faq from './components/FAQ'
import {Route, Link, Switch} from 'react-router-dom'


const venuesUrl = "http://localhost:3000/venues"
const accountsUrl = "http://localhost:3000/accounts"
const proposeUrl = "http://localhost:3000/proposes"
const image ="https://d1zpvjny0s6omk.cloudfront.net/media/cache/82/36/82364d1a9e525753e30d553e26005ec1.jpg"

class App extends Component {
  constructor(){
    super()
    this.state={
      allVenues: [],
      myVenues: [],
      account: {
        bride: "Lucy",
        groom: "Toby",
        id: 2
      }
    }
  }

  componentDidMount(){
    fetch(venuesUrl)
    .then(resp => resp.json())
    .then(venue => {
      this.setState({
        allVenues: venue
      })
    })
    fetch(accountsUrl+`/${this.state.account.id}`)
    .then(resp => resp.json())
    .then(accountData => {
      this.setState({
        myVenues: accountData.proposes.map(propose => {
          let venue = propose.venue
          venue.proposeData = {id:propose.id, cake:propose.cake, theme:propose.theme, flower:propose.flower }
          return venue})
      })
    })
  }


  addToMyVenue = (venue) => {
    if (this.state.myVenues.includes(venue)) {
      return null
    } else {

    let data = {
      account_id: this.state.account.id,
      venue_id: venue.id,
      flower: "",
      cake: "",
      theme: ""
    }

    fetch(proposeUrl, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(data => this.setState({
      myVenues: [...this.state.myVenues, data]
    }))
  }

}

  removeVenue = (venueRemove) => {
    let index = this.state.myVenues.findIndex(venue => venue.id === venueRemove.id)
    let newArray = [...this.state.myVenues]
    newArray.splice(index, 1)
    this.setState({
      myVenues: newArray
    })
    fetch(proposeUrl+`/${venueRemove.proposeData.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type" : "application/json"
      }
    })
    .then(resp => resp.json())
    .then(data => console.log("deleted", data))
  }

  render() {
    return (
      <div className="App">
        <h3 className='ui header'>
          <img src='https://cdn.dribbble.com/users/290832/screenshots/982749/richwilliams_wedding_logo.jpg'
            className='ui circular image' /> My Wedding
        </h3>

        <div className='ui menu'>
          <div className='header item'>My Wedding</div>
          <Link to='/' className="item">Home</Link>
          <Link to='/venuelist' className="item">Venues</Link>
          <Link to='/faq' className="item">FAQ</Link>
        </div>

        <Switch>
        <Route path='/venuelist' render={()=> {
            return <VenueList
                  venueList={this.state.allVenues}
                  addToMyVenue={this.addToMyVenue}
                  />
              }} />

          <Route  path="/faq" render={() => {
              return <Faq />
                }} />

          <Route path='/' render={()=> {
            return  <HomePage
                    myVenues={this.state.myVenues}
                    removeVenue={this.removeVenue}
                    account={this.state.account}
                    />
                }} />

          </Switch>
        </div>


    );
  }
}

export default App;


// <h3 className='ui header'>
//   <img src='https://cdn.dribbble.com/users/290832/screenshots/982749/richwilliams_wedding_logo.jpg'
//     className='ui circular image' /> My Wedding
// </h3>
// <div className='ui menu'>
//   <div className='header item'>My Wedding</div>
//   <a className='item'>Home</a>
//   <a className='item'>Venues</a>
//   <a className='item'>FAQ</a>
// </div>
//
// <HomePage myVenues={this.state.myVenues} removeVenue={this.removeVenue} account={this.state.account}/>
// <br></br>
// <h2>Venues</h2>
// <VenueList venueList={this.state.allVenues}
//   addToMyVenue={this.addToMyVenue}
//   />
