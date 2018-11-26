import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

const Index = () => <h2>Home</h2>;
const newPost = () => <h2>Write Post</h2>;
const viewPost = () => <h2>Detail Post</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/newPost/">new Post</Link>
          </li>
          <li>
            <Link to="/viewPost/">View Post</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/newPost" component={newPost} />
        <Route path="/viewPost" component={viewPost} />
        <Route component={() => <h1>The page was not found</h1>}/>
      </Switch>
    </div>
  </Router>
);

class App extends Component {
  render() {
    return (
      <div>
        <AppRouter />
      </div>
    );
  }
}

export default App;
