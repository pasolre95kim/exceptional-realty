import React, { Component, Fragment } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

class adoptedAnimals extends Component {
  constructor(){
    super()
    this.state={
      modalOpen: false
    }
  }


  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })



  render() {
    return (
      <div className = "ui three column grid cards">
      {this.props.adoptedAnimals.map(animal => <animalCard
        key={animal.id}
        animal = {animal}
        handleOpen={this.handleOpen}
        handleClose={this.handleClose} />
      )}
      </div>
    )
  }
}

export default adoptedAnimals
