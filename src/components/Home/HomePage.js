import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import { Link } from "react-router-dom";

const HomePage = ({ posts }) => {
  const RenderPosts = ({ post }) => {
    return (
      <Card key={post.id}>
        <Link to={`/posts/${post.id}`}>
          <CardBody>
            <CardTitle>{post.title}</CardTitle>
            <CardSubtitle>{post.category}</CardSubtitle>
          </CardBody>
        </Link>
      </Card>
    );
  };

  const diplayPosts = posts.map(post => {
    return (
      <div key={post.id} className="col-12 col-md-5">
        <RenderPosts post={post} />
      </div>
    );
  });

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h3>Hello, HyeSoo :D How is your day?</h3>
          <hr />
        </div>
      </div>
      <ul>{diplayPosts}</ul>
    </div>
  );
};

export default HomePage;
