import React, { Component, Fragment } from 'react'
import { Card, Button, Menu, Icon, Modal, Image, Form, Input, Dropdown } from 'semantic-ui-react'


class AnimalCard extends Component {

  constructor(){
    super()
    this.state = {
      form: false,
      stableIncome: "",
      petFriendly:" ",
      Vet: " ",
      options: [{ key: 1, text: 'Yes', value: 'yes' },
      { key: 2, text: 'No', value: 'no' }]
    }
  }

  handleChange = event => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleDropDown = (event, data)=> {
    event.preventDefault()
    this.setState({
      [data.name]: data.value
    })
  }

  handleClick = event => {
      this.setState({form: !this.state.form})
    }

  render() {
    return (
    <Card>
      <Image src={this.props.animal.image} />
        <Card.Content>
          <Card.Header>Name: {this.props.animal.name}</Card.Header>
          <Card.Meta>{this.props.animal.type}</Card.Meta>
          <Card.Meta>Age: {this.props.animal.age}</Card.Meta>
          <Card.Meta>Gender: {this.props.animal.gender}</Card.Meta>
          <Card.Meta>Breed: {this.props.animal.breed}</Card.Meta>
            <Card.Description>{this.props.animal.about}</Card.Description>
            <Card.Description>Health: {this.props.animal.health}</Card.Description>
            <Card.Description>{this.props.animal.preferredHome}</Card.Description>
        </Card.Content>

      <Card.Content extra>
        <Modal
          open={this.state.form}
          trigger={
            <Button icon
              onClick={()=> this.handleClick()
            }>
              <Icon name="paw" />
              Adopt Me
            </Button>}
          centered={false}>
          <Modal.Header>
            Adoption Form For: {this.props.animal.name}
          </Modal.Header>

        <Modal.Content>
          {this.state.stableIncome === 'no' || this.state.petFriendly === 'no' ?
            <div className="ui error message">
              <div className="header">Action Forbidden</div>
              <p>You must live in a pet friendly environment and have stable income in order to adopt</p>
            </div> : null}

        <Modal.Description>
          <label>Do You Have A Stable Income?</label>
          <br></br>

            <Dropdown clearable
              options={this.state.options}
              name="stableIncome"
              selection
              onChange={this.handleDropDown}/>

            <br></br><br></br>

          <label>Do You Live In A Pet Friendly Environment?</label>
            <br></br>
            <Dropdown clearable
              name="petFriendly"
              options={this.state.options}
              selection
              onChange={this.handleDropDown}/>
            <br></br><br></br>

            <label>Have You Owned A Pet Before</label>
            <br></br>
            <Dropdown clearable
              options={this.state.options}
              name="previousRecord"
              selection
              onChange={this.handleDropDown}/>

          <Form onSubmit={this.props.adoptAnimal} >
            <Form.Group widths='equal'>
              <Form.Input onChange={this.handleChange}
                fluid
                name='Vet'
                label='Veterinary Hospital'
                placeholder='Veterinary Hospital...'/>

              <div className="ui left pointing red basic label">
              This Field Is Mandatory
            </div>
          </Form.Group>
        </Form>


          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          {this.state.stableIncome === 'no' || this.state.petFriendly === 'no' ?
          <button className="ui disabled button">
            <Icon name='checkmark' />
            Submit
          </button> :
          <Button class color='green' inverted
            onClick={()=> this.handleClick()}>
            <Icon name='checkmark' />
            Submit
          </Button>}

        </Modal.Actions>
      </Modal>
      </Card.Content>
    </Card>
    )
  }
}

export default AnimalCard
