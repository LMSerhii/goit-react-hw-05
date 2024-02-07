import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getDataById } from '../js/helpers/api';
import { useEffect, useState } from 'react';
import { Bars } from 'react-loader-spinner';

import { BackLink } from '../components/BackLink';
import { ErrorMessage } from '../components/ErrorMessage';

import { common } from '../js/helpers/common';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();

  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState();
  const [loader, setLoader] = useState();

  useEffect(() => {
    (async () => {
      try {
        setError(false);
        setLoader(true);
        const resp = await getDataById(movieId);
        setMovieDetails(resp);
        console.log(resp);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    })();
  }, [movieId]);

  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <main>
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      {error && <ErrorMessage />}

      {movieDetails && (
        <div>
          <img
            src={common.imageBaseUrl + movieDetails.poster_path}
            alt={movieDetails.original_title}
            width={500}
          />
          <div>
            <h1>{movieDetails.original_title}</h1>
            <p>{movieDetails.overview}</p>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      )}

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
    </main>
  );
}
