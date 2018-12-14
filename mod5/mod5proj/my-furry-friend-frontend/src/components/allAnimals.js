import React from 'react'

const allAnimals = (props) => {

  return(
    <div>
    <h2>Our Furry Friends</h2>
      <div className = "ui four column grid cards">
        {props.allAnimals.map(animal=> <animalCard
          key={animal.id}
          animal={animal}
          />
      )}
    </div>
    </div>
  )
}
export default allAnimals

// onClick={props.addToAdopt}

// return(
//     <div>
//     <h2>Venues</h2>
//     <div className="ui three column grid cards">
//       {props.venueList.map(venue => <VenueCard
//         key={venue.id}
//         venue={venue}
//         onClick={props.addToMyVenue}
//         favorite={false}
//       />
//     )}
//     </div>
//     </div>
//   )
