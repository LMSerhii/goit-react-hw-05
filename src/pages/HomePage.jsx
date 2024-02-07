import { useEffect } from 'react';
import { MovieList } from '../components/MovieList';
import { useState } from 'react';
import { getData } from '../js/helpers/api';
import { LoadMoreBtn } from '../components/LoadMore';
import { ErrorMessage } from '../components/ErrorMessage';
import { Bars } from 'react-loader-spinner';

export const HomePage = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        setError(false);
        const response = await getData(page);
        console.log(response.results);
        setTotalPages(response.total_pages);
        setMovieList(response.results);
        // setMovieList(prev => [...prev, ...response.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    })();
  }, [page]);

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <main>
      <h1>Trending movie today</h1>
      {error && <ErrorMessage />}

      {movieList.length > 0 && <MovieList movieList={movieList} />}

      {loader && (
        <Bars
          height="80"
          width="80"
          color="#747bff"
          ariaLabel="bars-loading"
          wrapperClass="loader"
          visible={true}
        />
      )}

      {movieList.length > 0 && !loader && page < totalPages && (
        <LoadMoreBtn onClick={handleClick} />
      )}
    </main>
  );
};
