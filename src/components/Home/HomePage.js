import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import './homePage.css';

const HomePage = ({ posts }) => {
  const RenderPosts = ({ post }) => {
    return (
      <Card key={post.id}>
        <Link to={`/posts/${post.id}`} style={{ textDecoration: 'none' }}>
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
        <Row>
          <Col xs="auto" tag="h3">
            Hello, HyeSoo : D ,
          </Col>
        </Row>
        <Row>
          <Col xs="auto" tag="h3">
            How is <span className="highlightText"> ' your day in Finland '</span>?
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/posts/newpost">
              <FontAwesomeIcon icon={faPlusCircle} className="addPost" />
            </Link>
          </Col>
        </Row>
        {/* <div className="col-12">
          <h4 className="introFont introTextLeft"></h4>
          <h4 className="introFont introTextRight"></h4> */}
        {/* </div> */}
      </Container>
      <Row>
        <Col xs="12" sm="12">
          <ul className="postsWrapper">{diplayPosts}</ul>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
