import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieItem.module.css';

const baseUrl = 'http://image.tmdb.org/t/p/' + 'w500';

export const MovieItem = ({ id, title, poster_path }) => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const [fullTitle, setFullTitle] = useState(title.slice(0, 18));

  const handleMouseEnter = () => {
    setFullTitle(title);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setFullTitle(title.slice(0, 18));
    setIsHovered(false);
  };

  return (
    <li>
      <Link to={`movies/${id}`} state={{ from: location }}>
        <img
          className={css.img}
          src={baseUrl + poster_path}
          alt={title}
          width={500}
          loading="lazy"
        />
        <div
          className={css.titleBox}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className={css.title}>
            {fullTitle.length < 18
              ? fullTitle
              : isHovered
              ? fullTitle
              : `${fullTitle}...`}
          </h2>
        </div>
      </Link>
    </li>
  );
};
