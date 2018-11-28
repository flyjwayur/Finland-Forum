import React from "react";
import Button from "../UI/Button/Button";
import { Link, withRouter } from 'react-router-dom';


const NewPost = (props) => {
  let { title, category, body, handleInputs, handleSave } = props;

  const onhandleSubmit = (e) => {
      e.preventDefault();
      //Save the inputs
      handleSave();
      //Direct to the home page
      props.history.push('/');
  }


  return (
    <div className="jumbotron">
      <form onSubmit={onhandleSubmit}>
      <div>
      <label htmlFor="title">Title:</label>
      </div>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleInputs}
            placeholder="ex) My day"
            required/>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            name="category"
            id="category"
            value={category}
            onChange={handleInputs}
            placeholder="ex) work"
            required
          />
        </div>
        <div>
          <label htmlFor="body">Write New Post:</label>
          <textarea
            id="body"
            rows="10"
            cols="60"
            name="body"
            value={body}
            onChange={handleInputs}
            placeholder="ex) I was happy to do something"
            required
          />
        </div>
        <Button type="submit" 
        >Save</Button>
        <Link to="/"><Button type="cancel">Cancel</Button></Link>
      </form>
    </div>
  );
};

export default withRouter(NewPost);
