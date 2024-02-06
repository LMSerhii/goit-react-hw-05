import { Routes, Route } from 'react-router-dom';
import style from './App.module.css';

import { AppBar } from './AppBar';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MovieDetails } from '../pages/MovieDetails';
import { NotFound } from '../pages/NotFound';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

export const App = () => {
  return (
    <div className={style.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="credits" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
