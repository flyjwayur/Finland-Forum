import { ACTIVE_POST_EDIT} from './actionTypes';

export const activePostEdit = (post) => {
  return {
    type : ACTIVE_POST_EDIT,
    payload : post
  }
}
