import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import NewPostPage from './components/NewPost/NewPostPage';
import ViewPostPage from './components/ViewPost/ViewPostPage';
import Navigation from './components/Navigation/Navigation';
import FinlandInfo from './components/FinalndInfo/FinlandInfo';
import { connect } from 'react-redux';
import { addPost } from './store/actions/addPostAction';
import { deletePost } from './store/actions/deletePostAction';
import { activePostEdit } from './store/actions/activePostEditAction';
import { updatePost } from './store/actions/updatePostAction';
import { fetchInfoFromApi } from './store/actions/fetchInfoFromApiAction';

class App extends Component {
  // Fetch the post data from API
  componentDidMount() {
    this.props.onFetchInfoFromApi();
  }

  // Handle post Data from users
  handleSave = inputs => {
    this.props.onAddPost(inputs);
  };

  handleDelete = post => {
    this.props.onDeletePost(post);
  };

  handleActivePostEdit = post => {
    this.props.onActivePostEdit(post);
  };

  handleEditSubmit = (post, inputs) => {
    //console.log('editablePost', this.props.editablePost);
    let edittedPost = {
      id: post.id,
      title: inputs.title,
      category: inputs.category,
      body: inputs.body,
    };
    console.log(edittedPost);
    this.props.onUpdatePost(edittedPost);
  };

  componentDidUpdate() {
    console.log({
      posts: this.props.posts,
      title: this.props.title,
      category: this.props.category,
      body: this.props.body,
      length: this.props.posts.length,
      editable: this.props.editable,
    });
  }

  render() {
    const PostWithId = ({ match, history }) => {
      return (
        <ViewPostPage
          post={this.props.posts.find(post => {
            return post.id === parseInt(match.params.postId, 10);
          })}
          handleDelete={this.handleDelete}
          onActivePostEdit={this.handleActivePostEdit}
          editable={this.props.editable}
          handleEditSubmit={this.handleEditSubmit}
          handleEditChange={this.handleEditChange}
          history={history}
        />
      );
    };

    return (
      <div>
        {/* <Navigation /> */}
        <div>Hello</div>
        <div className="appWrapper">
          <div className="appMain">
            <Switch>
              <Route exact path="/" component={() => <HomePage posts={this.props.posts} />} />
              <Route
                exact
                path="/posts/newpost"
                render={props => (
                  <NewPostPage handleSave={this.handleSave} posts={this.props.posts} {...props} />
                )}
              />
              <Route
                exact
                path="/info"
                render={props => <FinlandInfo info={this.props.fetchedInfo} {...props} />}
              />
              <Route exact path="/posts/:postId" component={PostWithId} />
              {/* If there is no matching, redirect to home */}
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.updatedPosts.posts,
    title: state.newPostForm.title,
    category: state.newPostForm.category,
    body: state.newPostForm.body,
    editable: state.updatedPosts.editable,
    fetchedInfo: state.fetchedInfoFromApi,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: inputs => dispatch(addPost(inputs)),
    onDeletePost: post => dispatch(deletePost(post)),
    onActivePostEdit: post => dispatch(activePostEdit(post)),
    onUpdatePost: post => dispatch(updatePost(post)),
    onFetchInfoFromApi: () => dispatch(fetchInfoFromApi()),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
