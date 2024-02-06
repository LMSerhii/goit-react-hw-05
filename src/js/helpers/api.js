import axios from 'axios';
import { API_TOKEN } from '../secure';

const headers = {
  Authorization: `Bearer ${API_TOKEN}`,
  accept: 'application/json',
};

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getConfiguration = async () => {
  const options = {
    method: 'GET',
    headers,
  };

  const response = await axios('/configuration', options);

  return response.data;
};

export const getTrendingMovies = async (page = 1) => {
  const options = {
    method: 'GET',
    params: {
      language: 'en-US',
      page,
    },

    headers,
  };

  const response = await axios('/trending/movie/day', options);

  return response.data;
};

export const getMovieBySearch = async params => {
  const options = {
    method: 'GET',
    headers,
    params,
  };

  const response = await axios('/search/movie', options);

  return response;
};

export const getMovieById = async id => {
  const options = {
    method: 'GET',
    headers,
    params: {
      language: 'en-US',
    },
  };

  const response = await axios(`/movie/${id}`, options);

  return response;
};
