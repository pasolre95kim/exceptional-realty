import React from 'react'
import VenueCard from './VenueCard'


const HomePage = (props) => {

  return(
    <div>

    <h2>Welcome {props.account.bride} & {props.account.groom}, </h2>
    <i className="chess queen">
    <h2>Your Favorites</h2>
    </i>
    <br></br>
    <div>
      <div className="ui three column grid cards">
    {props.myVenues.map(venue => <VenueCard
      accountId={props.account.id}
      key={venue.id}
      venue={venue}
      onClick={props.removeVenue}
      favorite={true}
      />
    )}
    </div>
    </div>
  </div>
  )
}

export default HomePage
