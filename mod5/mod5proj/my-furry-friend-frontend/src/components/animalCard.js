import React, { Component, Fragment } from 'react'
import { Card, Button, Menu, Icon, Modal, Image, Form, Input, Dropdown } from 'semantic-ui-react'
import AdoptionForm from './AdoptionForm'


const AnimalCard= (props) => {
  debugger
  return (
    <Card>
      <Image src={props.animal.image} />
        <Card.Content>
          <Card.Header>Name: {props.animal.name}</Card.Header>
          <Card.Meta>{props.animal.type}</Card.Meta>
          <Card.Meta>Age: {props.animal.age}</Card.Meta>
          <Card.Meta>Gender: {props.animal.gender}</Card.Meta>
          <Card.Meta>Breed: {props.animal.breed}</Card.Meta>
            <Card.Description>{props.animal.about}</Card.Description>
            <Card.Description>Health: {props.animal.health}</Card.Description>
            <Card.Description>{props.animal.preferredHome}</Card.Description>
        </Card.Content>
      <Card.Content extra>

        <AdoptionForm
          animal={props.animal}
          adoptedAnimals={props.adoptedAnimals}
          user={props.user}
          currentAnimal={props.currentAnimal}
          addAnimal={props.addAnimal}
        />

      </Card.Content>
    </Card>
    )
  }


export default AnimalCard
