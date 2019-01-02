import React, { Fragment } from 'react';
import { Header, Icon, Image, Container, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const ArticleDetails = ({article}) => {

    return article ? (
      <div>
      <br />
      <Container text>

        <div class="ui huge header">
        {article.title}
        </div>

        <h4 style={{textAlign:"left"}}>
        {article.abstract}
        </h4>

      <br />

        <p style={{textAlign:"left"}}>
        {article.body}
        </p>

      </Container>
      <br />
      <br />

      <Button basic color="brown"
       as={Link} to="/allArticles">
       Back to Articles
       </Button>

       <br />
       <br />
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
