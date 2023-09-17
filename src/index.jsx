import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Navbar } from './components/navbar';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import ErrorPage from './pages/error-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Shop />
      },
      // {
      //   path: "/cart",
      //   element: <Cart />
      // },
    ]
  }
])

const container = document.getElementById('root');
ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)