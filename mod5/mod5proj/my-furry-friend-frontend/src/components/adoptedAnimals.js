import React, { Component, Fragment } from 'react'
import AnimalCard from './AnimalCard'
import {Icon} from 'semantic-ui-react'

const AdoptedAnimals = (props) => {
  
    return (
      <div>
        <h2>
          <Icon name="paw" />
          Your Pending Adoptions</h2>
        <br></br>
        <div className="ui three column grid cards">
      {props.adoptedAnimals.map(animal => <AnimalCard
        key={animal.animal.id}
        animal = {animal.animal}
        addAnimal={props.addAnimal}
        user={props.user}
        adoptedAnimals={props.adoptedAnimals}
        adopted={true}
        deleteAnimal ={props.deleteAnimal}

         />
      )}
      </div>
    </div>
    )
  }


export default AdoptedAnimals
