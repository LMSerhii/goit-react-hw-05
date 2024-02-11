import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';
import { ErrorMessage } from './ErrorMessage';
import { getCreditsById } from '../js/helpers/api';
import { common } from '../js/helpers/common';
import css from './MovieCast.module.css';

export const MovieCast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);
  const [error, setError] = useState();
  const [loader, setLoader] = useState();
  const [maxItems, setMaxItems] = useState(3);

  useEffect(() => {
    if (!movieId) return;

    (async () => {
      try {
        setError(false);
        setLoader(true);
        const resp = await getCreditsById(movieId);
        setCredits(resp.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    })();
  }, [movieId]);

  const slicedArrey = arrey => {
    return arrey.slice(0, maxItems);
  };

  const handleClick = () => {
    setMaxItems(maxItems + 6);
  };

  return (
    <>
      {error && <ErrorMessage />}

      {credits?.length ? (
        <section className={css.cast}>
          <ul className={css.castList}>
            {slicedArrey(credits).map(
              ({ credit_id, profile_path, name, character }) => {
                return (
                  <li key={credit_id}>
                    <img
                      className={css.authorImg}
                      src={
                        profile_path
                          ? `${common.imageBaseUrl}w185${profile_path}`
                          : common.castDefaultImage
                      }
                      alt="poster"
                      width={250}
                    />
                    <p className={css.name}>{name}</p>
                    <p className={css.character}>{`(${character})`}</p>
                  </li>
                );
              }
            )}
          </ul>

          {maxItems <= credits.length && (
            <button className={css.moreBtn} type="button" onClick={handleClick}>
              ...
            </button>
          )}
        </section>
      ) : (
        <section className={css.cast}>
          <p>No information</p>
        </section>
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
    </>
  );
};
