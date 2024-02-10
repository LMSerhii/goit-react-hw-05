import { Routes, Route } from 'react-router-dom';
import style from './App.module.css';

import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import NotFound from '../pages/NotFound';

import { AppBar } from './AppBar';
import { MovieCast } from './MovieCast';
import { MovieReviews } from './MovieReviews';

export const App = () => {
  return (
    <div className={style.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
