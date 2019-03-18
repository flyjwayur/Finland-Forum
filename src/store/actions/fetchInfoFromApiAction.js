import axios from 'axios';
import { FETCH_INFO_FROM_API } from './actionTypes';

export const fetchInfoFromApi = () => {
  return async dispatch => {
    const url = 'https://api.hel.fi/linkedevents/v1/event/';

    try {
      const response = await axios.get(url);
      dispatch({
        type: FETCH_INFO_FROM_API,
        payload: response.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
