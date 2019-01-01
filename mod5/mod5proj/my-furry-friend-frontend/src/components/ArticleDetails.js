import React, { Fragment } from 'react';
import { Header, Icon, Image, Container } from 'semantic-ui-react'

const ArticleDetails = ({article}) => {
    return article ? (
      <div>
      <Container text>
        <Header>
        {article.title}
        </Header>
        <h3>
        {article.abstract}
        </h3>
      <br />
        <p>
        {article.body}
        </p>
      </Container>

      </div>
    ) : null
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
