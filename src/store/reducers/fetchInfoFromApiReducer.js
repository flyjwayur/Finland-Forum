import { FETCH_INFO_FROM_API } from '../actions/actionTypes';


export const fetchInfoFromApiReducer = (state = [], action) => {
   if(action.type === FETCH_INFO_FROM_API){
    return action.payload;
   }
   return state;
}
