import { DELETE_POST } from './actionTypes';

export const deletePost = (post) => {
  return {
    type : DELETE_POST,
    payload : post
  }
}
