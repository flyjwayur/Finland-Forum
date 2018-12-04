import { createStore, combineReducers, compose, applyMiddleware } from  'redux';
import { addPostsReducer } from './reducers/addPostsReducer';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';

const initialFormState = {
  title: "",
  category: "",
  body: ""
}

const AllEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
)

const allReducers = combineReducers({
  addedPosts : addPostsReducer,
  ...createForms({
    newPostForm : initialFormState
  })  
});

export const ConfigureStore = () => {
  const store = createStore(allReducers, AllEnhancers);
  return store;
}