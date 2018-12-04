import { createStore, combineReducers, compose, applyMiddleware } from  'redux';
import { addDeletePostsReducer } from './reducers/addDeletePostsReducer';
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
  addedDeletedPosts : addDeletePostsReducer,
  ...createForms({
    newPostForm : initialFormState
  })  
});

export const ConfigureStore = () => {
  const store = createStore(allReducers, AllEnhancers);
  return store;
}