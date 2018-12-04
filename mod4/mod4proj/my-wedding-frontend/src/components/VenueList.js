import React from 'react'
import VenueCard from './VenueCard'


const VenueList = (props) => {

  return(
    <div>
    <h2>Venues</h2>
    <div className="ui three column grid cards">
      {props.venueList.map(venue => <VenueCard
        key={venue.id}
        venue={venue}
        onClick={props.addToMyVenue}
        favorite={false}
      />
    )}
    </div>
    </div>
  )
}

export default VenueList
