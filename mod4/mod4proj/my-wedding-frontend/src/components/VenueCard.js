import React from 'react'
import VenueForm from './VenueForm'


const accountsUrl = "http://localhost:3000/accounts"
export default class VenueCard extends React.Component {
  constructor(props) {
    super(props)

    let id = this.props.accountId
    let cake = this.props.venue.proposeData ? this.props.venue.proposeData.cake : ''
    let theme = this.props.venue.proposeData ? this.props.venue.proposeData.theme : ''
    let flower = this.props.venue.proposeData ? this.props.venue.proposeData.flower : ''

    this.state={
      showform: false,
        cake: cake,
        theme: theme,
        flower: flower,
        id: id
    }
  }


  handleClick = event => {
    this.setState({form: !this.state.form})
  }

  handleSubmit = event => {
    event.preventDefault()

    let data = {
      cake: this.state.cake,
      theme: this.state.theme,
      flower: this.state.flower
    }
  fetch(accountsUrl+`/${this.state.id}`,{
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(resp => resp.json())
  .then(data => console.log(data))
  }

  handleChange = event => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render(){
  return(

    <div className='ui card'>
    <img src={this.props.venue.image} alt="venue" className='ui image' />
    <div className='content'>
      <div className='header'>{this.props.venue.name}</div>

      <div className='meta'>
        <p>Price Range: {this.props.venue.price_range}</p>
        <p>Capacity: {this.props.venue.capacity}</p>
        <p>Location: {this.props.venue.location}</p>
      </div>
      <div className='description'>Contact: {this.props.venue.contact}</div>
    </div>

    <div className="extra content">
      <a onClick={() => this.props.onClick(this.props.venue)}>
        <i aria-hidden='true' className='heart icon' />
        Add to favorite
      </a>
        {this.props.favorite ? <div>
        <a onClick={this.handleClick}>
          <i aria-hidden='true' className='edit icon' />
          Propose
        </a>
        {this.state.form ? <VenueForm venue={this.props.venue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          propose={{cake: this.state.cake, theme: this.state.theme, flower: this.state.flower}}
        /> : null}
        </div> : null}
      </div>

    </div>


      )
    }
  }
