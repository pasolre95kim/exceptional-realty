import React from 'react'
import AnimalCard from './AnimalCard'

const AllAnimals = (props) => {

  return(
    <div>
    <h2>Our Furry Friends</h2>
      <div className = "ui four column grid cards">
        {props.allAnimals.map(animal=> <AnimalCard
          key={animal.id}
          animal={animal}
          user={props.user}
          />
      )}
    </div>
    </div>
  )
}
export default AllAnimals
