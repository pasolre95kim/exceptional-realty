import React, { Component, Fragment } from 'react'
import { Card, Button, Header, Icon, Modal, Image, Form } from 'semantic-ui-react'


class AnimalCard extends Component {
  constructor(){
    super()
    this.state = {
      open: false
    }
  }
  //
  // handleOpen = () => this.setState({ modalOpen: true })
  // handleClose = () => this.setState({ modalOpen: false })
  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })


  render() {
    const { open } = this.state
    return (
      <Card>
        <Image src={this.props.animal.image} />
          <Card.Content>
            <Card.Header>Name: {this.props.animal.name}</Card.Header>
            <Card.Meta>{this.props.animal.type}</Card.Meta>
            <Card.Meta>Age: {this.props.animal.age}</Card.Meta>
            <Card.Meta>Gender: {this.props.animal.gender}</Card.Meta>
            <Card.Meta>Breed: {this.props.animal.breed}</Card.Meta>
              <Card.Description>About: {this.props.animal.about}</Card.Description>
          </Card.Content>

        <Card.Content extra>

          <Modal
            open={open}
            onOpen={this.open}
            onClose={this.close}
            size='small'
            trigger={
              <Button primary icon>
                <Icon name='paw' />
                Adopt Me
              </Button> }>

          <Modal.Header>Adoption Form For: {this.props.animal.name} </Modal.Header>
          <Modal.Content>
            <Form>
              <h2>We need your information!</h2>
              <Form.Group widths='equal'>
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                name="firstname"
                label='First name'
                placeholder='First name...'
                value={this.props.user.firstname} />

              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-last-name'
                name="lastname"
                label='Last name'
                placeholder='Last name...'
                value={this.props.user.lastname} />

              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-last-name'
                name="email"
                label='Email'
                placeholder='Email...'
                value={this.props.user.email} />

              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-last-name'
                name="phone_number"
                label='Phone Number'
                placeholder='Phone Number...'
                value={this.props.user.phone_number} />
              </Form.Group>
            </Form>
          </Modal.Content>

          <Modal.Actions>
            <Button icon='check' content='Submit' onClick={this.close} />
          </Modal.Actions>
        </Modal>
      </Card.Content>
    </Card>
    )
  }
}

const ModalExampleMultiple = () => (
  <Modal trigger={<Button>Multiple Modals</Button>}>
    <Modal.Header>Modal #1</Modal.Header>
    <Modal.Content image>
      <div className='image'>
        <Icon name='right arrow' />
      </div>
      <Modal.Description>
        <p>We have more to share with you. Follow us along to modal 2</p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <AnimalCard />
    </Modal.Actions>
  </Modal>
)

export default AnimalCard


// <Modal trigger={
//   <Button icon>
//     <Icon name='paw' />
//     Adopt Me
//   </Button> }>
//
// <Header icon='magic'>
//   Adoption Form For: {this.props.animal.name}
// </Header>
