import React, { Fragment } from "react";
import { LocalForm, Control } from "react-redux-form";
import { Row } from "reactstrap";
import classes from './editable.module.css';

export default ({ editable, post, onActivePostEdit, handleEditSubmit }) => {

  // Edit or Update button 
  const editOrUpdateBtnToggle = editable ? (
    <button className={classes.edit_button} onClick={() => onActivePostEdit(post)}>Update</button>
  ) : (
    <button className={classes.edit_button} onClick={() => onActivePostEdit(post)}>Edit</button>
  );

  console.log(editable);
  if (editable) {
    return <Edit post={post} handleEditSubmit={handleEditSubmit} editable={editable}onActivePostEdit={onActivePostEdit} editOrUpdateBtnToggle={editOrUpdateBtnToggle} />;
  }
  return (
    <Fragment>
      <div className={classes.content_row}> <span className={classes.content_title}>Title :</span> {post.title}</div>
      <div className={classes.content_row}> <span className={classes.content_title}>Category :</span> {post.category}</div>
      <div className={[classes.content_row, classes.content_body].join(' ')}>{post.body}</div>
      {editOrUpdateBtnToggle}
    </Fragment>
  );
};

const Edit = ({ post, handleEditSubmit, editOrUpdateBtnToggle}) => {
   
  return (
      <LocalForm model="inputs" onSubmit={(inputs) => handleEditSubmit(post, inputs)}>
      <Row className="form-group">
        <label htmlFor="title"><span className={classes.content_title}>Title :</span></label>
        <Control.text
          model="inputs.title"
          id="title"
          name="title"
          placeholder={post.title}
          defaultValue={post.title}
          className="form-control"
          required
        />
      </Row>
      <Row className="form-group">
        <label htmlFor="category"><span className={classes.content_title}>Category :</span> </label>
        <Control.text
          model="inputs.category"
          name="category"
          id="category"
          placeholder={post.category}
          defaultValue={post.category}
          className="form-control"
          required
        />
      </Row>
      <Row className="form-group">
        <label htmlFor="body"><span className={classes.content_title}>Write New Post :</span></label>
        <Control.textarea
          model="inputs.body"
          id="body"
          rows="10"
          cols="60"
          name="body"
          placeholder={post.body}
          defaultValue={post.body}
          className="form-control"
          required
        />
      </Row>
      {editOrUpdateBtnToggle}
      </LocalForm>
  );
};
