import axios from 'axios';
import { FETCH_POSTS_FROM_API } from '../actions/actionTypes';

export const fetchPostsFromApi = () => {
  return async(dispatch) => {
    const url = 'https://api.hel.fi/linkedevents/v1/search/?type=event&q=sibelius';
    const response = await axios.get(url);
    dispatch({
      type : FETCH_POSTS_FROM_API,
      payload : response.data.data
    })
  }
}