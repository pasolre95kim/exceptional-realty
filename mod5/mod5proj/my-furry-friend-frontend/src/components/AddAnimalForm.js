
import React, {Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

//Check how to add backgroun image!
// <img src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Cute-Baby-Animal-Background-Download-Free.jpg" />


// <img className="add" src="http://2.bp.blogspot.com/-EZPlNgf_oDM/Tp-31Pv8d8I/AAAAAAAAAhQ/N2FHNHIDj04/s1600/Cute-Dog-Wallpaper.jpg" />

class AddAnimalForm extends Component {
  render() {
    return (
    <div >
      <MDBContainer
        className="text-center"
        style={{width: "30%"}}>
        <MDBRow >
          <MDBCol>
            <form>
              <p className="h4 text-center mb-4">New Animal Form</p>
              <label name="name" className="grey-text">
                Name
              </label>
              <input
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                name="name"
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
                  name="Image"
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
                required
              />
              <div className="text-center mt-4">
                <MDBBtn color="unique" type="submit">
                  Register
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>


    </div>
    );
  };
}

  export default AddAnimalForm;
