import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Card, CardBody, CardTitle, CardSubtitle, Container } from "reactstrap";
import { Link } from "react-router-dom";
import "./homePage.css";

const HomePage = ({ posts }) => {
  const RenderPosts = ({ post }) => {
    return (
      <Card key={post.id}>
        <Link to={`/posts/${post.id}`} style={{ textDecoration: "none" }}>
          <CardBody className="cardBody">
            <CardTitle className="cardText">{post.title}</CardTitle>
            <CardSubtitle className="cardText">{post.category}</CardSubtitle>
          </CardBody>
        </Link>
      </Card>
    );
  };

  const diplayPosts = posts.map(post => {
    return (
      <div key={post.id} className="container col-12 col-md-5">
        <RenderPosts post={post} />
      </div>
    );
  });

  return (
    <div className="wrapper">
      <Container fluid>
        <div className="col-12">
          <h4 className="introFont introTextLeft">Hello, HyeSoo : D ,</h4>
          <h4 className="introFont introTextRight">
            How is <span className="highlightText"> ' your day '</span>?
          </h4>
          <Link to="/posts/newpost">
            <FontAwesomeIcon icon={faPlusCircle} className="addPost" />
          </Link>
        </div>
      </Container>
      <ul className="postsWrapper">{diplayPosts}</ul>
    </div>
  );
};

export default HomePage;
