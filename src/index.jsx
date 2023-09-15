import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }
])

const container = document.getElementById('root');
ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)