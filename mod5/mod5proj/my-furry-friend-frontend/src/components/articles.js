import React, { Component, Fragment } from 'react'
import {Redirect} from 'react-router-dom'


const Articles = (props) => {
  let {user} = props
  return user ? (
    <div>
    These are the articles
    </div>
  ) : <Redirect to="/login" />
}

export default Articles
