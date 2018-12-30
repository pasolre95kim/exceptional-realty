import React, { Component, Fragment } from 'react'
import { Card, Button, Icon, Modal, Image, Form, Input } from 'semantic-ui-react'
import AdoptionForm from './AdoptionForm'


const AnimalCard= (props) => {

  const adoptionsURL = "http://localhost:3000/adoptions"
  const animalsURL = "http://localhost:3000/animals"

//delete call to backend & deleting from front in ADOPTED
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
      alert("Adoption has been canceled")
    })
  }

  const deleteAnimal = (animal) => {
    let index = props.allAnimals.findIndex(pet => pet.id === animal.id)
    let newArray = [...props.allAnimals]
    newArray.splice(index, 1)

    fetch(animalsURL, {
      method: "DELETE",
      headers: {
        "Content-Type" : "application/json"
      }
    })
    .then(resp => resp.json())
    .then(data => {
      console.log("deleted", animal, "from allanimals")
      alert("Animal has been deleted")
      props.deleteFromAll(newArray)
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
              {props.animal.about ?
            <Card.Description>{props.animal.about}</Card.Description> : null}
              {props.animal.health ?
            <Card.Description>Health: {props.animal.health}</Card.Description> : null}
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
      {/* if user is admin in the all animals page, show delete button */}
      {props.admin ?
      <Button basic color="red"
         onClick={() => deleteAnimal(props.animal)}>
        <Icon name="remove" />
        Delete
      </Button> : null}
    </div>
        :
      /*show cancel only on adopted animals*/
        <Button onClick={() => handleClick(props.animal)}>
        <Icon name="remove" />
          Cancel Adoption
      </Button> }

      </Card.Content>
    </Card>
    )
  }


export default AnimalCard
