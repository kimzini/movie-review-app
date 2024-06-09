import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieInsert from './pages/MovieInsert';
import MovieInfo from './pages/MovieInfo';
import MovieEdit from './pages/MovieEdit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MovieList />,
  },
  {
    path: 'insert',
    element: <MovieInsert />,
  },
  {
    path: 'info',
    element: <MovieInfo />,
  },
  {
    path: 'edit',
    element: <MovieEdit />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
