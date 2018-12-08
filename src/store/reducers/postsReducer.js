import {
  ADD_POST,
  DELETE_POST,
  ACTIVE_POST_EDIT,
  UPDATE_POST
} from "../actions/actionTypes";
import { posts } from "../../data/posts";

export const initialPostState = { posts, editable: false};

export const postsReducer = (state = initialPostState, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    // works same as above code - immutably adding the post to posts
    // return Object.assign({}, state, {posts: [...state.posts, action.payload]})
    case DELETE_POST:
      //There are three ways to make delete functions
      // 1) First, update the exisitng post array with the array which dosen't include the deleted post
      const postId = action.payload.id;
      //const postsAfterDelete = state.posts.filter(post => post.id !== postId);
      //return { ...state, posts: postsAfterDelete };
      //2) Second, concat the two arrays which exclude the deleted post, using index of deleted post and slice(copy) of them
      //- with indexOf or findIndex
      //const indexOfpost = state.posts.indexOf(action.payload);
      const indexOfpost = state.posts.findIndex(post => post.id === postId);
      return {
        ...state,
        posts: [
          ...state.posts.slice(0, indexOfpost),
          ...state.posts.slice(indexOfpost + 1, state.posts.length)
        ]
      };
    case ACTIVE_POST_EDIT:
      const editabelPostId = action.payload.id;
      state.posts.map( post => {
        if (post.id === editabelPostId) {
          state.editable = true;
        }
      });
      return { ...state, editable: state.editable };
    case UPDATE_POST:
    const indexOfEdittedPost = state.posts.findIndex(post => post.id === action.payload.id); 
    const editablePost = [...state.posts][indexOfEdittedPost] = action.payload;
      return {
        ...state,
        editable: false,
          posts: [
            ...state.posts.slice(0, indexOfEdittedPost),
            editablePost,
            ...state.posts.slice(indexOfEdittedPost + 1, state.posts.length)
          ]
        };
    default:
      return state;
  };
};
