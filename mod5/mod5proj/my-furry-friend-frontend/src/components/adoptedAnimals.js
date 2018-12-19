import React, { Component, Fragment } from 'react'
import AnimalCard from './AnimalCard'

const AdoptedAnimals = (props) => {

    return (
      <div className = "ui three column grid cards">
        YOURRRRR MYYYYY Adoptions
      {props.adoptedAnimals.map(animal => <AnimalCard
        key={animal.id}
        animal = {animal}
         />
      )}
      </div>
    )
  }


export default AdoptedAnimals
