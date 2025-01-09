import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './component/Home.jsx'
import Product from './component/Product.jsx'
import About from './component/About.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './component/Register.jsx'
import Login from './component/Login.jsx'
import Contact from './component/Contact.jsx'
import SingleProduct from './component/SingleProduct.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element:<Home />
      },
      {
        path: "/product",
        element:<Product />
      },
      {
        path: "/about",
        element:<About />
      },
      {
        path: "/login",
        element:<Login />
      },
      {
        path: "/register",
        element:<Register />
      },
      {
        path: "/contact",
        element:<Contact />
      },
      {
        path: "/product/:id",
        element:<SingleProduct />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
