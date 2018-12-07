import { UPDATE_POST } from './actionTypes';

export const updatePost = (post) => {
  return {
    type : UPDATE_POST,
    payload : post,
  }
}