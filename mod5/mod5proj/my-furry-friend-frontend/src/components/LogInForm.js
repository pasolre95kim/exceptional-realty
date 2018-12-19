import React, {Component} from 'react'
import SignUpForm from './SignUpForm'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class LogInForm extends Component {
  constuctor() {
   this.routeChange = this.routeChange.bind(this);
    }

  routeChange(){
   let path = `SignUpForm`;
   this.props.history.push(path);
   }

  render(){
    return(
  <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form>
          <Form.Input icon='user' iconPosition='left' label='Username' placeholder='Username' />
          <Form.Input icon='lock' iconPosition='left' label='Password' type='password' />

          <Button content='Login' primary />
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
