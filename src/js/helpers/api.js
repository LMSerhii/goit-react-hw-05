import axios from 'axios';
import { API_TOKEN } from '../secure';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getData = async (url, params) => {
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      accept: 'application/json',
    },
    params,
  };

  const response = await axios(url, options);

  return response.data;
};
