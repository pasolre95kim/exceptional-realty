import React, { Component, Fragment } from 'react'
import AnimalCard from './AnimalCard'

class AdoptedAnimals extends Component {
  constructor(){
    super()
    this.state={
      modalOpen: false
    }
  }



  render() {
    return (
      <div className = "ui three column grid cards">
      {this.props.adoptedAnimals.map(animal => <AnimalCard
        key={animal.id}
        animal = {animal}
        handleOpen={this.handleOpen}
        handleClose={this.handleClose} />
      )}
      </div>
    )
  }
}

export default AdoptedAnimals
