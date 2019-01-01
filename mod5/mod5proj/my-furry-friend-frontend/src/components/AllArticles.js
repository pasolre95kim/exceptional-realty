import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {Icon} from 'semantic-ui-react'
import Articles from './Articles'


const AllArticles = (props) => {

  return props.user? (
    <div>
    <h2 style={{textAlign:"center"}}>
    <Icon name="paw" />
    Available Resources
    </h2>
      <br />
      <div>
      {props.allArticles.map(article => <Articles
        article={article}
        user={props.user}
        key= {article.id}/> )}
      </div>
      </div>
  ) : <Redirect to="/login" />
}

export default AllArticles
