import React, {Component} from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,  MDBModalFooter, MDBIcon, MDBCardHeader, MDBBtn } from "mdbreact";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const usersURL = "http://localhost:3000/users"

class SignUpForm extends Component {

  state={
    password:"",
    confirm_password: "",
    username: ""
  }

  postUser = (data) => {
    fetch(usersURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body:JSON.stringify(data)
    })
    .then(resp=>resp.json())
    .then(data =>{
      if (!data.error) {
      localStorage.setItem("token", data.jwt)
      localStorage.setItem("user", JSON.stringify(data.user))
      console.log(data)}
  })
}

  handleSubmit =() => {
    if( this.state.password === this.state.confirm_password) {
      let data = {user:{
        username: this.state.username,
        password: this.state.password}
      }
      this.postUser(data)
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render() {
  return (
    <MDBContainer className="text-center" >
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header warm-flame-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Sign Up
                </h3>
              </MDBCardHeader>
              <label
                htmlFor="defaultFormEmailEx"
                className="grey-text font-weight-light"
              >
                Username
              </label>
              <input onChange={this.handleChange}
                type="text"
                id="defaultFormEmailEx"
                className="form-control"
                name="username"
                required
              />

              <label
                htmlFor="defaultFormPasswordEx"
                className="grey-text font-weight-light"
              >
                Your password
              </label>
              <input onChange={this.handleChange}
                type="password"
                id="defaultFormPasswordEx"
                className="form-control"
                name="password"
                required
              />

              <label
                htmlFor="defaultFormPasswordEx"
                className="grey-text font-weight-light"
              >
                Confirm Password
              </label>
              <input onChange={this.handleChange}
                type="password"
                id="defaultFormEmail"
                className="form-control"
                name="confirm_password"
                required
              />

              <div className="text-center mt-4">
                <MDBBtn color="deep-orange" className="mb-3" type="submit" onClick={this.handleSubmit}>
                  Make Account
                </MDBBtn>
              </div>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  };
}

export default SignUpForm;
