import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import NewPostPage from "./components/NewPost/NewPostPage";
import ViewPostPage from "./components/ViewPost/ViewPostPage";
import Navigation from "./components/Navigation/Navigation";
import { connect } from "react-redux";
import { actions } from 'react-redux-form';
import { addPost } from './store/actions/addPostAction';

class App extends Component {

  handleSave = (inputs) => {
    this.props.onAddPost(inputs);
  };

  handleDelete = (item) => {
    const newPostList = this.props.posts.filter(i => i.id !== item.id) 
    this.setState({
      posts : newPostList
    })
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
    console.log(this.props);
    const PostWithId = ({ match, history }) => {
      console.log("see postId", match.params.id);
      return (
        <ViewPostPage
          post={
            this.props.posts.find(
              post => { return post.id === parseInt(match.params.postId, 10) }
            )
          }
          handleDelete={this.handleDelete}
          history={history}/>
      );
    };
 
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
    posts : state.addedPosts.posts,
    id: state.newPostForm.id,
    title: state.newPostForm.title,
    category: state.newPostForm.category,
    body: state.newPostForm.body
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost : (inputs) => dispatch(addPost(inputs))
  }
}


export default withRouter(connect( mapStateToProps, mapDispatchToProps )(App));
