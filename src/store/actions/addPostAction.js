import { ADD_POST } from "../actions/actionTypes";

export const addPost = (post) => {
  return {
    type: ADD_POST,
    payload : post
  };
};
