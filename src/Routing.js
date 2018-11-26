import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from './components/Home/HomePage';
import NewPostPage from './components/NewPost/NewPostPage';
import ViewPostPage from './components/ViewPost/ViewPostPage';

export const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/newPost/">New Post</Link>
          </li>
          <li>
            <Link to="/viewPost/">View Post</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/newPost" component={NewPostPage} />
        <Route path="/viewPost" component={ViewPostPage} />
        <Route component={() => <h1>The page was not found</h1>}/>
      </Switch>
    </div>
  </Router>
);