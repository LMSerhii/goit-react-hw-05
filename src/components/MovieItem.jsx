import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieItem.module.css';
import { common } from '../js/helpers/common';

export const MovieItem = ({ id, title, posterPath, releaseDate }) => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const [currTitle, setFullTitle] = useState(title.slice(0, 11));

  const handleMouseEnter = () => {
    setFullTitle(title);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setFullTitle(title.slice(0, 11));
    setIsHovered(false);
  };

  const dateConverter = new Date(releaseDate).toLocaleDateString('en-US', {
    year: 'numeric',
  });

  return (
    <li className={css.item}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img
          className={css.img}
          src={
            posterPath
              ? `${common.imageBaseUrl}w500${posterPath}`
              : common.movieDefultImage
          }
          alt={title}
          width={500}
          loading="lazy"
        />
        <div
          className={css.titleBox}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isHovered ? (
            <marquee direction="left">
              {`${currTitle} (${dateConverter})`}
            </marquee>
          ) : currTitle.length < 11 ? (
            `${currTitle} (${dateConverter})`
          ) : (
            `${currTitle}... (${dateConverter})`
          )}
        </div>
      </Link>
    </li>
  );
};
