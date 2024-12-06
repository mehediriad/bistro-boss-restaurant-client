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
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

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
        
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard/></PrivateRoute>,
      children:[
        {
          path: 'cart',
          element:<div>my cart</div>
        },
        {
          path: 'reservation',
          element:<div>my reservation</div>
        },
        {
          path: 'payment-history',
          element:<div>my payment-history</div>
        },
        {
          path: 'add-review',
          element:<div>add-review</div>
        },
        {
          path: 'booking',
          element:<div>booking</div>
        },
        
      ]
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/register',
      element:<Register/>
    },

  ]);


  export default router;