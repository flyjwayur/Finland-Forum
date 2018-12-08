import { FETCH_POSTS_FROM_API } from '../actions/actionTypes';


export const fetchPostsFromApiReducer = (state = [], action) => {
   if(action.type === FETCH_POSTS_FROM_API){
    return action.payload;
   }
   return state;
}
