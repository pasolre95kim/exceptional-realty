import React, {Component} from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,  MDBModalFooter, MDBIcon, MDBCardHeader, MDBBtn } from "mdbreact";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const SignUpForm = () => {
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
              <input
                type="text"
                id="defaultFormEmailEx"
                className="form-control"
              />

              <label
                htmlFor="defaultFormPasswordEx"
                className="grey-text font-weight-light"
              >
                Your password
              </label>
              <input
                type="password"
                id="defaultFormPasswordEx"
                className="form-control"
              />

              <label
                htmlFor="defaultFormPasswordEx"
                className="grey-text font-weight-light"
              >
                Your email
              </label>
              <input
                type="email"
                id="defaultFormEmail"
                className="form-control"
              />

              <div className="text-center mt-4">
                <MDBBtn color="deep-orange" className="mb-3" type="submit">
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

export default SignUpForm;
