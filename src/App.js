import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import NewPostPage from "./components/NewPost/NewPostPage";
import ViewPostPage from "./components/ViewPost/ViewPostPage";
import Navigation from "./components/Navigation/Navigation";
import {posts} from './data/posts'

class App extends Component {

  state = {
    posts
  }

  render() {
    console.log(this.state.posts);
    return (
        <div>
          <Navigation/>
          <Switch>
            <Route path="/" exact component={() => <HomePage posts={this.state.posts} />} />
            <Route path="/newPost" component={NewPostPage}/>
            <Route path="/viewPost" component={ViewPostPage} />
            {/* If there is no matching, redirect to home */}
            <Redirect to="/" />
          </Switch>
        </div>
    );
  }
}

export default App;
