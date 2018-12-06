import React from "react";
import { Breadcrumb, BreadcrumbItem, Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";
import Editable from "../Editable/Editable";

const ViewPost = props => {
  const { post, handleDelete, history, onActivePostEdit, editable } = props;
  const onHandleDelete = post => {
    //Delete the post
    handleDelete(post);
    //Direct to the home page
    history.push("/");
  };

  const editOrUpdateBtnToggle = editable ? (
    <button onClick={() => onActivePostEdit(post)}>Update</button>
  ) : (
    <button onClick={() => onActivePostEdit(post)}>Edit</button>
  );

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
            <Editable editable={editable} post={post}/>
            <button onClick={() => onHandleDelete(post)}>Delete</button>
            {editOrUpdateBtnToggle}
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};

export default ViewPost;
