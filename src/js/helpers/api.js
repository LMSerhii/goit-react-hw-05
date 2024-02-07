import axios from 'axios';
import { API_TOKEN } from '../secure';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const headers = {
  Authorization: `Bearer ${API_TOKEN}`,
  accept: 'application/json',
};

export const getData = async page => {
  const options = {
    method: 'GET',
    headers,
    url: `trending/movie/day`,
    params: { page, language: 'en-US' },
  };

  const response = await axios(options);

  return response.data;
};

export const getDataById = async movieId => {
  const options = {
    method: 'GET',
    headers,
    url: `/movie/${movieId}`,
    params: { language: 'en-US' },
  };

  const response = await axios(options);

  return response.data;
};
