import React from 'react'
import VenueCard from './VenueCard'


const VenueList = (props) => {
  return(

    <div className="ui three column grid cards">
    {props.venueList.map(venue => <VenueCard
      key={venue.id}
      venue={venue}
      onClick={props.addToMyVenue}
      favorite={false}
      />
    )}
    </div>
  )
}

export default VenueList
