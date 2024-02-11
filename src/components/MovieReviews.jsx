import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';
import css from './MovieReviews.module.css';
import { getReviewsById } from '../js/helpers/api';
import { ErrorMessage } from './ErrorMessage';
import { common } from '../js/helpers/common';

export const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState();
  const [loader, setLoader] = useState();
  const [maxItems, setMaxItems] = useState(1);

  useEffect(() => {
    if (!movieId) return;

    (async () => {
      try {
        setError(false);
        setLoader(true);
        const resp = await getReviewsById(movieId);
        setReviews(resp.results);
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

      {reviews?.length ? (
        <section className={css.reviews}>
          <ul className={css.reviewsList}>
            {slicedArrey(reviews).map(
              ({
                id,
                updated_at,
                content,
                author_details: { name, avatar_path },
              }) => {
                return (
                  <li className={css.reviewsItem} key={id}>
                    <div className={css.thumb}>
                      <img
                        className={css.img}
                        src={
                          avatar_path
                            ? `${common.imageBaseUrl}w185${avatar_path}`
                            : common.defaultImg
                        }
                        alt={`poster`}
                        width={250}
                        loading="lazy"
                      />
                    </div>
                    <p className={css.name}>{name}</p>
                    <p className={css.date}>
                      {new Date(updated_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <p className={css.content}>{content}</p>
                  </li>
                );
              }
            )}
          </ul>
          {maxItems < reviews.length && (
            <button className={css.moreBtn} type="button" onClick={handleClick}>
              ...
            </button>
          )}
        </section>
      ) : (
        <section className={css.reviews}>
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
