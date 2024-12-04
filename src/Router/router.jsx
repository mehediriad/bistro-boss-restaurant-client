import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/Shop/Shop";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
        {
          path: "/menu",
          element: <Menu/>,
        },
        {
          path: "/shop",
          element: <Shop/>,
        },
        {
          path: "/dashboard",
          element: <Dashboard/>,
        },
      ]
    },
    {
      path:'/login',
      element:<Login/>
    }

  ]);


  export default router;