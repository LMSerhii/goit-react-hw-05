import style from './App.module.css';
import { getTrendingMovies, getConfiguration } from '../js/helpers/api';
import { useEffect, useState } from 'react';

export const App = () => {
  const [baseUrl, setBaseUrl] = useState();

  useEffect(() => {
    const getConfig = async () => {
      const response = await getConfiguration();
      setBaseUrl(response.images.base_url);
    };

    getConfig();

    return () => {
      console.log('Component unmounted');
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTrendingMovies();
      console.log(response);
    };

    fetchData();
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  return (
    <div className={style.container}>
      <h1>Film search</h1>
      <p>{baseUrl}</p>
    </div>
  );
};
