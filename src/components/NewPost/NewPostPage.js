import React from "react";
import { Link } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';
import { Row, Jumbotron } from 'reactstrap';
import editClasses from '../Editable/editable.module.css';
import viewClasses from '../ViewPost/viewPostPage.module.css'

const NewPost = (props) => {
  let { handleSave, posts } = props;
  const onhandleSubmit = ({title, category, body}) => {
     const id = posts.length +1 ;
     const post = { id : id, title, category, body }
      //Save the inputs
      handleSave(post);
      //// both history.push and goBack works to direct to 'Home'
      props.history.push('/');
      //props.history.goBack();
  }


  return (
    <div className={viewClasses.post_wrapper}>
    <Jumbotron className={viewClasses.jumbotron_hightlight}>
      <LocalForm model="inputs" onSubmit={(inputs) => onhandleSubmit(inputs)}>
      <Row className="form-group">
      <label htmlFor="title"><span className={editClasses.content_title}>Title :</span></label>
          <Control.text
            model="inputs.title"
            id="title"
            name="title"
            placeholder="ex) My day"
            className="form-control"
            required/>
        </Row>
        <Row className="form-group">
          <label htmlFor="category"><span className={editClasses.content_title}>Category :</span></label>
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
          <label htmlFor="body"><span className={editClasses.content_title}>Write New Post:</span></label>
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
       <button type="submit" className={editClasses.edit_button}
        >Save</button>
        <Link to="/"><button type="cancel" className={viewClasses.delete_button}>Cancel</button></Link>
      </LocalForm>
    </Jumbotron>
    </div>
  );
};

export default NewPost;
