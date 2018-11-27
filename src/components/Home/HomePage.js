import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const HomePage = ({posts}) => {
  console.log(posts);
 
  const renderCard = post => {
    return (
      <Card key={post.id}>
        <CardBody>
          <CardTitle>{post.title}</CardTitle>
          <CardSubtitle>{post.category}</CardSubtitle>
        </CardBody>
      </Card>
    )
  }
  return (
    <div>
      <h2>Home</h2>
      <ul>
      {posts.map(post => renderCard(post))}
      </ul>
    </div>
  )
}

export default HomePage
