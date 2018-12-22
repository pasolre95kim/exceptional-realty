
import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

//Check how to add backgroun image!
// <img src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Cute-Baby-Animal-Background-Download-Free.jpg" />

  const AddAnimalForm = () => {
    return (
    <div>
      <MDBContainer text-align="center">
        <MDBRow>
          <MDBCol md="8">
            <form>
              <p className="h4 text-center mb-4">New Animal Form</p>
              <label name="name" className="grey-text">
                Animal Name
              </label>
              <input
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
              />
              <br />
              <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                Your email
              </label>
              <input
                type="email"
                id="defaultFormRegisterEmailEx"
                className="form-control"
              />
              <br />
              <label
                htmlFor="defaultFormRegisterConfirmEx"
                className="grey-text"
              >
                Confirm your email
              </label>
              <input
                type="email"
                id="defaultFormRegisterConfirmEx"
                className="form-control"
              />
              <br />
              <label
                htmlFor="defaultFormRegisterPasswordEx"
                className="grey-text"
              >
                Your password
              </label>
              <input
                type="password"
                id="defaultFormRegisterPasswordEx"
                className="form-control"
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

  export default AddAnimalForm;
