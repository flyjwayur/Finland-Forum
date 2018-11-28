import React from 'react';
import Button from '../UI/Button/Button';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';


const ViewPost = props => {
  return (
    <div className="container">
      <Button>Delete the Post</Button>
      <div className="row">
      <Breadcrumb>
          <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>  
          <BreadcrumbItem active>{props.post.title}</BreadcrumbItem>
        </Breadcrumb>
        <div className="jumbotron col-12">
          <div>Title: {props.post.title}</div>
          <div>Category: {props.post.category}</div>
          <div>{props.post.body}</div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(ViewPost);
