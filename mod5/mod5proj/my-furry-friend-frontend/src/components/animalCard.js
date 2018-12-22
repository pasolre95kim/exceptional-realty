import React, { Component, Fragment } from 'react'
import { Card, Button, Menu, Icon, Modal, Image, Form, Input, Dropdown } from 'semantic-ui-react'
import AdoptionForm from './AdoptionForm'


const AnimalCard= (props) => {

  const adoptionsURL = "http://localhost:3000/adoptions"

//delete call to backend & deleting from front
  const handleClick = (animal) => {

    let index = props.adoptedAnimals.findIndex(deleteAnimal => deleteAnimal.animal.id === animal.id)
    let newArray = [...props.adoptedAnimals]
    newArray.splice(index,1)

    fetch(adoptionsURL + `/${props.adoptedAnimals[index].id}`, {
      method: "DELETE",
      headers: {
        "Content-Type" : "application/json"
      }
    })
    .then(resp=>resp.json())
    .then(data => {
      console.log("deleted", data)
      props.deleteAnimal(newArray)
    })
  }

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

      {!props.adopted ?
        <div>
        <AdoptionForm
          animal={props.animal}
          adoptedAnimals={props.adoptedAnimals}
          user={props.user}
          currentAnimal={props.currentAnimal}
          addAnimal={props.addAnimal}
        />
    </div>
        :
        <Button onClick={() => handleClick(props.animal)}>
        <Icon name="remove" />
          Cancel Adoption
      </Button> }

      </Card.Content>
    </Card>
    )
  }

// line 59 delete button to show only in adoptedAnimals

export default AnimalCard
