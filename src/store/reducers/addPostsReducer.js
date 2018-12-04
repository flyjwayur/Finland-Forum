import { ADD_POST } from "../actions/actionTypes";
import { posts } from "../../data/posts";

export const initialPostState = { posts };

export const addPostsReducer = (state = initialPostState, action) => {
  if (action.type === ADD_POST) {
    return { ...state, posts: [...state.posts, action.payload] };
    // works same as above code - immutably adding the post to posts
    // return Object.assign({}, state, {posts: [...state.posts, action.payload]})
  }
  return state;
};
