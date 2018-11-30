import React from "react";
import { Breadcrumb, BreadcrumbItem, Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";

const ViewPost = (props) => {
 console.log(props);
  const { post, handleDelete, history } = props;
  const onHandleDelete = (post) => {
    //Delete the post
    handleDelete(post);
    //Direct to the home page
    history.push('/');
}
  console.log(post);

  return (
    <div>
    <Jumbotron>
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
    </Jumbotron>
    </div>
  );
};

export default ViewPost;
