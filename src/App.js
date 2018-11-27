import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import NewPostPage from "./components/NewPost/NewPostPage";
import ViewPostPage from "./components/ViewPost/ViewPostPage";
import Navigation from "./components/Navigation/Navigation";

class App extends Component {

  render() {
    return (
        <div>
          <Navigation/>
          <Switch>
            <Route path="/" exact component={HomePage} />
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
