import css from './MovieList.module.css';
import { MovieItem } from './MovieItem';

export const MovieList = ({ movieList }) => {
  return (
    <ul className={css.list}>
      {movieList.map(({ id, title, poster_path }) => (
        <MovieItem key={id} id={id} title={title} poster_path={poster_path} />
      ))}
    </ul>
  );
};
