import React from 'react'
import VenueCard from './VenueCard'


const HomePage = (props) => {

  // console.log(props.account.id)
  return(

    <div className="ui three column grid cards">
      <div>
        <br></br>
    <h2>Welcome {props.account.bride} & {props.account.groom}, </h2>

    <h3>Your Venues</h3>
    <div>
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
