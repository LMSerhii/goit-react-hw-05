import { Link, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  return (
    <main>
      <h1>Movie Details</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
        laudantium quos iusto natus inventore autem vel quasi laboriosam ducimus
        eligendi est ad quibusdam reprehenderit adipisci vero molestias esse
        cupiditate, id omnis deserunt enim ratione sapiente! In aut enim quidem
        est!
      </p>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="credits">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};
