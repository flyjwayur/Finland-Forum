import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import NewPostPage from "./components/NewPost/NewPostPage";
import ViewPostPage from "./components/ViewPost/ViewPostPage";
import Navigation from "./components/Navigation/Navigation";
import { connect } from "react-redux";
import { addPost } from './store/actions/addPostAction';
import { deletePost } from './store/actions/deletePostAction';
import { activePostEdit } from './store/actions/activePostEditAction';
import { updatePost } from './store/actions/updatePostAction';

class App extends Component {

  handleSave = (inputs) => {
    this.props.onAddPost(inputs);
  };

  handleDelete = (post) => {
    this.props.onDeletePost(post);
  }

  handleActivePostEdit = (post) => {
    console.log('from edit click');
    this.props.onActivePostEdit(post);
  }

  componentDidUpdate() {
    console.log({
      posts: this.props.posts,
      id: this.props.posts.id,
      title: this.props.title,
      category: this.props.category,
      body: this.props.body,
      length: this.props.posts.length
    });
  }

  render() {
    const PostWithId = ({ match, history }) => {
      return (
        <ViewPostPage
          post={
            this.props.posts.find(
              post => { return post.id === parseInt(match.params.postId, 10) }
            )
          }
          handleDelete={this.handleDelete}
          onActivePostEdit={this.handleActivePostEdit}
          editable={this.props.editable}
          history={history}/>
      );
    };
    console.log("test",this.props.posts);
    return (
      <div>
        <Navigation />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <HomePage posts={this.props.posts}/>}
          />
          <Route
            exact
            path="/posts/newpost"
            render={(props) => (
              <NewPostPage
                handleSave={this.handleSave}
                posts={this.props.posts}
                {...props}
              />
            )}
          />
          <Route exact path="/posts/:postId" component={PostWithId} />
          {/* If there is no matching, redirect to home */}
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts : state.updatedPosts.posts,
    id: state.newPostForm.id,
    title: state.newPostForm.title,
    category: state.newPostForm.category,
    body: state.newPostForm.body,
    editable : state.updatedPosts.editable
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost : (inputs) => dispatch(addPost(inputs)),
    onDeletePost : (post) => dispatch(deletePost(post)),
    onActivePostEdit : (post) => dispatch(activePostEdit(post)),
    onUpdatePost : (post) => dispatch(updatePost(post))
  }
}


export default withRouter(connect( mapStateToProps, mapDispatchToProps )(App));
