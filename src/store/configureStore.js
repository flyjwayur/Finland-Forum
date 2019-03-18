import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { postsReducer } from './reducers/postsReducer';
import { createForms } from 'react-redux-form';
import { fetchInfoFromApiReducer } from './reducers/fetchInfoFromApiReducer';
import thunk from 'redux-thunk';

const initialFormState = {
  title: '',
  category: '',
  body: '',
};

const composeEnhancers =
  process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const allReducers = combineReducers({
  updatedPosts: postsReducer,
  fetchedInfoFromApi: fetchInfoFromApiReducer,
  ...createForms({
    newPostForm: initialFormState,
  }),
});

export const ConfigureStore = () => {
  const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)));
  return store;
};
