import React from "react";
import { Breadcrumb, BreadcrumbItem, Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";
import Editable from "../Editable/Editable";


const ViewPost = ({ post, handleDelete, history, onActivePostEdit, editable, handleEditSubmit }) => {

  const onHandleDelete = post => {
    //Delete the post
    handleDelete(post);
    //Direct to the home page
    history.push("/");
  };

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
            <Editable editable={editable} post={post} onActivePostEdit={onActivePostEdit} handleEditSubmit={handleEditSubmit}/>
            {/* Delete button */}
            <button onClick={() => onHandleDelete(post)}>Delete</button>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};

export default ViewPost;
