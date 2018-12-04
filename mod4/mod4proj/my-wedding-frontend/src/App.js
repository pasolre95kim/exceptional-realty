import React, { Component } from 'react';
import './App.css';
import VenueList from './components/VenueList'
import HomePage from './components/HomePage'


const venuesUrl = "http://localhost:3000/venues"
const accountsUrl = "http://localhost:3000/accounts"
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
    this.setState({
      myVenues: [...this.state.myVenues, venue]
    })
  }


  removeVenue = (venueRemove) => {
    let index = this.state.myVenues.findIndex(venue => venue.id === venueRemove.id)
    let newArray = [...this.state.myVenues]
    newArray.splice(index, 1)
    this.setState({
      myVenues: newArray
    })
  }


  render() {
    return (
      <div className="App">
        <h2 className='ui header'>
          <img src='https://cdn.dribbble.com/users/290832/screenshots/982749/richwilliams_wedding_logo.jpg'
            className='ui circular image' /> My Wedding
        </h2>
        <div className='ui menu'>
          <div className='header item'>My Wedding</div>
          <a className='item'>Home</a>
          <a className='item'>Venues</a>
          <a className='item'>FAQ</a>
        </div>

        <HomePage myVenues={this.state.myVenues} removeVenue={this.removeVenue} account={this.state.account}/>

        <h3>Venues: </h3>
        <VenueList venueList={this.state.allVenues}
          addToMyVenue={this.addToMyVenue}
          />

      </div>
    );
  }
}

export default App;
