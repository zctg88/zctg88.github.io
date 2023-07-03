import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nav from './shared/Nav';
import { routes } from './routes';

function App() {
  const router = createBrowserRouter(routes)

  return (
    <>
      <Nav></Nav>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
