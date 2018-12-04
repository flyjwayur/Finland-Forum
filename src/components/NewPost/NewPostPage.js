import React from "react";
import { Link } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';
import { Row, Button } from 'reactstrap';


const NewPost = (props) => {
  let { handleSave, posts } = props;
  const onhandleSubmit = ({title, category, body}) => {
     const id = posts.length +1 ;
     const post = { id : id, title, category, body }
      //Save the inputs
      handleSave(post);
      //Direct to the home page
      props.history.push('/');
  }


  return (
    <div className="jumbotron">
      <LocalForm model="inputs" onSubmit={(inputs) => onhandleSubmit(inputs)}>
      <Row className="form-group">
      <label htmlFor="title">Title:</label>
          <Control.text
            model="inputs.title"
            id="title"
            name="title"
            placeholder="ex) My day"
            className="form-control"
            required/>
        </Row>
        <Row className="form-group">
          <label htmlFor="category">Category:</label>
          <Control.text
            model="inputs.category"
            name="category"
            id="category"
            placeholder="ex) work"
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
            placeholder="ex) I was happy to do something"
            className="form-control"
            required
          />
        </Row>
        <Row className="form-group">
        <Button type="submit" 
        >Save</Button>
        <Link to="/"><Button type="cancel">Cancel</Button></Link>
        </Row>
      </LocalForm>
    </div>
  );
};

export default NewPost;
