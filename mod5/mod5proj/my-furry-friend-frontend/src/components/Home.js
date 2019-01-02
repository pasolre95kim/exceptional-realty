import React, { Component, Fragment } from 'react'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer} from "mdbreact";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {Redirect} from 'react-router-dom'

const Home = (props) => {

  return (
    <div>
      <br />
      <br />
      <br />
    <MDBContainer>
       <MDBCarousel
         activeItem={1}
         length={4}
         showControls={true}
         showIndicators={true}
         className="z-depth-1">

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
           </MDBView>
         </MDBCarouselItem>

             <MDBCarouselItem itemId="4">
               <MDBView>
                 <img
                   style={{height:"30%"}}
                   className="d-block w-100"
                   src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Cute-Baby-Animal-Background-Free-Download.jpg"
                   alt="Fourth slide"/>
               </MDBView>
             </MDBCarouselItem>

         </MDBCarouselInner>
       </MDBCarousel>
     </MDBContainer>

  <blockquote className="blockquote bq-success">
  <p className="bq-title">Success notification</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quibusdam dignissimos itaque harum illo!
    Quidem, corporis at quae tempore nisi impedit cupiditate perferendis nesciunt, ex dolores doloremque!
    Sit, rem, in?
  </p>
</blockquote>
</div>



  )
}
export default Home
