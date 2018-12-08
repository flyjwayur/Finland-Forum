import React from "react";
import { Breadcrumb, BreadcrumbItem, Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";
import Editable from "../Editable/Editable";
import classes from './viewPostPage.module.css';

const ViewPost = ({
  post,
  handleDelete,
  history,
  onActivePostEdit,
  editable,
  handleEditSubmit
}) => {
  const onHandleDelete = post => {
    //Delete the post
    handleDelete(post);
    //Direct to the home page
    history.push("/");
  };

  return (
    <div className={classes.post_wrapper}>
      <div>
        <Breadcrumb className="row">
          <BreadcrumbItem>
            <Link  className="text-info" to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{post.title}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Jumbotron className={classes.jumbotron_hightlight}>
        <Editable
          editable={editable}
          post={post}
          onActivePostEdit={onActivePostEdit}
          handleEditSubmit={handleEditSubmit}
        />
        {/* Delete button */}
        <button className={classes.delete_button}onClick={() => onHandleDelete(post)}>Delete</button>
      </Jumbotron>
    </div>
  );
};

export default ViewPost;
