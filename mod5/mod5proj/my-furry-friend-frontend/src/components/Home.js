import React, { Component, Fragment } from 'react'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer} from "mdbreact";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {Redirect} from 'react-router-dom'

const Home = (props) => {

  return (
    <MDBContainer>
       <MDBCarousel
         activeItem={1}
         length={3}
         showControls={true}
         showIndicators={true}
         className="z-depth-1"
       >
         <MDBCarouselInner>
           <MDBCarouselItem itemId="1">
             <MDBView>
               <img
                 className="d-block w-100"
                 src="https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/03/Russian-Blue_01.jpg"
                 alt="First slide"
               />
               <MDBMask overlay="black-light" />
             </MDBView>
           </MDBCarouselItem>
           <MDBCarouselItem itemId="2">
             <MDBView>
               <img
                 className="d-block w-100"
                 src="https://i.ytimg.com/vi/bfN60awmfYk/maxresdefault.jpg"
                 alt="Second slide"
               />

             </MDBView>
           </MDBCarouselItem>
           <MDBCarouselItem itemId="3">
             <MDBView>
               <img
                 className="d-block w-100"
                 src="https://i2-prod.mirror.co.uk/incoming/article2106793.ece/ALTERNATES/s1200/Fluffy-White-dog.jpg"
                 alt="Third slide"
               />
               <MDBMask overlay="black-slight" />
             </MDBView>
           </MDBCarouselItem>
         </MDBCarouselInner>
       </MDBCarousel>
     </MDBContainer>
  )  
}
export default Home
