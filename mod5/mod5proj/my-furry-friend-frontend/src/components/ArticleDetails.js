import React, { Component, Fragment } from 'react';
import { Header, Icon, Image } from 'semantic-ui-react'

  const ArticleDetails = (props) => {
    return(
      <div>
        <Header>{this.props.article.title}</Header>
      </div>
    )
  }

export default ArticleDetails




//
//
// const Painting = ({painting}) => {
//   return(
//     <div className="ui card">
//       <div>
//         <img src={painting.image} alt={painting.title}/>
//         <div>
//           {painting.title}
//         </div>
//       </div>
//       <Link to={`/paintings/${painting.id}`}>
//         <button data-painting-id={painting.id}>More Info</button>
//       </Link>
//     </div>
//   )
// }
