import React from "react";
import { LocalForm, Control } from "react-redux-form";
import { Row } from "reactstrap";

export default ({ editable, post, onActivePostEdit, handleEditSubmit }) => {

  // Edit or Update button 
  const editOrUpdateBtnToggle = editable ? (
    <button onClick={() => onActivePostEdit(post)}>Update</button>
  ) : (
    <button onClick={() => onActivePostEdit(post)}>Edit</button>
  );

  console.log(editable);
  if (editable) {
    return <Edit post={post} handleEditSubmit={handleEditSubmit} editable={editable}onActivePostEdit={onActivePostEdit} editOrUpdateBtnToggle={editOrUpdateBtnToggle} />;
  }
  return (
    <div>
      <div>Title: {post.title}</div>
      <div>Category: {post.category}</div>
      <div>{post.body}</div>
      {editOrUpdateBtnToggle}
    </div>
  );
};

const Edit = ({ post, handleEditSubmit, editOrUpdateBtnToggle}) => {
   
  return (
      <LocalForm model="inputs" onSubmit={(inputs) => handleEditSubmit(post, inputs)}>
      <Row className="form-group">
        <label htmlFor="title">Title:</label>
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
        <label htmlFor="category">Category:</label>
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
        <label htmlFor="body">Write New Post:</label>
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

