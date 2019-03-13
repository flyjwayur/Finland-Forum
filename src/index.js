import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { ConfigureStore } from './store/configureStore';

const store = ConfigureStore();

const app = (
  <Provider store={store}>
    <Router basename="/Finland-Forum">
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
