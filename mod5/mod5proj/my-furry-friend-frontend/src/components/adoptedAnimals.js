import React, { Component, Fragment } from 'react'
import AnimalCard from './AnimalCard'

const AdoptedAnimals = (props) => {

    return (
      <div>
        <h2>YOURRRRR MYYYYY Adoptions</h2>
        <br></br>
        <div className="ui three column grid cards">
      {props.adoptedAnimals.map(animal => <AnimalCard
        key={animal.animal.id}
        animal = {animal.animal}
        addAnimal={props.addAnimal}
        user={props.user}
        adoptedAnimals={props.adoptedAnimals}
         />
      )}
      </div>
    </div>
    )
  }


export default AdoptedAnimals
