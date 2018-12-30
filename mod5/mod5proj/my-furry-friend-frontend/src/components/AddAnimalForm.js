
import React, {Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

//Check how to add backgroun image!
// <img src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Cute-Baby-Animal-Background-Download-Free.jpg" />


// <img className="add" src="http://2.bp.blogspot.com/-EZPlNgf_oDM/Tp-31Pv8d8I/AAAAAAAAAhQ/N2FHNHIDj04/s1600/Cute-Dog-Wallpaper.jpg" />

const animalsURL = "http://localhost:3000/animals"

class AddAnimalForm extends Component {
  constructor(){
    super()
    this.state={
      name:"",
      adoptionFee: "",
      image: "",
      health: "",
      breed: "",
      age: "",
      gender: "",
      preferredHome: ""
    }
  }

  handleChange = event => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    debugger
    let data = {
      name: this.state.name,
      age: this.state.age,
      gender: this.state.gender,
      adoptionFee: this.state.adoptionFee,
      image: this.state.image,
      breed: this.state.breed,
      health: this.state.health,
      preferredHome: this.state.preferredHome
    }
    fetch(animalsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts" : "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  render() {
    return (

      <MDBContainer
        className="text-center"
        style={{width: "30%"}}
        >
        <MDBRow >
          <MDBCol>
            <form  onSubmit={this.handleSubmit}>
              <p className="h4 text-center mb-4">New Animal Form</p>
              <label name="name" className="grey-text">
                Name
              </label>
              <input
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                name="name"
                onChange={this.handleChange}
                required
              />
              <br />
                <label name="name" className="grey-text">
                  Adoption Fee
                </label>
              <input
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                name="adoptionFee"
                onChange={this.handleChange}
                required
              />
              <br />

                <label name="name" className="grey-text">
                  Picture
                </label>
                <input
                  type="text"
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                  name="image"
                  onChange={this.handleChange}
                  required
                />
                <br />

              <label name="name" className="grey-text">
                  Health
                </label>
                <input
                  type="text"
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                  name="health"
                  onChange={this.handleChange}
                  required
                />
                <br />

              <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                Age
              </label>
              <input
                type="text"
                id="defaultFormRegisterEmailEx"
                className="form-control"
                name="age"
                onChange={this.handleChange}
                required
              />
              <br />

              <label
                className="grey-text"
              >
              Breed
              </label>
              <input
                type="text"
                id="defaultFormRegisterConfirmEx"
                className="form-control"
                name="breed"
                onChange={this.handleChange}
                required
              />
              <br />

              <label
                className="grey-text"
              >
                Gender
              </label>
              <input
                type="text"
                id="defaultFormRegisterPasswordEx"
                className="form-control"
                name="gender"
                onChange={this.handleChange}
                required
              />
            <br />
              <label
                className="grey-text"
              >
              Preferred Home Environment
              </label>
              <input
                type="text"
                id="defaultFormRegisterConfirmEx"
                className="form-control"
                name="preferredHome"
                onChange={this.handleChange}
                required
              />
              <br />

              <div className="text-center mt-4">
                <MDBBtn color="unique" type="submit">
                  Register
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    );
  };
}

  export default AddAnimalForm;
