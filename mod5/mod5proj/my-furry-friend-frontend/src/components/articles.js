import React, {Component, Fragment} from 'react'
import {Header, Image, Segment, Button, Icon, Container } from 'semantic-ui-react'
import {Link, Redirect} from 'react-router-dom'


const Articles = (props) => {

  return props.user ? (
  <div>
    <br />
    <Container text>
     <Header as='h2'attached='top' >
       {props.article.title}
     </Header>
       <Segment attached>
         {props.article.abstract}
         <br />
         <Link to={`/articles/${props.article.id}`}
           article={props.article.id}
           style={{color:"#FA8072"}}>
           <Icon name="heart" />
           Read More
         </Link>
       </Segment>
     </Container>

     <br />
     <br />

    </div>
  ) : <Redirect to="/login" />
}

export default Articles



// line 201 App
// user={this.state.currentUser}
// allArticles={this.state.allArticles}
