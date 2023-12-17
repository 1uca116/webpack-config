import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/about',
        element: <div>About</div>,
      },
      {
        path: '/shop',
        element: <div>Shop</div>,
      }
    ]
  },
]);

container.render(
  <RouterProvider router={router}/>
);
