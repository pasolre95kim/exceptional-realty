import React, { Component, Fragment } from 'react'
import { Card, Button, Menu, Icon, Modal, Image, Form, Input, Dropdown } from 'semantic-ui-react'



class AdoptionForm extends Component {

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
  return(
    <Modal
      open={this.state.form}
      trigger={
        <Button inverted color='brown'
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

        <Form onSubmit={()=> this.props.adoptAnimal(this.props.animal)} >
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
      {this.state.stableIncome === 'no' ||
        this.state.petFriendly === 'no' ||
        this.state.Vet === " "
         ?
      <div>
        <button className="ui disabled button">
            <Icon name='checkmark' />
            Submit
        </button>
        <Button color="red"
        onClick={this.handleClick}>
        <Icon name="remove" />
        Cancel
      </Button>
      </div>
       :
       <div>
        <Button color='green' inverted
          onClick={()=> this.props.adoptAnimal(this.props.animal)}>
          <Icon name='checkmark' />
          Submit
        </Button>

        <Button color="red"
          onClick={this.handleClick}>
          <Icon name="remove" />
        Cancel
        </Button>

      </div>}
    </Modal.Actions>
    </Modal>
   )
  }
}
export default AdoptionForm
