import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link, withRouter } from "react-router-dom";

const ViewPost = (props) => {

  const { post, handleDelete } = props;
  const onHandleDelete = (post) => {
    //Delete the post
    handleDelete(post);
    //Direct to the home page
    props.history.push('/');
}
  console.log(post);

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{post.title}</BreadcrumbItem>
        </Breadcrumb>
        <div className="jumbotron col-12">
          <div>
            <div>Title: {post.title}</div>
            <button onClick={() => onHandleDelete(post)}>Delete</button>
          </div>
          <div>Category: {post.category}</div>
          <div>{post.body}</div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ViewPost);
