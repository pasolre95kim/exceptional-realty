import React, { Component} from 'react'
import {Header, Image, Segment, Button, Icon, Container } from 'semantic-ui-react'
import {Link, Redirect} from 'react-router-dom'


const Articles = (props) => {
  console.log("articles", props)

  return props.user ? (
  <Container text>
   <Header as='h2' >
     {props.article.title}
   </Header>
      <br />
      <p>{props.article.body}</p>
    </Container>
  ) : <Redirect to="/login" />
}

export default Articles



// line 201 App
// user={this.state.currentUser}
// allArticles={this.state.allArticles}
