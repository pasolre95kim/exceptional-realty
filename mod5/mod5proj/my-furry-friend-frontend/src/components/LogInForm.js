import React, {Component} from 'react'
import SignUpForm from './SignUpForm'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const logInURL="http://localhost:3000/login"

class LogInForm extends Component {

  state={
    username: "",
    password: ""
  }

onChange = (event) => {
  this.setState({
    [event.target.name] : event.target.value
  })
}

loginFetch = () => {
  fetch(logInURL, {
    method: "POST",
    headers: {"Content-Type": "application/json", "Accept": "application/json"},
    body: JSON.stringify({user: this.state})
  })
    .then(res => res.json())
    .then(data => {
      if(!data.error){
        localStorage.setItem("token", data.jwt)
        localStorage.setItem("user", JSON.stringify(data.user))
      
      }
    })

}

handleSubmit = event => {
  this.loginFetch();
}

  render(){
    return(
  <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form onSubmit={this.handleSubmit} >
          <Form.Input icon='user' iconPosition='left' label='Username'  placeholder='Username' name="username" onChange={this.onChange} />
          <Form.Input icon='lock' iconPosition='left' label='Password' type='password' name="password" onChange={this.onChange} />

          <Button content='Login' primary
            as={Link} to="/home"
            />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button as={Link} to="/signup" primarycontent='Sign up' icon='signup' size='big'>
        Sign Up
        </Button>
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
    )
  }
}

export default LogInForm
